
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBar } from "./components/NavBar";
import {Banner} from "./components/Banner"
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import Contacts from "./components/Contacts";
import { MailchimpForm } from './components/MailchimpForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacts/>
      <Footer />
    </div>
  );
}

export default App;
