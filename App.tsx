import { useState } from "react";
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
  Modal,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default function App() {
  const onButtonPress = () => {
    Alert.alert("Pressed");
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="show modal" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="fade">
        <Text style={styles.titleText}>show Modal</Text>
        <Button title="hide modal" onPress={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    flex: 1,
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  titleText: { textAlign: "center", fontSize: 100, color: "#000" },

  view2: {
    flex: 1,
    width: scale(200),
    height: verticalScale(100),
    flexDirection: "row-reverse",
    backgroundColor: "blue",
    marginVertical: 20,
  },
});
