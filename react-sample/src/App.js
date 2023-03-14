import headshot from './headshot.jfif';
import './App.css';

const emailAddress = "ilyin.ivan@gmail.com";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>You have reached the personal website of</h2>
        <h1>Ivan Ilyin</h1>
        <img src={headshot} alt="headshot of me" />
        <a href="/Ivan-Ilyin-Resume-MAR21-webdev.pdf">
          Open my resume
        </a>
        <p>Please leave a message in <a href="mailto:{emailAddress}">my email</a></p>
        <p>Or visit my <a href="https://www.linkedin.com/in/ivan-ilyin">LinkedIn page</a></p>
      </header>
    </div>
  );
}

export default App;
