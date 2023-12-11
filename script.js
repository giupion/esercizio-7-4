document.addEventListener("DOMContentLoaded",()=>{fetch('https://api.pexels.com/v1/search?query=cat', {
        method: 'GET', 
        headers: {
            Authorization: 'UExxqD6b4RT9YsM5yBGe8zz7VjYAa6HWOTFrI0naskFdwAhopQrTLmMD '
        }
    })
    .then(response => response.json())
    .then(jsonresponse => {
    let imgs=document.querySelectorAll('.card img')
    let btnPrimary=document.querySelector(".btn-primary")

    btnPrimary.addEventListener("click",()=>{
       
        imgs.forEach((img,index)=>{
            console.log(jsonresponse.photos);
            img.setAttribute("src",jsonresponse.photos[index].src.original)
            console.log(img);
        })
    })
})
})


    