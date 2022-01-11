import {
  Box,
  ChakraProvider,
  Flex,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { VFC, useEffect, useState, ChangeEvent } from "react";
import { useAllTasks } from "./hooks/useAllTasks";

const App: VFC = () => {
  const { getTasks, tasks } = useAllTasks();
  const [input, setInput] = useState("");

  useEffect(() => {
    getTasks();
  }, []);
  const onChangeInputText = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <ChakraProvider>
      <Box p={30} textAlign="center">
        <Stack w="50%" spacing={20} m="auto">
          <Flex alignItems="center" justify="center" gap={10}>
            <Input
              value={input}
              placeholder="New Tasks..."
              p="1em"
              onChange={onChangeInputText}
              size="lg"
            />
            <IconButton aria-label="Search database" icon={<AddIcon />} />
          </Flex>
        </Stack>
        {tasks.map((task) => (
          <p key={task.id}>{task.title}</p>
        ))}
      </Box>
    </ChakraProvider>
  );
};

export default App;
