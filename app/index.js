import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

export default function BussinessNameGenrator() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title}>Bussiness Name Genrator</Text>
              <Text style={styles.subtitle}>by @mochiy</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title}>Bussiness Name Genrator</Text>
              <Text style={styles.subtitle}>by @mochiy</Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    fontFamily: "MochiyPopOne_400Regular",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
