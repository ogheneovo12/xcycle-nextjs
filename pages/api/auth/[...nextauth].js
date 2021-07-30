import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

const providers = [
  Providers.Credentials({
    name: "Credentials",
    async authorize(credentials, req) {
      try {
        const response = await axios.post(
          "http://xycle.herokuapp.com/auth/login",
          credentials,
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );

        if (response) {
          return { status: "success", data: response.data };
        }
      } catch (e) {
        console.log(e);
        const errorMessage = e.response.data.message;
        // Redirecting to the login page with error message          in the URL
        throw new Error(errorMessage + "&email=" + credentials.email);
      }
    },
  }),
  // ...add more providers here
];

const callbacks = {
  async jwt(token, user) {
    console.log(user);
    if (user) {
      token.accessToken = user?.data.token;
    }

    return token;
  },

  async session(session, token) {
    session.accessToken = token.accessToken;
    return session;
  },
};

const options = {
  session: {
    jwt: true,
  },
  providers,
  callbacks,
  pages: {
    error: "/login", // Changing the error redirect page to our custom login page
  },
};

export default (req, res) => NextAuth(req, res, options);
