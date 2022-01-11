import { useCallback } from "react";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

import { Tasks } from "../type/firebase/tasks";

type ID = Pick<Tasks, "id">;

export const useDeleteTask = () => {
  const deleteTask = useCallback((props: ID) => {
    const { id } = props;
    const Ref = doc(db, "tasks", id);
    deleteDoc(Ref);
  }, []);
  return { deleteTask };
};
