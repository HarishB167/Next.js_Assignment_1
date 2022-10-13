import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={"navbar navbar-expand-xl w-100" + ` ${navStyles.nav}`}>
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
        <div
          className={"collapse navbar-collapse " + navStyles.navbarCollapse}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                APPLIANCES CARE
                <img src="/images/down_arrow.svg" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOME CARE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                GADGET CARE
                <img src="/images/down_arrow.svg" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                HANDYMAN
                <img src="/images/down_arrow.svg" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BEAUTY CARE
                <img src="/images/down_arrow.svg" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FITNESS CARE
                <img src="/images/down_arrow.svg" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BUSINESS CARE
                <img src="/images/down_arrow.svg" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ALL SERVICES
                <img src="/images/down_arrow.svg" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOG
                <img src="/images/down_arrow.svg" />
              </a>
            </li>
            <li className={"nav-item " + navStyles.callButtonForFullPage}>
              <div>
                <div>
                  <img src="/images/call_icon.svg" />
                  Service Helpline
                </div>
                <span>782 762 1417</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
