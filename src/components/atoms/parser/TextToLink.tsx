import { ReactNode, VFC } from "react";
import Linkify from "linkify-react";
import { Text } from "@chakra-ui/react";
import "./index.css";

type Props = {
  children: ReactNode;
};

export const TextToLink: VFC<Props> = (props) => {
  const options = {
    target: "_blank",
    className: (href: string, type: string) => `text-to-${type}`,
  };
  const { children } = props;
  return (
    <Text>
      <Linkify options={options}>{children}</Linkify>
    </Text>
  );
};
