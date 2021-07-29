import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  session:{
      jwt:true,
  },
  providers: [
    
    Providers.Credentials({
        name: 'Credentials',
        credentials: {
          username: { label: "username", type: "text", placeholder: "jsmith" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address) 
          const res = await fetch("http://xycle.herokuapp.com/auth/register", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()
          
          // If no error and we have user data, return it
          if (res.ok && user) {
            return user
          }
          // Return null if user data could not be retrieved
          return null
        }
      })
    // ...add more providers here
  ],
  callbacks: {
    // Getting the JWT token from API response
    async jwt(token, user) {
      if (user) {
        token.accessToken = user.token
      }
  
      return token
    },
  
    async session(session, token) {
      session.accessToken = token.accessToken
      return session
    }
  },
  pages: {
    error: '/login' // Changing the error redirect page to our custom login page
  }
  
})