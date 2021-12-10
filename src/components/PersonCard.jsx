export const PersonCard = ({ name, description, buttonText, img }) => {
  return (
    
    <div className="containers">
      <div className="banner-img"></div>
      <img src={img} alt="profile" className="profile-img" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
      <button className="btn-person">{buttonText}</button>
    </div>
  );
};
