import { StyleSheet, Text, View } from "react-native";

import MemoriesList from "./memories-list/MemoriesList";

const Memories = () => {
  return (
    <View style={styles.memories}>
      <Text style={styles.memoriesTitle}>Memories</Text>

      <MemoriesList />
    </View>
  );
};

const styles = StyleSheet.create({
  memories: {
    paddingVertical: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  memoriesTitle: {
    fontSize: 24,
  },
});

export default Memories;
