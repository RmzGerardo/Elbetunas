import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer
        className="py-4 mt-5 footer-dark"
        style={{
          background: "#0a1a26",
          color: "#fafafa",
          //   borderTop: "2px solid #00ffe7",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="mb-2">
            <a
              href="https://www.linkedin.com/in/elbetunas/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
              style={{ color: "#00ffe7", fontSize: "1.6rem" }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/RmzGerardo"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
              style={{ color: "#fafafa", fontSize: "1.6rem" }}
            >
              <FaGithub />
            </a>
          </div>
          <small>
            © {new Date().getFullYear()} Elbetunas · Todos los derechos
            reservados
          </small>
        </div>
      </footer>
    </>
  );
};
