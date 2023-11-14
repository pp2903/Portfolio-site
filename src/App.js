import Profile from "./Profile";
import Skills from "./Skills";

import Projects from './ProjectDetails/Projects'
import "./index.css";
import FeedbackForm from "./FeedbackComp/FeedbackForm";

const App = () => {
  return (
    <div className="body">
      <Profile />
      
      <Skills />

        <Projects/>

        <FeedbackForm/>
    </div>
  );
};

export default App;
