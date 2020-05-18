function paginaCompraCamisa(url){
    location.replace(url)
}
function chama_carro1(){
    document.getElementById('carro-1').style.display="flex"
    document.getElementById('carro-2').style.display="none"
    document.getElementById('carro-3').style.display="none"
    document.getElementById('carro-4').style.display="none"
}
function chama_carro2(){
    document.getElementById('carro-1').style.display="none"
    document.getElementById('carro-2').style.display="flex"
    document.getElementById('carro-3').style.display="none"
    document.getElementById('carro-4').style.display="none"
}

function chama_carro3(){
    document.getElementById('carro-1').style.display="none"
    document.getElementById('carro-2').style.display="none"
    document.getElementById('carro-3').style.display="flex"
    document.getElementById('carro-4').style.display="none"
}
    function chama_carro4(){
    document.getElementById('carro-1').style.display="none"
    document.getElementById('carro-2').style.display="none"
    document.getElementById('carro-3').style.display="none"
    document.getElementById('carro-4').style.display="flex"
}

//-----------------
//Menu moble
function abreMenu(){
    document.getElementById('menu').style.display="block"
    document.getElementById('btn-abre-menu').style.display="none"
    document.getElementById('btn-fecha-menu').style.display="block"
}
function fechaMenu(){
    document.getElementById('menu').style.display="none"
    document.getElementById('btn-abre-menu').style.display="block"
    document.getElementById('btn-fecha-menu').style.display="none"
}
