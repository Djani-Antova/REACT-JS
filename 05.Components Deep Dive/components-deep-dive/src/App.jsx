import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Starwars from "./Starwars";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("Mount component");
  }, []);

  useEffect(() => {
    // console.log("Update component - numbers");
  }, [numbers]);

  const onClick = () => {
    setNumbers((oldState) => oldState.slice(1));
  };

  return (
    <div>
        <Starwars />
      <h3>Count: {count}</h3>
      <ul className={styles.numberList}>
        {numbers.map((number, index) => (
            <li 
                data-key={index} 
                key={index}
                className={styles.listItem} //or  className={styles['list-Item']} 
            >
                {number * 2}
            </li>)
        )}
      </ul>

      <button onClick={onClick}>Remove</button>
      <button onClick={() => setCount((c) => c + 1)}>+ </button>
    </div>
  );
}

export default App;
