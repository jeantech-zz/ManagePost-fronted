<template>
    <div class="title-post">
    <h1>Manage Posts</h1>
    </div>
    <div class="container">
  <div class="row">
    <div class="col-sm">
     <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p class="card-text"></p>
            </div>
        </div>
    </div>
    <div class="col-sm">
      <div class="card" style="width: 18rem;">
           <img class="card-img-top" src="../assets/Illustration.png" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Post Title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis scelerisque arcu. Quisque facilisis aliquet molestie. Aenean convallis commodo augue convallis fringilla. Maecenas fermentum lorem porta ligula consequat dapibus. Phasellus.</p>
                <a href="#" class="btn btn-card">Delete Post</a>
            </div>
        </div>
    </div>
    <div class="col-sm">
      <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/Illustration.png" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Post Title</h5>
                <div class="card-text-div"><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis scelerisque arcu. Quisque facilisis aliquet molestie. Aenean convallis commodo augue convallis fringilla. Maecenas fermentum lorem porta ligula consequat dapibus. Phasellus.</p></div>
                <a href="#" class="btn btn-card">Delete Post</a>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    
}
</script>


<style>
h1 {
   /* Manage Posts */
width: 261px;
height: 32px;

font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 32px;
/* identical to box height, or 80% */

display: flex;
align-items: center;
letter-spacing: -0.019em;

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;



}

.card {
/* Post Card */
/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 20px;

width: 368px;
height: 467.12px;

/* BG | Cards | Outlines/Light Black */
background: #131313;
border-radius: 10px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;

}

.title-post {
    box-shadow: 0px 1px 0px rgba(197, 197, 197, 0.25);
    margin: 0 auto;
}

.btn-card {
/* Text */
width: 94px;
height: 24px;

/* Web/Button Text */

font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;
letter-spacing: 0.04em;
text-transform: capitalize;

/* Buttons/Danger/Default */
color: #DA5959;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}

.card-title {
/* Developer Meetup */
width: 87px;
height: 23px;

/* Web/Body Large */
font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;

/* identical to box height */
letter-spacing: -0.02em;

/* Dark Mode/Dark Mode Text */
color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}

.card-text {
/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
/* Dark Mode/Dark Mode Text */
color: #FFFFFF;

}
</style>
