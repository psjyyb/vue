async function callApi(){
   let post = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then(resolve=>resolve.json())
                    console.log(post.title);
    console.log('동기식');
}


callApi();
