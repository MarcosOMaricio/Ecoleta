
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

//itens de coleta Aula 3 = 00:24:17

const itensToCollect = document.querySelectorAll(".itens-grid li")

for(const item of itensToCollect){
    item.addEventListener("click", handSelectedItem);
}

function handSelectedItem(event){
    //adcionar ou remover uma class com JS
    const itemLi = event.target


    const itemId = itemLi.dataset.id 
    console.log();
}