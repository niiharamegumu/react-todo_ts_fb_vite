import { ChangeEvent, memo, VFC } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input } from "@chakra-ui/react";

type Props = {
  placeholder: string;
  input: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

export const InputAddField: VFC<Props> = memo((props) => {
  const { placeholder, input, onChange, onClick } = props;
  return (
    <Flex gap={2} justify="center">
      <Input
        w={["100%", "100%", "50%"]}
        value={input}
        placeholder={placeholder}
        p="1em"
        variant="flushed"
        onChange={onChange}
        size="md"
      />
      <IconButton
        aria-label="Search database"
        icon={<AddIcon />}
        variant="unstyled"
        isDisabled={!input}
        onClick={onClick}
      />
    </Flex>
  );
});
