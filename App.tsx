import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Platform,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const onButtonPress = () => {
    Alert.alert("Pressed");
  };

  return (
    <>
      <View style={styles.container}>
        //{" "}
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ backgroundColor: "green" }}
        >
          <Button title="press me" onPress={onButtonPress} />
          <Text style={styles.titleText}>hello!</Text>
          <Image
            source={require("./assets/splash-icon.png")}
            style={{ width: 200, height: 200 }}
          />
          <Pressable onPress={onButtonPress}>
            <Image
              source={{
                uri: "https://www.clariontech.com/hubfs/MicrosoftTeams-image%20(13)-1.png",
              }}
              style={{ width: 200, height: 200 }}
            />
          </Pressable>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://www.clariontech.com/hubfs/MicrosoftTeams-image%20(13)-1.png",
              }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://www.clariontech.com/hubfs/MicrosoftTeams-image%20(13)-1.png",
            }}
            style={{ width: 200, height: 200 }}
          />{" "}
          <Image
            source={{
              uri: "https://www.clariontech.com/hubfs/MicrosoftTeams-image%20(13)-1.png",
            }}
            style={{ width: 200, height: 200 }}
          />{" "}
          <Image
            source={{
              uri: "https://www.clariontech.com/hubfs/MicrosoftTeams-image%20(13)-1.png",
            }}
            style={{ width: 200, height: 200 }}
          />
        </ScrollView>
      </View>

      <View style={styles.view2}></View>

      <View style={styles.container}>
        <Text
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          my {Platform.OS === "android" ? "Android" : "IOS"} code here{" "}
        </Text>
        <ActivityIndicator size="large" color="red" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    flex: 1,
    flexDirection:"column-reverse",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  titleText: { textAlign: "center", fontSize: 100, color: "#000" },

  view2: {
    flex:1,
    width: 300,
    height: 100,
    flexDirection:"row-reverse",
    backgroundColor: "blue",
    marginVertical:20
  },
});
