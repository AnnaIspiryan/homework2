const priceApple = 160;
const numberOfApples = 7;
const numberOfCaloriesPerApple = 80;
const totalprice = numberOfApples*priceApple;
const totalNumberOfCalories = numberOfApples*numberOfCaloriesPerApple;
const iHaveApples = "Yaaaay I got apples";
const iDontHaveApples = ":((((";
if(numberOfApples >= 1){
  console.log(iHaveApples);
} else {
  console.log(iDontHaveApples);
}