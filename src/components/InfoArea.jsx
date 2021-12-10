export const InfoArea = ({ title, description}) => {
    return (
        <section className="contain-3">
            <div className="info-area">
                <h3 align="center">{title}</h3>
                <div className="info-area-desc">
                {description}
                </div>
                <div className="rod" />
            </div>
        </section>

    );
};
    