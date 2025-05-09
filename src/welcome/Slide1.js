import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Slide1 = ({ navigation }) => {
  return (
    <View
      style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
    >
      <TouchableOpacity style={{ top: 100 }}>
        <Text
          style={{ textAlign: "right", left: 150, fontSize: 18 }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Skip
        </Text>
      </TouchableOpacity>
      <View style={{ marginHorizontal: 30 }}>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          Online Learning
        </Text>
        <Text style={{ marginTop: 20, textAlign: "center", fontSize: 16 }}>
          We Provide Classes Online Classes and Pre Recorded Leactures.!
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#0961f5",
          top: -50,
          padding: 14,
          paddingHorizontal: 48,
          borderRadius: 15,
          left: 100,
          elevation: 4,
        }}
        onPress={() => navigation.navigate("Slide2")}
      >
        <FontAwesome
          name="arrow-right"
          size={20}
          color="white"
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Slide1;
