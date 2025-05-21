import { Link } from "react-router";

function Nav() {
  return (
    <div>
      <div>
        <ul>
          <Link to="home"><li>Home</li></Link>
          <Link to="about"><li>About</li> </Link>
          <Link to="contact"><li>Contact</li> </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
