"use strict";
//------------
// interfaces
//------------
const authorOne = { name: 'mario', avatar: '/img/mario.png' };
const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    created_at: new Date(),
    author: authorOne,
};
//----------------------------
// as function argument types
//----------------------------
function createPost(post) {
    console.log(`created post ${post.title} by ${post.author.name}`);
}
// createPost({ title: 'a new post title' })
createPost(newPost);
//-------------
// with arrays
//-------------
let posts = [];
// posts.push({ title: 'some title' })
posts.push(newPost);
