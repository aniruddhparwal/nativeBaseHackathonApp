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
  Select,
  CheckIcon,
  Slider,
  Stack,
  Text,
  TextArea,
} from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { TokenContext } from "../../context/TokenContext";

const AddSlipForm = () => {
  const navigation = useNavigation();

  const [state, dispatch] = useContext(TokenContext);

  const handleNavigate = () => {
    navigation.navigate("Drawer");
  };

  const [service, setService] = React.useState("");
  const [accountData, setAccountData] = useState([]);

  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [twoHundred, setTwoHundred] = useState(0);
  const [fiveHundred, setFiveHundred] = useState(0);
  const [twoThousand, setTwoThousand] = useState(0);
  const [total, setTotal] = useState(0);

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
        setAccountData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addSlip = () => {
    console.log({
      amount: total,
      slipStatus: 0,
      slipData: {
        10: ten,
        20: twenty,
        50: fifty,
        100: hundred,
        200: twoHundred,
        500: fiveHundred,
        2000: twoThousand,
      },
      bankAccountId: service,
    });
    axios
      .post(
        "http://192.168.168.219:4000/api/v1/createSlip",
        {
          amount: total,
          slipStatus: 0,
          slipData: {
            10: ten,
            20: twenty,
            50: fifty,
            100: hundred,
            200: twoHundred,
            500: fiveHundred,
            2000: twoThousand,
          },
          bankAccountId: service,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        handleNavigate();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getBankAccounts();
  }, []);

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
          <VStack space={3} mt="5" alignItems={"center"}>
            <FormControl>
              <FormControl.Label _text={{ color: "black" }}>
                Select Bank Account
              </FormControl.Label>
              <Select
                selectedValue={service}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                {accountData.map((item) => (
                  <Select.Item
                    key={item.id}
                    label={item.nickName}
                    value={item._id}
                  />
                ))}
              </Select>
            </FormControl>

            {/* <FormControl>
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
            </FormControl> */}
            <Stack space={4} alignItems="center" w="75%" maxW="300">
              <Text textAlign="center">Ten - {ten}</Text>
              <Slider
                defaultValue={0}
                colorScheme="cyan"
                onChange={(e) => {
                  if (e > -1) {
                    setTen(e);
                    setTotal(
                      e * 10 +
                        twenty * 20 +
                        fifty * 50 +
                        hundred * 100 +
                        twoHundred * 200 +
                        fiveHundred * 500 +
                        twoThousand * 2000
                    );
                  }
                }}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>
              <Text textAlign="center">Twenty - {twenty}</Text>
              <Slider
                defaultValue={0}
                colorScheme="cyan"
                onChange={(e) => {
                  if (e > -1) {
                    setTwenty(e);
                    setTotal(
                      ten * 10 +
                        e * 20 +
                        fifty * 50 +
                        hundred * 100 +
                        twoHundred * 200 +
                        fiveHundred * 500 +
                        twoThousand * 2000
                    );
                  }
                }}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>

              <Text textAlign="center">Fifty - {fifty}</Text>
              <Slider
                defaultValue={0}
                colorScheme="cyan"
                onChange={(e) => {
                  if (e > -1) {
                    setFifty(e);
                    setTotal(
                      ten * 10 +
                        twenty * 20 +
                        e * 50 +
                        hundred * 100 +
                        twoHundred * 200 +
                        fiveHundred * 500 +
                        twoThousand * 2000
                    );
                  }
                }}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>

              <Text textAlign="center">Hundred - {hundred}</Text>
              <Slider
                defaultValue={0}
                colorScheme="cyan"
                onChange={(e) => {
                  if (e > -1) {
                    setHundred(e);
                    setTotal(
                      ten * 10 +
                        twenty * 20 +
                        fifty * 50 +
                        e * 100 +
                        twoHundred * 200 +
                        fiveHundred * 500 +
                        twoThousand * 2000
                    );
                  }
                }}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>

              <Text textAlign="center">Two Hundred - {twoHundred}</Text>
              <Slider
                defaultValue={0}
                colorScheme="cyan"
                onChange={(e) => {
                  if (e > -1) {
                    setTwoHundred(e);
                    setTotal(
                      ten * 10 +
                        twenty * 20 +
                        fifty * 50 +
                        hundred * 100 +
                        e * 200 +
                        fiveHundred * 500 +
                        twoThousand * 2000
                    );
                  }
                }}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>

              <Text textAlign="center">Five Hundred - {fiveHundred}</Text>
              <Slider
                defaultValue={0}
                colorScheme="cyan"
                onChange={(e) => {
                  if (e > -1) {
                    setFiveHundred(e);
                    setTotal(
                      ten * 10 +
                        twenty * 20 +
                        fifty * 50 +
                        hundred * 100 +
                        twoHundred * 200 +
                        e * 500 +
                        twoThousand * 2000
                    );
                  }
                }}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>

              <Text textAlign="center">Two Thousand - {twoThousand}</Text>
              <Slider
                defaultValue={0}
                colorScheme="cyan"
                onChange={(e) => {
                  if (e > -1) {
                    setTwoThousand(e);
                    setTotal(
                      ten * 10 +
                        twenty * 20 +
                        fifty * 50 +
                        hundred * 100 +
                        twoHundred * 200 +
                        fiveHundred * 500 +
                        e * 2000
                    );
                  }
                }}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>
            </Stack>
            <Text isDisable>Total={total}</Text>
            <Button onPress={() => addSlip()} mt="2" colorScheme="indigo">
              Generate Slip
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

const AddNewSlip = () => {
  return (
    <NativeBaseProvider>
      <Box w="full" flex={1} background={"amber.100"}>
        <ImageBackground
          source={require("../../assets/bg.jpg")}
          style={styles.image}
          resizeMode="cover"
        >
          <AddSlipForm />
        </ImageBackground>
      </Box>
    </NativeBaseProvider>
  );
};

export default AddNewSlip;
