import Profile from "./Profile";
import Skills from "./Skills";
import Projects from "./ProjectDetails/Projects";
import FeedbackForm from "./FeedbackComp/FeedbackForm";
import "./index.css";
import { createContext } from "react";
import { project_data } from "./ProjectDetails/proj_data";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    
   
  },
});
export const AppContext = createContext();

const App = () => {
  return (
    <AppContext.Provider value={{ project_data }}>
      <ThemeProvider theme={theme}>
        <div className="body" style={{ padding: "10px" }}>
          <Profile />

          <Skills />

          <Projects />

          <FeedbackForm />
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
