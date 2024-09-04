import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTER } from "./router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTER.HOME_PAGE_ROUTE}>
        <Stack.Screen name={ROUTER.HOME_PAGE_ROUTE} component={HomePage} />
        <Stack.Screen name={ROUTER.ABOUT_PAGE_ROUTE} component={AboutPage} />
        <Stack.Screen
          name={ROUTER.CONTACT_PAGE_ROUTE}
          component={ContactPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
