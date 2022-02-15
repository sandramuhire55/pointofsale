const suppliers = JSON.parse(localStorage.getItem("suppliers")) || [];
let all_suppliers = document.createElement('div');

function deletSupplier(index) {
 const deleted= suppliers.splice(index, 1);

 console.log(deleted);
  localStorage.setItem("suppliers", JSON.stringify(suppliers));
  location.reload();
}

suppliers.forEach(function(supplier,index){
  let button=document.createElement('button');
  button.classList.add(...['right','btn']);
  button.innerHTML="Delete";

  button.addEventListener('click',function(e){
    deletSupplier(index);
  })

  const paragraph=document.createElement('p')
  paragraph.innerHTML=`${supplier.name}, ${supplier.address}`;
  paragraph.appendChild(button);
  all_suppliers.appendChild(paragraph);
})
document.querySelector("#suppliers").appendChild(all_suppliers);

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
    const address = document.getElementById("address").value;

    const supplier = { name, address };
    suppliers.push(supplier);

    localStorage.setItem("suppliers", JSON.stringify(suppliers));

    location.reload();
  });
