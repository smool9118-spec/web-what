import './StackedCard.css'

export type StackedTab = {
  label: string
  tone: 'back' | 'mid'
}

type StackedCardProps = {
  variant: 'compare' | 'calculator'
  tabs: [StackedTab, StackedTab]
  className?: string
}

export function StackedCard({ variant, tabs, className = '' }: StackedCardProps) {
  return (
    <div className={`stacked-card stacked-card--${variant} ${className}`.trim()}>
      <div className={`stacked-card__tab stacked-card__tab--back stacked-card__tab--${tabs[0].tone}`}>
        <span className="stacked-card__tab-label">{tabs[0].label}</span>
      </div>
      <div className={`stacked-card__tab stacked-card__tab--mid stacked-card__tab--${tabs[1].tone}`}>
        <span className="stacked-card__tab-label">{tabs[1].label}</span>
      </div>

      <div className="stacked-card__front">
        {variant === 'compare' ? (
          <>
            <p className="stacked-card__eyebrow">Реальные расходы моделей за 12 месяцев</p>
            <div className="stacked-card__strips">
              <div className="stacked-card__strip">
                <span className="stacked-card__strip-label stacked-card__strip-label--bold">Involta</span>
                <span className="stacked-card__strip-value">1,2–1,8&nbsp;млн&nbsp;₽</span>
              </div>
              <div className="stacked-card__strip">
                <span className="stacked-card__strip-label">Коробка + студии</span>
                <span className="stacked-card__strip-value">2,5+&nbsp;млн&nbsp;₽</span>
              </div>
              <div className="stacked-card__strip">
                <span className="stacked-card__strip-label">Маркетплейсы</span>
                <span className="stacked-card__strip-value">2,5+&nbsp;млн&nbsp;₽</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="stacked-card__value">
              <p className="stacked-card__eyebrow">Сохраните в месяц с Involta</p>
              <p className="stacked-card__big">+750–900&nbsp;тыс.&nbsp;₽</p>
            </div>
            <div className="stacked-card__strip stacked-card__strip--single">
              <span className="stacked-card__strip-label">Платеж Involta</span>
              <span className="stacked-card__strip-value">125–150&nbsp;тыс.&nbsp;₽</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
