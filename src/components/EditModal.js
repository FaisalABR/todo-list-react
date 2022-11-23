import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/EditModal.css";

class EditModal extends React.Component {
  render() {
    // Destructuring props agar lebih mudah digunakan dan lebih singkat
    const { edit, closeModal, data, change, update } = this.props;
    if (edit) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h3>Edit Task</h3>
            {/*data diterima dari props "data" kedalam value "data.title"*/}
            <input type="text" value={data.title} onChange={change} />
            <div className="btn-group">
              {/* memberikan action dengan props method update yang sudah dibuat di App.js */}
              <Button text="edit" variant="success" action={update} />
              {/* memberikan action dengan props method closeModal yang sudah dibuat di App.js */}
              <Button text="cancel" variant="warning" action={closeModal} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

EditModal.propTypes = {
  edit: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  data: PropTypes.object.isRequired,
  change: PropTypes.func,
  update: PropTypes.func,
};
export default EditModal;
