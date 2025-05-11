window.addEventListener('load',function(){
  const spinner = document.getElementById("spinner");
  const content = this.document.getElementById("content");
  spinner.style.display = 'none';
  content.classList.remove("not-active");
}); 
 
 const swiper = new Swiper('.swiper', {
  
    autoplay: {
      delay: 5000,
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  
  document.querySelector(".mobile-menu").addEventListener('click', (e) =>{
    const menu = document.querySelector(".nav-menu");
    const button = document.querySelector(".fa-rotate-90");
    menu.classList.toggle("not-active");
    if(button.classList.contains("fa-pause")){
      button.classList.remove("fa-pause");
      button.classList.add("fa-xmark");
    }else{
      button.classList.remove("fa-xmark");
      button.classList.add("fa-pause");
    }

  });
  // intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(entry => {

        entry.target.classList.add("fade-animation");
        observer.unobserve(entry.target);
        
    });
});
document.querySelectorAll(".cart").forEach(e => {
  observer.observe(e)
});
document.querySelectorAll(".card").forEach(e => {
  observer.observe(e)
});
document.querySelectorAll(".projects").forEach(e => {
  observer.observe(e)
});
observer.observe(document.querySelector(".image-content"));
// typing animation
try{
const name = "FULL STACK WEB DEVELOPER !";
const typingSpeed = 50;
const typingElement = document.getElementById("position");
let index = 0;
function typing(){
  if(index < name.length) {
    typingElement.textContent += name.charAt(index);
    index++;
    setTimeout(typing, typingSpeed);
  }
}
typing();

}catch{}



// Initialize records
let records = [];

// Function to save new records
function saveRecords() {
  // Get form values
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Create a new record
  const newRecord = { fullname, email, phone, subject, message };

  // Retrieve the existing records from the cookie if available
  const existingRecords = getRecordsFromCookie();

  // Add the new record to the existing records array
  existingRecords.push(newRecord);
 
  // Convert the updated records array to a JSON string
  const recordsJSON = JSON.stringify(existingRecords);
  const expirationDate = new Date();
  // Set the expiration to two days from now
  expirationDate.setDate(expirationDate.getDate() + 2);
  // Save the updated records to the cookie
  document.cookie = "userRecords=" + encodeURIComponent(recordsJSON) + "; path=/";
  alert("Your message has been sent successfully !");

}
// Function to get records from cookies
function getRecordsFromCookie() {
  const cookieName = "userRecords=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieStartIndex = decodedCookie.indexOf(cookieName);

  if (cookieStartIndex !== -1) {
    const cookieValue = decodedCookie.substring(cookieStartIndex + cookieName.length);
    return JSON.parse(cookieValue); // Parse the cookie value into an array
  }

  // If no records in the cookie, return an empty array
  return [];
}




// Function to display all records in a table
function displayRecords() {
  const records = getRecordsFromCookie(); // Get records from the cookie
  // Generate the HTML table rows dynamically
  let tableHTML = '';
  // Loop through each record and create a row
  for (let i = 0; i < records.length; i++) {
      tableHTML += `<tr>
                      <td>${records[i].fullname}</td>
                      <td>${records[i].email}</td>
                      <td>${records[i].phone}</td>
                      <td>${records[i].subject}</td>
                      <td class='message-cell'>${records[i].message}</td>
                      <td onclick='openMessage(${JSON.stringify(records[i])})'>
                      <i class="fa-solid fa-arrow-up-right-from-square"></i></td>
                    </tr>`;
  }
  // Insert the rows into the table body
  if(tableHTML == '') {
   let elem = `<tr>
    <td colspan="6" style='text-align:center;font-size:24px;color:lightgray;font-weight:bold;'>
    <span style='margin:10px;'>No Record Found !</span></td>
    </tr>`
    document.getElementById("table-body").innerHTML = elem;

  } else {

    document.getElementById("table-body").innerHTML = tableHTML;
  }
}

function deleteCookie(name) {
  // Set the cookie expiration date to a past date (e.g., 1 January 1970)
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

function openMessage(rec) {
  
  const htmlElement = `
    <div class='inner-div'>
    <h2 style='padding:0px;margin:0px;'>${rec.subject}</h2>
    <div class="text-gradient">
        <span>${rec.fullname}</span> | <span>${rec.email}</span> | <span>${rec.phone}</span>
    </div>
    <p class="text"><span>${rec.message}</span></p>
    <div class='action-panel'>
    <i class="fa-solid fa-trash" style="color: #ce0d3d;"></i>
    </div>
    </div>
  `;
  // Insert the generated HTML into the element with ID 'message-holder'
  
  document.getElementById('message-holder').innerHTML = htmlElement;

}

// remove all cookie
function deleteCookie(name) {
  const userConfirmed = confirm("Are you sure you want to delete all the queries ?");
    
    if (userConfirmed) 
    {
      // Set the cookie expiration date to a past date (e.g., 1 January 1970)
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      location.reload();
    }
}

// login
function loginRequest(e){
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if(username === "ehashimi@gmail.com" && password === "19216"){
    location.href="../admin/dashboard.html";
  } else {
    document.getElementById("error-message").innerHTML = "Invalid Credential !";
  }
  
}
  
function handleToggle(){
  document.querySelector("#toggle-display").style.display="block";
}