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

customers.results.forEach(function(item){
  //Set up customer div
  let customer_div = document.createElement( "div" )
  customer_div.classList.add("customer")
  //Set up customer image with name as alt text
  let customer_img = document.createElement( "img" )
  customer_img.setAttribute("src",item.picture.large)
  customer_img.setAttribute("alt",item.name.first + " " +  item.name.last)
  customer_div.appendChild(customer_img)
  //Set up customer name
  let customer_name = document.createElement("h2")
  let customer_name_text = document.createTextNode(item.name.first + " " +  item.name.last)
  customer_name.classList.add("name")
  customer_name.appendChild(customer_name_text)
  customer_div.appendChild(customer_name)
  //Set up email div
  let customer_email = document.createElement("div")
  let customer_email_text = document.createTextNode(item.email)
  customer_email.classList.add("email")
  customer_email.appendChild(customer_email_text)
  customer_div.appendChild(customer_email)
  //Set up addy 1
  let customer_address1 = document.createElement("div")
  let customer_address1_text = document.createTextNode(item.location.street)
  customer_address1.classList.add("addressLine1")
  customer_address1.appendChild(customer_address1_text)
  customer_div.appendChild(customer_address1)
  //Set up addy 2
  let customer_address2 = document.createElement("div")
  let customer_address2_text = document.createTextNode(item.location.city + ", " + item.location.state + " " + item.location.postcode)
  customer_address2.classList.add("addressLine2")
  customer_address2.appendChild(customer_address2_text)
  customer_div.appendChild(customer_address2)
  //Set up phone
  let customer_phone = document.createElement("div")
  let customer_phone_text = document.createTextNode(item.phone)
  customer_phone.classList.add("phone")
  customer_phone.appendChild(customer_phone_text)
  customer_div.appendChild(customer_phone)
  //Set up SSN
  let customer_ssn = document.createElement("div")
  let customer_ssn_text = document.createTextNode(item.id.value)
  customer_ssn.classList.add("ssn")
  customer_ssn.appendChild(customer_ssn_text)
  customer_div.appendChild(customer_ssn)
  //Append customer div to list
  main.appendChild(customer_div)
})

//main.innerHTML = stringHTML;

htmlBody.appendChild(wrapper)
wrapper.appendChild(header)
wrapper.appendChild(main)
