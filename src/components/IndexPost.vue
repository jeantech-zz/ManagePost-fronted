<template>
    <div class="title-post">
    <h1>Manage Posts</h1>
    </div>
    <div class="container">
      <div class="row">
      </div>
    
    <table class="table">
      <tbody>        
        <tr rowspan="3">
          <div >
          <div class="card-create" style="width: 23rem;">
                  <div>
                      <img src="../assets/mas.png"><br/>
                      <img src="../assets/Createnew.png" v-on:click="showCreate()"/>                      
                  </div>
              </div>
          </div>
            <td v-for="(post, index) in posts" :key="index">            
              <div >
                <div class="card-show" >
                  <img class="card-img-top" src="../assets/Illustration.png" alt="Card image cap"  v-on:click="editPost(post._id)" >
                  <div class="card-body">
                      <h5 class="card-title">{{post.title}}</h5>
                      <div class="card-text-div"><p class="card-text">{{post.description}}</p></div>    
                      <img  class="card-img-div" src="../assets/Line5.png"><br/>       
                      <button type="submit" src="../assets/Delete.png" v-on:click="deletePost(post._id)" class="btn btn-card-delete">
                       <img class="card-img-div-delete" src="../assets/Delete.png"><br/>
                      </button>                                                            
                  </div>
              </div>
            </div>              
            </td>
        </tr>                
      </tbody>
    </table>       
</div>
</template>

<script>
export default {
  data(){
    return{
      posts:[],
    }
  },
    created: function(){
      this. getPostList();
    },
    methods:{
      deletePost(id){
       fetch('http://127.0.0.1:8000/api/posts/'+id, {
                    method:"DELETE",                    
                    headers:{"Content-Type":"application/json"}
       }).then(response=>response.json())
        .then((dataResponsePost)=>{
          console.log(dataResponsePost)

         /* this.posts=[]
          this.posts=dataResponsePost;*/
          window.location.href='IndexPost'  
         console.log(this.posts)
        })
        .catch(console.log(''))
      },

      getPostList(){
       fetch('http://localhost:8000/api/posts', {
        method:"GET"
       }).then(response=>response.json())
        .then((dataResponsePost)=>{
          console.log(dataResponsePost)

          this.posts=[]
          this.posts=dataResponsePost;
          
         console.log(this.posts)
        })
        .catch(console.log(''))
      },
      showCreate(){
        window.location.href='CreatePost' 
      },
      editPost(id){
        window.location.href='editPost/'+id 
      }
    },
    
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

.btn-card-delete {
/* Button */
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;


width: 328px;
height: 26px;

/* Buttons/Danger/Default */

border: 1px solid #DA5959;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;

}

.card-title {
/* Developer Meetup */
display: flex;
width: 250px;
height: 23px;

/* Web/Body Large */
font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;

/* identical to box height */
letter-spacing: 0.02em;

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

word-wrap:inherit

}

.card-text-div{

width: 328px;
height: 130px;
/* Web/Small */

font-family: 'Arial';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.02em;
align-content: stretch;

/* Dark Mode/Dark Mode Text */

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}

 .btn-card{
  border: 3px solid  #DA5959;
  margin: 1em 0;
  padding: 8%;

/* Web/Button Text */
font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
align-self:flex-start;


/* Buttons/Danger/Default */
color: #DA5959;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
 }

 .card-create{
  /* Post Card */
box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
gap: 20px;

width: 38px;
height: 467px;

background: rgba(255, 255, 255, 0.05);
/* divider and lines gray */

border: 3px dashed #4F4F4F;
border-radius: 10px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 1;
 }
 .card-show{
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

 .card-img-div{
  /* Line 5 */
left: 0%;
right: 0%;

/* BG | Cards | Outlines/Dividers */


 }

 .card-img-div-delete{
  /* Text */
width: 74px;
height: 14px;

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

</style>
