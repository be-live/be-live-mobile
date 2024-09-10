import { StyleSheet, Text, View } from "react-native";
import MemoriesListItemDescFeelings from "./memories-list-item-desc-feelings/MemoriesListItemDescFeelings";

const MemoriesListItemDesc = ({
  description,
  location,
  rated_feelings,
  id,
}) => {
  return (
    <View>
      <Text>Desc: {description}</Text>
      <Text>GPS: {location}</Text>

      {rated_feelings.length !== 0 && <MemoriesListItemDescFeelings id={id} />}
    </View>
  );
};

export default MemoriesListItemDesc;
