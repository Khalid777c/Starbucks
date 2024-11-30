
let btn = document.querySelector('.open');
let menu = document.querySelector('.menu');
let btn1 = document.getElementById('btn1');
let text = document.getElementById('text');


btn.onclick=function(){
    this.classList.toggle('gren')
    menu.classList.toggle('show')
}

btn1.onclick=function(){
    this.style.background='transparent'
    this.style.color='#017143'
    text.innerText='The first drink offered by Starbucks was simply roasted coffee. Over time, they expanded their offerings to include various drinks such as lattes, cappuccinos, and seasonal specialty drinks.'
}

// scrollll//
// JavaScript
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      
      if (sectionTop < screenHeight) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  });
  