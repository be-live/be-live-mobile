import { Image, StyleSheet, View } from "react-native";

const MemoriesListItemImg = ({ photo }) => {
  return (
    <View style={styles.memoriesListItemImg}>
      <Image
        source={{
          uri: photo,
        }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  memoriesListItemImg: {
    height: "75%",
  },
});

export default MemoriesListItemImg;
