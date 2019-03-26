import React, { Component } from 'react';
import FotoItem from './FotoItem';


export default class Timeline extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      fotos : []
    }
  }


  componentDidMount()
  {

    fetch("http://localhost:8080/api/public/fotos/alots")
    .then(response => response.json())
    .then(fotos => {
      this.setState({fotos : fotos});
    })

  }


  render(){
      return (
      <div className="fotos container">
        {this.state.fotos.map(foto => {
          return <FotoItem key={foto.id}  foto = {foto} />          
        })}
        
      </div>            
      );
  }
}