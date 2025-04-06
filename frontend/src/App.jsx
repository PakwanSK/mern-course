import { Box, ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";  
import { useColorModeValue } from "./components/ui/color-mode";
import Navbar from "./component/Navbar";
import { ToasterProvider } from "./components/ui/toaster";

function App() {
  return (
    <ChakraProvider>
      <ToasterProvider>
        <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.800")}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </Box>
      </ToasterProvider>
    </ChakraProvider>
  );
}

export default App;
