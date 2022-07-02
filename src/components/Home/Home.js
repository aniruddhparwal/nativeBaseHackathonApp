import { Box, Button, NativeBaseProvider } from 'native-base'
import React from 'react'
import { ImageBackground, StyleSheet,Image,View } from "react-native";

// import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    },
    tinyLogo: {
        width: 200,
        height: 200,
      },
    
    gifContainer:{
        position:'absolute',
        top:"6%",
        left:'20%'
    },
  
  });

const Home = ({navigation}) => {
    // const goToAbout = () => {
    //     Actions.login()
    //  }
  return (
    <NativeBaseProvider>
        <Box w='full' flex={1} background={'amber.100'}>
        <ImageBackground source={require('../../assets/bg.jpg')} style={styles.image} resizeMode="cover">
            <View style={{position:'absolute',top:'16%',left:'24%'}}>
            <Image
            style={styles.tinyLogo}
            source={require('../../assets/welcome.gif')}
        />
        </View>
        <Box marginTop={'16'}>
            <Box alignItems="center" p={'3'}>
                <Button w="full" onPress={() => navigation.navigate('Login')}>Login</Button>
            </Box>
            <Box alignItems="center" p={'3'}>
                <Button w="full" onPress={() => navigation.navigate('Signup')}>Signup</Button>
            </Box>
        </Box>
        </ImageBackground>
        </Box>
    </NativeBaseProvider>
  )
}

export default Home