import Landing from "./pages/Landing";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Landing />
      </Router>
    </Provider>
  );
}

export default App;
