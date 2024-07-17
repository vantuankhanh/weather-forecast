import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "rsuite/dist/rsuite.min.css";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
