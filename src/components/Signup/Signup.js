import React, { useState, useEffect } from 'react'
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const SignUpForm = () => {
    const navigation = useNavigation(); 

  const[user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    mobileNo: ''
  });
  const[myToken, setMyToken] = useState('');

  const signup=()=>{
    console.log("my data", user);
    axios.post('http://192.168.168.219:4000/api/v1/signup', {
      name: user.name,
      email: user.email,
      password: user.password,
      mobileNo: user.mobileNo,
    })
    .then(function (response) {
      setMyToken(response["data"].token);
      setUser({
        name: '',
        email: '',
        password: '',
        mobileNo: ''
      })
      handleNavigate()
    })
    .catch(function (error) {
      console.log(error);
      setUser({
        name: '',
        email: '',
        password: '',
        mobileNo: ''
      })
    });
  }


    const {name,email, password, mobileNo} = user;

    const handleNavigate=()=>{
        navigation.navigate('Login')
    }

    const handleChange = name => text =>{
        setUser({...user, error:false, [name]:text})
    }

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
              <FormControl.Label  _text={{color:'black'}}>Name</FormControl.Label>
              <Input borderColor={'black'}
              value={name}
              onChangeText={handleChange('name')} />
            </FormControl>
            <FormControl>
              <FormControl.Label  _text={{color:'black'}}>Email</FormControl.Label>
              <Input borderColor={'black'}  value={email}
              onChangeText={handleChange("email")} />
            </FormControl>

            <FormControl>
              <FormControl.Label  _text={{color:'black'}}>Password</FormControl.Label>
              <Input borderColor={'black'} type="password" 
              value={password}
              onChangeText={handleChange("password")}/>
            </FormControl>

            <FormControl>
              <FormControl.Label  _text={{color:'black'}}>Mobile Number</FormControl.Label>
              <Input borderColor={'black'} 
              value={mobileNo}
              onChangeText={handleChange("mobileNo")}/>
            </FormControl>

            <Button onPress={()=>signup()} mt="2" colorScheme="indigo">
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