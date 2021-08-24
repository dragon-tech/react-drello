import * as React from "react";
import { ChakraProvider, CSSReset, Box, theme } from "@chakra-ui/react";
import backgroundImage from "images/app-root-background.jpg";
import Header from "component/Header";
import KanbanStack from "component/Kanban/KanbanStack";

const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box
      backgroundImage = {`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="50%"
      height="100vh"
      position="relative"
    >
      <Header />
      <KanbanStack />
    </Box>
  </ChakraProvider>
);

export default App;

