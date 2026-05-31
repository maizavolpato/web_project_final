import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="footer" id="contact">
        <div className="footer__text-box">
          <div className="footer__logo_content">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/logo_white.png?alt=media&token=ea3f498c-f206-4dee-89b1-00bec8d2238a"
              alt="Logo branco"
              className="footer__logo-branco"
            />
            <p className="footer__logo-text">
              Saúde, sabor e bem-estar
              <br />
              para o seu dia-a-dia.
            </p>
          </div>
          <div className="footer__contact">
            <h1 className="footer__contact__title">Contato</h1>

            <p className="footer__contact__text">
              Fale conosco para dúvidas, sugestões ou parcerias.
            </p>

            <div className="footer__contact__info">
              <p>Email: contato@verdevivo.com</p>

              <p>Telefone: +351 912 345 678</p>

              <p>Endereço: Rua Exemplo, 123 - Lisboa, Portugal</p>

              <p>Horário: Seg - Sex, 09h às 18h</p>
            </div>
          </div>
          <div className="footer__social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaWhatsapp />
          </div>
        </div>
        <div className="footer__copy-right">
          &copy; Maiza Volpato dos Santos
        </div>
      </section>
    </>
  );
}
