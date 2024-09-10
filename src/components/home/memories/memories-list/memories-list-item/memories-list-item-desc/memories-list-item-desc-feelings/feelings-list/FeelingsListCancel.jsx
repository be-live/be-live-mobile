import { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FeelingsContext } from "../../../../MemoriesList";

import RemoveIcon from "react-native-vector-icons/EvilIcons";

const FeelingsListCancel = () => {
  const { setFeelingsId } = useContext(FeelingsContext);

  function FeelingsListCancelFunc() {
    setFeelingsId(null);
  }

  return (
    <View style={styles.feelingsListCancel}>
      <TouchableOpacity onPress={FeelingsListCancelFunc}>
        <RemoveIcon name="close" size={35} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  feelingsListCancel: {
    padding: 10,
    display: "flex",
    alignItems: "flex-end",
  },
});

export default FeelingsListCancel;
