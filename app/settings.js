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
import Rate, { AndroidMarket } from "react-native-rate";
import { BannerAdSize, GAMBannerAd } from "react-native-google-mobile-ads";

const Settings = () => {
  const [rated, setRated] = React.useState(false);
  const adUnitId = "ca-app-pub-6156225952846626/2865889147";

  const handlePrivacyPolicyPress = () => {
    Linking.openURL("https://aipilot.in/privacy-policy");
  };

  const handleTermsOfServicePress = () => {
    Linking.openURL("https://aipilot.in/terms-of-service");
  };

  const handleReviewAppPress = async () => {
    // handle review app press on play store
    const options = {
      GooglePackageName: "com.aicopilotideas.domainback",
      preferredAndroidMarket: AndroidMarket.Google,
      preferInApp: false,
      openAppStoreIfInAppFails: false,
      fallbackPlatformURL:
        "https://play.google.com/store/apps/details?id=com.aicopilotideas.domainback",
    };
    Rate.rate(options, (success, errorMessage) => {
      if (success) {
        // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
        setRated(true);
      }
      if (errorMessage) {
        // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
        console.error(`Example page Rate.rate() error: ${errorMessage}`);
      }
    });
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
        <View style={styles.bottomsContainer}>
          <GAMBannerAd
            unitId={adUnitId}
            sizes={[BannerAdSize.MEDIUM_RECTANGLE]}
          />
        </View>
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  maincontainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 10,
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
  bottomsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
