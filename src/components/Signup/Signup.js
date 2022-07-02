import React from 'react'
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';


const SignUpForm = () => {
    const navigation = useNavigation(); 

    return <Center w="full">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
            Welcome
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label _text={{color:'black'}}>Email</FormControl.Label>
              <Input borderColor={'black'}/>
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color:'black'}}>Password</FormControl.Label>
              <Input borderColor={'black'} type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color:'black'}}>Confirm Password</FormControl.Label>
              <Input borderColor={'black'} type="password" />
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate('Login')}>
              Sign up
            </Button>
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

const Signup = () => {
  return (
    <NativeBaseProvider>
        <Box w='full' flex={1} background={'amber.100'}>
        <ImageBackground source={require('../../assets/bg.jpg')} style={styles.image} resizeMode="cover">
            <SignUpForm />
        </ImageBackground>
        </Box>
  </NativeBaseProvider>
  )
}

export default Signup