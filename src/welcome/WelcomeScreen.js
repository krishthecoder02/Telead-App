import { View, Text, Image, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#0961f5",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Slide1")}>
        <Image
          source={require("../../assets/LOGO.png")}
          style={{ top: 225, zIndex: 1, left: 80 }}
        />
        <Image
          source={require("../../assets/SHAPE.png")}
          style={{ height: 300, width: 300 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
