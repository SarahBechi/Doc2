import React, { Component } from 'react';//imrc
class Header extends Component { //cc
 
    render() { 
        return ( <header> 
          <img src={"https://www.docplanner.com/img/logo-default-group-en.svg?v=1"}  className="DocplannerLogo"  alt="logo"/>

          <ul className="Menu">

<li><a href="https://www.docplanner.com/about-us"   className="AboutUs" > About Us </a></li>
<li><a href="https://www.docplanner.com/career" > Career </a></li>
<li><a href="">Departments</a></li>

</ul>

</header>

         );
    }
}
 
export default Header;