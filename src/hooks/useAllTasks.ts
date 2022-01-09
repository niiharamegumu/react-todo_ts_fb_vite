import { collection, getDocs } from "firebase/firestore/lite";
import { useCallback, useState } from "react";

import { fireStore } from "../firebase";
import { Tasks } from "../type/firebase/tasks";

export const useAllTasks = () => {
  const [tasks, setTasks] = useState<Array<Tasks>>([{ id: "", title: "" }]);

  const getTasks = useCallback(async () => {
    const tasks = collection(fireStore, "tasks");
    const tasksSnapshot = await getDocs(tasks);
    const taskList = tasksSnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        title: String(doc.data().title),
      };
    });
    setTasks(taskList);
  }, []);

  return { getTasks, tasks };
};
