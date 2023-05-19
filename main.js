var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos < 130) {
    document.querySelector("header").classList.remove("hidden");
  } else {
    document.querySelector("header").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}

//==============================================================================================

// выбираем все элементы меню
const navItems = document.querySelectorAll('.nav-item');

// выбираем последний элемент меню
const lastMenuItem = navItems[navItems.length - 1];

// выбираем элемент подвала
const footer = document.querySelector('footer');

window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    const sections = document.querySelectorAll("section");
    const currentPos = window.pageYOffset;
    const scrollPosition = window.scrollY;
  
    sections.forEach(section => {
      const top = section.offsetTop - nav.offsetHeight;
      const bottom = top + section.offsetHeight;
      
  
      if (currentPos >= top && currentPos < bottom) {
        nav.querySelector("a[href*=" + section.id + "]").classList.add("active");
      } else {
        nav.querySelector("a[href*=" + section.id + "]").classList.remove("active");
      }
    });
    // проверяем, находится ли скролл внизу страницы
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollBottom = scrollPosition + windowHeight;

    if (scrollBottom >= documentHeight - footer.offsetHeight) {
        // добавляем подсветку последнему элементу меню
        navItems.forEach(function(item) {
        item.classList.remove('active');
        });
        lastMenuItem.classList.add('active');
    }
    else {
        lastMenuItem.classList.remove('active');
    }
});

//==============================================================================================



