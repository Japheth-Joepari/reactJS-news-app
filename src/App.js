import React, { Component } from 'react';
import Home from './components/Home'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=ng&apiKey=cd14e64e5ed84b1e8d15f944d3744eb9')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
     articles: myJson.articles
    })
  });
  }
  render() {
    console.log(this.state.articles, 'art')
    return (
      <div className="news">
      <div className='cl'>
       <Home />
       {this.state.articles.map((item, index)=> {
        return ( 
          <div className='contents'>
          <h2>
           {item.title}
         </h2>
         <img src={item.urlToImage}></img>
        <p>{item.description}</p>
        <a href={item.url}>Read More</a>
          </div>
          
         )
          
       })}
       </div>
      </div>
    );
  }
}

export default App;
