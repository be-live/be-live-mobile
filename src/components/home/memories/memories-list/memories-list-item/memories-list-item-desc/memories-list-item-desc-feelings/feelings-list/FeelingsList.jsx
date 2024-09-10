import { StyleSheet, View } from "react-native";

import FeelingsListCancel from "./FeelingsListCancel";
import FeelingsListItem from "./feelings-list-item/FeelingsListItem";

const FeelingsList = ({ item: { rated_feelings } }) => {
  return (
    <View style={styles.feelingsList}>
      <FeelingsListCancel />

      <View style={{ padding: 20, gap: 10, display: "flex" }}>
        {rated_feelings &&
          rated_feelings.map((item) => (
            <FeelingsListItem key={item.id} {...item} />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feelingsList: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
  },
});

export default FeelingsList;
