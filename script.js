document.addEventListener("DOMContentLoaded",()=>{fetch('https://api.pexels.com/v1/search?query=cat', {
        method: 'GET', 
        headers: {
            Authorization: 'UExxqD6b4RT9YsM5yBGe8zz7VjYAa6HWOTFrI0naskFdwAhopQrTLmMD '
        }
    })
    .then(response => response.json())
    .then(jsonresponse => {
        console.log(jsonresponse) //su photos c'e un array di 15 gatti, immagini
    let imgs=document.querySelectorAll('.card img') //seleziona l'img all'interno della card! <div class="card mb-4 shadow-sm"><img src=""/> che ho messo io... classe card e discendente img
    
    let btnPrimary=document.querySelector(".btn-primary") //selezione il bottone gli metto un event lister "cosi e piu leggibile" al click 
    console.log(jsonresponse.photos)
    btnPrimary.addEventListener("click",()=>{
       
      imgs.forEach((img,index)=>{  //per ogni immagine , metti la funzione con due paramentri value element e key valore, capito? in pratica index è la key a numero
            console.log(jsonresponse.photos);
            img.setAttribute("src",jsonresponse.photos[index].src.portrait) //metti a src l'attributo jsonresponse
            console.log(img);

           
            
        })
    })
})
})

document.addEventListener("DOMContentLoaded",()=>{fetch('https://api.pexels.com/v1/search?query=dog', {
        method: 'GET', 
        headers: {
            Authorization: 'UExxqD6b4RT9YsM5yBGe8zz7VjYAa6HWOTFrI0naskFdwAhopQrTLmMD '
        }
    })
    .then(response => response.json())
    .then(jsonresponse => {
        console.log(jsonresponse) //su photos c'e un array di 15 gatti, immagini
    let imgs=document.querySelectorAll('.card img') //seleziona l'img all'interno della card! <div class="card mb-4 shadow-sm"><img src=""/> che ho messo io... classe card e discendente img
    
    let btnSecondary=document.querySelector(".btn-secondary") //selezione il bottone2 gli metto un event lister "cosi e piu leggibile" al click 
    console.log(jsonresponse.photos)
    btnSecondary.addEventListener("click",()=>{
       
      imgs.forEach((img,index)=>{  //per ogni immagine , metti la funzione con due paramentri value element e key valore, capito? in pratica index è la key a numero
            console.log(jsonresponse.photos);
            img.setAttribute("src",jsonresponse.photos[index].src.portrait) //metti a src l'attributo jsonresponse
            console.log(img);

           
            
        })
    })
})
})