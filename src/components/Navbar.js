import hackernews from "../images/hackernews.png";

function Navbar() {
  return (
    <header>
      <div className="App-header">
        <div className="logoBlock">
          <img className="logo" src={hackernews} alt="logo" />
          <a className="Hacker-news">Hacker News</a>
        </div>
        <div className="navLinsBlock">
          <ul className="Navbar">
            <li>
              <a href="#">new</a>
            </li>
            <li> | </li>
            <li>
              <a href="#">past </a>
            </li>
            <li> | </li>
            <li>
              <a href="#">comments </a>
            </li>
            <li> | </li>
            <li>
              <a href="#">ask </a>
            </li>
            <li> | </li>
            <li>
              <a href="#">show </a>
            </li>
            <li> | </li>
            <li>
              <a href="#">jobs </a>
            </li>
            <li> | </li>
            <li>
              <a href="#">submit</a>
            </li>
          </ul>
          <p className="loginLink">login</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
