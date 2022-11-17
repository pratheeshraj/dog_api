const url = "https://dog.ceo/api/breeds/list/all";
// fetch(url)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

const dropdown = document.getElementById("breedList");
const imgGrid = document.getElementById("imgGrid");

async function loadData() {
  try {
    // fetch the data
    const response = await fetch(url);
    const data = await response.json();
    //   create the dropdown
    createDropdown(data.message);
  } catch (error) {
    console.log(error);
  }
}

function createDropdown(input) {
  const list = Object.keys(input);
  list.unshift("choose a breed");
  list.forEach(function (breedname) {
    // console.log(breedname);
    const option = document.createElement("option");
    option.innerHTML = breedname;
    option.value = breedname;
    dropdown.appendChild(option);
  });
}

async function showBreedImgs(breedname) {
  if (breedname !== "choose a breed") {
    imgGrid.innerHTML = "";
    const breedurl = `https://dog.ceo/api/breed/${breedname}/images`;
    const response = await fetch(breedurl);
    const data = await response.json();
    console.log(data.message);
    createGrid(data.message);
  }
}

function createGrid(imgList) {
  imgList.forEach(function (img) {
    const imgElement = document.createElement("img");
    imgElement.src = img;
    imgGrid.appendChild(imgElement);
  });
}

loadData();