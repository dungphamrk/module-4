
import { createPost, displayPosts, searchPosts } from './managerPost.js'
createPost("1", "1", "1");
createPost("2", "2", "2");
createPost("3", "3", "3");
displayPosts();

const searchResult = searchPosts("Author 2");
console.log(searchResult);
