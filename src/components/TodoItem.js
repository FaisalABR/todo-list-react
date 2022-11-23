import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

// Mendestructuring Props agar lebih singkat saat menggunakannya
const TodoItem = ({ todo, openModal, openDelete }) => {
  return (
    <div style={todoItem}>
      {/* Menampilkan data Props yang dikiriminkan melalui App.js */}
      <p>{todo.title}</p>
      <div>
        <Button
          text="Edit"
          variant="success"
          // saat mengklik button edit, akan mengirimkan id dan title ke modal Box
          action={() => openModal(todo.id, todo.title)}
        />
        <Button
          text="Delete"
          variant="warning"
          // saat mengklik button delete, akan mengirimkan id dan title ke delete modal box
          action={() => openDelete(todo.id, todo.title)}
        />
      </div>
    </div>
  );
};

// Membuat propTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  openModal: PropTypes.func,
  openDelete: PropTypes.func,
};

export default TodoItem;

// Membuat styling dan diletakkan di inline styla pada XML
const todoItem = {
  height: "3rem",
  background: "#218DFD",
  color: "white",
  padding: " 0 1rem",
  margin: "1rem 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
