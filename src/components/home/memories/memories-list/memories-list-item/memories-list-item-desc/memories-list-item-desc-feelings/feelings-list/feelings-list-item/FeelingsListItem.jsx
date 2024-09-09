import { StyleSheet, Text, View } from "react-native";

const FeelingsListItem = ({ feeling: { name, description }, rating }) => {
  return (
    <View style={styles.feelingsListItem}>
      <Text>Name: {name}</Text>
      <Text>Desc: {description}</Text>
      <Text>Rating: {rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  feelingsListItem: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "purple",
  },
});

export default FeelingsListItem;
