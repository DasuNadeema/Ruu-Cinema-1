import { Link } from "react-router-dom";
import "../component/Card.css";

interface CardProps {
  key: string;
  imageUrl: string;
  filmName: string;
  runtime: string;
  category: string[];
}

function Card({ key, imageUrl, filmName, runtime, category }: CardProps) {
  return (
    <div className="for-you">
      <div className="box">
        <Link to={`movie/${key}`}>
          <div className="box-img">
            <img src={imageUrl} alt={filmName} />
          </div>
        </Link>
        <h3>{filmName}</h3>
        <span>{runtime}</span>
      </div>
    </div>
  );
}

export default Card;
