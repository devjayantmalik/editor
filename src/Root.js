import React from "react";
import EditorPage from "./EditorPage";
import { Provider } from "react-redux";
import Modals from "./modals";
import store from "./store/store";

const Root = () => (
  <Provider store={store()}>
    <EditorPage />
    <Modals />
  </Provider>
);

export default Root;
