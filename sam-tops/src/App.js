import logo from './logo.svg';
import './App.css';
import ClassComp from './Components/Classcomp';
import ClassProps from './Components/ClassProps';
import CompInCom from './Components/CompInCom';
import ConstructorCom from './Components/ConstructorCom';
import FunctionCom from './Components/FunctionComp/FunctionCom';
import CompInCom1 from './Components/FunctionComp/CompInCom';
import StateMng from './Components/StateMng';


function App() {
  return (
    <div className='App'>
{/* <ClassComp/> */}
{/* <ClassProps name="xyyzz" /> */}
{/* <CompInCom /> */}
{/* <ConstructorCom address="vapi"/> */}
{/* <FunctionCom /> */}
{/* <CompInCom1 name="xxyyzz"/> */}
<StateMng />


</div>
  );
}

export default App;
