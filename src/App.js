import logo from "./logo.svg";
import TodoItem from "./components/TodoItem";
// import Button from "./components/Button";
import FormInput from "./components/FormInput";
import EditModal from "./components/EditModal";
import DeleteModal from "./components/DeleteModal";
import "./App.css";
import React from "react";

class App extends React.Component {
  // Membuat state untuk diolah di component component
  state = {
    todos: [
      {
        id: 1,
        title: "reading book",
      },
      {
        id: 2,
        title: "workout training",
      },
    ],
    isEdit: false,
    isDelete: false,
    editData: {
      id: "",
      title: "",
    },
  };

  // Membuat function untuk membuka modal delete dan mengambil data dari list task yang terpilih
  openModDelete = (id, title) => {
    this.setState({
      isDelete: true,
      editData: {
        id: id,
        title: title,
      },
    });
  };

  // Membuat function untuk menutup modal delete
  closeModDelete = () => {
    this.setState({
      isDelete: false,
    });
  };

  // Membuat function untuk memperbarui data yang diubah
  update = () => {
    const { id, title } = this.state.editData;
    const newData = { id, title };
    const newTodos = this.state.todos;
    newTodos.splice(id - 1, 1, newData);
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: "",
      },
    });
  };

  // Membuat function untuk menganti data dalam button edit
  setTitle = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value,
      },
    });
  };

  // Membuat function untuk membuka modal
  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data,
      },
    });
  };
  //Membuat function untuk menutup modal
  closeModal = () => {
    this.setState({
      isEdit: false,
    });
  };
  // Function untuk menghapus data akan dijadikan props
  deleteTask = (id) => {
    this.setState({ todos: this.state.todos.filter((item) => item.id !== id) }); //Mengganti state dan menghilangkannya dengan menggunakan filter
  };

  // Function untuk menambahkan tugas/task
  add = (data) => {
    const id = this.state.todos.length;
    // Membuat element baru sebagai task baru untuk dimasukkan ke state
    const newData = {
      id: id + 1,
      title: data,
    };
    // Memasukkan element baru ke state
    this.setState({ todos: [...this.state.todos, newData] });
  };

  render() {
    // Mendestructuring state nya
    const { todos } = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Task List</h3>
        </div>
        <div className="list">
          {/* Melakukan looping untuk setiap item pada TodoItem agar semua data bisa ditampilkan */}
          {todos.map((item) => (
            // Memberikan props pada component TodoItem
            <TodoItem
              key={item.id}
              todo={item}
              del={this.deleteTask}
              openModal={this.openModal}
              openDelete={this.openModDelete}
            />
          ))}
        </div>
        <div className="form-input">
          <FormInput add={this.add} />
        </div>
        <EditModal
          edit={this.state.isEdit}
          closeModal={this.closeModal}
          change={this.setTitle} //props untuk mengirim data yang diubah
          data={this.state.editData} //Props untuk mengirim data yang kosong
          update={this.update} //Props ini untuk memperbarui data yang ingin diubah
        />
        <DeleteModal
          openDelete={this.state.isDelete}
          closeDelete={this.closeModDelete} //Untuk menutup modal delete
          data={this.state.editData} //props untuk mengirim data yang ingin dihapus
          del={this.deleteTask} //props untuk mengirim method delete Task
        />
      </div>
    );
  }
}

export default App;
