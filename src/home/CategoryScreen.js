import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const categories = [
  { id: "1", name: "3D Design", icon: "cube" },
  { id: "2", name: "Graphic Design", icon: "paint-brush" },
  { id: "3", name: "Web Development", icon: "code" },
  { id: "4", name: "SEO & Marketing", icon: "globe" },
  { id: "5", name: "Finance & Accounting", icon: "university" },
  { id: "6", name: "Personal Development", icon: "thumbs-up" },
  { id: "7", name: "Office Productivity", icon: "cogs" },
  { id: "8", name: "HR Management", icon: "users" },
];

const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <FontAwesome name={item.icon} size={40} color="#4A90E2" />
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
          <FontAwesome name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>All Category</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search for.." style={styles.searchInput} />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Categories Grid */}
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.categoriesGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    marginTop: 70,
  },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  headerText: { fontSize: 20, fontWeight: "bold", marginLeft: 10 },
  searchBarContainer: { flexDirection: "row", marginBottom: 20 },
  searchInput: {
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  searchButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  categoriesGrid: { justifyContent: "space-between" },
  categoryItem: { flex: 1, alignItems: "center", margin: 10 },
  categoryText: { marginTop: 10, fontSize: 16, fontWeight: "500" },
});

export default CategoryScreen;
