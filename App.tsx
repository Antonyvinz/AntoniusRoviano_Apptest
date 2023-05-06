import store from "./redux/store";
import { Provider } from "react-redux";
import MainRoute from "./routes/mainroute";

export default function App() {
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider>
  );
}
