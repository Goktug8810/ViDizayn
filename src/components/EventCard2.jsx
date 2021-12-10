export const EventCard2 = ({ title, description, buttonText, name }) => {
    return (
        <div className="card">
            <div className="card-title">
            {title}
            </div>
            <div className="card-desc">
              <p>{description}</p>
              <hr style={{marginTop: '6px'}} />
              <div className="author">{name}</div>
              <div className="butonlar">
              <button className="card-buton2">{buttonText}</button>
              </div>
            </div>
          </div>


    );
};