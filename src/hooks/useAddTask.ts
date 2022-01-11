import { useCallback, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import { Tasks } from "../type/firebase/tasks";

type Task = Omit<Tasks, "id">;

export const useAddTask = () => {
  const addTask = useCallback((props: Task) => {
    const { title } = props;
    addDoc(collection(db, "tasks"), {
      title,
    });
  }, []);
  return { addTask };
};
