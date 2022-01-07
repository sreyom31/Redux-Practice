import logo from './logo.svg';
import './App.css';
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer"
import {Provider} from "react-redux";
import store from "./redux/store";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
  return (
        <Provider store={store}>
            <div className="App">
                <HooksCakeContainer />
                <CakeContainer />
                <HooksIceCreamContainer />
                <IceCreamContainer />
                <NewCakeContainer />
            </div>
        </Provider>
  );
}

export default App;
