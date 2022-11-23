import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/DeleteModal.css";

class DeleteModal extends React.Component {
  render() {
    const { openDelete, closeDelete, del, data } = this.props;
    const delById = (id) => {
      del(id);
    };
    if (openDelete) {
      return (
        <div className="modal-container">
          <div className="modal-box-delete">
            <h3>Are you sure want to delete this task?</h3>
            <div className="btn-group-delete">
              <Button
                text="Yes"
                variant="success"
                action={() => {
                  delById(data.id);
                  closeDelete();
                }}
              />
              <Button text="No" variant="warning" action={closeDelete} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

DeleteModal.propTypes = {
  del: PropTypes.func,
  closeDelete: PropTypes.func,
  data: PropTypes.object.isRequired,
  updateDelete: PropTypes.func,
};
export default DeleteModal;
