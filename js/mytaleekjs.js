// display my lasnguage list

const globesolid = document.getElementById("globesolid");
const symbolglobe = document.getElementById("symbolglobe");
const mynav = document.getElementById("mynav");

symbolglobe.addEventListener("click", (eo) => {
  //   globesolid.style.opacity = 1;
  globesolid.classList.toggle("myglobesolid");
  //   mynav.style.height="100%";
  mynav.classList.toggle("myheight");
});

// ---------------------------------------------

const menuline = document.getElementById("menuline");
const divs = document.getElementById("divs");

divs.addEventListener("click", (eo) => {
  const mynav = document.getElementById("mynav");
  // taleeklinks.style.display="flex";
  //   mynav.classList.add("mydisplay");
  mynav.classList.toggle("mydisplay");
});

// -----------------------------------------------------

// const mybody = document.getElementById("mybody");

// const myshow = (eo) => {

// };
//   myshow
// () => {
//     const mynav = document.getElementById("mynav");

//   mynav.style.backgroundColor="white";
//   eo.target.style.color="red"
// }
// const myscrolla = document.getElementsByClassName("myscrolla");
const logoone = document.querySelector(".logoone");
const logotwo = document.querySelector(".logotwo");
    const navp = document.querySelector(".navp");
    const aaa=document.querySelectorAll("nav a.myscrolla");
    console.log(aaa)

window.addEventListener("scroll", (eo) => {

  mynav.classList.add("myscrollingheader");

navp.style.color="black";
    aaa.forEach(item => {
        item.style.color="black"
    });
  logoone.style.display = "none";
  logotwo.style.display = "block";

});

// ---------------------------------------------------------

// const myblack = (eo) => {
//     const aaa=document.querySelectorAll(".myscrolla");

// aaa.style.color="red"
// navp.style.color="red"


// }

































