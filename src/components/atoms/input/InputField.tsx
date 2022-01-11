import { Input } from "@chakra-ui/react";
import { memo, ChangeEvent, VFC } from "react";

type Props = {
  input: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: VFC<Props> = memo((props) => {
  const { input, placeholder, onChange } = props;
  return (
    <Input
      w={["100%", "100%", "50%"]}
      value={input}
      placeholder={placeholder}
      p="1em"
      variant="flushed"
      onChange={onChange}
      size="md"
    />
  );
});
