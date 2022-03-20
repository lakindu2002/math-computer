import "./App.css";
import { add, divide, isEven, isOdd, multiply, subtract } from "math-computer";

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="App">
      <div>Number List: {numbers.join(",")}</div>
      <div>Addition: {add(numbers)}</div>
      <div>Subtraction: {subtract(numbers)}</div>
      <div>Multiplication: {multiply(numbers)}</div>
      <div>Division: {divide(numbers)}</div>
      <div>Is 3 Odd: {isOdd(numbers) ? "True" : "False"}</div>
      <div>Is 3 Even: {isEven(numbers) ? "True" : "False"}</div>
    </div>
  );
};

export default App;
