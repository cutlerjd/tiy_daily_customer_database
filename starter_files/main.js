let htmlBody = document.getElementsByTagName( "body" )[0];
let wrapper = document.createElement( "div" );
let header = document.createElement( "div" );
let main = document.createElement( "div" );

wrapper.classList.add("wrapper")
header.classList.add("header")
main.classList.add("main")

let headerH = document.createElement( "h1" )
let headerText = document.createTextNode( "Internal Company Directory")

headerH.appendChild(headerText)
header.appendChild(headerH)

let stringHTML = ""

customers.results.forEach(function(item){
  stringHTML += `
  <div class="customer">
    <img src="${item.picture.large}" alt="${item.name.first} ${item.name.last}" />
    <h2 class="name">${item.name.first} ${item.name.last}</h2>
    <div class="email">${item.email}</div>
    <div class="addressLine1">${item.location.street}</div>
    <div class="addressLine2">${item.location.city}, ${item.location.state} ${item.location.postcode}</div>
    <div class="phone">${item.phone}</div>
    <div class="ssn">${item.id.value}</div>
  </div>
  `
})
main.innerHTML = stringHTML;

htmlBody.appendChild(wrapper)
wrapper.appendChild(header)
wrapper.appendChild(main)
