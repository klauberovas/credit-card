import './style.css'
import { useRef, ChangeEvent, MutableRefObject, useEffect } from 'react'

export const CreditCardForm = (): JSX.Element => {
  const inputRef1 = useRef<HTMLInputElement>(null!)
  const inputRef2 = useRef<HTMLInputElement>(null!)
  const inputRef3 = useRef<HTMLInputElement>(null!)
  const inputRef4 = useRef<HTMLInputElement>(null!)

  const inputRefs = [inputRef1, inputRef2, inputRef3, inputRef4]

  useEffect(() => {
    inputRefs[0].current.focus()
  })

  const handleInput = (
    e: ChangeEvent<HTMLInputElement>,
    nextRef: MutableRefObject<HTMLInputElement>
  ): void => {
    if (e.target.value.length >= 4) {
      nextRef.current.focus()
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
            onChange={(e) => handleInput(e, inputRefs[index + 1])}
            type="text"
            maxLength={4}
            className="card__input"
          />
        ))}
      </div>
    </div>
  )
}
