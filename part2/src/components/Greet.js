import React from 'react'

const Greet = props =>{
    const {name, heroName} = props
    return (
   <div>
   <h1> 
        Hello {name} a.k.a {heroName}, Have a nice Day!
    </h1>
    </div>
    )
}
export default Greet