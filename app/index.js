import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
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
      <View style={styles.inputContainer}>
        <TextInput
          label="Enter a keyword"
          value={keyword}
          onChangeText={handleKeywordChange}
          style={styles.input}
        />
        <Button mode="contained" onPress={handleSearch}>
          Search
        </Button>
      </View>
      <View style={styles.cardContainer}>
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
                      <IconButton
                        icon={domain ? "check" : "close"}
                        color={domain ? "green" : "red"}
                      />
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  input: {
    flex: 1,
    marginRight: 16,
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
});

export default BusinessNameGenerator;
