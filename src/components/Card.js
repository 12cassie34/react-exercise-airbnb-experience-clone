import katieZaferes from "../images/katie-zaferes.png";
import theStar from "../images/star.png";

function TheCard() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card__img__section">
          <div className="card__img__section_condition">sold out</div>
          <img src={katieZaferes} className="card__img__section__img" />
        </div>
        <div className="card__info__section">
          <div className="card__info__section__ranking">
            <img src={theStar} className="card__info__section__ranking__img" />
            <div className="card__info__section__ranking__num">5.0</div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="card__info__section__ranking__comments"
            >
              (6)
            </a>
            <div className="card__info__section__ranking__dots">●</div>
            <div className="card__info__section__ranking__country">USA</div>
          </div>
          <div className="card__info__section__lesson">
            Life lessons with Katie Zaferes
          </div>
          <div className="card__info__section__fee">
            <div className="card__info__section__fee__range">From $136</div>
            <div className="card__info__section__fee__per">&nbsp;/&nbsp;person</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheCard;
