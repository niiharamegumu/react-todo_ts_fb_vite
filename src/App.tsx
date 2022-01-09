import { VFC, useState, useEffect } from "react";
import "./App.css";
import { fireStore } from "./firebase";
import { collection, Firestore, getDocs } from "firebase/firestore/lite";
import { Tasks } from "./type/firebase/tasks";
import { useAllTasks } from "./hooks/useAllTasks";

const App: VFC = () => {
  const { getTasks, tasks } = useAllTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <h2>{task.title}</h2>
      ))}
    </>
  );
};

export default App;
