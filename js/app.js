// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});



// ********** kalendarium button ************
const kalendariumBtn = document.querySelector('.kalendarium-btn')
const kalendariumTable = document.querySelector('.kalendarium-table')

kalendariumBtn.addEventListener('click', () => {
  kalendariumTable.classList.toggle('kalendarium-table-visible')
  if(kalendariumBtn.innerHTML === 'Zobacz'){
    kalendariumBtn.innerHTML = 'Ukryj'
  }
  else {
    kalendariumBtn.innerHTML = 'Zobacz'
  }
})

// ********** historia czytaj wiecej button ************
const historiaBtn = document.querySelector('.historia-btn')
const historiaInfoLong = document.querySelector('.historia-info-long')

historiaBtn.addEventListener('click', () => {
  historiaInfoLong.classList.toggle('historia-info-long-visible')
  if(historiaBtn.innerHTML === 'Ukryj'){
    historiaBtn.innerHTML = 'Czytaj więcej'
  }
  else {
    historiaBtn.innerHTML = 'Ukryj'
  }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // prevent default
   
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });
  });
});