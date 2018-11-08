import React from 'react'

class Header extends React.Component{

  render(){

    return(

      <header id="site-header">

        <div id="grid-container">
          <div id="img-container">
            <a href="#"><img src="http://demo.appcarvers.com/junite/media/com_easysocial/photos/1606/4686/google-logo-icon-png-transparent-background_large.png" /></a>
          </div>

          <nav id="top-nav">
            <ul id="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">Preview</a></li>
              <li><a href="#">Code</a></li>
              <li><a href="#">Demo</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </nav>
        </div>

        <div id="site-head">
          <h1>This is my first website in React!!</h1>
        </div>

      </header>

    )//end of return

  }//end of render

}//end of class

export default Header
