const products = JSON.parse(localStorage.getItem("products")) || [];
let all_products = document.createElement('div');

function deletProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  location.reload();
}

console.log(typeof products);

products.forEach(function(product,index){
  let button=document.createElement('button');
  button.classList.add(...['right','btn']);
  button.innerHTML="Delete";

  button.addEventListener('click',function(e){
    deletProduct(index);
  })

  const paragraph=document.createElement('p')
  paragraph.innerHTML=`${product.name}, ${product.price}`;
  paragraph.appendChild(button);
  all_products.appendChild(paragraph);
})
document.querySelector("#suppliers").appendChild(all_products);

function add() {
  const name = document.querySelector("#name").value;
  suppliers.push(index, name);
}

document.getElementById("btn-add-sup").addEventListener("click", function (e) {
  document.getElementById("frm-container").style.display = "block";
});

document.getElementById("btn-close").addEventListener("click", function (e) {
  document.getElementById("frm-container").style.display = "none";
});

document
  .getElementById("btn-add-action")
  .addEventListener("click", function (e) {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    const product = { name, price };
    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    location.reload();
  });
