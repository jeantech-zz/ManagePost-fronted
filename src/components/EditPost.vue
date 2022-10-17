<template>
    <div class="contariner">
        <div class="card">
            <div class="card-body">
                <form v-on:submit.prevent="editPost">
                    <div class="form-group">
                      <label for="creator">Creator</label>
                      <input type="text"
                        class="form-control" name="creator" v-model="postForm.creator" id="creator" aria-describedby="helpId" placeholder="creator">
                      <small id="helpId" class="form-text text-muted">Input creator</small>
                    </div>
                    <div class="form-group">
                      <label for="title">Title</label>
                      <input type="text"
                        class="form-control" name="title" v-model="postForm.title" id="title" aria-describedby="helpId" placeholder="title">
                      <small id="helpId" class="form-text text-muted">Input title</small>
                    </div>
                    <div class="form-group">
                      <label for="description">Description</label>
                      <input type="text"
                        class="form-control" name="description" v-model="postForm.description" id="description" aria-describedby="helpId" placeholder="description">
                      <small id="helpId" class="form-text text-muted">Input description</small>
                    </div>
                    <div class="form-group">
                       <div class="mb-3">
                        <label for="formFile" class="form-label">Upload photo:</label>
                        <input class="form-control"  name="photo" type="file" @change="changeFile">
                        </div>                        
                    </div>
                    <div class="btn-group" role="group" aria-label="">                        
                        <router-link :to="{name:'indexPost'}" class="btn btn-primary">Discar</router-link>
                        <button type="submit" class="btn btn-primary">Publish</button>
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
            photoFile: "",
            idPost:"",
            idOldPhoto:""
        }
    },
    created:function(){
        this.showPost()
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
        showPost(){            
            fetch('http://127.0.0.1:8000/api/postShow/'+this.$route.params.id, {
                        method:"GET",                    
                        headers:{"Content-Type":"application/json"}
        }).then(response=>response.json())
            .then((dataResponsePost)=>{
                this.postForm=dataResponsePost;
                this.idPost = dataResponsePost._id
                this.idOldPhoto = dataResponsePost.photo
                console.log(dataResponsePost)
                console.log( this.postForm)
                console.log( this.idPost)
            })
            .catch(console.log(''))
        },
        editPost(){                    
            if (this.photoFile==null  || this.photoFile=="" ) {
                this.photoFile=this.idOldPhoto
            }

            var data = {creator:this.postForm.creator, title:this.postForm.title, description:this.postForm.description, photo:this.photoFile}
            fetch('http://localhost:8000/api/posts/'+this.idPost, {
                    method:"PUT",
                    body:JSON.stringify(data),
                    headers:{"Content-Type":"application/json"}
                }).then(response=>response.json())
                .then((dataResponse=>{
                
                    console.log(dataResponse);
                     window.location.href='IndexPost'  
                }))
                .catch(console.log(''))
        }
              
    }
}
</script>