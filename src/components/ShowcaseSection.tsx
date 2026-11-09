import { ProductCard } from './ProductCard'
import { StackedCard } from './StackedCard'
import './ShowcaseSection.css'

const PRODUCT_CARDS = [
  {
    index: '01',
    title: 'Сайт и поиск',
    description: 'До 500 000 товаров, поиск за 0,1 с',
  },
  {
    index: '02',
    title: 'Обмен с 1С',
    description: '100 000 товаров за 15–90 секунд',
  },
  {
    index: '03',
    title: 'Оплата и B2B',
    description: 'Средний чек до ×2,2',
  },
  {
    index: '04',
    title: 'Масштабирование',
    description: 'Трафик, повторные продажи, репутация',
  },
] as const

export function ShowcaseSection() {
  return (
    <section className="showcase" aria-label="Что умеет продукт">
      <div className="showcase__inner">
        <div className="showcase__block">
          <header className="section-header">
            <p className="section-header__eyebrow section-header__eyebrow--muted">ВСЕ О ПРОДУКТЕ</p>
            <h2 className="section-header__title">Что умеет ядро Involta.</h2>
            <p className="section-header__sub">Всё самое важное — в быстром доступе</p>
          </header>

          <div className="product-row">
            {PRODUCT_CARDS.map((card) => (
              <ProductCard key={card.index} {...card} />
            ))}
          </div>
        </div>

        <div className="showcase__block showcase__block--solution">
          <header className="section-header section-header--center">
            <p className="section-header__eyebrow section-header__eyebrow--accent">РЕШЕНИЕ</p>
            <h2 className="section-header__title">Сколько вы сохраните с Involta</h2>
            <p className="section-header__sub section-header__sub--soft">
              Сравните модели и посчитайте выгоду для своего оборота.
            </p>
          </header>

          <div className="solution-row">
            <article className="solution-tile" tabIndex={0}>
              <StackedCard
                variant="compare"
                tabs={[
                  { label: 'Маркетплейсы', tone: 'back' },
                  { label: 'Коробка + студии', tone: 'mid' },
                ]}
              />
              <div className="solution-tile__caption">
                <h3 className="solution-tile__title">Сравнение моделей</h3>
                <p className="solution-tile__hint">
                  Расходы Маркетплейсы, коробка и Involta за 12 месяцев
                </p>
              </div>
            </article>

            <article className="solution-tile" tabIndex={0}>
              <StackedCard
                variant="calculator"
                tabs={[
                  { label: 'Доля в свой канал · 25%', tone: 'back' },
                  { label: 'Оборот · 12 млн ₽', tone: 'mid' },
                ]}
              />
              <div className="solution-tile__caption">
                <h3 className="solution-tile__title">Калькулятор выгоды</h3>
                <p className="solution-tile__hint solution-tile__hint--single">
                  Подставьте свой оборот
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
