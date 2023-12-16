import "../../src/App.css";
import { stack as Menu } from "react-burger-menu";

const MobileNav = () => {
  return (
    <Menu right className="bg-hamburger">
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};

export default MobileNav;
