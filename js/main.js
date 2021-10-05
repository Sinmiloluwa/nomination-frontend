// Nominate
function Nominate() {
  const fullName = document.getElementById('fullname').value;
  const mail = document.getElementById('email').value;
  const linkedIn = document.getElementById('linkedin').value;
  const twitter = document.getElementById('twitter').value;
  const category = document.getElementById('option').value;

  let data = {
    fullname: fullName,
    email: mail,
    linkedin: linkedIn,
    twitter: twitter,
    category: category
  }

  const url = 'https://nom-app.herokuapp.com/api/add';

  axios.post(url,data)
  
  .then(function (response) {
    console.log(response);
  })
  .catch(function(error) {
  console.error(error.response.data);
  })

  location.reload();
  return false;  
}

// get categories
function getCategories() {
  fetch('https://nom-app.herokuapp.com/api/categories') 
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    for (let i=0; i < data.length; i++) {
       var option = "<option value='" + data[i].name + "'>" + data[i].name + "</option>" 
       document.getElementById('option').innerHTML += option 
       console.log(data[i].name)
     }
  })
}

// Accept Nomination
function acceptNomination() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const alt = document.getElementById('alt').value;
    const linkedIn = document.getElementById('linkedin').value;
    const twitter = document.getElementById('twitter').value;
    const insta = document.getElementById('instagram').value;

    let data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone_number: phone,
      alt: alt,
      linkedin: linkedIn,
      twitter: twitter,
      instagram: insta
    }

    const url = "https://nom-app.herokuapp.com/api/nominee/create"

    axios.post(url,data)
  
  .then(function (response) {
    console.log(response);
  })
  .catch(function(error) {
  console.error(error.response.data);
  })

  window.location.replace("index.html")
}





   
