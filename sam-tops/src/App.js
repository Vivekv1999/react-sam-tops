import logo from './logo.svg';
import './App.css';
import ClassComp from './Components/Classcomp';
import ClassProps from './Components/ClassProps';
import CompInCom from './Components/CompInCom';
import ConstructorCom from './Components/ConstructorCom';
import FunctionCom from './Components/FunctionComp/FunctionCom';
import CompInCom1 from './Components/FunctionComp/CompInCom';
import StateMng from './Components/StateMng';
import Onclick from './Events/Onclick';
import OnFormSubmit from './Events/OnFormSubmit';
import Mychild from './Components/Mychild';


function App() {
  return (
    <div className='App'>
{/* <ClassComp/> */}
{/* <ClassProps name="xyyzz" /> */}
{/* <CompInCom /> */}
{/* <ConstructorCom address="vapi"/> */}
{/* <FunctionCom /> */}
{/* <CompInCom1 name="xxyyzz"/> */}
{/* <StateMng /> */}
{/* <Onclick /> */}
{/* <OnFormSubmit /> */}
<Mychild childern="one"> 
  <h1>hello mychild 1...</h1>
  <h1>hello mychild 2...</h1>
  <h1>hello mychild 3...</h1>
</Mychild>


</div>
  );
}

export default App;
