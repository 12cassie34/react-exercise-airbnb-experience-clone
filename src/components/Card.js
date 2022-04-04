import theStar from "../images/star.png";

function TheCard(props) {
  const { title, price, coverImg, stats, location, openSpots } = props.item

  let badgeText
  if(openSpots === 0) {
    badgeText = "sold out"
  } else if(location === "Online") {
    badgeText = "oneline"
  }

  return (
    <div className="card-container">
      <div className="card">
        <div className="card__img__section">
          {badgeText && <div className="card__img__section_condition">{badgeText}</div>}
          <img src={coverImg} className="card__img__section__img" alt={title} />
        </div>
        <div className="card__info__section">
          <div className="card__info__section__ranking">
            <img src={theStar} className="card__info__section__ranking__img" alt="ranking-star" />
            <div className="card__info__section__ranking__num">{stats.rating}</div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="card__info__section__ranking__comments"
            >
              ({stats.reviewCount})
            </a>
            <div className="card__info__section__ranking__dots">●</div>
            <div className="card__info__section__ranking__country">{location}</div>
          </div>
          <div className="card__info__section__lesson">
            {title}
          </div>
          <div className="card__info__section__fee">
            <div className="card__info__section__fee__range">From ${price}</div>
            <div className="card__info__section__fee__per">&nbsp;/&nbsp;person</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheCard;
