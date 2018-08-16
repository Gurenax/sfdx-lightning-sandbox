import React, { Component } from 'react'

class App extends Component {
  state = {
    contacts: []
  }

  _handleSearch = searchValue => {
    // this.setState({
    //   searchKey: searchValue
    // })

    this.props.service.findByName(searchValue, data => this.setState({contacts: data}))
  }

  componentDidMount() {
    this.props.service.findAll(data => this.setState({contacts: data}))
  }

  render() {
    const { contacts } = this.state
    console.log('contacts: ', contacts)
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React + Lightning with Apex Controller</h1>
        </header>
        <input type="text" onChange={event => this._handleSearch(event.target.value)}/>
        
        <ul>
          {
            contacts.map(contact => (
              <li key={contact.Id}>{contact.Name}</li>
            ))
          }
        </ul>
        
        
      </div>
    )
  }
}

export default App