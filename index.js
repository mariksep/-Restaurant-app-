import List from "./restaurants.json";

console.log("restaurants", List);
const objL = Object.keys(List.restaurants).length;
console.log("pituus " + objL);
const x = List.restaurants[1].name;
console.log("ensimmäinen obj " + x);
const cardContainer = document.querySelector(".cardContainer");

const loadR = () => {
  cardContainer.innerHTML = "";

  for (let x = 0; x < objL; x++) {
    const card = document.createElement("div");
    const h = document.createElement("h4");
    const img = document.createElement("img");
    const city = document.createElement("p");
    const tags = document.createElement("p");
    const des = document.createElement("p");
    const desc = document.createElement("div");
    const info = document.createElement("div");
    const iL = document.createElement("i");
    const divL = document.createElement("div");
    const divH = document.createElement("div");
    const iH = document.createElement("i");

    des.innerHTML = List.restaurants[x].description;
    city.innerHTML = List.restaurants[x].city;
    tags.innerHTML = List.restaurants[x].tags;
    if (Object.keys(List.restaurants[x].tags).length===0){
      tags.innerHTML= "No tag";
    }
    if (Object.keys(List.restaurants[x].city).length===0){
      tags.innerHTML= "No location";
    }
    if (Object.keys(List.restaurants[x].description).length===0){
      tags.innerHTML= "No description";
    }


    img.src = List.restaurants[x].image;

    h.innerHTML = List.restaurants[x].name;
    console.log("Ravintola: " + List.restaurants[x].name);
    console.log("Img src: " + List.restaurants[x].image);
    card.className = "card";
    desc.className = "desc";
    info.className = "info";
    iL.classList = "fa fa-map-marker ";
    divL.className= " location";
    iH.className= "fa fa-hashtag";
    divH.className= "hastag";
    desc.appendChild(des);

    divL.appendChild(iL),
    divL.appendChild(city);
    divH.appendChild(iH);
    divH.appendChild(tags);
    info.appendChild(h);
    info.appendChild(divL);
    info.appendChild(divH);

    card.appendChild(img);

    card.appendChild(info);
    card.appendChild(desc);
    cardContainer.appendChild(card);
  }
};
loadR();

const buttonS = document.querySelector(".buttonS");
let order = "asc";

const sorts = () => {

  if( order==="asc")
  {
    order = "des";
    List.restaurants.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
    loadR();
  }else{
    order= "asc",
    List.restaurants.sort(function(a, b) {
      return b.name.localeCompare(a.name);
    });
    loadR();

  }
};
buttonS.addEventListener("click", sorts);
