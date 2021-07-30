import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Admin from "../../Layouts/Admin.layout";
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell
} from "react-icons/fi"
  import { MyChart } from "../../src/components";

function Dashboard(props) {

    const [display, changeDisplay] = useState("hide");
    const [value, changeValue] = useState(1);

    return (
        <>
             {/* Column 2 */}
      <Flex
        w={["100%", "100%", "60%", "60%", "55%"]}
        p='3%'
        flexDir='column'
        overflow='auto'
        minH='100vh'>
        <Heading fontWeight='normal' mb={4} letterSpacing='tight'>
          Welcome back,{" "}
          <Flex display='inline-flex' fontWeight='bold'>
            Calvin
          </Flex>
        </Heading>
        <Text color='gray' fontSize='sm'>
          My Balance
        </Text>
        <Text fontWeight='bold' fontSize='2xl'>
          $5,750.20
        </Text>
        <MyChart />
        <Flex justifyContent='space-between' mt={8}>
          <Flex align='flex-end'>
            <Heading as='h2' size='lg' letterSpacing='tight'>
              Transactions
            </Heading>
            <Text fontSize='small' color='gray' ml={4}>
              Apr 2021
            </Text>
          </Flex>
          <IconButton icon={<FiCalendar />} />
        </Flex>
        <Flex flexDir='column'>
          <Flex overflow='auto'>
            <Table variant='unstyled' mt={4}>
              <Thead>
                <Tr color='gray'>
                  <Th>Name of transaction</Th>
                  <Th>Category</Th>
                  <Th isNumeric>Cashback</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex align='center'>
                      <Avatar size='sm' mr={2} src='amazon.jpeg' />
                      <Flex flexDir='column'>
                        <Heading size='sm' letterSpacing='tight'>
                          Amazon
                        </Heading>
                        <Text fontSize='sm' color='gray'>
                          Apr 24, 2021 at 1:40pm
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Electronic Devices</Td>
                  <Td isNumeric>+$2</Td>
                  <Td isNumeric>
                    <Text fontWeight='bold' display='inline-table'>
                      -$242
                    </Text>
                    .00
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align='center'>
                      <Avatar size='sm' mr={2} src='starbucks.png' />
                      <Flex flexDir='column'>
                        <Heading size='sm' letterSpacing='tight'>
                          Starbucks
                        </Heading>
                        <Text fontSize='sm' color='gray'>
                          Apr 22, 2021 at 2:43pm
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Cafe and restaurant</Td>
                  <Td isNumeric>+$23</Td>
                  <Td isNumeric>
                    <Text fontWeight='bold' display='inline-table'>
                      -$32
                    </Text>
                    .00
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align='center'>
                      <Avatar size='sm' mr={2} src='youtube.png' />
                      <Flex flexDir='column'>
                        <Heading size='sm' letterSpacing='tight'>
                          YouTube
                        </Heading>
                        <Text fontSize='sm' color='gray'>
                          Apr 13, 2021 at 11:23am
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Social Media</Td>
                  <Td isNumeric>+$4</Td>
                  <Td isNumeric>
                    <Text fontWeight='bold' display='inline-table'>
                      -$112
                    </Text>
                    .00
                  </Td>
                </Tr>
                {display == "show" && (
                  <>
                    <Tr>
                      <Td>
                        <Flex align='center'>
                          <Avatar size='sm' mr={2} src='amazon.jpeg' />
                          <Flex flexDir='column'>
                            <Heading size='sm' letterSpacing='tight'>
                              Amazon
                            </Heading>
                            <Text fontSize='sm' color='gray'>
                              Apr 12, 2021 at 9:40pm
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Electronic Devices</Td>
                      <Td isNumeric>+$2</Td>
                      <Td isNumeric>
                        <Text fontWeight='bold' display='inline-table'>
                          -$242
                        </Text>
                        .00
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex align='center'>
                          <Avatar size='sm' mr={2} src='starbucks.png' />
                          <Flex flexDir='column'>
                            <Heading size='sm' letterSpacing='tight'>
                              Starbucks
                            </Heading>
                            <Text fontSize='sm' color='gray'>
                              Apr 10, 2021 at 2:10pm
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Cafe and restaurant</Td>
                      <Td isNumeric>+$23</Td>
                      <Td isNumeric>
                        <Text fontWeight='bold' display='inline-table'>
                          -$32
                        </Text>
                        .00
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex align='center'>
                          <Avatar size='sm' mr={2} src='youtube.png' />
                          <Flex flexDir='column'>
                            <Heading size='sm' letterSpacing='tight'>
                              YouTube
                            </Heading>
                            <Text fontSize='sm' color='gray'>
                              Apr 7, 2021 at 9:03am
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Social Media</Td>
                      <Td isNumeric>+$4</Td>
                      <Td isNumeric>
                        <Text fontWeight='bold' display='inline-table'>
                          -$112
                        </Text>
                        .00
                      </Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            </Table>
          </Flex>
          <Flex align='center'>
            <Divider />
            <IconButton
              icon={display == "show" ? <FiChevronUp /> : <FiChevronDown />}
              onClick={() => {
                if (display == "show") {
                  changeDisplay("none");
                } else {
                  changeDisplay("show");
                }
              }}
            />
            <Divider />
          </Flex>
        </Flex>
      </Flex>

      {/* Column 3 */}
      <Flex
        w={["100%", "100%", "30%"]}
        bgColor='#F5F5F5'
        p='3%'
        flexDir='column'
        overflow='auto'
        minW={[null, null, "300px", "300px", "400px"]}>
        <Flex alignContent='center'>
          <InputGroup
            bgColor='#fff'
            mb={4}
            border='none'
            borderColor='#fff'
            borderRadius='10px'
            mr={2}>
            <InputLeftElement
              pointerEvents='none'
              children={<FiSearch color='gray' />}
            />
            <Input type='number' placeholder='Search' borderRadius='10px' />
          </InputGroup>
          <IconButton
            icon={<FiBell />}
            fontSize='sm'
            bgColor='#fff'
            borderRadius='50%'
            p='10px'
          />
          <Flex
            w={30}
            h={25}
            bgColor='#B57295'
            borderRadius='50%'
            color='#fff'
            align='center'
            justify='center'
            ml='-3'
            mt='-2'
            zIndex='100'
            fontSize='xs'>
            2
          </Flex>
        </Flex>
        <Flex justifyContent='space-between' alignItems='center'>
          <Heading as='h3' size='md'>
            Latest Bid's
          </Heading>
          <Button background='#51BCA9' color='#fff'>
            View More
          </Button>
        </Flex>
        <Box
          borderRadius='25px'
          mt={4}
          w='100%'
          h='200px'
          p={4}
          backgroundColor='#fff'>
          <Flex justifyContent='space-between'>
            <Text fontWeight='600' textAlign='center'>
               3 Used Plastic Bag
            </Text>
            <Text textAlign='right'>2hr ago</Text>
          </Flex>
          <Text mt={1} fontWeight='bold' textAlign='center'>
              N5,000
            </Text>
            <Text  textAlign='center' mb={2} mt={1}>
               James olayiwo
            </Text>
          <Flex justifyContent='space-between'>
            <Button color="#fff" bgColor="#272727">Accept</Button>
            <Button>Decline</Button>
          </Flex>
        </Box>

        <Box />

        <Flex flexDir='column' my={4}>
          <Flex justify='space-between' mb={2}>
            <Text>Balance</Text>
            <Text fontWeight='bold'>$140.42</Text>
          </Flex>
          <Flex justify='space-between'>
            <Text>Total Sales</Text>
            <Text fontWeight='bold'>3,500</Text>
          </Flex>
          <Flex justify='space-between'>
            <Text>Items Bought</Text>
            <Text fontWeight='bold'>2,500</Text>
          </Flex>
        </Flex>
      </Flex>
        </>
    )
}

Dashboard.layout = Admin;

Dashboard.propTypes = {

}

export default Dashboard

