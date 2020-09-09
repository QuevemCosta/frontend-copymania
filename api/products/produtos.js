const apiUrl = 'http://localhost:3333/api/products?';
const page = 'page='+1;

function listProducts(){
    fetch(apiUrl+page)
    .then(response => response.json())
    .then(data=>{
        const products = data.data
        products.map(function(product){
            const {
                cod,
                img,
                name,
                parcelas,
                status,
                valorAprazo,
				valorAvista

            } = product

            const ProductEle = document.createElement('li');
			const ImageEle = document.createElement('img');
            const NameEle = document.createElement('strong');
            const ValueEle = document.createElement('span');
		 
        
            const NameText = document.createTextNode(name);
            const textValue = document.createTextNode(`A vista ${valorAvista} ou em até ${parcelas} de ${valorAprazo}`);
     
            ProductEle.setAttribute('id',cod);
            ImageEle.setAttribute('src',img);
            ValueEle.appendChild(textValue)
            NameEle.appendChild(NameText)

            ProductEle.appendChild(ImageEle);
			ProductEle.appendChild(NameEle);
            ProductEle.appendChild(ValueEle);
            
            //document.querySelector('#products').appendChild(ProductEle)

        })
    })
} 

listProducts()