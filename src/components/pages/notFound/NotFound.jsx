import { Link } from "react-router-dom";
import Header from "../../header/Header";

function NotFound() {
  return (
    <>
      <header className="header">
        <div className="header__menu">
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/logo.png?alt=media&token=ad64daf8-0fef-4c29-91a2-80a2d08436a9"
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
