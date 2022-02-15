const users = JSON.parse(localStorage.getItem("users")) || [];
let all_users = document.createElement('div');

function deletUser(index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  location.reload();
}

users.forEach(function(user,index){
  let button=document.createElement('button');
  button.classList.add(...['right','btn']);
  button.innerHTML="Delete";

  button.addEventListener('click',function(e){
    deletUser(index);
  })

  const paragraph=document.createElement('p')
  paragraph.innerHTML=`${user.name}, ${user.username}`;
  paragraph.appendChild(button);
  all_users.appendChild(paragraph);
})
document.querySelector("#suppliers").appendChild(all_users);



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
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const product = { name, username,password };
    users.push(product);

    localStorage.setItem("users", JSON.stringify(users));

    location.reload();
  });
