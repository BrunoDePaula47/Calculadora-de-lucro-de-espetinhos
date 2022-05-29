// Declaração de variáveis de quantidade

var inputBoiQ = document.getElementById("boi");
var inputPorcoQ = document.getElementById("porco");
var inputMedalhaoQ = document.getElementById("medalhao");
var inputLinguicaQ = document.getElementById("linguica");
var inputFrangoQ = document.getElementById("frango");

// Declaração de variáveis de valor base (custo)

var inputBoiB = document.getElementById("boiB");
var inputPorcoB = document.getElementById("porcoB");
var inputMedalhaoB = document.getElementById("medalhaoB")
var inputLinguicaB = document.getElementById("linguicaB")
var inputFrangoB = document.getElementById("frangoB")

//Declaração de variáveis de preço total (Valor de venda)

var inputBoiP = document.getElementById("boiP");
var inputPorcoP = document.getElementById("porcoP");
var inputMedalhaoP = document.getElementById("medalhaoP");
var inputLinguicaP = document.getElementById("linguicaP");
var inputFrangoP = document.getElementById("frangoP");



 resultado = document.getElementById("resultado");

function calcular(){
    
    // Quantidade 
    let boi = inputBoiQ.value;
    let porco = inputPorcoQ.value;
    let medalhao = inputMedalhaoQ.value;
    let linguica = inputLinguicaQ.value;
    let frango = inputFrangoQ.value;

    //Valor Base (Custo)

    let boiB = inputBoiB.value;
    let porcoB = inputPorcoB.value;
    let medalhaoB = inputMedalhaoB.value;
    let linguicaB = inputLinguicaB.value;
    let frangoB = inputFrangoB.value;

    //Valor preço (venda)

    let boiP = inputBoiP.value;
    let porcoP = inputPorcoP.value;
    let medalhaoP = inputMedalhaoP.value;
    let linguicaP = inputLinguicaP.value;
    let frangoP = inputFrangoP.value;

    //Fazendo os cálculos para apresentar para o usuário.

    let totalQ = Number(boi) + Number(porco) + Number(medalhao) + Number(linguica) + Number(frango);

    let lucroBoi = (boiP - boiB) * boi; 
    let lucroPorco = (porcoP - porcoB) * porco;
    let lucroMedalhao = (medalhaoP - medalhaoB)*medalhao;
    let lucroLinguica = (linguicaP - linguicaB)*linguica;
    let lucroFrango = (frangoP - frangoB)*frango;  
    let lucroTotal = lucroBoi + lucroPorco + lucroMedalhao + lucroLinguica + lucroFrango;

    let gastoBoi = boiB * boi ;
    let gastoPorco = porcoB * porco;
    let gastoMedalhao = medalhaoB * medalhao;
    let gastoLinguica = linguicaB * linguica;
    let gastoFrango = frangoB * frango;
    let gastoTotal = gastoBoi + gastoPorco + gastoMedalhao + gastoLinguica + gastoFrango;

    
    
    let vendaBoi = boi * boiP
    let vendaPorco = porco * porcoP
    let vendaMed = medalhao * medalhaoP
    let vendaLing = linguica * linguicaP
    let vendaFrang = frango * frangoP
    
    let vendido = Number(vendaBoi) + Number(vendaPorco) + Number(vendaMed) + Number(vendaLing) + Number(vendaFrang)
    
   
    //Inserindo os resultados na tela (HTML) do Usuário.
    resultado.innerHTML = `<a class="seta" href="#faturamento">⏬</a>`
    resultado.innerHTML += `<a name="faturamento">`
    resultado.innerHTML += `<h3 class="sombra">Você vendeu: ${totalQ} Espetinhos`
    resultado.innerHTML += `<h4 class="sombra">Faturamento de R$: ${vendido}</h4>`
    resultado.innerHTML += `<h3 class="sombra">GASTOS:</h3>`
   
    if(gastoBoi == 0){
        resultado.innerHTML += ``
    }else{
         resultado.innerHTML += `<p>R$: ${gastoBoi}  Boi</p>`}
    if(gastoPorco == 0){
        resultado.innerHTML += ``
    }else{ 
        resultado.innerHTML += `<p>R$: ${gastoPorco}  Porco</p>`}
    if(gastoMedalhao == 0){
        resultado.innerHTML += ``
    }else{
        resultado.innerHTML += `<p>R$: ${gastoMedalhao} Medalhão</p>`}
    if(gastoLinguica == 0){
        resultado.innerHTML += ``
    }else{
        resultado.innerHTML += `<p>R$: ${gastoLinguica} Linguiça</p>`}
    if(gastoFrango == 0){
        resultado.innerHTML += ``
    }else{
        resultado.innerHTML += `<p>R$: ${gastoFrango} Frango</p>`}

    resultado.innerHTML += `<h4 class="sombra"> TOTAL R$:  ${gastoTotal}</h4>`
    resultado.innerHTML += `<h3 class="sombra">LUCRO:</h3>`
    
    if(lucroBoi == 0){
        resultado.innerHTML+= ``
    }else{
        resultado.innerHTML += `<p>R$ ${lucroBoi} Boi</p>`}
    if(lucroPorco == 0){
        resultado.innerHTML+= ``
    }else{
        resultado.innerHTML += `<p>R$ ${lucroPorco} Porco</p>`}
    if(lucroMedalhao == 0){
        resultado.innerHTML += ``
    }else{
        resultado.innerHTML += `<p>R$ ${lucroMedalhao} Medalhão</p>`}
    if(lucroLinguica == 0){
        resultado.innerHTML += ``
    }else{
        resultado.innerHTML += `<p>R$ ${lucroLinguica} Linguiça</p>`}
    if(lucroFrango == 0){
        resultado.innerHTML += ``
    }else{
        resultado.innerHTML += `<p>R$ ${lucroFrango} Frango</p>`
    }
    resultado.innerHTML += `<h4 class="sombra">TOTAL R$: ${lucroTotal}</h4>`
   
}
