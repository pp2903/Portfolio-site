import Profile from "./Profile";
import Skills from "./Skills";
import Projects from "./ProjectDetails/Projects";
import FeedbackForm from "./FeedbackComp/FeedbackForm";
import "./index.css";
import { createContext } from "react";
import { project_data } from "./ProjectDetails/proj_data";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const AppContext = createContext();

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ project_data }}>
        <div className="body" style={{ padding: "10px" }}>
          <Profile />
          <Skills />
          <Projects />
          <FeedbackForm />
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
