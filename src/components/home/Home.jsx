import { ScrollView, View } from "react-native";

import Memories from "./memories/Memories";

const Home = () => {
  return (
    <ScrollView>
      <View>
        <Memories />
      </View>
    </ScrollView>
  );
};

export default Home;
