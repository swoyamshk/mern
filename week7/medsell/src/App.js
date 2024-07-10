import './App.css';
// import ClassComponent from './classComponent';
// import CounterFunction from './components/counter/counterFunction';
import CounterParentComponent from './components/counter/CounterParentComponent';
import ParentMessageComponent from './components/messageComponent/ParentMessageComponent';
// import GreetD from './components/props/greetD';
// import GreetS from './components/props/greetS';
// import PropsPrac from './components/props/PropsPrac';
import ToggleComponent from './components/toggleComponent/toggleComponent';
//import Counter from './counter';
// import Timer from './timer';

function App() {
  return (
    <>
   <h1 className='mb-5 ml-5'>Hello World</h1>
   {/* <ClassComponent/> */}
   {/* <Counter /> */}
   {/* <Timer />
   <CounterFunction />
   <PropsPrac name="Swoyam" surname="Shakya"/>
   <GreetS/>
   <GreetD/> */}
   <ToggleComponent/>
   <CounterParentComponent />
   <ParentMessageComponent />
   </>
  );
}

export default App;
