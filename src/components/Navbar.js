import logo from "../images/logo.svg";
import { pageLinks } from "../data";
import { socialLinks } from "../data";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*!-- left this comment on purpose -->*/}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li>
                <a key={id} href={href} className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li>
                <a
                  href={href}
                  key={id}
                  rel="noreferrer"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
