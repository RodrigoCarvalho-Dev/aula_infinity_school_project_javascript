const form = document.querySelector("#form")
const CEP = document.querySelector("#CEP")
const main = document.querySelector("#main")


async function buscarCEP(){
    try{
        const resposta = await fetch(`https://viacep.com.br/ws/${CEP.value}/json/`)
        const dados = await resposta.json()
        console.log(dados)

        const section = document.createElement("section") 
        const text = document.createElement("p")
        const text_2 = document.createElement("p")
        const text_3 = document.createElement("p")
        const text_4 = document.createElement("p")
        const text_5 = document.createElement("p")

        if(dados.erro){
            text.textContent = `Endereço é inválido`
            text_2.textContent = `localidade é inválido`
            text_3.textContent = `só deus sabe é inválido`
            text_4.textContent = `localidade é invalido`
            text_5.textContent = `ibge é inválido`
        }else{
            text.textContent = `Endereço é ${dados.logradouro}`
            text_2.textContent = `localidade é ${dados.localidade}`
            text_3.textContent = `só deus sabe é ${dados.siafi}`
            text_4.textContent = `localidade é ${dados.uf}`
            text_5.textContent = `ibge é ${dados.ibge}`
        }
    
    
   
    
    
    section.append(text,text_2,text_3,text_4,text_5)
    
    main.appendChild(section)
    
    CEP.value = ""
    CEP.focus()
    }catch(error){
        
        console.log(`ocorreu o erro ${error}`)
    }
  

}  





form.addEventListener("submit" , (e) => {
e.preventDefault()
buscarCEP()
})
