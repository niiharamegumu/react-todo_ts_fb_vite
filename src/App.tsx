import { ChakraProvider, Stack } from "@chakra-ui/react";
import { VFC, useEffect, useState, ChangeEvent, useCallback } from "react";
import { useAllTasks } from "./hooks/useAllTasks";

import { InputAddField } from "./components/organisms/input/InputAddField";
import { useAddTask } from "./hooks/useAddTask";

const App: VFC = () => {
  const { getTasks, tasks } = useAllTasks();
  const { addTask } = useAddTask();
  const [input, setInput] = useState("");

  useEffect(() => {
    getTasks();
  }, []);
  const onChangeInputText = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);
  const onClickAddTask = useCallback(() => {
    addTask({ title: input });
    setInput("");
  }, [input]);

  return (
    <ChakraProvider>
      <Stack p={30} textAlign="center" spacing={10}>
        <InputAddField
          placeholder="New Tasks ..."
          input={input}
          onChange={onChangeInputText}
          onClick={onClickAddTask}
        />
        <Stack spacing={4}>
          {tasks.map((task) => (
            <p key={task.id}>{task.title}</p>
          ))}
        </Stack>
      </Stack>
    </ChakraProvider>
  );
};

export default App;
