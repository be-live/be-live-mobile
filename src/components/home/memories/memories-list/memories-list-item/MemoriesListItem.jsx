import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { FeelingsContext } from "../MemoriesList";

import MemoriesListItemImg from "./memories-list-item-img/MemoriesListItemImg";
import MemoriesListItemDesc from "./memories-list-item-desc/MemoriesListItemDesc";
import FeelingsList from "./memories-list-item-desc/memories-list-item-desc-feelings/feelings-list/FeelingsList";

const MemoriesListItem = ({
  item,
  item: { photo, description, location, rated_feelings, id },
}) => {
  const { feelingsId } = useContext(FeelingsContext);
  const itemHeight = photo ? 600 : 150;

  return (
    <View style={{ ...styles.memoriesListItem, height: itemHeight }}>
      {photo && <MemoriesListItemImg photo={photo} />}

      <MemoriesListItemDesc
        id={id}
        description={description}
        location={location}
        rated_feelings={rated_feelings}
      />

      <Text>Checking</Text>

      {feelingsId === id && <FeelingsList item={item} />}
    </View>
  );
};

const styles = StyleSheet.create({
  memoriesListItem: {
    width: 350,
    position: "relative",
    backgroundColor: "gray",
  },
});
export default MemoriesListItem;
