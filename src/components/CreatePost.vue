<template>
    <div class="contariner">
        <div class="card">
            <div class="card-body">
                <div class="form-group-Create">
                <img src="../assets/CreatePost.png">                 
                </div>
                <img class="input-img-spacing" src="../assets/spacing.png">
                <div>
                </div>
                <form v-on:submit.prevent="registerPost">
                    <div class="form-group-title">                      
                      <img class="input-img-title" src="../assets/PostTitle.png"><br/>
                      <input type="text"
                        class="form-control input-text" name="title" v-model="postForm.title" id="title" aria-describedby="helpId" placeholder="title">                    
                    </div>
                    <br/>
                    <div class="form-group-title">
                      <img class="input-img-decrip" src="../assets/Description.png"><br/>
                      <input type="text"
                        class="form-control input-decription" name="description" v-model="postForm.description" id="description" aria-describedby="helpId" placeholder="description">                    
                    </div>
                    <br/>
                    <div class="form-group">  
                        <img class="input-img-updolad" src="../assets/AddImage.png"><br/>
                        <div class="form-group-file">  
                            <div class="form-group-file2">  
                            <input class="form-control form-file"  name="photo" type="file" @change="changeFile"  multiple>    
                            </div> 
                        </div>                                          
                    </div>
                    <div class="spaning-div-hight"></div>
                    <div class="btn-group" role="group" aria-label="">                                                
                        <button type="submit" src="../assets/Discard.png" v-on:click="indexShow()" class="btn btn-card-discard">
                            <img class="card-img-div-discard" src="../assets/Discard.png"><br/>
                        </button>  
                        <div class="spaning-div"></div>
                        <button type="submit" class="btn btn-publish">
                             <img class="card-img-div-publish" src="../assets/publish.png"><br/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            postForm:{},
            photo: null,
            photoFile: ""
        }
    },
    methods:{
        //image upload and preview methods
        changeFile(e){
            const name = e.target.name
            const file = e.target.files[0]

        if (!file.type.includes('image/')) {
                alert('Please select an image file')
                return
            }

            const hasName = ['photo'].includes(name)
            if(hasName && file) this[name] = file
            else console.log('error')
            console.log("ingreo")
            const reader = new FileReader()

            let rawImg;
            reader.onloadend = () => {
            rawImg = reader.result;
            console.log(rawImg);
            this.photoFile = rawImg
            }
            reader.readAsDataURL(file);
    
        },
       
        registerPost(){                    
            console.log(this.photo );
            console.log(this.photoFile );
            console.log(this.postForm);
            var data = {creator:this.postForm.creator, title:this.postForm.title, description:this.postForm.description, photo:this.photoFile}
            fetch('http://127.0.0.1:8000/api/posts', {
                    method:"POST",
                    body:JSON.stringify(data),
                    headers:{"Content-Type":"application/json"}
                }).then(response=>response.json())
                .then((dataResponse=>{
                    console.log(dataResponse);
                   window.location.href='IndexPost'
                }))
                .catch(console.log('fail'))
        },
        indexShow(){
            window.location.href='IndexPost' 
        }
              
    }
}
</script>

<style>
.card-body{
    /* Create Post Modal */


/* Auto layout */
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 29px;

}
.form-group-Create{
    /* Create Post */
width: 521px;
height: 34px;

font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 34px;
display: flex;
align-items: center;
text-align: center;

/* Dark Mode/Dark Mode Text */

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.input-img-spacing{
    /* spacing */
width: 623px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;
}

.input-img-decrip {
     /* Post Title */
width: 60px;
height: 20px;

font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 26px;
display: flex;

/* Dark Mode/Dark Mode Text */
color: #FFFFFF;

/* Inside auto layout */
flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;
}

.input-img-updolad{
         /* Post Title */
width: 70px;
height: 12px;

font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 26px;
display: flex;

/* Dark Mode/Dark Mode Text */
color: #FFFFFF;

/* Inside auto layout */
flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;
}

.input-img-title  {
    /* Post Title */
width: 60px;
height: 13px;

font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;

/* Dark Mode/Dark Mode Text */

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;
}
.input-img-decriptiondecription{
 /* Description */
width: 521px;
height: 18px;

font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;

/* Dark Mode/Dark Mode Text */
color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 5;
align-self: stretch;
flex-grow: 0;
}
.input-text{
    background: #000000;
border-radius: 10px;
}

.input-decription{
background: #000000;
border-radius: 10px;

width: 620px;
height: 120px;
}

.btn-publish{
    /* Button */
/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 253px;
height: 36px;

/* Buttons/Primary/Default */

background: #1DBF4F;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 1;
}

.btn-card-discard{
 /* Button */
box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;

width: 200px;
height: 36px;
padding-right: 20px;

/* Buttons/Danger/Default */
border: 1px solid #DA5959;
border-radius: 4px;
/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;
}

.spaning-div{
   padding-right: 20px; 
}
.spaning-div-hight{
   padding-top: 20px; 
}

.form-group-file{
    /* Frame 153 */
box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 20px;
gap: 10px;

width: 620px;
height: 174px;

border: 2px solid #4A4A4A;
border-radius: 10px;

/* Inside auto layout */
flex: none;
order: 8;
align-self: stretch;
flex-grow: 0;
}

.form-group-file2{
    /* Frame 152 */


box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 30px;
gap: 10px;

width: 481px;
height: 134px;

border: 2px dashed #4A4A4A;
border-radius: 10px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 1;
}

.form-file{
    /*  */


width: 35px;
height: 32px;

font-family: 'Font Awesome 5 Free';
font-style: normal;
font-weight: 900;
font-size: 35px;
line-height: 32px;
/* identical to box height, or 91% */

display: flex;
align-items: center;
text-align: right;
letter-spacing: -0.019em;

/* Dark Mode/Dark Mode Text */

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
background-image: url(../assets/AddImage.png)
}
</style>