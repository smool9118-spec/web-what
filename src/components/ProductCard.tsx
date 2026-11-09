import './ProductCard.css'

type ProductCardProps = {
  index: string
  title: string
  description: string
}

export function ProductCard({ index, title, description }: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        className="product-card__bg"
        src="/assets/tile-bg.png"
        alt=""
        draggable={false}
      />
      <img
        className="product-card__curve"
        src="/assets/card-curve.svg"
        alt=""
        draggable={false}
      />
      <div className="product-card__text">
        <p className="product-card__index">{index}</p>
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__desc">{description}</p>
      </div>
      <div className="product-card__bottom">
        <button className="product-card__open" type="button" aria-label={`Подробнее: ${title}`}>
          <img src="/assets/open-modal.svg" width={40} height={40} alt="" />
        </button>
      </div>
    </article>
  )
}
