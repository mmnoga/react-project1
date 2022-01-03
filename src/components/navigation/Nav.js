import "./nav.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  return (
    <nav>
      <a className="logo" href="#">
        moja firma
      </a>
      <AnchorLink href="#employees-content">o nas</AnchorLink>
      <AnchorLink href="#offer-content">oferta</AnchorLink>
      <a className="disabled-link" href="#">
        kontakt
      </a>
    </nav>
  );
};

export default Nav;
