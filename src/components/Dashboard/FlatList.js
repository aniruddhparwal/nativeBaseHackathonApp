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
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import { TokenContext } from "../../context/TokenContext";
import axios from "axios";

const Example = () => {
  const [redata, setRedata] = useState([]);
  const [state, dispatch] = useContext(TokenContext);
  const signin = () => {
    // console.log("my data", user);

    axios
      .get("http://192.168.168.219:4000/api/v1/getSlips", {
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
    signin();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarNM: "AK",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      status: 0,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarNM: "SM",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
      status: 1,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarNM: "AB",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
      status: 0,
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarNM: "AK",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
      status: 2,
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarNM: "K",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
      status: 1,
    },
  ];
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
            borderColor="muted.800"
            pl={["0", "4"]}
            pr={["0", "5"]}
            py="2"
          >
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar
                bg={
                  item.status == 0
                    ? "green.600"
                    : item.status == 1
                    ? "red.600"
                    : "blue.600"
                }
                mr="1"
                source={{}}
              >
                {/* {item.avatarNM} */}
              </Avatar>
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.bankAccountId}
                </Text>
                <Text
                  marginTop={"2"}
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.amount}
                </Text>
              </VStack>
              <Spacer />
              <Button onPress={() => setShowModal(true)}>
                <MaterialIcons name="qr-code-scanner" size={35} color="black" />
              </Button>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                  <Modal.CloseButton />
                  <Modal.Header>QR CODE</Modal.Header>
                  <Modal.Body>
                    <View>
                      <QRCode value={item._id} />
                    </View>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="ghost"
                      colorScheme="blueGray"
                      onPress={() => {
                        setShowModal(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

const Flatlist = () => {
  return (
    <NativeBaseProvider>
      <Box w="full" p={"2"} flex={1}>
        <Example />
      </Box>
    </NativeBaseProvider>
  );
};

export default Flatlist;
