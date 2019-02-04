import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'

class App extends Component {
  state = {
    messages: {}
  }

  addMessage = message => {
    const messages = {...this.state.message }
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }
  render () {
    return (
      <div className='box'> 
        <div> 
          <div className="message">
            <Message/>
          </div>
        </div>
       <Formulaire
       addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App
