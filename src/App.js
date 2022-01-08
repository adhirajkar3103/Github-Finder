import axios from 'axios';
import React , {Component,Fragment} from 'react'
import { Router, Switch , Route } from 'react-router';
import './App.css';
import Navbar from './components/layout/Navbar';
import Spinner from './components/layout/Spinner';
import Search from './components/users/Search';
import Users from './components/users/Users';

class App extends Component{
  state={
    users:[],
    user:{},
    loading:false
  }

  // async componentDidMount(){
  //   this.setState({loading:true})
  //   const res = await axios.get('https://api.github.com/users')
  //   this.setState({users:res.data,loading:false})
  //   console.log(res.data);
  // }

  searchUsers = async text=>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    this.setState({users:res.data.items,loading:false})
  
  }

  

  clearUsers = () => this.setState({users:[],loading:false})
  
  render(){
  return (
    
    <div className="App">
      <Navbar />
              <div className="container">
                  <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length>0?true:false}/>
                  <Users loading={this.state.loading} users={this.state.users}/>
              </div> 
    </div>
   
  );}
}

export default App;
