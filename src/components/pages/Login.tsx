import {
  Button,
  Text,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { memo, useState, ChangeEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../firebase";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login = memo((props: any) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigete = useNavigate();
  const disabled = !email || !password;

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const signIn = () => {
    const signIn = signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigete("/tasks");
      })
      .catch((error) => {
        alert(error.message);
      });
    return () => signIn;
  };

  const creatAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigete("/tasks");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Stack
        backgroundColor="white"
        p={{ base: "30px 20px", sm: "20px 30px" }}
        borderRadius={20}
        w={{ base: "90%", sm: "sm" }}
        spacing={6}
      >
        <Heading fontSize="2xl" textAlign="center">
          {isLogin ? "Login" : "Register"}
        </Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">password</FormLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          <FormHelperText>We'll never share your password.</FormHelperText>
        </FormControl>
        <PrimaryButton
          disabled={disabled}
          onClick={isLogin ? signIn : creatAccount}
        >
          {isLogin ? "Login" : "Register"}
        </PrimaryButton>
        {/* セキュリティ上、誰でもログインできないようにするため */}
        {/* <Text
          as="span"
          cursor="pointer"
          textAlign="center"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create New Account ?" : "Login ?"}
        </Text> */}
      </Stack>
    </Flex>
  );
});
