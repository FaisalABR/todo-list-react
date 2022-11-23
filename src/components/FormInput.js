import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/FormInput.css";

class FormInput extends React.Component {
  // Membuat state untuk menghandle data keluar
  state = {
    text: "",
  };

  // Membuat method untuk mengubah state agar bisa menghandle data keluar
  change = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  // Membuat method submit untuk mengirim data ke props yang ada di App.js pada component InputForm
  submit = (e) => {
    e.preventDefault();
    // Melihat apakah state text kosong jika tidak maka jalankan props method add
    if (this.state.text !== "") {
      this.props.add(this.state.text);
    }
    // Kosongkan lagi input form jika sudah disubmit
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      // Memberikan event submit pada form
      <form style={formInput} onSubmit={this.submit}>
        <input
          type="text"
          style={input}
          value={this.state.text}
          placeholder="Add your task..."
          // memberikan event onChange pada tag input
          onChange={this.change}
        />
        {/* memberikan input submit pada button add task */}
        <Button text="Add" variant="primary" action={this.submit} />
      </form>
    );
  }
}

// Membuat propTypes untuk memvalidasi data yang masuk melalui props
FormInput.propTypes = {
  add: PropTypes.func,
};

export default FormInput;

// Memberikan styling kepada Form
const formInput = {
  height: "3rem",
  background: "#fff",
  color: "white",
  padding: " 0 1rem",
  margin: "1rem 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

// Memberikan styling ke element Input
const input = {
  width: "70%",
  border: "none",
};
