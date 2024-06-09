document.getElementById('add-product').addEventListener('click', function() {
    const productName = document.getElementById('product-name').value.trim();
    const nameGuest = document.getElementById('name-guest').value.trim();

    if (productName && nameGuest) {
        const productList = document.getElementById('product-list');
        const existingProducts = Array.from(productList.getElementsByTagName('li'));

        const isProductDuplicate = existingProducts.some(product => {
            return product.querySelector('.product-name').textContent === productName;
        });

        if (!isProductDuplicate) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="product-name">${productName}</span> - 
                <span class="name-guest">${nameGuest}</span>
             <button class="edit button-edit">Editar</button>
             <button class="delete button-remove">Remover</button>
            `;

            productList.appendChild(listItem);
            document.getElementById('product-name').value = '';
            document.getElementById('name-guest').value = '';
        } else {
            alert('O produto já está na lista.');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('product-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        const listItem = e.target.parentNode;
        listItem.remove();
    } else if (e.target.classList.contains('edit')) {
        const listItem = e.target.parentNode;
        const productName = listItem.querySelector('.product-name').textContent;
        const nameGuest = listItem.querySelector('.name-guest').textContent;

        document.getElementById('product-name').value = productName;
        document.getElementById('name-guest').value = nameGuest;

        listItem.remove();
    }
});
