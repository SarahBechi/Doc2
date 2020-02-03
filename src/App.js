import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'
class App extends Component {
 
  render() { 
    return (<section>
<Header/>
<Main></Main>
<Footer></Footer>
 
</section>
      );
  }
}
 
export default App;