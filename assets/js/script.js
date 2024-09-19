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



