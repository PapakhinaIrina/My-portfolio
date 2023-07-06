import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { Container, Box, Typography, FormControl, Button} from "@mui/material"
import { Input } from "@mui/joy"
import image from "./image.svg"
import { headerHeight } from "../../shared/utils/constants/componentSize"
import { spacing } from "../../shared/utils/constants/spacing"

import "./style.scss"

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
    <Container disableGutters>
      <Box 
        sx={{
          position: "relative"
        }}>
        <Input
          onChange={handleChange}
          type="email"
          placeholder="Имя"
          sx={{
            color: "rgba(95, 65, 32, 0.376)",
            outline: "none",
            width: "100%",
            height: "56px",
            padding: "0 16px",
            border: "0",
            background: "RGB(255 255 255 / 30%)",
            borderRadius: "6px",
            margin: "8px 0",
            fontFamily: "'Dosis', sans-serif",
            textAlign: "left",
            fontSize: "18px",
            transition: "0.4s"
          }}
        /> 
        <Box className={`spinner ${isLoading ? "loading" : ""}`} />
          <Box className= {`validation ${!isValid ? "invalid" : ""}`}>
            Пользователь с таким именем уже зарегистрирован       
          </Box>
        </Box>
    </Container>
  )
}

const SignUp = () => {
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
    <Container
      disableGutters
      sx={{
        height: `calc(100vh - ${headerHeight})`
      }}>
      <Container
        sx={{
          paddingTop: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Box
          sx={{
            position: "absolute",
            top: `calc(${headerHeight}px + ${spacing[3]})`,
            left: "0",
            cursor: "pointer"
          }}>
          <Link to="/portfolio">
            <Icon icon="ic:outline-arrow-circle-left"width={46} color="#777777"/>
          </Link>
        </Box>

        <Box className="containerSignUp"
          sx={{
            width: "400px",
            padding: "40px 30px 32px",
            borderRadius: "8px",
            backgroundColor: "rgb(255, 184, 61)",
            textAlign: "center",
            transition: "0.4s"
          }}>
          <img src={image} alt=""width="190px" padding="5px"/>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              margin: "0 0  30px"
            }}>
            Регистрация
          </Typography>

          <FormControl 
            sx={{
              width: "100%",
              margin: "0",
              display: "grid"
            }}>
            <UserName
              isLoading={isLoading}
              isValid={isValid}
              handleChange={handleChange}
            />
            <Input 
              name="password"
              spellCheck="false"
              placeholder="Пароль"
              sx={{
                color: "rgba(95, 65, 32, 0.376)",
                outline: "none",
                width: "100%",
                height: "56px",
                padding: "0 16px",
                border: "0",
                background: "RGB(255 255 255 / 30%)",
                borderRadius: "6px",
                margin: "8px 0",
                fontFamily: "'Dosis', sans-serif",
                textAlign: "left",
                fontSize: "18px",
                transition: "0.4s"
              }}
            />

            <Button  
              disabled={!isValid} 
              variant="contained"
              sx={{
                cursor: "pointer",
                width: "100%",
                height: "56px",
                padding: "0 16px",
                backgroundColor: "#523815",
                color: "#f7f7f7",
                border: "0",
                fontFamily: "'Dosis', sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
                textAlign: "center",
                letterSpacing: "2px",
                transition: "all 0.375s",
              }}>
                Присоединяйся
            </Button>

          </FormControl>
        </Box>

      </Container>
    </Container>
  )
}
export default SignUp;
