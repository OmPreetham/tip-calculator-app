import { useState, useEffect } from 'react'
import { People } from './People'
import { TipPercentages } from './TipPercentages'
import { Bill } from './Bill'

interface ValuesProps {
  setTip: (tip: number) => void
  setTotalPerPerson: (total: number) => void
  onReset: boolean
}

export function Values({ setTip, setTotalPerPerson, onReset }: ValuesProps) {
  const percentages = [5, 10, 15, 25, 50]

  const [inputAmount, setInputAmount] = useState<string>('')
  const [inputPeople, setInputPeople] = useState<string>('')
  const [selectedTipPercentage, setSelectedTipPercentage] = useState<string>('')

  const calculateTotal = () => {
    const amount = parseFloat(inputAmount)
    const people = parseInt(inputPeople, 10)
    const tipPercentage = parseFloat(selectedTipPercentage)

    if (isNaN(amount) || isNaN(people) || isNaN(tipPercentage) || people <= 0) {
      alert('Please enter valid inputs')
      return
    }

    const calculatedTip = (amount * (tipPercentage / 100)) / people
    console.log(calculatedTip)
    setTip(calculatedTip)
    setTotalPerPerson(Number(((amount + calculatedTip) / people).toFixed(2)))
  }

  useEffect(() => {
    if (inputAmount && inputPeople && selectedTipPercentage) {
      calculateTotal()
    }
  }, [inputAmount, inputPeople, selectedTipPercentage])

  useEffect(() => {
    if (onReset) {
      setInputAmount('')
      setInputPeople('')
      setSelectedTipPercentage('')
      setTip(0)
      setTotalPerPerson(0)
    }
  }, [onReset])

  return (
    <div className="values">
      <Bill inputAmount={inputAmount} setInputAmount={setInputAmount} />
      <TipPercentages
        percentages={percentages}
        selectedTipPercentage={selectedTipPercentage}
        setSelectedTipPercentage={setSelectedTipPercentage}
      />
      <People inputPeople={inputPeople} setInputPeople={setInputPeople} />
    </div>
  )
}
