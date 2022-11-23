import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

const Button = ({ variant, text, action }) => {
  // Mendestructuring Props menjadi variant dan text agar lebih singkat saat digunakan
  return (
    <button className={`btn btn-${variant}`} onClick={action}>
      {text}
    </button>
  );
};

// Memberikan PropTypes pada component Button
Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  action: PropTypes.func,
};
export default Button;
