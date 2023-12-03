/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let btn = document.querySelector(".btn");
let searchInput = document.querySelector(".search input");
let options = document.querySelector(".options");

let cities = [
  "Bagalkot",
  "Bangalore",
  "Bangalore Rural",
  "Belgaum",
  "Bellary",
  "Bidar",
  "Bijapur",
  "Chamarajanagar",
  "Chikkaballapura",
  "Chikmagalur",
  "Chitradurga",
  "Dakshina Kannada",
  "Davanagere",
  "Dharwad",
  "Gadag",
  "Gulbarga",
  "Hassan",
  "Haveri",
  "Kodagu",
  "Kolar",
  "Koppal",
  "Mandya",
  "Mysore",
  "Raichur",
  "Ramanagara",
  "Shimoga",
  "Tumkur",
  "Udupi",
  "Uttara Kannada",
  "Yadgir",
];

btn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

addData();

function addData(selectedCity) {
  options.innerHTML = "";
  cities.forEach((city) => {
    let isSelected = city == selectedCity ? "selected" : "";
    let li = `<li onclick="selectOption(this)" class="${isSelected}">${city}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}

function selectOption(item) {
  searchInput.value = "";
  addData(item);
  wrapper.classList.remove("active");
  btn.firstElementChild.innerText = item.innerText;
}

searchInput.addEventListener("keyup", () => {
  let arr = [];
  let searchKey = searchInput.value.toLowerCase();

  arr = cities
    .filter((data) => {
      return data.toLowerCase().startsWith(searchKey);
    })
    .map((data) => {
      let isSelected =
        data == btn.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="selectOption(this)" class="${isSelected}">${data}</li>`;
    })
    .join("");

  options.innerHTML = arr
    ? arr
    : `<p style="margin-top: 10px;">No data found!</p>`;
});
