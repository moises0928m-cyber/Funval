/*  let post=document.querySelector("#post")
fetch(`https://jsonplaceholder.typicode.com/posts`).then((repuesta) =>
    repuesta.json()).then((data) => {
        for (let i = 0; i < 10 && data; i++) {
    post.innerHTML+=`
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data[i].id} </h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${data[i].title}</p>
</a>
`
    
}
    })
 
 */
/* fetch(`https://www.demonslayer-api.com/api/v1/characters`).then((respuesta)=>
    respuesta.json()).then((data)=> {
        console.log(data);
        
    } ).catch((error)=>{console.log(error);
    } )
 */