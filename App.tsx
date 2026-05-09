import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>hello!</Text>
      <Image
        source={require("./assets/splash-icon.png")}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: "https://www.clariontech.com/hubfs/MicrosoftTeams-image%20(13)-1.png",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  titleText: { textAlign: "center", fontSize: 100, color: "#000" },
});
