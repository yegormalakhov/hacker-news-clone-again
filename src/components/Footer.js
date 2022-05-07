function Footer({ handleSearch, searchTerm, onChange }) {
  return (
    <footer className="AppFooter">
      <p className="footerNotice">Applications are open for YC Summer 2022</p>
      <ul className="FooterList">
        <li>
          <a href="#">Guidelines</a>
        </li>

        <li>|</li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>|</li>
        <li>
          <a href="#">Lists</a>
        </li>

        <li>|</li>
        <li>
          <a href="#">API</a>
        </li>

        <li>|</li>
        <li>
          <a href="#">Security</a>
        </li>

        <li>|</li>
        <li>
          <a href="#">Legal</a>
        </li>

        <li>|</li>
        <li>
          <a href="#">Apply to YC</a>
        </li>

        <li>|</li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <form className="Form" onSubmit={handleSearch}>
        Search:
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          size="17"
          onChange={onChange}
        />
      </form>
    </footer>
  );
}

export default Footer;
