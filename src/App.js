import Profile from "./Profile";
import Skills from "./Skills";
import Projects from "./ProjectDetails/Projects";
import FeedbackForm from "./FeedbackComp/FeedbackForm";
import "./index.css";
import { createContext } from "react";
import { project_data } from "./ProjectDetails/proj_data";

export const AppContext = createContext();

const App = () => {
  return (
    <AppContext.Provider value={{ project_data }}>
      <div className="body">
        <Profile />

        <Skills />

        <Projects />

        <FeedbackForm />
      </div>
    </AppContext.Provider>
  );
};

export default App;
