import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
  Alert,
} from "react-native";
import { TextInput, Button, Card, Title, List } from "react-native-paper";
import { AntDesign, Octicons } from "@expo/vector-icons";

const BusinessNameGenerator = () => {
  const [keyword, setKeyword] = useState("");
  const [domainavailable, setDomainavailable] = useState(false);
  const [businessNames, setBusinessNames] = useState([
    {
      name: "Acme Industries",
      domains: [
        "acmeindustries.com",
        "acmeindustries.net",
        "acmeindustries.org",
      ],
      expanded: false,
    },
    {
      name: "Apex Solutions",
      domains: ["apexsolutions.com", "apexsolutions.net", "apexsolutions.org"],
      expanded: false,
    },
    {
      name: "Bright Idea Inc.",
      domains: ["brightidea.com", "brightidea.net", "brightidea.org"],
      expanded: false,
    },
    {
      name: "Blue Sky Innovations",
      domains: [
        "blueskyinnovations.com",
        "blueskyinnovations.net",
        "blueskyinnovations.org",
      ],
      expanded: false,
    },
    {
      name: "Creative Minds LLC",
      domains: ["creativeminds.com", "creativeminds.net", "creativeminds.org"],
      expanded: false,
    },
    {
      name: "Dynamic Solutions",
      domains: [
        "dynamicsolutions.com",
        "dynamicsolutions.net",
        "dynamicsolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
    {
      name: "Eagle Eye Solutions",
      domains: [
        "eagleeyesolutions.com",
        "eagleeyesolutions.net",
        "eagleeyesolutions.org",
      ],
      expanded: false,
    },
  ]);

  const handleKeywordChange = (text) => {
    setKeyword(text);
  };

  const handleSearch = () => {
    // TODO: Implement search functionality
  };

  const handleAccordionToggle = (index) => {
    const newBusinessNames = [...businessNames];
    newBusinessNames[index].expanded = !newBusinessNames[index].expanded;
    setBusinessNames(newBusinessNames);
  };

  const SaveDomain = () => {
    //Save domain to database
    console.log("Save domain to database");
    Alert.alert("Domain saved to database");
  };

  const getDomain = (domain) => {
    //Check if domain is available
    console.log("Check if domain is available");
  };

  return (
    <SafeAreaView style={styles.container}>
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
        >
          Generate Business Names
        </Button>
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView>
          {businessNames.map((business, index) => (
            <List.Accordion
              title={business.name}
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
                    <List.Item key={i} title={domain} style={styles.listItem} />
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
              </Card>
            </List.Accordion>
          ))}
        </ScrollView>
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
    fontFamily: "Bangers_400Regular",
    fontWeight: "medium",
  },
  input: {
    flex: 1,
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
    width: "60%",
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
});

export default BusinessNameGenerator;
