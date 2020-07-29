import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class App extends Component {
  state = {
    greeting: "Hi",
    name: "World"
  }
  onGreetingHandler = () => {
    this.setState({greeting: "Good Morning"})
  }
  onNameHandler = () => {
    this.setState({name: "Juniors"})
  }

  render() {
    return (
      <Container text>
         <div>
     
        <Header as='h1'
        
             style={{
              fontSize: '4em',
              fontWeight: 'bold',
              marginBottom: '2em',
              marginTop: '3em',
            }}
         >{this.state.greeting}{this.state.name}</Header>
     
        </div>
    
         <Button primary size='huge' 
         onClick={this.onGreetingHandler}>
           Click me first!
           <Icon name='right arrow' />
           </Button>
         <Button primary size='huge' 
         onClick={this.onNameHandler}>
           Click me then!
           <Icon name='right arrow' />
           </Button>
      </Container>
    );
  }
}

export default App;