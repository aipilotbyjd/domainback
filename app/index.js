//make bussness name genrator in react native
import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Card, TextInput } from "react-native-paper";

const BussnessNameGenrator = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Card>
            <Card.Content>
              <TextInput label="Enter your name" />
            </Card.Content>
          </Card>
        </View>
        <View style={styles.outputContainer}>
          <Card>
            <Card.Content>
              <Text>Output</Text>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Text>Output</Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BussnessNameGenrator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  outputContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 20,
  },
  text2: {
    color: "#000",
    fontSize: 20,
  },
  text3: {
    color: "#000",
    fontSize: 20,
  },
  text4: {
    color: "#000",
    fontSize: 20,
  },
});
