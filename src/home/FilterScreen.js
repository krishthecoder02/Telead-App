import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Checkbox, Button, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FilterScreen = ({ navigation }) => {
  const [subCategories, setSubCategories] = useState({
    "3D Design": false,
    "Web Development": true,
    "3D Animation": true,
    "Graphic Design": false,
    "SEO & Marketing": false,
    "Arts & Humanities": false,
  });

  const [levels, setLevels] = useState({
    "All Levels": true,
    Beginners: false,
    Intermediate: true,
    Expert: false,
  });

  const [price, setPrice] = useState({
    Paid: true,
    Free: false,
  });

  const [features, setFeatures] = useState({
    "AI Caption": false,
    Quizzes: false,
    "Coding Exercise": false,
    "Practice Tests": false,
  });

  const [rating, setRating] = useState({
    "4.5 & Up Above": false,
    "4.0 & Up Above": false,
    "3.5 & Up Above": false,
    "3.0 & Up Above": false,
  });

  const [durations, setDurations] = useState({
    "0-2 Hours": false,
    "3-6 Hours": false,
    "7-16 Hours": false,
    "17+ Hours": false,
  });

  const toggleCheckbox = (setState, stateKey) => {
    setState((prev) => ({
      ...prev,
      [stateKey]: !prev[stateKey],
    }));
  };

  const clearFilters = () => {
    setSubCategories({});
    setLevels({});
    setPrice({});
    setFeatures({});
    setRating({});
    setDurations({});
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.navigate("MainScreen")}
        />
        <Text style={styles.headerTitle}>Filter</Text>
        <Button onPress={clearFilters}>Clear</Button>
      </View>

      {/* Filter Options */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SubCategories */}
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>SubCategories:</Text>
          {Object.keys(subCategories).map((key) => (
            <Checkbox.Item
              key={key}
              label={key}
              status={subCategories[key] ? "checked" : "unchecked"}
              onPress={() => toggleCheckbox(setSubCategories, key)}
              style={styles.checkbox}
            />
          ))}
        </View>

        {/* Levels */}
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Levels:</Text>
          {Object.keys(levels).map((key) => (
            <Checkbox.Item
              key={key}
              label={key}
              status={levels[key] ? "checked" : "unchecked"}
              onPress={() => toggleCheckbox(setLevels, key)}
              style={styles.checkbox}
            />
          ))}
        </View>

        {/* Price */}
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Price:</Text>
          {Object.keys(price).map((key) => (
            <Checkbox.Item
              key={key}
              label={key}
              status={price[key] ? "checked" : "unchecked"}
              onPress={() => toggleCheckbox(setPrice, key)}
              style={styles.checkbox}
            />
          ))}
        </View>

        {/* Features */}
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Features:</Text>
          {Object.keys(features).map((key) => (
            <Checkbox.Item
              key={key}
              label={key}
              status={features[key] ? "checked" : "unchecked"}
              onPress={() => toggleCheckbox(setFeatures, key)}
              style={styles.checkbox}
            />
          ))}
        </View>

        {/* Rating */}
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Rating:</Text>
          {Object.keys(rating).map((key) => (
            <Checkbox.Item
              key={key}
              label={key}
              status={rating[key] ? "checked" : "unchecked"}
              onPress={() => toggleCheckbox(setRating, key)}
              style={styles.checkbox}
            />
          ))}
        </View>

        {/* Video Durations */}
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Video Durations:</Text>
          {Object.keys(durations).map((key) => (
            <Checkbox.Item
              key={key}
              label={key}
              status={durations[key] ? "checked" : "unchecked"}
              onPress={() => toggleCheckbox(setDurations, key)}
              style={styles.checkbox}
            />
          ))}
        </View>
      </ScrollView>

      {/* Apply Button */}
      <Button
        mode="contained"
        style={styles.applyButton}
        onPress={() => {}}
        icon={() => <Icon name="arrow-right" size={20} color="#FFF" />}
      >
        Apply
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  filterSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  checkbox: {
    paddingVertical: 4,
  },
  applyButton: {
    backgroundColor: "#007BFF",
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 16,
  },
});

export default FilterScreen;
