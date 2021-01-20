import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  useWindowDimensions,
  Button,
} from "react-native";

const Login = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <SafeAreaView style={style.container}>
      <View>
        <TextInput
          style={[style.input, { width: windowWidth / 2 }]}
          value={"email"}
        />
        <TextInput
          style={[style.input, { width: windowWidth / 2 }]}
          value={"password"}
        />
        <Button title="login" onPress={() => navigation.navigate("Home")} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    height: 40,
    margin: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
});
