import headshot from './headshot.jfif';
import './App.css';

const emailAddress = "ilyin.ivan@gmail.com";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>You have reached the personal website of</h2>
        <h1>Ivan Ilyin</h1>
        <img class="Headshot" src={headshot} alt="headshot of me" />
        <a class="Main-link" href="/Ivan-Ilyin-Resume-MAR21-webdev.pdf">
          Open my resume
        </a>
        <p>Please leave a message in <a class="Main-link" href="mailto:{emailAddress}">my email</a></p>
        <p>Or visit my <a class="Main-link" href="https://www.linkedin.com/in/ivan-ilyin">LinkedIn page</a></p>
      </header>
    </div>
  );
}

export default App;
