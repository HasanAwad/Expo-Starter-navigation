import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://192.168.0.101:8000/api/doudou")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data.data);
      })
      .catch(console.log);
  }, []);

  //console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.batata}>{data.data}</Text>
      <Button
        title="Click me ya achta"
        onPress={() => navigation.navigate("Achta")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  batata: {
    color: "red",
  },
});
