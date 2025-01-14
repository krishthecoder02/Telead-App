import { Text, View, Image, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SignUp = () => {
  return (
    <View>
      <View>
        <Image source={require("../../assets/LOGO.png")} />
      </View>
      <View>
        <Text>Getting Started !</Text>
        <Text>Create an Account to Continue your Learning</Text>
      </View>
      <View>
        <View>
          <TextInput />
        </View>
        <View>
          <TextInput />
        </View>
      </View>
      <View>
        <Text>Sign UP </Text>
        <FontAwesome
          name="arrow-right"
          size={20}
          style={{
            backgroundColor: "white",
          }}
          color={"#0961f5"}
        />
      </View>
    </View>
  );
};

export default SignUp;
