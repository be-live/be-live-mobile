import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Nav = () => {
  const navData = useSelector((state) => state.nav.navData);
  const navigation = useNavigation();

  function navigateFunc(path) {
    navigation.navigate(path);
  }

  return (
    <View style={styles.nav}>
      {navData &&
        navData.map((item) => {
          return (
            <View
              key={item.id}
              style={styles.navLink}
              onTouchStart={() => navigateFunc(item.path)}
            >
              <Text>{item.title}</Text>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "blue",
  },
  navLink: {
    padding: 6,
  },
});

export default Nav;
