const blogs = [
    {name: "NodeJS", postDescription: "Async-Await"},
    {name: "CSS", postDescription: "Position"},
    {name: "React", postDescription: "Props"}
];

const listPosts = () => {
    blogs.map((post) => {
        console.log(post.name);
    })
};

    const addPost = (newPost) => {
        console.log("Postlar Yükleniyor...")
        const promise =  new Promise((resolve,reject) => {
            blogs.push(newPost);
            resolve(blogs);
            // reject("Blog Eklenirken bir hata oluştu.");
        })
        return promise;
    }


    async function showBlogs(){
        try{
            await addPost({name: "HTML", postDescription: "Semantic Code"});
            listPosts();
            setTimeout(() => {
                console.log("Postlar Yüklendi...")
            }, 3000);
            
        }
        catch(err){
            console.log(err);
        }
    }

    showBlogs()
