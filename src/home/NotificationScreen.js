import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Text, Button, Title, Subheading } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const NotificationScreen = () => {
  const renderNotification = (title, description, date, icon) => (
    <Card style={styles.notificationCard}>
      <Card.Content>
        <View style={styles.iconWrapper}>
          <Icon name={icon} size={30} color="#fff" style={styles.icon} />
        </View>
        <View style={styles.textWrapper}>
          <Title>{title}</Title>
          <Subheading>{description}</Subheading>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      <Text style={styles.dateHeader}>Today</Text>
      {renderNotification(
        "New Category Course.!",
        "New the 3D Design Course is Available..",
        "Today",
        "school"
      )}
      {renderNotification(
        "New Category Course.!",
        "New the 3D Design Course is Available..",
        "Today",
        "school"
      )}
      {renderNotification(
        "Today's Special Offers",
        "You Have made a Course Payment.",
        "Today",
        "sale"
      )}

      <Text style={styles.dateHeader}>Yesterday</Text>
      {renderNotification(
        "Credit Card Connected.!",
        "Credit Card has been Linked..",
        "Yesterday",
        "credit-card"
      )}

      <Text style={styles.dateHeader}>Nov 20, 2022</Text>
      {renderNotification(
        "Account Setup Successful.!",
        "Your Account has been Created.",
        "Nov 20, 2022",
        "account"
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: 10,
    marginTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 20,
    marginBottom: 10,
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 20,
    paddingLeft: 20,
    color: "#888",
  },
  notificationCard: {
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 8,
  },
  iconWrapper: {
    backgroundColor: "#0961f5",
    padding: 15,
    borderRadius: 50,
    marginRight: 10,
  },
  icon: {
    alignSelf: "center",
  },
  textWrapper: {
    marginLeft: 10,
  },
});

export default NotificationScreen;
