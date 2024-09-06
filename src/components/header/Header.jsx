import { StyleSheet, Text, View } from "react-native";

import Nav from "./nav/Nav";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>

      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
  },
});

export default Header;
