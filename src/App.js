import logo from "./logo.svg";
import "./App.css";
import Tilt from "react-parallax-tilt";

function App() {
  return (
    <div className="wrapper">
      <Tilt>
        <div className="card">
          <div id="card__header">
            <div id="header__number">212 555 6342</div>
            <div id="header__company">
              <p id="company__title">Pierce &amp;Pierce</p>
              <p id="company__subtitle">Mergers And Acquisitions</p>
            </div>
          </div>

          <div id="card__body">
            <p id="body__firstname">Mattia&nbsp;</p>
            <p id="body__lastname">Ginoble</p>
            <p id="body__title">UI/UX Designer</p>
          </div>
          <div id="card__footer">
            <a
              id="footer__text"
              href="https://www.icloud.com/iclouddrive/0c8fPEgKi-rx-dB1wjKY3toHQ#CV_Mattia_Ginoble"
            >
              CV
            </a>
            <a
              id="footer__text"
              href="https://www.linkedin.com/in/mattia-ginoble-bb4890239/"
            >
              Linkedin
            </a>
            <a id="footer__text" href="https://github.com/mattiaginoble/">
              GitHub
            </a>
            <a id="footer__text" href="https://dribbble.com/mattiaginoble/">
              Dribble
            </a>
            <a
              id="footer__text"
              href="https://discordapp.com/users/361177612623806467/"
            >
              Discord
            </a>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default App;
