const form = document.querySelector("#form");
const name_person = document.querySelector("#name");
const section = document.querySelector("#section")

async function BuscarPersonagens(){
    try{
        const response_api = await fetch(`https://rickandmortyapi.com/api/character`)
        const response = await response_api.json()
        
       

        if(response.error){
            alert("ocorreu um error")
        }else{
            
            response.results.forEach((persons) => {
                console.log(persons)
                const card = document.createElement(`div`)
                const name = document.createElement("h2")
                const img = document.createElement("img")

                name.textContent = `Nome : ${persons.name}`
                img.src = persons.image

                card.append(name,img)

                section.appendChild(card)

                


            });
            
            
        }
    }catch(error){
        console.log(`o error é ${error}`)
    }
   
}

BuscarPersonagens()

form.addEventListener("submit" , (e) => {
    e.preventDefault()
    
})