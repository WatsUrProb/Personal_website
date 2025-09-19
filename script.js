var typed = new Typed(".text",{
    strings:["NUS Student","Learner","Ponderer","Hardworker"],
    typeSpeed:75,
    backSpeed: 75,
    backDelay: 1000,
    loop: true
})

function fadeinanimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Optionally: observer.unobserve(entry.target); // if you only want it to animate once
      }
      else {
        entry.target.classList.remove('show'); //  remove class if out of view
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".test");
  hiddenElements.forEach((el) => observer.observe(el));
}


function smoothScroll() {
function smoothScrollHelper(target, duration) {
    const targetElement = document.querySelector(target);
    const targetRect = targetElement.getBoundingClientRect();
    const targetPosition = targetRect.top + window.scrollY - (window.innerHeight / 2) + (targetRect.height / 2);
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

    
    const navLinks = document.querySelectorAll("a");
    navLinks.forEach((link) => {
        link.addEventListener('click',()=>{
            var section = link.href
            var selector = "#" + section.split("#")[1];
            if (selector === "#") {
                smoothScrollHelper("#landing",2000)
            } else {
                smoothScrollHelper(selector, 2000);
            }
        })
    })
}

//nav bar animation on scroll
const nav = document.querySelector(".header");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () =>{
  if (lastScrollY < window.scrollY){
    console.log("we are going down")
    nav.classList.add("nav--hidden")
    
  }
  else{
    nav.classList.remove("nav--hidden")
    console.log("we are going up");
  }
  lastScrollY = window.scrollY
})

const test = document.querySelector(".testing");
let lastScrollYY = window.scrollY;
window.addEventListener("scroll", () =>{
  if (lastScrollYY < window.scrollY){
    console.log("we are going down")
    test.classList.add("nav--hidden")
    
  }
  else{
    test.classList.remove("nav--hidden")
    console.log("we are going up");
  }
  lastScrollYY = window.scrollY
})


smoothScroll();
fadeinanimation();

// Run it when page loads
/*Thing to accomplish:
3) Attach resume to button(number 1)
4) Add snippets to project div(number 2)
5)add experience section(number 3)
6) Maybe add bottom navbar
1) Frame sizing
2) Direct to Dsta hackathon github

5) add gradient to website*/