import Button from "../buttons/button";

function Navigation() {
  return (
    <div>
      <nav className="nav-bar">
        <a href="#">
          <img src="../logo.svg" alt="logo" />
        </a>
        <ul className="navigation">
          <li>
            <a href="#" className="nav-link">
              Marketplace
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Farmyard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Roadmap
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Community
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Whitepaper
            </a>
          </li>
        </ul>
        <Button>Start Work</Button>
      </nav>
    </div>
  );
}

export default Navigation;
