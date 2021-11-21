import React, { Component } from 'react'
import axios from 'axios'
import PersonDetails from './PersonDetails'

export default class PersonList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       person: []
    }
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
    .then(res => {
        console.log(res.data.results);
        const persons = res.data.results;
        this.setState({...this.state, person : persons});
    })
}


  render() {
    return (
      <div>
       
       {
         this.state.person.map(p =>(
          <PersonDetails key = {p.uuid} person = {p}/>
         ))
       }
      </div>
    )
  }
}
