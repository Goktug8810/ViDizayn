export const ServicesItem = ({ name, description, img, img2 }) => {
    return (
        <div className="item-4">
          <div className="services">
            <div className="services-media">
              <div className="services-media-left">
                <img src={img} alt=""  />
              </div>
              <div className="services-media-right">
                <div className="services-title">{name}</div>
                <img src={img2} alt="" />
              </div>
              <div className="contain-4-text">
                <div className="services-content">{description}</div>
              </div>
            </div>
          </div>
        </div>
    
    );
};