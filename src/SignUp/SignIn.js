import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SignIn = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Let's you in</Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            elevation: 4,
            backgroundColor: "white",
            padding: 6,
            borderRadius: 50,
            marginBottom: 20,
            paddingHorizontal: 24,
          }}
        >
          <Image
            source={require("../../assets/google.png")}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <Text>Continue with Google</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 50,
            padding: 6,
            elevation: 4,
            gap: 20,
            paddingHorizontal: 24,
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../../assets/apple.png")}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <Text>Continue with Apple</Text>
        </View>
        <Text style={{ textAlign: "center" }}>(or)</Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            top: 220,
            backgroundColor: "#0961f5",
            paddingHorizontal: 45,
            alignItems: "center",
            padding: 4,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Sign In with Your Account
          </Text>
          <FontAwesome
            name="arrow-right"
            size={20}
            style={{
              left: 40,
              backgroundColor: "white",
              padding: 10,
              borderRadius: 50,
              elevation: 4,
            }}
            color={"#0961f5"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            top: 230,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text>Don't have an Account ?</Text>
          <Text style={{ color: "#0961f5", textDecorationLine: "underline" }}>
            {" "}
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
