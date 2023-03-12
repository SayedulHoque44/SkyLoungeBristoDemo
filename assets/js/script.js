const Data = SKLBFood;
const setMenu = All;

// eventContainer
const eventHeader1 = document.getElementById("eventHeader1");
const eventHeader2 = document.getElementById("eventHeader2");
const eventContainer = document.getElementById("eventContainer");

function displayEventContainerData() {
  eventContainer.innerHTML = "";
  eventHeader1.innerText = " Happy Valentine's ❤️";
  eventHeader2.innerText = " Whole Day Special Menu For Couple's 👰🤵";
  const eventData = SKLBFood[1].eventMenu;

  for (let card of eventData) {
    const divTag = document.createElement("div");
    divTag.classList.add("swiper-slide");
    divTag.innerHTML = `
        <div class="Event-going-singleItem ">
          <img src="${card.postar_image_link}" alt="img" />
        </div>
  `;
    eventContainer.appendChild(divTag);
  }

  //
}
displayEventContainerData();

// Dom
const menuContainer = document.getElementById("menuContainer");

function menuContainerData(limit) {
  menuContainer.innerHTML = "";
  // console.log(setMenu);
  let mainDataArray;
  // condition of Limit
  if (limit && setMenu.length > limit) {
    mainDataArray = setMenu.slice(0, limit);
  } else {
    mainDataArray = setMenu;
  }
  //   Display Mwnu Data

  mainDataArray.forEach((card) => {
    // console.log(card);
    let diTag = document.createElement("div");
    diTag.classList.add("menu-single-item");

    let divInnarHtml = `

                <img src="${card.image_link}" alt="img" />
                <span>${card.food_catagories}</span>
                <div class="review-box py-3">
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                  </span>
                  (4.00)
                </div>
                <h2 class="text-2xl font-semibold my-3">${card.food_name}</h2>
                <p class="menu-item-price">
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>    ${card.price}/-
                </p>
    `;
    diTag.innerHTML = divInnarHtml;
    menuContainer.appendChild(diTag);
  });

  //console data
  //   console.log(mainDataArray);
}

//catagoriesData button Procces
const allMBtn = document.getElementsByClassName("M-btn");
for (let singlebtn of allMBtn) {
  singlebtn.addEventListener("click", function (event) {
    let catgoryName = event.target.getAttribute("data");

    if (catgoryName === "allData") {
      menuContainerData();
    } else {
      catagoriesData(Data, catgoryName);
    }
  });
}
// catagoriesData
function catagoriesData(Data, catagoryName) {
  menuContainer.innerHTML = "";

  // console.log(Data[0].catagories[catagoryName]);

  const catagoryArray = Data[0].catagories[catagoryName];

  catagoryArray.forEach((card) => {
    let diTag = document.createElement("div");
    diTag.classList.add("menu-single-item");

    let divInnarHtml = `

               <img src="${card.image_link}" alt="img" />
               <span>${card.food_incredients}</span>
               <div class="review-box py-3">
                 <span>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star-half-stroke"></i>
                 </span>
                 (4.00)
               </div>
               <h2 class="text-2xl font-semibold my-3">${card.food_name}</h2>
               <p class="menu-item-price">
                 <i class="fa-solid fa-bangladeshi-taka-sign"></i>    ${card.price}/-
               </p>
   `;
    diTag.innerHTML = divInnarHtml;
    menuContainer.appendChild(diTag);
  });
}
//search process
const seachInput = document.getElementById("seachInput");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function () {
  //
  const inputValue = seachInput.value.toLowerCase();

  const matchedArray = setMenu.filter((card) => {
    const cardFoodName = card.food_name.toLowerCase();

    if (cardFoodName.includes(inputValue)) {
      return card;
    }
  });
  displaySearchedFood(matchedArray);
});
function displaySearchedFood(matchedArray) {
  menuContainer.innerHTML = "";
  if (matchedArray.length > 0) {
    matchedArray.forEach((card) => {
      let diTag = document.createElement("div");
      diTag.classList.add("menu-single-item");

      let divInnarHtml = `

               <img src="${card.image_link}" alt="img" />
               <span>${card.food_incredients}</span>
               <div class="review-box py-3">
                 <span>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star-half-stroke"></i>
                 </span>
                 (4.00)
               </div>
               <h2 class="text-2xl font-semibold my-3">${card.food_name}</h2>
               <p class="menu-item-price">
                 <i class="fa-solid fa-bangladeshi-taka-sign"></i>    ${card.price}/-
               </p>
   `;
      diTag.innerHTML = divInnarHtml;
      menuContainer.appendChild(diTag);
    });
  } else {
    const massage = document.createElement("h1");
    massage.innerText = "No Food Found...!";
    massage.classList.add("text-center");
    massage.classList.add("col-start-1");
    massage.classList.add("col-end-12");
    massage.classList.add("font-semibold");
    massage.classList.add("text-4xl");
    massage.classList.add("text-gray-400");
    menuContainer.appendChild(massage);
  }
}
// menuContainerData
menuContainerData(5);
