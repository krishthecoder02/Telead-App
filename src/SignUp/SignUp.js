import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/LOGO.png")} style={styles.logo} />
        <Text style={styles.title}>Telead</Text>
        <Text style={styles.subtitle}>LEARN FROM HOME</Text>
      </View>

      {/* Form Section */}
      <Text style={styles.heading}>Getting Started.!</Text>
      <Text style={styles.description}>
        Create an Account to Continue your allCourses
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      {/* Agree to terms */}
      <TouchableOpacity
        onPress={() => setIsChecked(!isChecked)}
        style={styles.termsContainer}
      >
        <FontAwesome
          name={isChecked ? "check-circle" : "circle-thin"}
          size={24}
          color="green"
        />
        <Text style={styles.termsText}>Agree to Terms & Conditions</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate("MainScreen")}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
        <FontAwesome
          name="arrow-right"
          size={20}
          color="#0961f5"
          style={[
            styles.signUpIcon,
            {
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: 50,
            },
          ]}
        />
      </TouchableOpacity>

      {/* Social Sign Up */}
      <Text style={styles.orText}>Or Continue With</Text>
      <View style={styles.socialContainer}>
        <View
          style={{
            backgroundColor: "#fff",
            padding: 4,
            alignItems: "center",
            borderRadius: 50,
            elevation: 5,
          }}
        >
          <Image
            source={require("../../assets/google.png")}
            style={{ height: 30, width: 30 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            padding: 4,
            alignItems: "center",
            borderRadius: 50,
            elevation: 5,
          }}
        >
          <Image
            source={require("../../assets/apple.png")}
            style={{ height: 30, width: 30 }}
          />
        </View>
      </View>

      {/* Sign In Link */}
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.signInText}>
          Already have an Account?{" "}
          <Text style={styles.signInLink}>SIGN IN</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 24,
    justifyContent: "center",
  },
  logoContainer: { alignItems: "center", marginBottom: 32 },
  logo: { width: 100, height: 100 },
  title: { fontSize: 24, fontWeight: "bold", color: "#4f46e5" },
  subtitle: { fontSize: 14, color: "#6b7280" },
  heading: { fontSize: 20, fontWeight: "bold" },
  description: { fontSize: 14, color: "#6b7280", marginBottom: 16 },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 16,
    elevation: 5,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  termsText: { marginLeft: 8 },
  signUpButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0961f5",
    padding: 6,
    borderRadius: 32,
  },
  signUpText: { color: "white", fontSize: 18, fontWeight: "bold" },
  signUpIcon: { marginLeft: 8 },
  orText: { textAlign: "center", color: "#6b7280", marginVertical: 16 },
  socialContainer: { flexDirection: "row", justifyContent: "center", gap: 16 },
  signInText: { textAlign: "center", marginTop: 16 },
  signInLink: {
    color: "#0961f5",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default SignUpScreen;
