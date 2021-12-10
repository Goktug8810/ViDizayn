export const Footer = ({ note }) => {
  return (
    <footer id="footer">
      <div className="container-footer">
        <div id="footer">
          <div id="footer-images">
            <ul>
              <li className="pull-left">
                <img
                  src="https://raw.githubusercontent.com/secularemil34/resim2/main/Group%201478.png"
                  alt="logo"
                />
              </li>
              <li className="pull-right">{note}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
