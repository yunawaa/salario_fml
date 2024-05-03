let calcularbtn = document.querySelector("#calcular");

calcularbtn.addEventListener('click', calcular);

function resposta(salfamilia,nome){
    let resultadoDiv = document.querySelector("#resultado");

    if (salfamilia ==0){
        resultadoDiv.innerHTML = `
    <div id="dados">
    ${nome}, você não tem direito ao salário família!
    </div>    
    ` 

}else{
    resultadoDiv.innerHTML = `
    <div id="dados">
    ${nome}, você tem direito ao salário família!
    O salário família é de R$: ${salfamilia}
    </div>
    
    `
}
}

function calcular(){
    let empregado = document.querySelector("#empregado").value;
    let filhos = Number(document.querySelector("#filhos").value);
    let salario = Number(document.querySelector("#salario").value).toFixed (2);
    let salfamilia = 0;

    if(salario <= 806.80){
        let salfamilia = filhos*41.37;
        resposta(salfamilia,empregado);
    }else if(salario >=806.81 & salario <= 1212.64){
    salfamilia = filhos * 29.16; 
        resposta(salfamilia,empregado);
    }else{
        resposta (salfamilia,empregado);
    }
}
