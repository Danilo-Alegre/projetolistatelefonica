let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

const arrContato= []


console.log(btn);

function cadastrar() {
    //códigos
    let nomeInput = document.getElementById('nome').value
    let sobrenomeInput = document.getElementById('sobrenome').value
    let endereçoInput = document.getElementById('endereço').value
    let cepInput = document.getElementById('cep').value
    let dddInput = document.getElementById('ddd').value
    let telefoneInput = document.getElementById('telefone').value
    let celularInput = document.getElementById('celular').value



    const contato = {
        nome: nomeInput,
        sobrenome: sobrenomeInput,
        endereço: endereçoInput,
        cep: cepInput,
        ddd: dddInput,
        telefone: telefoneInput,
        celular: celularInput,
    }

    arrContato.push(contato)

    imprimir()

    console.log(arrContato)

   /* console.log(nome, sobrenome, categoria, peso, altura)*/

    /*div.innerHTML = "NOME: " + nome + "SOBRENOME: " + sobrenome + "CATEGORIA: " + categoria;*/
    /*
    div.innerHTML = `
    <strong>NOME:</strong> ${nome} 
    <strong>SOBRENOME:</strong> ${sobrenome} 
    <strong>CATEGORIA:</strong> ${categoria}
    <strong>IMC:</strong> ${imc} - ${categoriaImc}
    `*/
}



function imprimir(){

    div.innerHTML = ''

    for (let i = 0; i < arrContato.length; i++) {
    
        
 
    div.innerHTML += `

    <tr>
    <th scope="row">${i+1}</th>
    <td>${arrContato[i].nome} ${arrContato[i].sobrenome}</td>
    <td>${arrContato[i].endereço}</td>
    <td>${arrContato[i].cep}</td>
    <td>${arrContato[i].ddd} - ${arrContato[i].telefone}</td>
    <td>${arrContato[i].celular}</td>
    </tr> 

    `
   }

}

btn.addEventListener('click', cadastrar)