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