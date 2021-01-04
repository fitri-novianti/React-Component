import React, { Component } from 'react'
//Conditional Rendering
class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        return this.state.isLoggedIn && <div>Welcome Fitri Novianti</div>

        // return this.state.isLoggedIn? (
        //     <div>Welcome Fitri Novianti</div>
        // ) :(
        //     <div>Welcome Guess</div> 
        // )

        // let message 
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Fitri Novianti</div>
        // }else{
        //     message = <div>Welcome Guess</div>
        // }

        // return <div>{message}</div>
        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Fitri Novianti</div>
        // } else {
        //     return <div>Welcome Guess</div>
        // }
        // return (
        //     <div>
        //        <div>Welcome Fitri Novianti</div>
        //        <div>Welcome Guess</div> 
        //     </div>
        // )
    }
}

export default UserGreeting 