import { ChakraProvider } from "@chakra-ui/react";
import { VFC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import theme from "./theme/theme";

const App: VFC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
