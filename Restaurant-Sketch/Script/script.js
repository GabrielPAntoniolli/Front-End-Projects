// this function check if all the requirements of the password match.
var password = document.getElementById("pass").value; //password of the user

function passwordValidator() { //

  password = document.getElementById("pass").value;
  var regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*@!{}%^&*()=-]).{8,}$/; 
  if (regex.test(password)) { //check if it fits the requirements

    var output = document.getElementById("output1"); //if it fits, so a green message will appear
    output.textContent = "Valid Password"
    output.style.color = "green";
    output.style.display = "block";

  } else { //if not a red message will.
    var output = document.getElementById("output1");
    output.textContent = "Invalid Password";
    output.style.color = "red";
    output.style.display = "block";
  }
}
//when the password input box is on focus, this function will make the requirements box visible to the user
function showBox() {
  document.getElementById("pwRec").style.display = "block";

}
function hideBox() {
  box = document.getElementById("pwRec").style.display = "none";

}

var input = document.getElementById("pass");
var length = document.getElementById("item1");
var upperLetter = document.getElementById("item2");
var lowerLetter = document.getElementById("item3");
var specialNumber = document.getElementById("item4");


input.onkeyup = function () {
  // Validate length
  if (input.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (input.value.match(upperCaseLetters)) {
    upperLetter.classList.remove("invalid");
    upperLetter.classList.add("valid");
  } else {
    upperLetter.classList.remove("valid");
    upperLetter.classList.add("invalid");
  }

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (input.value.match(lowerCaseLetters)) {
    lowerLetter.classList.remove("invalid");
    lowerLetter.classList.add("valid");
  } else {
    lowerLetter.classList.remove("valid");
    lowerLetter.classList.add("invalid");
  }

  // Validate numbers and special characters
  var number = /[0-9]/g;
  var special = /[$&+,:;=?@#|'<>.£s^*()%!-]/;
  if (input.value.match(number) && input.value.match(special)) {
    specialNumber.classList.remove("invalid");
    specialNumber.classList.add("valid");
  } else {
    specialNumber.classList.remove("valid");
    specialNumber.classList.add("invalid");
  }

}

document.getElementById("showData").addEventListener("click", getData);

function getData() {

  fetch("https://randomuser.me/api/?results=5") //fetching the api
    .then(res => res.json())
    .then(data => {
      //console.log(data); testing if i had access to the information
      let author = data.results; //accessing the level of information of random users

      //console.log(author); // testing if i had access

      let output = "";

      author.forEach(function (lists) { //for each to iterate over all the users i want, and printing the information i want too
        output += `
        <div class="container">
            <div class="card mt-4 bg-light">
                <ul class="list-group">
                    <li class="list-group-item"><h2>Name: ${lists.name.first} ${lists.name.last} </h2></li>
                    <li class="list-group-item"><img src="${lists.picture.large}"></li>
                    <li class="list-group-item">Phone Number: ${lists.cell}</li>
                    <li class="list-group-item">DOB: ${lists.dob.date}</li>
                    <li class="list-group-item">Age: ${lists.dob.age}</li>
                    <li class="list-group-item">Email ID: ${lists.email}</li>
                    <li class="list-group-item">Gender: ${lists.gender}</li>
                    <li class="list-group-item">City: ${lists.location.city}</li>
                    <li class="list-group-item">Country: ${lists.location.country}</li>
                    <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                </ul>
            </div>
        </div> `;
      });

      document.getElementById("output").innerHTML = output;
    });
}

var numberOfItems = 12;

//-------------DONT FORGET TO MODIFY NAME OF VARIABLES

function CalculateValue() {
  var total = 0; //had to start all these variables because every single one has different values 
  var starterTotal = 0;
  var mainTotal = 0;
  var dessertTotal = 0;
  var drinksTotal = 0;
  var vegTotal = 0;
  var notVeg = 0;

  for (let i = 1; i <= numberOfItems; i++) { //interating over the ids of html page
    itemID = document.getElementById("qnt_" + i);
    total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
    //when taking the value, we just need to multiple that with the price, and you have the result


    //now because we needed to breakdown the prices, i had to put new attributes so i could distinguish the meals
    //if certain meal is equal to certain attribute, so the price will be indexed to its respective variable.
    if (itemID.className == "starters") {
      starterTotal = starterTotal + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }
    if (itemID.className == "main") {
      mainTotal = mainTotal + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }
    if (itemID.className == "dessert") {
      dessertTotal = dessertTotal + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }
    if (itemID.className == "drinks") {
      drinksTotal = drinksTotal + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }
    if (itemID.getAttribute("data-veg") == "true") {
      vegTotal = vegTotal + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }
    if (itemID.getAttribute("data-veg") == "false") {
      notVeg = notVeg + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }

  }
  //now sending the variables holding the prices to the html document.
  document.getElementById('itemTotal').innerHTML = "€" + total;
  document.getElementById('startersTotal').innerHTML = "€" + starterTotal;
  document.getElementById('mainsTotal').innerHTML = "€" + mainTotal;
  document.getElementById('desTotal').innerHTML = "€" + dessertTotal;
  document.getElementById('driTotal').innerHTML = "€" + drinksTotal;
  document.getElementById('vegTotal').innerHTML = "€" + vegTotal;
  document.getElementById('notVegTotal').innerHTML = "€" + notVeg;

}
//applying the eventlistener that after the user type the quantity it will calculate the price
document.querySelectorAll('[id^="qnt_"]').forEach(item => {
  item.addEventListener('keyup', CalculateValue);


});