import Home from "./cmps/Home";
import NavBar from "./cmps/Navbar";
import Expertise from "./cmps/Expertise";
import Services from "./cmps/Services";
import Build from "./Build";
import DefaClient from "./cmps/Clients";
import Defaultvideo from "./cmps/Video";
import Defaultfooter from "./cmps/Footer";
import DefaultFooSeperator from "./cmps/Fseperator";
function App() {
  return (
    <div className="content">
      <NavBar />
      <Home />
      <Expertise />
      <Services />
      <Build />
      <DefaClient />
      <Defaultvideo />
      <DefaultFooSeperator />
      <Defaultfooter />
    </div>
  );
}

export default App;
