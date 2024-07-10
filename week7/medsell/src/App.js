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
   <h1>Hello World</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio iusto necessitatibus suscipit odit voluptate id laborum consectetur, velit perferendis omnis rerum fugiat accusamus consequuntur maxime reiciendis provident porro eligendi?</p>
   {/* <ClassComponent/> */}
   {/* <Counter /> */}
   {/* <Timer />
   <CounterFunction />
   <PropsPrac name="Swoyam" surname="Shakya"/>
   <GreetS/>
   <GreetD/> */}
   <ToggleComponent />
   <CounterParentComponent />
   <ParentMessageComponent />
   </>
  );
}

export default App;
