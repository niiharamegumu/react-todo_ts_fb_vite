import { VFC, useState, ChangeEvent, MouseEvent } from "react";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import { Tasks } from "../../../type/firebase/tasks";
import { InputField } from "../../atoms/input/InputField";
import { useEditTask } from "../../../hooks/useEditTask";
import { useDeleteTask } from "../../../hooks/useDeleteTask";

export const TaskCard: VFC<Tasks> = (props) => {
  const { id, title } = props;
  const [titleTxt, setTitleTxt] = useState(title);
  const { editTask } = useEditTask();
  const { deleteTask } = useDeleteTask();

  const onChangeEditTask = (e: ChangeEvent<HTMLInputElement>) =>
    setTitleTxt(e.target.value);
  const onClickEditTask = () => {
    editTask({ id, title: titleTxt });
  };
  const onClickDeleteTask = () => {
    deleteTask({ id });
  };
  return (
    <Box>
      <Flex
        align="center"
        justify="center"
        gap={{ base: 2, sm: 10 }}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Text
          textAlign="center"
          w={{ base: "100%", sm: "40%" }}
          p={2}
          borderRadius={50}
          backgroundColor="white"
        >
          {title}
        </Text>
        <Flex align="center">
          <InputField
            placeholder="Edit Tasks ..."
            input={titleTxt}
            onChange={onChangeEditTask}
          />
          <IconButton
            variant="unstyled"
            colorScheme="teal"
            aria-label="Edit Task"
            icon={<EditIcon />}
            onClick={onClickEditTask}
          />
          <IconButton
            variant="unstyled"
            colorScheme="teal"
            aria-label="delete Task"
            icon={<DeleteIcon />}
            onClick={onClickDeleteTask}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
