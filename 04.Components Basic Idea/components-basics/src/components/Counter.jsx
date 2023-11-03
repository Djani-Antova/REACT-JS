import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const onIncrementClick = () => {
    //this is an event handler
    // setCount(count + 1)
    setCount((oldValue) => oldValue + 1); //this is more correct
  };

  const clearCounterHandler = (event) => {
    console.log(event);
    setCount(0);
  };

  //   if (count < 0) {
  //     return <h3>Invalid count</h3>;
  //   }

  //   let warning = null;
  //   if (count < 0 ) {
  //     warning = <p>Invalid count!</p>
  //   }

  let message = null;

  switch (count) {
    case 1:
      message = "First blood";
      break;

    case 2:
      message = "Double kill";
      break;

    case 3:
      message = "Triple kill";
      break;

      default:
        message = 'Monster kill'

  }

  return (
    <div>
      <h3>Counter</h3>


      {/* Ternar operator */}
      {count < 0 ? <p>Invalid count!</p> : <p>Valid count!</p>}

      {/* Conditional rendering */}
      {count == 0 && <p>Please start incrementing</p>}

      <h4>{message}</h4>

      <p>Count: {count}</p>

      <button disabled={count < 0} onClick={() => setCount(count - 1)}>-</button>
      <button onClick={clearCounterHandler}>Clear</button>
      <button onClick={onIncrementClick}>+</button>
    </div>
  );
}
