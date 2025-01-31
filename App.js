import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/welcome/WelcomeScreen";
import Slide1 from "./src/welcome/Slide1";
import Slide2 from "./src/welcome/Slide2";
import Slide3 from "./src/welcome/Slide3";
import SignIn from "./src/SignUp/SignIn";

import SignUpScreen from "./src/SignUp/SignUp";
import MainScreen from "./src/home/MainScreen";
import CategoryScreen from "./src/home/CategoryScreen";
import PopularCourses from "./src/home/PopularCourse";
import FilterScreen from "./src/home/FilterScreen";
import NotificationScreen from "./src/home/NotificationScreen";
import CourseScreen from "./src/home/CourseScreen";
import AboutCourse from "./src/home/AboutCourse";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Slide1" component={Slide1} />
        <Stack.Screen name="Slide2" component={Slide2} />
        <Stack.Screen name="Slide3" component={Slide3} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="PopularCourses" component={PopularCourses} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="CourseScreen" component={CourseScreen} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen name="AboutScreen" component={AboutCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
