import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const MainScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hi, Krishna</Text>
        <Text style={styles.subHeaderText}>
          What Would you like to learn Today?
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search for.." style={styles.searchInput} />
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesome name="sliders" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Special Offer Section */}
      <View style={styles.specialOffer}>
        <Text style={styles.offerTitle}>25% OFF*</Text>
        <Text style={styles.offerText}>Today's Special</Text>
        <Text style={styles.offerSubText}>
          Get a Discount for Every Course Order only Valid for Today!
        </Text>
      </View>

      {/* Categories Section */}
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Text style={styles.seeAll}>SEE ALL</Text>
      </View>
      <Text style={styles.category}>
        3D Design | Arts & Humanities | Graphic Design
      </Text>

      {/* Popular Courses Section */}
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Popular Courses</Text>
        <Text style={styles.seeAll}>SEE ALL</Text>
      </View>

      {/* Course Cards */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Graphic Design Advanced</Text>
        <Text style={styles.coursePrice}>$28 | 4.2 | 7830 Std</Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Advertisement Basics</Text>
        <Text style={styles.coursePrice}>$42 | ⭐️ | </Text>
      </View>

      {/* Top Mentor Section */}
      <Text style={styles.sectionTitle}>Top Mentor</Text>
      <View style={styles.mentorContainer}>
        <View style={styles.mentorCard}>
          <Text>Sonja</Text>
        </View>
        <View style={styles.mentorCard}>
          <Text>Jensen</Text>
        </View>
        <View style={styles.mentorCard}>
          <Text>Victoria</Text>
        </View>
        <View style={styles.mentorCard}>
          <Text>Castaldo</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: "#f9f9f9",
    marginTop: 70,
  },
  header: { marginBottom: 20 },
  headerText: { fontSize: 24, fontWeight: "bold" },
  subHeaderText: { color: "gray" },
  searchBarContainer: { flexDirection: "row", marginBottom: 20 },
  searchInput: {
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  filterButton: {
    backgroundColor: "#0961f5",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  specialOffer: {
    padding: 20,
    backgroundColor: "#0961f5",
    borderRadius: 10,
    marginBottom: 20,
  },
  offerTitle: { fontSize: 18, fontWeight: "bold", color: "white" },
  offerText: { fontSize: 22, fontWeight: "bold", color: "white" },
  offerSubText: { color: "white" },
  categoriesSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  seeAll: { color: "#0961f5" },
  category: { color: "gray", marginBottom: 20 },
  courseCard: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
  courseTitle: { fontSize: 16, fontWeight: "bold" },
  coursePrice: { color: "gray" },
  mentorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  mentorCard: {
    padding: 20,
    backgroundColor: "#ddd",
    borderRadius: 10,
    alignItems: "center",
  },
});

export default MainScreen;