const  listProduct = document.querySelectorAll('.ofertas li')
for (const produto of listProduct) {
    produto.addEventListener('click',function(){
        window.open(`https://api.whatsapp.com/send?phone=5593991234251&text=${produto.textContent}`)
     }
    )
}