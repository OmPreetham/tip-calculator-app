import { ResetButton } from './ResetButton'

interface CalculationProps {
  tip: number
  totalPerPerson: number
  onReset: () => void
}

export function Calculation({
  tip,
  totalPerPerson,
  onReset,
}: CalculationProps) {
  return (
    <div className="calculation">
      <div className="calculation__block-wrapper">
        <div className="calculation__result-wrapper">
          <p className="calculation__name">
            Tip Amount <br />
            <span className="calculation__person">/ person</span>
          </p>
          <p className="calculation__amount">${tip.toFixed(2)}</p>
        </div>
        <div className="calculation__result-wrapper">
          <p className="calculation__name">
            Total <br />
            <span className="calculation__person">/ person</span>
          </p>
          <p className="calculation__amount">
            ${Number(totalPerPerson).toFixed(2)}
          </p>
        </div>
      </div>
      <ResetButton onReset={onReset} />
    </div>
  )
}
