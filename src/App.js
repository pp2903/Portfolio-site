import Profile from "./Profile";
import Skills from "./Skills";
import Projects from './ProjectDetails/Projects'
import "./index.css";

const App = () => {
  return (
    <div className="body">
      <Profile />
      
      <Skills />

        <Projects/>
    </div>
  );
};

export default App;
