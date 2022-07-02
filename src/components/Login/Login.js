import React from 'react'
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";


const DetailBox = () => {
    return <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="black" _dark={{
          color: "black"
        }}>
            Welcome
          </Heading>
          <Heading mt="1" _dark={{
          color: "black"
        }} color="black" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>
  
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input borderColor={'black'}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input borderColor={'black'} type="password" />
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.900"
            }} alignSelf="flex-end" mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="black" _dark={{
              color: "black"
            }}>
                I'm a new user.{" "}
              </Text>
              <Link _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} href="#">
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>;
  };


  const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    },
  });


const Login = () => {
  return (
    <NativeBaseProvider>
        <Box w='full' flex={1} background={'amber.100'}>
        <ImageBackground source={require('../../assets/bg.jpg')} style={styles.image} resizeMode="cover">
            <DetailBox />
        </ImageBackground>
        </Box>
    </NativeBaseProvider>
  )
}

export default Login