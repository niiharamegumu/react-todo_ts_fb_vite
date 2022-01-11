import { useCallback, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

import { Tasks } from "../type/firebase/tasks";

export const useAllTasks = () => {
  const [tasks, setTasks] = useState<Array<Tasks>>([{ id: "", title: "" }]);
  const getTasks = useCallback(() => {
    const unsub = onSnapshot(collection(db, "tasks"), (doc) => {
      const taskList = doc.docs.map((doc) => {
        return {
          id: doc.id,
          title: String(doc.data().title),
        };
      });
      setTasks(taskList);
    });
    return () => unsub();
  }, []);

  return { getTasks, tasks };
};
