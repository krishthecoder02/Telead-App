import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Card, Button, Text, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function CourseScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      {/* Appbar */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("MainScreen")} />
        <Appbar.Content title="Course" />
      </Appbar.Header>

      {/* ScrollView for content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Course Header */}
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.headerContainer}>
              <Text style={styles.courseTitle}>
                Design Principles: Organizing ..
              </Text>
              <View style={styles.ratingContainer}>
                <Icon name="star" size={20} color="#FFD700" />
                <Text style={styles.ratingText}>4.2</Text>
              </View>
            </View>
            <Text style={styles.courseSubtitle}>Graphic Design</Text>
            <Text style={styles.price}>${28}</Text>
          </Card.Content>
        </Card>

        {/* Course Sections */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.sectionText}>
              This course covers graphic design principles...
            </Text>
          </Card.Content>
        </Card>

        {/* Curriculum Section */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Curriculum</Text>
            <View style={styles.sectionList}>
              <View style={styles.sectionItem}>
                <Text style={styles.sectionItemText}>
                  01 - Why Using Graphic Design
                </Text>
                <Text style={styles.time}>15 Min</Text>
              </View>
              <View style={styles.sectionItem}>
                <Text style={styles.sectionItemText}>
                  02 - Setup Your Graphic Design
                </Text>
                <Text style={styles.time}>10 Min</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Enroll Button */}
        <Button
          mode="contained"
          icon="arrow-right"
          style={styles.enrollButton}
          onPress={() => {}}
        >
          Enroll Course - $55
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  courseSubtitle: {
    fontSize: 16,
    color: "gray",
    marginVertical: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  sectionText: {
    fontSize: 14,
    color: "gray",
  },
  sectionList: {
    marginVertical: 10,
  },
  sectionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  sectionItemText: {
    fontSize: 16,
  },
  time: {
    fontSize: 14,
    color: "gray",
  },
  enrollButton: {
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 10,
  },
});
