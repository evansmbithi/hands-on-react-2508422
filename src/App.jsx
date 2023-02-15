import React, { Component } from 'react'

class Welcome extends React.Component{
  constructor(props){
    super(props)
  }

  render (){
    return <h1>Component {this.props.name}</h1>
  }
}

const WelcomeHook = (props) => {
  return <h1>Hook {props.name}</h1>
}

function App() {
  const stingoz = {
    color:'#354673',
    textTransform: 'uppercase',
    textDecoration: 'underline'
  }
  return (
    <div className="container">
      <article>
        <hgroup>
          <Welcome name="Evans"/>
          <WelcomeHook name="rocks"/>
          <img src="images/aneirin_tn.svg" alt="" />
          <h1 style={stingoz}>Meet the StarGazers</h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button onClick={()=> alert('You cliked me')}>click me</button>
        </hgroup>
      </article>      
    </div>
    
  )
}
export default App
