import './style.css';
import { useRef, ChangeEvent, MutableRefObject, useEffect } from 'react';

export const CreditCardForm = (): JSX.Element => {
  const inputRef1 = useRef<HTMLInputElement>(null!);
  const inputRef2 = useRef<HTMLInputElement>(null!);
  const inputRef3 = useRef<HTMLInputElement>(null!);
  const inputRef4 = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef1.current.focus();
  }, []);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement>,
    nextRef: MutableRefObject<HTMLInputElement>,
  ): void => {
    if (e.target.value.length >= 4) {
      nextRef.current.focus();
    }
  };

  return (
    <div className="card">
      <h3>Zadejte číslo karty:</h3>
      <div className="card-container">
        <input
          ref={inputRef1}
          onChange={(e) => handleInput(e, inputRef2)}
          type="text"
          maxLength={4}
          className="card__input"
        />
        <input
          ref={inputRef2}
          onChange={(e) => handleInput(e, inputRef3)}
          type="text"
          maxLength={4}
          className="card__input"
        />
        <input
          ref={inputRef3}
          onChange={(e) => handleInput(e, inputRef4)}
          type="text"
          maxLength={4}
          className="card__input"
        />

        <input
          ref={inputRef4}
          onChange={(e) => handleInput(e, inputRef4)}
          type="text"
          maxLength={4}
          className="card__input"
        />
      </div>
    </div>
  );
};
