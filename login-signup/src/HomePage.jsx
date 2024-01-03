import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
import React from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

  function Homepage() {
  
    return (
      <Box
        w="100%"
        h="100vh"
        bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, orange.100, purple.300)',
          ]}>
  
        <Container maxW="xl" centerContent>
          <Box
            display="flex"
            justifyContent="center"
            p={3}
            bg="white"
            w="100%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
          >
            <Text fontSize="4xl" fontFamily="Work sans" fontWeight="bold">
              LOGIN/SIGNUP
            </Text>
  
          </Box>
  
      {/* for switching btw login and signup */}
          <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
            <Tabs isFitted variant="soft-rounded">
              <TabList mb="1em">
                <Tab>Login</Tab>
                <Tab>Register</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Register />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </Box>
    );
  }
  
  export default Homepage;