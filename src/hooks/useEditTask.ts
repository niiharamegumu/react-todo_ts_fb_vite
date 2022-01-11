import { useCallback } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

import { Tasks } from "../type/firebase/tasks";

export const useEditTask = () => {
  const editTask = useCallback((props: Tasks) => {
    const { id, title } = props;
    const data = { title };
    const Ref = doc(db, "tasks", id);
    updateDoc(Ref, data);
  }, []);
  return { editTask };
};
