import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav
      className={"navbar navbar-expand-lg bg-light w-100" + ` ${navStyles.nav}`}
    >
      <div className={"container-fluid" + ` ${navStyles.containerFluid}`}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="flex-grow-1"></div>
        <Link href="/">
          <a className={"navbar-brand " + ` ${navStyles.navbarBrand}`}>
            <img src="images/logo-mobile.svg" alt="" />
          </a>
        </Link>
        <Link href="/">
          <a className={navStyles.whatsappIcon}>
            <img src="images/whatsapp-icon.svg" alt="" />
          </a>
        </Link>
        <Link href="/">
          <a className={navStyles.phoneIcon}>
            <img src="images/phone-icon.svg" alt="" />
          </a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
