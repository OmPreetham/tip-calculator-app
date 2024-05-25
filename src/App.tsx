import { Calculation } from './components/calculation/Calculation'
import { Values } from './components/values/Values'
import { Header } from './components/Header'
import { useState } from 'react'

const App = () => {
  const [tip, setTip] = useState<number>(0)
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0)

  const [reset, setReset] = useState<boolean>(false)

  const handleReset = () => {
    setReset((prev) => !prev)
  }

  return (
    <div className="wrapper">
      <Header />
      <main className="dashboard">
        <Values
          setTip={setTip}
          setTotalPerPerson={setTotalPerPerson}
          onReset={reset}
        />
        <Calculation
          tip={tip}
          totalPerPerson={totalPerPerson}
          onReset={handleReset}
        />
      </main>
    </div>
  )
}
export default App
