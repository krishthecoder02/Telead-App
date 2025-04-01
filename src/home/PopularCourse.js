import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Text, Chip, Card, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PopularCourses = ({ navigation }) => {
  const courses = [
    {
      category: "Graphic Design",
      title: "Graphic Design Advanced",
      price: "$28",
      oldPrice: "$42",
      rating: 4.2,
      students: "7830 Std",
    },
    {
      category: "Graphic Design",
      title: "Advertisement Design",
      price: "$42",
      oldPrice: "$61",
      rating: 3.9,
      students: "12680 Std",
    },
    {
      category: "Programming",
      title: "Graphic Design Advanced",
      price: "$37",
      oldPrice: "$41",
      rating: 4.2,
      students: "990 Std",
    },
    {
      category: "Web Development",
      title: "Web Developer conce...",
      price: "$56",
      oldPrice: "$71",
      rating: 4.9,
      students: "14580 Std",
    },
    {
      category: "SEO & Marketing",
      title: "Digital Marketing Course",
      price: "$34",
      oldPrice: "$50",
      rating: 4.3,
      students: "3400 Std",
    },
    {
      category: "SEO & Marketing",
      title: "Digital Marketing Course",
      price: "$34",
      oldPrice: "$50",
      rating: 4.3,
      students: "3400 Std",
    },
    {
      category: "SEO & Marketing",
      title: "Digital Marketing Course",
      price: "$34",
      oldPrice: "$50",
      rating: 4.3,
      students: "3400 Std",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => {
            navigation.navigate("MainScreen");
          }}
        />
        <Text style={styles.headerTitle}>Popular Courses</Text>
        <IconButton icon="magnify" size={24} onPress={() => {}} />
      </View>

      {/* Category Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipsContainer}
      >
        <Chip style={styles.chip} selected>
          All
        </Chip>
        <Chip style={styles.chip}>Graphic Design</Chip>
        <Chip style={styles.chip}>3D Design</Chip>
        <Chip style={styles.chip}>Arts & Crafts</Chip>
      </ScrollView>

      {/* Course List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {courses.map((course, index) => (
          <Card key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.imagePlaceholder} />
              <View style={styles.cardDetails}>
                <Text style={styles.category}>{course.category}</Text>
                <Text style={styles.title}>{course.title}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>{course.price}</Text>
                  <Text style={styles.oldPrice}>{course.oldPrice}</Text>
                </View>
                <View style={styles.ratingRow}>
                  <Icon name="star" size={16} color="#FFC107" />
                  <Text style={styles.rating}>{course.rating}</Text>
                  <Text style={styles.students}>{course.students}</Text>
                </View>
              </View>
              <IconButton
                icon="bookmark-outline"
                size={20}
                onPress={() => {}}
              />
            </View>
          </Card>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: 16,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  chipsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
    backgroundColor: "#E0F7FA",
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: "#000",
    borderRadius: 8,
    marginRight: 16,
  },
  cardDetails: {
    flex: 1,
  },
  category: {
    fontSize: 12,
    color: "#FF9800",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00C853",
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#9E9E9E",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    marginLeft: 4,
    marginRight: 16,
  },
  students: {
    fontSize: 14,
    color: "#757575",
  },
});

export default PopularCourses;
