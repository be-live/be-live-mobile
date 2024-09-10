import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FeelingsContext } from "../../../MemoriesList";
import FeelingsList from "./feelings-list/FeelingsList";

const MemoriesListItemDescFeelings = ({ id }) => {
  const { feelingsId, setFeelingsId } = useContext(FeelingsContext);

  function handleFeelingsBtn(itemId) {
    const arg = itemId === feelingsId ? null : itemId;
    setFeelingsId(arg);
  }

  return (
    <>
      <TouchableOpacity
        style={styles.feelingsBtn}
        onPress={() => handleFeelingsBtn(id)}
      >
        <Text>Feelings</Text>
      </TouchableOpacity>

      {/* {feelingsId === id && <FeelingsList />} */}
    </>
  );
};

const styles = StyleSheet.create({
  feelingsBtn: {
    width: 100,
    padding: 10,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
});

export default MemoriesListItemDescFeelings;
