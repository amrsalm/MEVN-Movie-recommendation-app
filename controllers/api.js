const Post =require("../models/posts");

module.exports=class api{
    //fetch all posts 
    static async fetchAllPost(req,res){
        try{
            const posts = await Post.find();
            res.status(200).json(posts);

        }
        catch(err){
            res.status(404).json({message : err.message});
        }
    }
    //fetch post by ID 
    static async fetchPostByID(req,res){
    const id = req.params.id;
    try{
        const post= await Post.findById(id);
        res.status(200).json(post);

    }
    catch (err){
        res.status(404).json({message: err.message});
    }
    }
    //create post
    static async createPost(req,res){
        const post = req.body;
        try{
            await Post.create(post);
            res.status(201).json({message:"Post Created Successfully!"})
        }
        catch (err){
            res.status(400).json({message: err.message});
        }
    }
    //update post
    static async updatePost(req,res){
        const id = req.params.id;
        const newPost = req.body;
         try{
            await Post.findByIdAndUpdate(id, newPost);
            res.status(200).json({message: "Post Updated Successfully!"})
         }
         catch(err){
            res.status(404).json({message: err.message});

         }
    }
    //delete post
    static async deletePost(req,res){
        const id = req.params.id;
        try{
            const result = await Post.findByIdAndDelete(id);
            if(result.image != ''){
                try{
                    FileSystem.unlinkSync('./uploads/'+result.image);

                }catch(err){
                    console.log(err);

                }
                

            }
            res.status(200).json({message: 'Post Deleted Successfully!'});

        }
    catch(err){
        res.status(404).json({message: err.message});
    }

    }
};