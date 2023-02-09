import Navigation from './../nav/nav';
import Showcase from '../showcase/showcase';
function Header() {
  return (
    <div>
        <header id='main-header'>
            <Navigation/>
            <Showcase/>
        </header>
    </div>
  );
}

export default Header;

