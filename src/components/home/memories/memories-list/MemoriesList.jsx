import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { createContext, useState } from "react";

import MemoriesListItem from "./memories-list-item/MemoriesListItem";

export const FeelingsContext = createContext();

const MemoriesList = () => {
  const memoriesData = useSelector((state) => state.memories.memoriesData);
  const [feelingsId, setFeelingsId] = useState(null);

  return (
    <View style={styles.memoriesList}>
      <FeelingsContext.Provider
        value={{
          feelingsId,
          setFeelingsId,
        }}
      >
        {memoriesData &&
          memoriesData.map((item) => (
            <MemoriesListItem
              key={item.id}
              item={item}
              feelingsId={feelingsId}
              setFeelingsId={setFeelingsId}
            />
          ))}
      </FeelingsContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  memoriesList: {
    gap: 8,
    display: "flex",
    marginTop: 16,
  },
});

export default MemoriesList;
