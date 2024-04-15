const App = () => {
  const percentages = [5, 10, 15, 25, 50]

  return (
    <>
      <header className="header">
        <img
          className="header__image"
          src="/images/logo.svg"
          alt="SPLLITTER Logo"
        />
      </header>
      <main className="dashboard">
        <div className="values">
          <div className="values-wrapper">
            <label className="values__label" htmlFor="bill">
              Bill
            </label>
            <input
              className="values__input"
              type="number"
              id="bill"
              name="bill"
              placeholder="0"
            />
          </div>
          <div className="values-wrapper">
            <p className="values__label">Select Tip %</p>
            <ul className="values__list">
              {percentages.map((item, index) => {
                return (
                  <li key={index} className="values__item">
                    <button className="values__percent">{item}%</button>
                  </li>
                )
              })}
              <li className="values__item">
                <input
                  className="values__custom-persent"
                  type="number"
                  id="custom"
                  name="custom"
                  placeholder="Custom"
                  inputMode="numeric"
                />
              </li>
            </ul>
          </div>
          <div className="values-wrapper">
            <label className="values__label" htmlFor="people">
              Number of People
            </label>
            <input
              className="values__input"
              type="text"
              id="people"
              name="people"
              placeholder="0"
            />
          </div>
        </div>
        <div className="calculation">
          <div className="calculation__block-wrapper">
            <div className="calculation__result-wrapper">
              <p className="calculation__name">
                Tip Amount <br />
                <span className="calculation__person">/ person</span>
              </p>
              <p className="calculation__amount">
                <img
                  className="calculation__image"
                  src="/images/icon-dollar.svg"
                  alt="Dollar SVG"
                />
                0.00
              </p>
            </div>
            <div className="calculation__result-wrapper">
              <p className="calculation__name">
                Total <br />
                <span className="calculation__person">/ person</span>
              </p>
              <p className="calculation__amount">
                <img
                  className="calculation__image"
                  src="/images/icon-dollar.svg"
                  alt="Dollar SVG"
                />
                0.00
              </p>
            </div>
          </div>
          <button className="result__reset">Reset</button>
        </div>
      </main>
    </>
  )
}
export default App
