import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Slide3 = ({ navigation }) => {
  return (
    <View
      style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
    >
      <TouchableOpacity
        style={{ top: 100 }}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text
          style={{
            textAlign: "right",
            left: 150,
            fontSize: 18,
            color: "white",
          }}
        >
          .
        </Text>
      </TouchableOpacity>
      <View style={{ marginHorizontal: 30 }}>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          Get Online Certificate
        </Text>
        <Text style={{ marginTop: 20, textAlign: "center", fontSize: 16 }}>
          Analyse your scores and Track your results
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#0961f5",
          top: -50,
          padding: 8,
          paddingHorizontal: 16,
          borderRadius: 15,
          left: 100,
          elevation: 4,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 20,
        }}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={{ color: "white", fontSize: 16, marginHorizontal: 10 }}>
          Get Started
        </Text>
        <FontAwesome
          name="arrow-right"
          size={20}
          color="#0961f5"
          style={{
            alignSelf: "center",
            backgroundColor: "white",
            padding: 10,
            borderRadius: 50,
            textAlign: "right",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Slide3;
