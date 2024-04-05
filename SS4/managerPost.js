
let listPost = [];

const MAXPOST = 5;

const Post = {
    title: "",
    content: "",
    author: ""
};

export function createPost(title, content, author) {
    if (listPost.length < MAXPOST) {
        const newPost = {...Post, title, content, author};
        listPost.push(newPost);
    } else {
        console.log("Danh sách bài viết đã đầy.");
    }
}

export function displayPosts() {
    for (const post of listPost) {
        console.log(`Title: ${post.title}`);
        console.log(`Content: ${post.content}`);
        console.log(`Author: ${post.author}`);
        console.log("-----------------------------");
    }
}

export function searchPosts(keyword) {
    const result = listPost.filter(post =>
        post.title.includes(keyword) || post.content.includes(keyword) || post.author.includes(keyword)
    );
    return result;
}

