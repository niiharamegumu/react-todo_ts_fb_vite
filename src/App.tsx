import { ChakraProvider } from "@chakra-ui/react";
import { VFC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

const App: VFC = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
