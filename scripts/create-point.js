function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states =>{
        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
      
}

populateUFs();



function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateIput = document.querySelector("input[name=state]")

    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateIput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>";
    citySelect.disabled = false;

    fetch(url)
    .then(res => res.json())
    .then(cities =>{
        

        for(const city of cities){
           citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false;
    })

    

}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)



const itensToCollect = document.querySelectorAll(".itens-grid li")

for(const item of itensToCollect){
    item.addEventListener("click", handSelectedItem);
}

const collectedItens = document.querySelector("input[name=itens]")

let selectedItens = []

function handSelectedItem(event){
    //adcionar ou remover uma class com JS
    const itemLi = event.target
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id 
    console.log();

    /*1.verificar se existem itens selecionados
    2.se sim pegar os itens selecionados
    3.se já estiver marcado, tirar da seleção
    4.se não estiver seleiconado, adcionar a seleção
    5.atualizar o campo escondido com os itens selecionados*/

    const jaFoiSelecionado = selectedItens.findIndex((item)=>{
        const acheiItem = item == itemId //true or false
        return acheiItem
    })

    //2
    if(jaFoiSelecionado >= 0){
        //3
        const filteredItens = selectedItens.filter( item => {
            const itemIsDiferent = item != itemI //false
            return false 
        })

        selectedItens = filteredItens
    }else{
        //4
        selectedItens.push(itemId)
    }

    //5
    collectedItens.value = selectedItens
}
