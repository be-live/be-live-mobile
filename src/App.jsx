import { Provider } from "react-redux";
import AppNavigation from "./router/AppNavigation";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
