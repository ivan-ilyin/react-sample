import headshot from './headshot.jfif';
import './App.css';
import { Email } from "react-obfuscate-email";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>You have reached the personal website of</h2>
        <h1>Ivan Ilyin</h1>
        <img class="Headshot" src={headshot} alt="headshot of me" />
        <div>
          <a target="_blank" href="/Ivan-Ilyin-Resume-MAR21-webdev.pdf">
            <button class="Resume-button" >Open my resume</button>
          </a>
        </div>
        <p>Feel free to contact me at my email: <Email class="Inline-link" email="ilyin.ivan@gmail.com">ilyin.ivan@gmail.com</Email></p>
        <p>Or visit my <a target="_blank" class="Inline-link" href="https://www.linkedin.com/in/ivan-ilyin" rel="noreferrer">LinkedIn page</a></p>
      </header>
    </div>
  );
}

export default App;
