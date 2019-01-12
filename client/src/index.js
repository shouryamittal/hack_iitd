import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './navbar';
import Button from './button';
import Sidebar from './sidebar';

class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Sidebar/>
                <Button/>
            </div>
            
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
