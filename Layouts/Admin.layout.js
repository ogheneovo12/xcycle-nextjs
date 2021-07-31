import React, { useState } from "react";
import Image from "next/image";
import logoWhite from "../assets/img/whiteLogo.png";
import { Flex, Heading, Avatar, Text, Icon, Link } from "@chakra-ui/react";
import { FiHome, FiPieChart, FiDollarSign, FiBox } from "react-icons/fi";
import { useSession } from "next-auth/client"
import { useRouter } from "next/router";

export default function Admin({ children }) {
    const [session, loading] = useSession();
    const  router = useRouter();
     
    if (!loading && !session){
        router.push("/login");
    }


    if(loading) return <h4>loading</h4>;

  return (
    <Flex
      h={[null, null, "100vh"]}
      backgroundColor="#efefef"
      maxW='2000px'
      flexDir={["column", "column", "row"]}
      overflow='hidden'>
      {/* Column 1 */}
      <Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
        flexDir='column'
        alignItems='center'
        backgroundColor='#3DC8B8'
        color='#fff'>
        <Flex
          flexDir='column'
          h={[null, null, "100vh"]}
          justifyContent='space-between'>
          <Flex flexDir='column' as='nav'>
            <Heading
              mt={50}
              mb={[25, 50, 30]}
              fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
              alignSelf='center'
              letterSpacing='tight'>
              <Image src={logoWhite} alt='logo ' width={100} height={100} />
            </Heading>
            <Flex
              flexDir={["row", "row", "column", "column", "column"]}
              align={["center", "center", "center", "flex-start", "flex-start"]}
              wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
              justifyContent='center'>
              <Flex className='sidebar-items'   margin={"20px 0px"}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiHome} fontSize='2xl' className='active-icon' />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}>
                  <Text className='active'> Home</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items' margin={"20px 0px"}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiPieChart} fontSize='2xl' />
                </Link>
                <Link
                href="/dashboard/listwaste"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}>
                  <Text> Upload Waste</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items' margin={"20px 0px"}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiDollarSign} fontSize='2xl' />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}>
                  <Text> Transactions</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items' margin={"20px 0px"}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiBox} fontSize='2xl' />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}>
                  <Text> Biddings</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir='column' alignItems='center' mb={10} mt={5}>
            <Avatar my={2} src='avatar-1.jpg' />
            <Text textAlign='center'>Calvin West</Text>
          </Flex>
        </Flex>
      </Flex>
        
      {children}
    </Flex>
  );
}
