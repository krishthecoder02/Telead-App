import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Slide2 = ({ navigation }) => {
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
          Learn from Anytime
        </Text>
        <Text style={{ marginTop: 20, textAlign: "center", fontSize: 16 }}>
          Booked or Same the Lectures for Future
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#0961f5",
          top: -50,
          padding: 10,
          paddingHorizontal: 35,
          borderRadius: 15,
          left: 100,
          elevation: 4,
        }}
        onPress={() => navigation.navigate("Slide3")}
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

export default Slide2;
