import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class PostService {
    constructor(){

    }

    async listPost(id: string, title: string){
        try{
            if(id){
              const post = await prisma.post.findUnique({
                where: {
                    id
                }
              });
              return post
            }
        }catch(eror){
            console.log(eror);
            return null;
        }
    }

    async createPost(post: Prisma.PostCreateInput){
        try{
            const newpost = await prisma.post.create({
                data: post
            })
            return newpost;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updatePost(id: string, post: Prisma.PostUpdateInput){
        try{
            const updatePost = await prisma.post.update({
                where: {
                    id
                },
                data: post
            });
            return updatePost;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deletePost(){
        try{
            const deletedUser = await prisma.post.delete({
                where: {
                    id
                }
            });
            return deletedUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}