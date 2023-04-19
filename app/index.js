import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Linking,
  Share,
} from "react-native";
import {
  TextInput,
  Button,
  Card,
  List,
  ActivityIndicator,
} from "react-native-paper";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import {
  GAMBannerAd,
  InterstitialAd,
  AdEventType,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const BusinessNameGenerator = () => {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const extentions = [
    "com",
    "in",
    "net",
    "org",
    "co",
    "io",
    "me",
    "us",
    "online",
    "tech",
    "store",
    "art",
  ];
  const [businessNames, setBusinessNames] = useState([]);
  const [shared, setShared] = useState(false);

  const adUnitId = __DEV__
    ? TestIds.BANNER
    : "ca-app-pub-6156225952846626/4066494015";

  const adUnitIdforiner = __DEV__
    ? TestIds.INTERSTITIAL
    : "ca-app-pub-6156225952846626/2434187450";

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );
    interstitial.load();
    return unsubscribe;
  }, []);

  const handleKeywordChange = (text) => {
    setKeyword(text);
  };

  const interstitial = InterstitialAd.createForAdRequest(adUnitIdforiner);

  const loadAd = async () => {
    // load the ad if not loaded then reload

    //show the ad when loaded
    interstitial.show();
  };

  const newBusinessNames = [];

  const handleSearch = async () => {
    setLoading(true);
    // TODO: Implement search functionality
    //make fetch request to API
    await fetch("https://aipilot.in/?startup_idea=" + keyword)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        //reconstruct the array name domains and expanded
        responseJson.map((item) => {
          const domains = [];
          extentions.map((extention) => {
            domains.push(item + "." + extention);
          });
          const newitem = {
            name: item,
            expanded: false,
            domains: domains,
          };
          newBusinessNames.push(newitem);
        });
        setBusinessNames(newBusinessNames);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });

    setInterval(() => {
      loadAd();
    }, 10000);
  };

  const handleShare = async () => {
    //share the app link
    try {
      const result = await Share.share({
        message:
          "Hey there! I just discovered this amazing app that I think you'll love. It's packed with features that make it can genrate intelligent and unique startup names for you genrate startup names is so much easier and more fun. Check it out for yourself and let me know what you think! #DOMAINBACK #DOMAINBACKAPP Click here to download the app https://play.google.com/store/apps/details?id=com.ayushgupta.ai_chat",
      });

      if (result.action === Share.sharedAction) {
        setShared(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleAccordionToggle = (index) => {
    const newBusinessNames = [...businessNames];
    newBusinessNames[index].expanded = !newBusinessNames[index].expanded;
    setBusinessNames(newBusinessNames);
  };

  const SaveDomain = () => {
    //Save domain to database
    console.log("Save domain to database");
  };

  const getDomain = (domain) => {
    //Check if domain is available
    Linking.openURL(
      "https://shareasale.com/r.cfm?b=1781996&u=2918237&m=46483&urllink=https://www.namecheap.com/domains/registration/results/?domain=" +
        domain +
        "&afftrack="
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "DOMAINBACK",
          headerStyle: {
            backgroundColor: "#6200EE",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <Link href="/settings" style={styles.buttonheader}>
              <AntDesign name="setting" size={24} color="white" />
            </Link>
          ),
          headerTitleAlign: "center",
          //share button on header right side
          headerRight: () => (
            <Button
              icon={() => (
                <Octicons name="share-android" size={24} color="white" />
              )}
              mode="text"
              onPress={() => handleShare()}
              style={styles.buttonheader}
            />
          ),
        }}
      />
      <View style={styles.topContainer}>
        <TextInput
          label="Enter a keyword"
          value={keyword}
          onChangeText={handleKeywordChange}
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={handleSearch}
          style={styles.button}
          labelStyle={styles.buttonLabel}
          loading={loading}
          disabled={loading}
        >
          Generate Business Names
        </Button>
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {businessNames.map((business, index) => (
            <List.Accordion
              title={business.name}
              titleStyle={styles.accordionTitle}
              expanded={business.expanded}
              onPress={() => handleAccordionToggle(index)}
              style={styles.accordion}
              key={index}
              left={() => <AntDesign name="plus" size={24} color="#6200EE" />}
              theme={{
                colors: {
                  background: "#F6F6F6",
                },
              }}
            >
              <Card style={styles.card2}>
                {business.domains.map((domain, i) => (
                  <View style={styles.ItemButton} key={i}>
                    <List.Item
                      key={i}
                      title={domain}
                      titleStyle={styles.domais}
                      style={styles.listItem}
                    />
                    <View style={styles.ItemButton}>
                      <View style={styles.buttonContainer}>
                        <Button
                          icon={() => (
                            <Octicons
                              name="link-external"
                              size={20}
                              color="black"
                            />
                          )}
                          mode="text"
                          contentStyle={styles.buttonContent}
                          onPress={() => getDomain(domain)}
                          style={styles.buttonmain}
                        >
                          Register
                        </Button>
                      </View>
                    </View>
                  </View>
                ))}
                <View style={styles.ItemButton}>
                  <View style={styles.ItemButton}>
                    <List.Item
                      title={"Get Your favorite domain name from namecheap"}
                      titleStyle={styles.domais}
                      style={styles.listItem}
                    />
                    <View style={styles.buttonContainer}>
                      <Button
                        icon={() => (
                          <Octicons
                            name="link-external"
                            size={20}
                            color="black"
                          />
                        )}
                        mode="text"
                        contentStyle={styles.buttonContent}
                        onPress={() => getDomain(business.name + ".com")}
                        style={styles.buttonmain}
                      >
                        Register
                      </Button>
                    </View>
                  </View>
                </View>
              </Card>
            </List.Accordion>
          ))}
          {loading && <ActivityIndicator size="large" color="#6200EE" />}
          <View style={styles.devicewidth} />
        </ScrollView>
      </View>
      <View style={styles.bottomsContainer}>
        <GAMBannerAd
          unitId={adUnitId}
          sizes={[BannerAdSize.INLINE_ADAPTIVE_BANNER]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 5,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: 1,
  },
  button: {
    backgroundColor: "#6200EE",
    borderRadius: 5,
    alignSelf: "flex-end",
    paddingVertical: 6,
    width: "100%",
    marginTop: 12,
    marginBottom: 16,
  },
  buttonmain: {
    padding: 0,
    margin: 0,
    borderRadius: 5,
  },
  buttonContent: {
    paddingVertical: 6,
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "CarterOne_400Regular",
    fontWeight: "medium",
  },
  input: {
    marginRight: 10,
    width: "100%",
  },
  cardContainer: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  cardActions: {
    justifyContent: "flex-end",
  },
  bottomContainer: {
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flex: 1,
    justifyContent: "flex-end",
  },
  domainContainer: {
    maxHeight: 150,
  },
  accordion: {
    marginBottom: 16,
    backgroundColor: "#e6ebf5",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: 1,
    borderColor: "#6200EE",
    borderWidth: 2,
  },
  listItem: {
    backgroundColor: "#e6ebf5",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: 1,
    marginBottom: 16,
    borderColor: "#6200EE",
    borderWidth: 2,
    width: "65%",
    marginLeft: 0,
    paddingLeft: 0,
    flexDirection: "row",
  },
  card2: {
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: 1,
    marginBottom: 16,
    width: "100%",
    marginLeft: 0,
    paddingLeft: 0,
  },
  button2: {
    backgroundColor: "#6200EE",
    borderRadius: 5,
    alignSelf: "flex-end",
    paddingVertical: 6,
    marginTop: 12,
    marginBottom: 16,
  },
  button3: {
    backgroundColor: "#6200EE",
    borderRadius: 5,
    alignSelf: "flex-end",
    paddingVertical: 6,
    marginTop: 12,
    marginBottom: 16,
  },
  available: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
  },
  unavailable: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F44336",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    marginTop: -30,
  },
  buttonstarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    marginTop: -30,
  },
  ItemButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingLeft: 3,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  devicewidth: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F6F6F6",
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#6200EE",
    fontFamily: "Lexend_400Regular",
  },
  domais: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#6200EE",
    fontFamily: "CarterOne_400Regular",
    textTransform: "uppercase",
  },
  buttonheader: {
    backgroundColor: "#6200EE",
    marginLeft: 10,
  },
  buttonheader2: {
    backgroundColor: "#6200EE",
    marginRight: 10,
  },
  bottomsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default BusinessNameGenerator;
