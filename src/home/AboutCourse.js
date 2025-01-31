import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Appbar, Card, Button, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AboutCourse = ({ navigation }) => {
  const sections = [
    {
      title: "Section 01 - Introduction",
      duration: "25 Mins",
      items: [
        {
          id: "1",
          title: "Why Using Graphic Design?",
          time: "15 Mins",
          locked: false,
        },
        {
          id: "2",
          title: "Setup Your Graphic Design Workspace",
          time: "10 Mins",
          locked: false,
        },
      ],
    },
    {
      title: "Section 02 - Graphic Design",
      duration: "55 Mins",
      items: [
        {
          id: "3",
          title: "Take a Look Graphic Design Tools",
          time: "08 Mins",
          locked: true,
        },
        {
          id: "4",
          title: "Working with Graphic Design Tools",
          time: "25 Mins",
          locked: true,
        },
        {
          id: "5",
          title: "Working with Frame & Layouts",
          time: "12 Mins",
          locked: true,
        },
        {
          id: "6",
          title: "Using Graphic Plugins",
          time: "10 Mins",
          locked: true,
        },
      ],
    },
    {
      title: "Section 03 - Let’s Practice",
      duration: "35 Mins",
      items: [
        {
          id: "7",
          title: "Let’s Design a Sign Up Form",
          time: "15 Mins",
          locked: true,
        },
        {
          id: "8",
          title: "Sharing Work with Team",
          time: "20 Mins",
          locked: true,
        },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <Card style={styles.card} mode="outlined">
      <View style={styles.cardContent}>
        <View style={styles.indexCircle}>
          <Text style={styles.indexText}>{item.id.padStart(2, "0")}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.time}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("CourseScreen")}>
          <Icon
            name={item.locked ? "lock" : "checkbox-marked-circle"}
            size={24}
            color={item.locked ? "#9e9e9e" : "#4caf50"}
          />
        </TouchableOpacity>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      {/* AppBar */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Curriculum" />
      </Appbar.Header>

      {/* Sections */}
      <FlatList
        data={sections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            {/* Section Header */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{item.title}</Text>
              <Text style={styles.sectionDuration}>{item.duration}</Text>
            </View>

            {/* Section Items */}
            {item.items.map((lesson) => (
              <React.Fragment key={lesson.id}>
                {renderItem({ item: lesson })}
              </React.Fragment>
            ))}
          </View>
        )}
      />

      {/* Bottom Button */}
      <View style={styles.footer}>
        <Button
          mode="contained"
          icon="arrow-right"
          contentStyle={styles.enrollButtonContent}
        >
          Enroll Course - $55
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  sectionDuration: {
    fontSize: 14,
    color: "#9e9e9e",
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  indexCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e3f2fd",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  indexText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e88e5",
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  subtitle: {
    fontSize: 12,
    color: "#9e9e9e",
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
  },
  enrollButtonContent: {
    height: 48,
    backgroundColor: "#0961f5",
  },
});

export default AboutCourse;
