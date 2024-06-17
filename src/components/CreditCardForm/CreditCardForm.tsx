import './style.css'
import { useRef, ChangeEvent, useEffect } from 'react'

export const CreditCardForm = (): JSX.Element => {
  const ref = useRef<HTMLInputElement[]>([])
  const pushRef = (el: HTMLInputElement) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el)
    }
  }

  useEffect(() => {
    if (ref.current[0]) {
      ref.current[0].focus()
    }
  }, [])

  const handleInput = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const re = new RegExp(/\D/g)
    const newValue = e.target.value.replace(re, '')
    e.target.value = newValue

    if (newValue.length >= 4 && index < ref.current.length - 1) {
      ref.current[index + 1].focus()
    }
  }

  return (
    <div className="card">
      <h3>Zadejte číslo karty:</h3>
      <div className="card-container">
        {Array.from({ length: 4 }).map((_, index) => (
          <input
            key={index}
            ref={pushRef}
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
