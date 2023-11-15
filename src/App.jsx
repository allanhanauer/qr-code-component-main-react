import qrCode from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <>
      <header></header>
      <main>
        <img id="qr-code" src={qrCode} alt="qr-code-link" />
        <h1 id="title">Improve your front-end skills by building projects</h1>
        <p id="desc">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </main>
      <footer>
        <p>
          Challenge by{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">AllanHanauer</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
