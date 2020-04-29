import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      articles:[]
    }
  }
  componentDidMount()
  {
    fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-27&sortBy=publishedAt&apiKey=0862452198de4c9eb58d671919b37b24')
  .then((response) => {
    return response.json();
  })
  .then((myJason) => {
    //console.log(data);
    this.setState({
      articles: myJason.articles
    });
  });
  }
  render(){
    console.log(this.state)
    return (
    <div className="App">
      {
      this.state.articles.map((item,index)=>{
        return(
        <div>
        <h2 style={{textAlign:'left' }}>
        {item.title}
        </h2>
        <a href={item.url}>
          Read More
        </a>
        <b>
          {item.author}
        </b>
          <img src={item.urlToImage} style={{width:'50vv'}}/>
         <p>
          {item.content} 
           </p>   
        </div>
        );
        })}
      
    </div>
  );
  }
}

export default App;
