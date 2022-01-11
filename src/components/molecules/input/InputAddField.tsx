import { ChangeEvent, memo, VFC } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import { InputField } from "../../atoms/input/InputField";

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
      <InputField placeholder={placeholder} input={input} onChange={onChange} />
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
