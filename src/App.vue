<template>
 <header>
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <img src="./assets/Monotone-White.png"/>
    </div>
    <ul class="nav navbar-nav navbar-right">
       <span class="navbar-header">Creators</span>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <span class="navbar-header">Brands</span>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <span class="navbar-header">Download App</span>
    </ul>
    <ul class="nav navbar-nav navbar-right">
       <li> <span class="navbar-header">Learn More</span></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
        <li> <span class="navbar-header">Support</span></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
        <li> <img src="./assets/lupa.png"/></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
        <li><img src="./assets/bell.png"/>
        <img src="./assets/Ellipse2.png"/></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
        <li><img src="./assets/Ellipse1.png"/>
        <img src="./assets/chevron-down.png"/></li>
       
    </ul>
  </div>
  </nav>
 </header> 
<router-view/>
</template>

<style>
body {
margin: 0 auto;
width: 1450px;
height: 75px;
/* Dark Mode/Lighter Card */
background: #000000;

}
a:link {
  text-decoration: none;
}

.navbar {
  padding: 30px;
  box-shadow: 0px 1px 0px rgba(197, 197, 197, 0.25);
}

.navbar {

font-family: 'Arial';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

/* Dark Mode/Dark Mode Text */

color: #FFFFFF;


}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
