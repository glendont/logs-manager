import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { updateLog } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";

const EditLogModel = ({ updateLog, current }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const newlog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(newlog);
      M.toast({ html: `Log updated by ${tech}` });
    }
    /// Clear Fields
    setMessage("");
    setTech("");
    setAttention(false);
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4> Enter System log </h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => {
                setTech(e.target.value);
              }}
            >
              <option value="" disabled>
                {" "}
                Select Technicans{" "}
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span> Needs Attention </span>
              </label>
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

EditLogModel.propTypes = {
  current: propTypes.object,
  updatelog: propTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModel);
