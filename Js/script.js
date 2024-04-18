const listaDeMateriais = document.getElementById("materiais");
const btnAdd = document.getElementById("btn-Add");
const btnRemove = document.getElementById("btn-Remove");

function addMateriais() {
  const novaList = document.getElementById("input-id").value;
  const newEl = document.createElement("li");
  const textNode = document.createTextNode(novaList);
  newEl.appendChild(textNode);
  listaDeMateriais.appendChild(newEl);
}

function removendoItens() {
  listaDeMateriais.removeChild(listaDeMateriais.childNodes[0]);
}

btnAdd.addEventListener("click", (e) => {
  addMateriais();
});

btnRemove.addEventListener("click", (e) => {
  removendoItens();
});
