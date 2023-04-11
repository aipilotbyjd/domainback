import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  List,
  IconButton,
} from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const BusinessNameGenerator = () => {
  const [keyword, setKeyword] = useState("");
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
            <Card key={index} style={styles.card}>
              <Card.Content>
                <Title>{business.name}</Title>
                <List.Accordion
                  title="Domain availability"
                  expanded={business.expanded}
                  onPress={() => handleAccordionToggle(index)}
                >
                  {business.domains.map((domain, i) => (
                    <List.Item
                      key={i}
                      title={domain}
                      left={() => (
                        <AntDesign name="checkcircle" size={24} color="green" />
                      )}
                    />
                  ))}
                </List.Accordion>
              </Card.Content>
              <Card.Actions style={styles.cardActions}>
                <IconButton
                  icon={business.expanded ? "minus" : "plus"}
                  onPress={() => handleAccordionToggle(index)}
                />
              </Card.Actions>
            </Card>
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
  buttonLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
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
});

export default BusinessNameGenerator;
