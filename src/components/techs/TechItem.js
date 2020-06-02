import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTech }) => {
  const removeTech = () => {
    deleteTech(tech.id);
    M.toast({
      html: `Tecnician ${tech.firstName} ${tech.lastName} has been removed successfully.`,
    });
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.LastName}
        <a href="#!" className="secondary-content" onClick={removeTech}>
          <i className="material-icons grey-text">delete</i>{" "}
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
