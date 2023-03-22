import headshot from './headshot.jfif';
import './App.css';
import { Email } from "react-obfuscate-email";


function App() {
  const emailAddress = "ilyin.ivan@gmail.com";
  return (
    <div className="App">
      <header className="App-header">
        <h2>You have reached the personal website of</h2>
        <h1>Ivan Ilyin</h1>
        <img class="Headshot" src={headshot} alt="headshot of me" />
        <a target="_blank" class="Resume-button" href="/Ivan-Ilyin-Resume-MAR21-webdev.pdf">
          <button>Open my resume</button>
        </a>
        <p>Feel free to contact me at my email: <Email email="ilyin.ivan@gmail.com">ilyin.ivan@gmail.com"</Email></p>
        <p>Or visit my <a class="Main-link" href="https://www.linkedin.com/in/ivan-ilyin">LinkedIn page</a></p>
      </header>
    </div>
  );
}

export default App;
