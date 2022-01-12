import { Stack } from "@chakra-ui/react";
import {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useState,
  VFC,
} from "react";
import { useAddTask } from "../../hooks/useAddTask";
import { useAllTasks } from "../../hooks/useAllTasks";
import { InputAddField } from "../molecules/input/InputAddField";
import { TaskCard } from "../organisms/task/TaskCard";

export const PageTask: VFC = memo(() => {
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
    <Stack p={30} textAlign="center" spacing={10}>
      <InputAddField
        placeholder="New Tasks ..."
        input={input}
        onChange={onChangeInputText}
        onClick={onClickAddTask}
      />
      <Stack spacing={4}>
        {tasks.map((task) => (
          <TaskCard key={task.id} id={task.id} title={task.title} />
        ))}
      </Stack>
    </Stack>
  );
});
