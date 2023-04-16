import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title, Card } from "react-native-paper";
import { Stack } from "expo-router";
import InAppReview from "react-native-in-app-review";

const Settings = () => {
  const handlePrivacyPolicyPress = () => {
    Linking.openURL("https://example.com/privacy-policy");
  };

  const handleTermsOfServicePress = () => {
    Linking.openURL("https://example.com/terms-of-service");
  };

  const handleReviewAppPress = async () => {
    // handle review app press on play store
    try {
      const hasFlowStarted = await InAppReview.isAvailable();

      if (hasFlowStarted) {
        await InAppReview.requestReview();
      } else {
        console.log("In-app review is not available on this device.");
      }
    } catch (error) {
      console.log(
        "An error occurred while starting the in-app review flow: ",
        error
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: "#6200EE",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <View style={styles.container}>
        <ScrollView style={styles.maincontainer}>
          <Card style={styles.card}>
            <Card.Content>
              <TouchableOpacity onPress={handlePrivacyPolicyPress}>
                <Title style={styles.title}>Privacy Policy</Title>
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <TouchableOpacity onPress={handleTermsOfServicePress}>
                <Title style={styles.title}>Terms of Service</Title>
              </TouchableOpacity>
            </Card.Content>
          </Card>
          {/* Add more cards here for review apps  */}
          <Card style={styles.card}>
            <Card.Content>
              <TouchableOpacity
                onPress={handleReviewAppPress}
                style={styles.titlesa}
              >
                <Title style={styles.title}>Review App</Title>
                <Text style={styles.text}>
                  Enjoying our app? Don't forget to give us a 5-star review!
                </Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  maincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  maincontainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    marginVertical: 10,
    borderRadius: 5,
  },
  titlesa: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    color: "#000",
    textAlign: "center",
  },
});
