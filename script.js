const input = document.querySelector('input')
const lista = document.querySelector('tbody')
let itens //Vai armazenar os itens no banco
let id // vai armazenar  a index exemplo
function clicou() {
    let newli = document.createElement('tr')
    newli.innerHTML = ` <tr>
    <td>${input.value}</td>      
    <td class="acao "><input type="checkbox" name="" id=""></td>
    <td class="acao "><button onclick="deleteRow(this.parentNode.parentNode.rowIndex)"><i class='bx bx-trash excluir'></i></button></td><tr>`
    lista.appendChild(newli)
    input.value = ''
}
input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        let newtr = document.createElement('tr')
        newtr.innerHTML = `
        <tr>
        <td>${input.value}</td>
        <td class="acao "><input type="checkbox" name="" onchange="box()"></td>
        <td class="acao "><button onclick="deleteRow(this.parentNode.parentNode.rowIndex)"><i class='bx bx-trash excluir'></i></button></td>
        <tr>
        `
        lista.appendChild(newtr)
        input.value = ''
    }
})
function deleteRow(i) {
    document.getElementById('myTable').deleteRow(i)
}

// function box(e) {
//     let inpu = document.querySelector('input[type=checkbox]')
//     if (document.querySelector('input[type=checkbox]').checked == true) {
//         document.querySelector('td').style.textDecoration = 'line-through'
//         document.querySelector('td').style.fontWeight = 'bold'
//         document.querySelector('td').style.fontStyle = 'italic'
//     }
//     else {
//         document.querySelector('td').style.textDecoration = 'none'
//         document.querySelector('td').style.fontWeight = ''
//         document.querySelector('td').style.fontStyle = ''
//     }
// }


// function clicou(){
//     const input = document.querySelector('input')
//     const botao = document.querySelector('.botao')

//     if(input.getAttribute('type') == 'text'){
//         input.setAttribute('type', 'password')
//         botao.innerHTML = "Mostrar Senha"
//     }else{
//         input.setAttribute('type', 'text')
//         botao.innerHTML = "Esconder Senha"
//     }('li)


// }

