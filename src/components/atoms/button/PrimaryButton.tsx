import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { disabled, onClick, children } = props;
  return (
    <Button
      disabled={disabled}
      type="submit"
      colorScheme="teal"
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
