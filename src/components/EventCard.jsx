export const EventCard = ({ title, description, buttonText, buttonText2, name }) => {
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
                <button className="card-buton-reg">{buttonText}</button>
                <button className="card-buton">{buttonText2}</button>
              </div>
            </div>
          </div>
          
    );
};