import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import image from './image.svg';
import './style.scss';

const userNames = ['David', 'John', 'Anna'];

const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout (() => {
      setDebounced(value)
    }, delay);
      return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};

function UserName ({isValid, isLoading, handleChange}) {
  return (
    <div>
      <div className="userName">
        <input
          onChange={handleChange}
          type="email"
          autoComplete="off"
          spellCheck="false"
          className="control"
          placeholder="Имя"
        /> 
        <div className={`spinner ${isLoading ? "loading" : ""}`} />
          <div className= {`validation ${!isValid ? "invalid" : ""}`}>
            Пользователь с таким именем уже зарегистрирован       
          </div>
      </div>
    </div>
  )
}

export default function SignUp () {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid,setIsValid] =useState(false);
  const [username, setUsername] = useState('');

  const debouncedUsername = useDebounce(username, 500);

  const handleChange = e => {
    setIsLoading(true);
    setUsername(e.target.value);
  };

  useEffect(() => {
    setIsValid(!userNames.some(u => u === debouncedUsername))
    setIsLoading(false);
      setIsLoading(false);
  }, [debouncedUsername]);


  return (
    <div>
      <Link to="/portfolio" className="iconArrow">
        <Icon icon="ic:outline-arrow-circle-left"width={46} />
      </Link>
      
      <div className="containerSignUp">
        <img src={image} alt=""/> 
        <h2> Регистрация </h2>
        <form className="form">
          <UserName
            isLoading={isLoading}
            isValid={isValid}
            handleChange={handleChange}
            />
          <input 
          name="password"
          spellCheck="false"
          className="control"
          placeholder="Пароль"
          />
          <button disabled={!isValid} className="control" type="button">
            Присоединяйся
          </button>
        </form>
      </div>
    </div>
  )
};