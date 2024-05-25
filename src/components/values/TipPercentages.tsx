export function TipPercentages({
  percentages,
  selectedTipPercentage,
  setSelectedTipPercentage,
}) {
  const handleInputChange = (event) => {
    setSelectedTipPercentage(event?.target.value)
  }

  console.log(selectedTipPercentage)

  return (
    <div className="values-wrapper">
      <p className="values__label">Select Tip %</p>
      <ul className="values__list">
        {percentages.map((item, index) => {
          return (
            <li key={index} className="values__item">
              <button
                value={item}
                className="values__percent"
                onClick={handleInputChange}
              >
                {item}%
              </button>
            </li>
          )
        })}
        <li className="values__item">
          <input
            className="values__input values__input--placeholder"
            type="number"
            id="custom"
            name="custom"
            value={selectedTipPercentage}
            onChange={handleInputChange}
            placeholder="Custom"
            inputMode="numeric"
          />
        </li>
      </ul>
    </div>
  )
}
