function loadApi(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => display(data))
}
function display(posts){
    const postE = document.getElementById('postConatiner')

    for(const post of posts){
    const postdiv = document.createElement('div');
    console.log(post)
    postdiv.innerHTML = `
        <h4>User - ${post.userId}</h4>
        <h4>id - ${post.id}</h4>
        <h5> post:${post.body}</h5>
        <p> Post description - ${post.title}</p>
    `;
   postE.appendChild(postdiv);
}


}
loadApi();