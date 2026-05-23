import { useState } from "react";
import { Text, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const ViewBoxesWithColorAndText = () => {
  const [text, setText] = useState("");
  console.log("user type", text);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ margin: "40" }}>
        <TextInput
          style={{
            height: 40,
            width: "80%",
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "gray",
          }}
          placeholder="Enter your name"
          keyboardType="url"
          secureTextEntry={true}
          multiline={true}
          editable={true}
          value={text}
          onChangeText={setText}
        />
        <Text>اسمي هو {text}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ViewBoxesWithColorAndText;
