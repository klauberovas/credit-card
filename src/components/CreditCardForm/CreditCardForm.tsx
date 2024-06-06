import './style.css'
import { useRef, ChangeEvent, useEffect } from 'react'

export const CreditCardForm = (): JSX.Element => {
  const inputRef1 = useRef<HTMLInputElement>(null!)
  const inputRef2 = useRef<HTMLInputElement>(null!)
  const inputRef3 = useRef<HTMLInputElement>(null!)
  const inputRef4 = useRef<HTMLInputElement>(null!)

  const inputRefs = [inputRef1, inputRef2, inputRef3, inputRef4]

  useEffect(() => {
    inputRefs[0].current.focus()
  }, [])

  const handleInput = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const newValue = e.target.value.replace(/\D/g, '')
    e.target.value = newValue

    if (newValue.length >= 4 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus()
    }
  }

  return (
    <div className="card">
      <h3>Zadejte číslo karty:</h3>
      <div className="card-container">
        {inputRefs.map((inputRef, index) => (
          <input
            key={index}
            ref={inputRef}
            onChange={(e) => handleInput(e, index)}
            type="text"
            maxLength={4}
            className="card__input"
          />
        ))}
      </div>
    </div>
  )
}
