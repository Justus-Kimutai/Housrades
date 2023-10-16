const ratingBtn = document.querySelector(".rate-btn");
const promptRatingDiv = document.querySelector(".promptRate-div");
const houseDiv = document.querySelector(".house-div");
const ratingsDiv = document.querySelector(".ratings");
const addHouseBtn = document.querySelector(".addHouse-btn")
const houseForm = document.querySelector(".house-form")
const searchIconBtn = document.querySelector(".searchIcon-btn")


const promptRateInputName = document.querySelector(".promptRate-input-name");
const promptRateInputNumber = document.querySelector(".promptRate-input-number");
const promptRateInputMessage = document.querySelector(".promptRate-input-message");


let ratingUserName = null
let ratingMessage = null
let ratingNumbers = null


addHouseBtn.addEventListener("click",()=>{
    houseForm.classList.toggle("house-form--show")
})

ratingBtn.addEventListener("click", ()=>{
    
    promptRatingDiv.classList.toggle("show-promptRate-div");
    houseDiv.style.opacity = 1
    if(promptRateInputMessage.value){
        grabReveiews()
    }
    
})
searchIconBtn.addEventListener("click",()=>{
    houseForm.preventDefault;
})


function grabReveiews(){
    ratingNumbers = promptRateInputNumber.value;
    ratingUserName = promptRateInputName.value;
    ratingMessage = promptRateInputMessage.value;

    let ratingDiv = document.createElement("div") 
    ratingDiv.className = "rating-div"
    ratingDiv.innerHTML = `
    <p class="user-name">${promptRateInputName.value}</p>
    <p class="review-text">${promptRateInputMessage.value}</p>
    `
    console.log(ratingDiv)

    ratingsDiv.appendChild(ratingDiv);

    promptRateInputNumber.value = ""
    promptRateInputName.value = ""
    promptRateInputMessage.value = ""

}