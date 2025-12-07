const form = document.getElementById("addressForm");
const contactList = document.getElementById("contactList");

document.addEventListener("DOMContentLoaded", loadContacts);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const person = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    dob: document.getElementById("dob").value,
    address: document.getElementById("address").value
  };

  saveContact(person);
  form.reset();
  loadContacts();
});

function saveContact(person) {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(person);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadContacts() {
  contactList.innerHTML = "";
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.forEach((c, index) => {
    const li = document.createElement("li");
    li.textContent = `${c.name} | ${c.phone} | ${c.email}`;
    contactList.appendChild(li);
  });
}
