export const Navigation = () => {
  return (
    <div className="top-nav">
      <div className="nav-container">
        <div className="logo">
          <a href="/">
            <img src="https://raw.githubusercontent.com/secularemil34/resim2/main/Group%201478.png" alt="logo" />
          </a>
        </div>
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="nav-item">
              <a href="/" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                SESSIONS
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                OVERVIEW
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                SCHEDULE
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                TEASER
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                UPCOMING EVENTS
              </a>
            </li>
          </ul>
        </nav>
        <div className="mobile-btn">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  );
};
