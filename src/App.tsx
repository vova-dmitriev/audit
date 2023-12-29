import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientsPage from "@/pages/ClientsPage";
import ProjectsPage from "@/pages/ProjectsPage";
import FeedbackPage from "@/pages/FeedbackPage";
import Header from "@/components/Header";
import { PUBLIC_ROUTES } from "./routes";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <CSSReset />

      <Router>
        <Header />
        <Routes>
          <Route path={PUBLIC_ROUTES.HOME} element={<ClientsPage />} />
          <Route path={PUBLIC_ROUTES.CLIENT} element={<ProjectsPage />} />
          <Route path={PUBLIC_ROUTES.PROJECT} element={<FeedbackPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
