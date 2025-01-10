import { Provider } from "react-redux";
import Compteur from "./Compteur";
import store from "./Store";

const App = () => {
  return (
    <Provider store={store}>
      <Compteur></Compteur>
    </Provider>
  );
};
export default App;
