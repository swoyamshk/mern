import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import ClassComponent from './classComponent';
// import CounterFunction from './components/counter/counterFunction';
import CounterParentComponent from './components/counter/CounterParentComponent';
import ParentMessageComponent from './components/messageComponent/ParentMessageComponent';
// import GreetD from './components/props/greetD';
// import GreetS from './components/props/greetS';
// import PropsPrac from './components/props/PropsPrac';
import ToggleComponent from './components/toggleComponent/toggleComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import HomeComponent from './components/Home/HomeComponent';
//import Counter from './counter';
// import Timer from './timer';
import AboutComponent from './components/About/AboutComponent';
import ShopComponent from './components/Shop/ShopComponent';
import CardComponent from './components/CardComponent/CardComponent';
import TodoApp from './components/ToDoList/TodoApp';

function App() {
  return (
    <>
    <Router>
      <NavbarComponent/>
      <TodoApp/>
      {/* <TodoApp /> */}
    <Routes>
      <Route path ='/' element={<HomeComponent/>}/>
      <Route path ='/shop' element={<ShopComponent/>}/>
      <Route path ='/about' element={<AboutComponent/>}/>

    </Routes>
    </Router>


   {/* <h1 className='mb-5 ml-5'>Hello World</h1> */}
   {/* <ClassComponent/> */}
   {/* <Counter /> */}
   {/* <Timer />
   <CounterFunction />
   <PropsPrac name="Swoyam" surname="Shakya"/>
   <GreetS/>
   <GreetD/> */}
   {/* <ToggleComponent/>
   <CounterParentComponent />
   <ParentMessageComponent /> */}
   </>
  );
}

export default App;
