import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { TokenContext } from "../../context/TokenContext";

const AddBankForm = () => {
  const navigation = useNavigation();

  const [bankAccount, setBankAccount] = useState({
    nickName: "",
    fullName: "",
    branchName: "",
    bankName: "",
    accountNumber: "",
    IFSC: "",
    mobileNo: "",
  });

  const [state, dispatch] = useContext(TokenContext);

  const addAccount = () => {
    axios
      .post(
        "http://192.168.168.219:4000/api/v1/addBankAccount",
        {
          nickName: bankAccount.nickName,
          fullName: bankAccount.fullName,
          branchName: bankAccount.branchName,
          bankName: bankAccount.bankName,
          accountNumber: bankAccount.accountNumber,
          IFSC: bankAccount.IFSC,
          mobileNo: bankAccount.mobileNo,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      )
      .then(function (response) {
        handleNavigate();
        setBankAccount({
          nickName: "",
          fullName: "",
          branchName: "",
          bankName: "",
          accountNumber: "",
          IFSC: "",
          mobileNo: "",
        });
        //   handleNavigate()
      })
      .catch(function (error) {
        console.log(error);
        setBankAccount({
          nickName: "",
          fullName: "",
          branchName: "",
          bankName: "",
          accountNumber: "",
          IFSC: "",
          mobileNo: "",
        });
      });
  };

  const {
    nickName,
    fullName,
    branchName,
    bankName,
    accountNumber,
    IFSC,
    mobileNo,
  } = bankAccount;

  const handleNavigate = () => {
    navigation.navigate("Bank Account");
  };

  const handleChange = (name) => (text) => {
    setBankAccount({ ...bankAccount, error: false, [name]: text });
  };

  return (
    <Center w="full">
      <ScrollView
        maxW="300"
        _contentContainerStyle={{
          // mb: "2",
          minW: "72",
        }}
      >
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label _text={{ color: "black" }}>
                Nick Name
              </FormControl.Label>
              <Input
                borderColor={"black"}
                value={nickName}
                onChangeText={handleChange("nickName")}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label _text={{ color: "black" }}>
                Full Name
              </FormControl.Label>
              <Input
                borderColor={"black"}
                value={fullName}
                onChangeText={handleChange("fullName")}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label _text={{ color: "black" }}>
                Branch Name
              </FormControl.Label>
              <Input
                borderColor={"black"}
                value={branchName}
                onChangeText={handleChange("branchName")}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label _text={{ color: "black" }}>
                Bank Name
              </FormControl.Label>
              <Input
                borderColor={"black"}
                value={bankName}
                onChangeText={handleChange("bankName")}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label _text={{ color: "black" }}>
                Account Number
              </FormControl.Label>
              <Input
                borderColor={"black"}
                value={accountNumber}
                onChangeText={handleChange("accountNumber")}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label _text={{ color: "black" }}>
                IFSC
              </FormControl.Label>
              <Input
                borderColor={"black"}
                value={IFSC}
                onChangeText={handleChange("IFSC")}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label _text={{ color: "black" }}>
                Mobile Number
              </FormControl.Label>
              <Input
                borderColor={"black"}
                value={mobileNo}
                onChangeText={handleChange("mobileNo")}
              />
            </FormControl>

            <Button onPress={() => addAccount()} mt="2" colorScheme="indigo">
              Add Account
            </Button>
          </VStack>
        </Box>
      </ScrollView>
    </Center>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

const AddBankAccount = () => {
  return (
    <NativeBaseProvider>
      <Box w="full" flex={1} background={"amber.100"}>
        <ImageBackground
          source={require("../../assets/bg.jpg")}
          style={styles.image}
          resizeMode="cover"
        >
          <AddBankForm />
        </ImageBackground>
      </Box>
    </NativeBaseProvider>
  );
};

export default AddBankAccount;
