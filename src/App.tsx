import { VFC, useEffect } from "react";
import { useAllTasks } from "./hooks/useAllTasks";

const App: VFC = () => {
  const { getTasks, tasks } = useAllTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <p>{task.title}</p>
      ))}
    </>
  );
};

export default App;
