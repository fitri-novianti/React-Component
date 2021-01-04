import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'



class App extends Component {
  render (){
    return (
      <div className= "App">
        {/*<UserGreeting />*/}
        <NameList />
        {/*<EventBind />*/}
        {/*<FunctionClick />*/}
        {/*<ClassClick />*/}
        {/* <Counter />*/}
        {/*<Message />*/}
        {/*<Greet name="Fitri" heroName="Wonder Woman">
        <p>This is a children props</p>
        </Greet>
        <Greet name="Mutia" heroName="Black Widow">
        <button>Action</button>
        </Greet>*/}
        {/*<Greet name="Anti" heroName="Captain America"/>*/}
        {/*<Welcome name="FitriNovianti" heroName="Ant Man" />*/}
        {/*<Hello />*/}
      </div>  
    )
  }
}
export default App
