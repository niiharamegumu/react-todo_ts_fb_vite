import { Flex, Heading } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { memo, useCallback, VFC } from "react";

import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useNavigate } from "react-router-dom";

export const Header: VFC = memo(() => {
  const navigete = useNavigate();
  const logout = useCallback(() => {
    signOut(auth)
      .then(() => {
        navigete("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [navigete]);
  return (
    <Flex justify="space-between" align="center" p="1em 2em">
      <Heading fontSize="3xl">TODO App.</Heading>
      <PrimaryButton disabled={false} onClick={logout}>
        LogOut
      </PrimaryButton>
    </Flex>
  );
});
