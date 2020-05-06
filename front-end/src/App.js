import React from 'react';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import './App.css';
import MedianValueContainer from "./median-value/containers/MedianValueContainer";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
        <div className="container h-100">
            <div className="row">
                <div className="col">
                    <MedianValueContainer></MedianValueContainer>
                </div>
            </div>
        </div>
    </Provider>
  );
}

export default App;
