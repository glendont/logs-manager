import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import "./App.css";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModel";
import EditLogModal from "./components/logs/EditLogModel";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddLogModal />
          <EditLogModal />
          <TechListModal />
          <AddTechModal />

          <AddBtn />

          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
