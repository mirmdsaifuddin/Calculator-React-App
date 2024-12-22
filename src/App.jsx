import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {

  let [calVal,setCalVal]=useState([""]); 

  const onButtonClick=(buttonText)=>{
    console.log(buttonText)
    if(buttonText==='C')
    {
      setCalVal('');
    }
    else if(buttonText==='=')
      {
        let result=eval(calVal);
        setCalVal(result);
        
    }
    else{
      const newDisplayVal=calVal+buttonText;
      setCalVal(newDisplayVal);
    }
  }


  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
