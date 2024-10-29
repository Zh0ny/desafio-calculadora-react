import Input from "./Components/input";
import Button from "./Components/button";
import { Container, Content, Row } from "./styles";
import { useState, useEffect } from "react";
const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [result, setResult] = useState("0");
  const [storedNumber, setStoredNumber] = useState("0");
  const [operation, setOperation] = useState("");

  useEffect(() => {
    console.log("Current Number:", currentNumber);
    console.log("Stored Number:", storedNumber);
    console.log("Result:", result);
    console.log("Operation:", operation);
  }, [currentNumber, storedNumber, result, operation]);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setStoredNumber("0");
    setResult("0");
    setOperation("");
  };

  const handleAddNumber = (number) => {
    let tempNumber = (prev) => (currentNumber === "0" ? number : prev + number);
    setCurrentNumber(tempNumber);
    setResult(tempNumber);
  };

  const handleSumNumbers = (equal) => {
    let calcResult = Number(storedNumber) + Number(currentNumber);
    setStoredNumber(calcResult);
    setResult(calcResult);
    setCurrentNumber("0");
    setOperation("+");
  };

  const handleMinusNumbers = (equal) => {
    let calcResult = Number(storedNumber) - Number(currentNumber);
    setStoredNumber(calcResult);
    setResult(calcResult);
    setCurrentNumber("0");
    setOperation("-");
  };

  const handleMultiplyNumbers = (equal) => {
    let calcResult = Number(storedNumber) * Number(currentNumber);
    setStoredNumber(calcResult);
    setResult(calcResult);
    setCurrentNumber("0");
    setOperation("*");
  };

  const handleDivideNumbers = () => {
    if (currentNumber === "0") {
      handleOnClear();
      setResult("ERROR");

      return;
    }
    let calcResult = Number(storedNumber) / Number(currentNumber);
    setStoredNumber(calcResult);
    setResult(calcResult);
    setCurrentNumber("0");
    setOperation("/");
  };

  const handleOperation = (operationSymbol) => {
    if (storedNumber === "0") {
      if (currentNumber !== "0") {
        setStoredNumber(currentNumber);
        setCurrentNumber("0");
        setResult("0");
        setOperation(operationSymbol);
      }
    } else {
      if (currentNumber !== "0") {
        handleEquals(operationSymbol);
        setOperation(operationSymbol);
      } else {
        if (operation === "/") {
          setResult("ERROR");
          setCurrentNumber("0");
          setStoredNumber("0");
          setOperation("");
        }
      }
    }
  };

  const handleEquals = (operationSymbol) => {
    let caseOperation = operation !== "" ? operation : operationSymbol;
    switch (caseOperation) {
      case "+":
        handleSumNumbers();
        break;
      case "-":
        handleMinusNumbers();
        break;
      case "x":
        handleMultiplyNumbers();
        break;
      case "/":
        handleDivideNumbers();
        break;
      default:
        if (operationSymbol !== "") {
          setOperation(operationSymbol);
          handleEquals("");
        }
        break;
    }
  };
  return (
    <Container>
      <Content>
        <Input value={result} />
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="/" onClick={() => handleOperation("/")} />
          <Button label="x" onClick={() => handleOperation("x")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button
            label="-"
            onClick={() => {
              if (currentNumber === "0") {
                handleAddNumber("-1");
                return;
              } else {
                handleAddNumber(`-${currentNumber}`);
              }
              handleOperation("-");
            }}
          />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={() => handleOperation(operation.prev)} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
