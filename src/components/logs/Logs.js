import React, { useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return (
      <h4>
        {" "}
        <Preloader />{" "}
      </h4>
    );
  } else {
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center"> System Logs </h4>
          </li>
          {!loading && logs.length === 0 ? (
            <p className="center"> No logs to show...</p>
          ) : (
            logs.map((log) => (
              <li>
                {" "}
                <LogItem log={log} key={log.id} />{" "}
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
};

Logs.propTypes = {
  log: propTypes.object.isRequired,
  getLogs: propTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);
