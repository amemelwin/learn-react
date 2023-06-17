import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import CounterComponent from "./components/CounterComponent";
const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Amie");
  const [human, setHuman] = useState(null);

  useLayoutEffect(() => {
    console.log("UseLayout EFFECT");
    setHuman({ name: "AarKar", age: 26.5 });
  },[]);

  useEffect(() => {
    console.log("App component is rendering");
    if (human == null) {
      console.log("Set by UseEffect");
      setHuman({ name: "AarKar", age: 26.5 });
    }
  });
  
  const countAction = useCallback((isPlus = true) => {
    if (isPlus) {
      setCounter(counter > 9 ? 10 : counter + 1);
    } else {
      setCounter(counter < 1 ? 0 : counter - 1);
    }
  }, [counter]);
 
  return (
    <div style={{ margin: "auto", width: '50%' ,marginTop:"100px"}}>
      <div>Hello World</div>
      <input onChange={({target:{value}})=>setName(value)} value={name}/>
      <CounterComponent counter={counter} countAction={countAction} />
      {
        human && <div>{human.name} </div>
      }
      {/* <div>{human.name} </div> */}
      {console.log("End of UI")}
    </div>
    
  )
}
export default App;
