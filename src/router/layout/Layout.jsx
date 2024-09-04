import { View } from "react-native";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <View>{children}</View>
      <Footer />
    </>
  );
};

export default Layout;
