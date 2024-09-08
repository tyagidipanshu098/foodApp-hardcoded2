const Card = ({ info }) => {


    return (

        <div className="card">
            <div className="img-container">
                <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info.cloudinaryImageId} alt="card image" />
            </div>
            <div className="img-des">
                <h3 className="name">{info.name}</h3>
                <p>Price: {info.costForTwo}</p>
                <p className="cuisines">{info.cuisines.join(", ")}</p>
                <p>Area: {info.locality}</p>
                <p>Ratings: {info.avgRating}</p>
            </div>
        </div>
    );
};
export default Card;