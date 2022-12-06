<template>
    <v-container>
      <v-row no-gutters>
          <v-col sm="10" class="mx-auto">
              <v-card class="pa-5">
                  <v-card-title>Edit Post</v-card-title>
                  <v-divider></v-divider>
                 <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                  <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note" :rules="rules">
                  </v-text-field>
                  <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-format-list-text" :rules="rules">
                  </v-text-field>
                  <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-pen" :rules="rules"></v-textarea>
                  Old Image
                  <v-img :src="post.image" width="120"></v-img>
                  <v-text-field v-model="post.newImage"  label="New Image URL"></v-text-field>
                  <v-btn type="submit" class="mt-3" color="yellow">Update Post</v-btn>
                 </v-form>
              </v-card>
          </v-col>
      </v-row>
    </v-container>
  </template>
  <script>
  import API from "../api"
  export default{
      data(){
          return{
              rules:[(value)=>!!value||"This Field is required"],
              post:{
                  title:"",
                  category:"",
                  content:"",
                  image:"",
                newImage:"",
              },
              image:"",
          }
      },
      async created(){
        const response = await API.getPostByID(this.$route.params.id);
        this.post= response;
      },
      methods:{
          
          async updateForm(){
              const formData= new FormData();
              if(this.post.newImage)
              formData.append('image',this.post.newImage);
            
             else
             formData.append('image',this.post.image);
            
              formData.append('title',this.post.title);
              formData.append('category',this.post.category);
              formData.append('content',this.post.content);
              formData.append('old_image',this.post.image);
              if(this.$refs.form.validate()){
                  const response = await API.updatePost(this.$route.params.id, formData);
  
                  this.$router.push({name:'home', params: {message: response.message}});
              }
          }
      }
  }
  </script>