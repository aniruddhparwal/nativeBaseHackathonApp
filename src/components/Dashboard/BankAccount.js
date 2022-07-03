import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Popover,
  Button,
  Modal,
  View,
  Fab,
  Icon,
} from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import { TokenContext } from "../../context/TokenContext";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const BankAccountFun = () => {
  const [redata, setRedata] = useState([]);
  const [state, dispatch] = useContext(TokenContext);
  const getBankAccounts = () => {
    // console.log("my data", user);

    axios
      .get("http://192.168.168.219:4000/api/v1/getBankAccounts", {
        headers: {
          Authorization: "Bearer " + state.token,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setRedata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getBankAccounts();
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <Box>
      <FlatList
        data={redata}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "muted.50",
            }}
            key={item._id}
            borderColor="muted.800"
            pl={["0", "4"]}
            pr={["0", "5"]}
            py="2"
          >
            <HStack space={[2, 3]} justifyContent="space-between">
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.nickName}
                </Text>
                <Text
                  marginTop={"2"}
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.bankName}
                </Text>
              </VStack>
              <Spacer />
            </HStack>
          </Box>
        )}
        keyExtractor={(item, index) => index + item.id}
      />
    </Box>
  );
};

const BankAccount = () => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <Box w="full" p={"2"} flex={1}>
        <BankAccountFun />
        <Fab
          renderInPortal={false}
          onPress={() => navigation.navigate("Add Bank Account")}
          shadow={2}
          size="sm"
          icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default BankAccount;
