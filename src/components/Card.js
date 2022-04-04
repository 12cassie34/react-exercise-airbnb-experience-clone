import theStar from "../images/star.png";

function TheCard(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card__img__section">
          <div className="card__img__section_condition">sold out</div>
          <img src={props.coverImg} className="card__img__section__img" alt={props.title} />
        </div>
        <div className="card__info__section">
          <div className="card__info__section__ranking">
            <img src={theStar} className="card__info__section__ranking__img" alt="ranking-star" />
            <div className="card__info__section__ranking__num">{props.rating}</div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="card__info__section__ranking__comments"
            >
              ({props.reviewCount})
            </a>
            <div className="card__info__section__ranking__dots">●</div>
            <div className="card__info__section__ranking__country">{props.location}</div>
          </div>
          <div className="card__info__section__lesson">
            {props.title}
          </div>
          <div className="card__info__section__fee">
            <div className="card__info__section__fee__range">From ${props.price}</div>
            <div className="card__info__section__fee__per">&nbsp;/&nbsp;person</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheCard;
