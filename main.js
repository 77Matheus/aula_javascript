function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
   window.open("http://gabsferreira.com/criando-e-enviando-arquivos-para-seu-repositorio-no-github/")
   //window.location.href="http://gabsferreira.com/criando-e-enviando-arquivos-para-seu-repositorio-no-github/";     
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML="Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
    elemento.innerHTML="Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log (elemento.value);
}





/*function soma(n1, n2){
    return n1 + n2;
}



/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
         validar= true
    }else{
        validar= false
    }
    return validar;
}

var idade= prompt("Qual é a sua idade ?");
console.log(validaIdade(idade));
*/


//alert(soma(5, 10));

/*
var d = new Date();
alert(d.getUTCDay());
alert(d.getMonth());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/


/*var count = 0;
while (count <= 5){
    console.log(count);
    count++;
    alert(count);
}



/*
var idade= prompt("qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade;")
};
*/

//var frutas = [{nome:"maça" , cor: "vermelha"}, {nome:"uva" , cor: "roxo"}]
//console.log(frutas);
//alert(frutas[1].nome);




/*var fruta = {nome:"maça" , cor: "vermelha"}
console.log(fruta);
alert(fruta.cor);
*/




//alert (name + " tem " + idade + " anos");
//var name = " Matheus Ramos";
//var idade = 25;
//var idade2 = 10;
//alert (idade+idade2);
//console.log(name);
//console.log(idade);
//console.log(idade2);

//var lista = ["maçã" , "pêra" , "laranja"];
//console.log(lista[1]);
//alert(lista[1]);
//lista.push("uva")
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));