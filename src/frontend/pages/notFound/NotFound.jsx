import { Link } from "react-router-dom";
import Header from "../../main/header/Header.jsx";

function NotFound() {
  return (
    <>
      <header className="header">
        <div className="header__menu">
          <Link to="/">
            <img
              src="images/logo/logo.png"
              alt="Logo Verde Vivo"
              className="header__logo"
            />
          </Link>
        </div>
      </header>
      <div className="not-found">
        <h2>Em manutenção</h2>
        <p>
          Desculpe, no momento estamos trabalhando para melhorar sua
          experiência.
        </p>
      </div>
    </>
  );
}

export default NotFound;
