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
import UseState from './Components/Hooks/UseState';
import UseEffect from './Components/Hooks/UseEffect';
import Getinputbox from './self/Getinputbox';
import  V16hideshowtoggle from './self/V16hideshowtoggle';
import  Basicvalidationformv19 from './self/Basicvalidationformv19';
import D from './Components/Hooks/CreateComponent/D';
import UseRef from './Components/Hooks/UseRef';
import Header from './Myapp/Header';
import Home from './Myapp/Home';
import V24componenetdidmount from './self/V24componenetdidmount';



function App() {
  return (
    <>
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
  {/* <Mychild childern="one"> 
    <h1>hello mychild 1...</h1>
    <h1>hello mychild 2...</h1>
    <h1>hello mychild 3...</h1>
    </Mychild>
  */}
 {/* <UseState/> */}
 {/* <UseEffect /> */}
 {/* <D /> */}
 {/* <UseRef /> */}
 <Header />
 <Home />


 {/* <Getinputbox /> */}
 {/* <V16hideshowtoggle /> */}
 {/* <Basicvalidationformv19 /> */}
 {/* <V24componenetdidmount /> */}
 

</div>
  </>
  );
}

export default App;
