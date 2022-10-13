<template>
 <header>
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <img src="./assets/Monotone-White.png"/>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li> <router-link to="/indexPost">Creators</router-link></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <span class="navbar-header">Brands</span>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <span class="navbar-header">Download App</span>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li> <router-link to="/indexPost">Learn More</router-link></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
        <li> <router-link to="/home">Support</router-link></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <i class="fi fi-rr-search"></i>
    </ul>
    
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

.navbar {
  padding: 30px;
  box-shadow: 0px 1px 0px rgba(197, 197, 197, 0.25);
}

.navbar-lupa {
width: 16px;
height: 18px;

font-family: 'Font Awesome 5 Free';
font-style: normal;
font-weight: 900;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;

/* Dark Mode/Dark Mode Text */

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 5;
flex-grow: 0;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
