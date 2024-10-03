import React, { useState } from 'react';

const ToDoList = () => {
  const [task, setTask] = useState([]);
  const [newtask, setnewTask] = useState("");

  const handleInputChange = (event) => {
    setnewTask(event.target.value);
  };

  const addTask = () => {
    if (newtask.trim() !== "") {
      setTask((prevTasks) => [...prevTasks, newtask]);
      setnewTask("");
    }
  };

  const deleteTask = (index) => {
    const filtered = task.filter((_, i) => i !== index);
    setTask(filtered);
  };

  const movetaskUp = (index) => {
    if (index > 0) {
      const updated = [...task];
      [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];
      setTask(updated);
    }
  };

  const movetaskDown = (index) => {
    if (index < task.length - 1) {
      const updated = [...task];
      [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
      setTask(updated);
    }
  };

  const styles = {
    body: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      background: 'rgba(165, 165, 165, 0.47)',
      color: '#212529',
      textAlign: 'center',
      marginBottom: 10,
      padding: 10,
      border: '1px solid #000',
    },
    toDoList: {
      textAlign: 'center',
    },
    h1: {
      textDecoration: 'underline',
    },
    delete: {
      backgroundColor: '#dc3545',
      textAlign: 'center',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '15px',
      marginRight: '1px',
    },
    up: {
      backgroundColor: '#ffc107',
      textAlign: 'center',
      color: 'white',
      padding: '9px 20px',
      borderRadius: '15px',
      marginRight: '1px',
      marginBottom: '5px',
    },
    down: {
      backgroundColor: '#ffc107',
      textAlign: 'center',
      color: 'white',
      padding: '9px 20px',
      borderRadius: '15px',
      marginRight: '1px',
      marginBottom: '5px',
    },
    listItem: {
      marginTop: '10px',
      listStyle: 'none',
      background: '#f8f9fa',
      borderRadius: '20px',
      width: '80%',
      margin: '10px auto',
      textAlign: 'center',
      padding: '10px',
      border: '1px solid black',
    },
    list: {
      padding: 0,
      margin: 0,
      textAlign: 'center',
      paddingTop: '10px',
      marginBottom: '10px'
    },
    field: {
      padding: '10px',
      border: '1px solid black',
      borderRadius: '15px',
      height: '20px',
      textAlign: 'center',
      background: '#ced4da',
    },
    add: {
      padding: '10px',
      border: '1px solid black',
      borderRadius: '15px',
      height: '40px',
      textAlign: 'center',
      marginLeft: '5px',
      background: '#17a2b8',
      width: '70px',
    },
    items: {
      marginRight: '15px',
      padding: '10px',
      fontSize: '15px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.toDoList}>
        <h1 style={styles.h1}>To-Do List</h1>
        <input
          type="text"
          style={styles.field}
          placeholder="Add new task"
          value={newtask}
          onChange={handleInputChange}
        />
        <button style={styles.add} onClick={addTask}>Add</button>

        <ul style={styles.list}>
          {task.map((taskItem, index) => (
            <li style={styles.listItem} key={index}>
              <span style={styles.items}>{taskItem}</span>
              <button style={styles.up} onClick={() => movetaskUp(index)}>Up</button>
              <button style={styles.down} onClick={() => movetaskDown(index)}>Down</button>
              <button style={styles.delete} onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
