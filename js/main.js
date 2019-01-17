let mealType = "";
const mealContainer = document.getElementsByClassName("meal-container");
const foodContainer = document.getElementsByClassName("food-container");
let breakfastFood = ["Eggs", "Bacon", "Toast"];
let lunchFood = ["Hamburger", "Pizza", "Milkshake", "Fries"];
let dinnerFood = ["Steak", "Fettuccine Alfredo", "Baked Fish", "Chicken Salad", "Soylent Green"];
let isListener = false;

const foodMenu = {
    main: () => {
        foodMenu.setListener1();
    },
    setListener1: () => {
        mealContainer[0].addEventListener("change", function() {
            foodMenu.isEmpty(this.value);
        }, false);
    },
    setListener2: () => {
        foodContainer[0].addEventListener("change", function() {
            console.log(this.value);
        }, false);
    },
    isEmpty: (e) => {
        if(e !== "") {
            mealType = e.toLowerCase();
            foodMenu.setOptions();
        } else {
            foodMenu.removeOptions();
        }
    },
    isListener: () => {
        if(isListener===false) {
            foodMenu.setListener2();
            isListener = true;
        }
    },
    getArr: () => {
        if(mealType==="breakfast") {
            return breakfastFood;
        } else if(mealType==="lunch") {
            return lunchFood;
        } else if(mealType==="dinner") {
            return dinnerFood;
        }
    },
    getArrLength: () => {
        return foodMenu.getArr().length;
    },
    removeOptions: () => {
        let parent = foodContainer[0];
        let food = document.getElementsByClassName("food");
        let len = food.length;

        if(len>0) {
            for(let i=0; i<len; i++) {
                parent.removeChild(food[0]);
            }
        }
    },
    setOptions: () => {
        let len = foodMenu.getArrLength();

        foodMenu.removeOptions();

        for(let i=0; i <len; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", foodMenu.getArr()[i].toLowerCase());
            option.setAttribute("class", "food");
            let copy = document.createTextNode(foodMenu.getArr()[i]);
            option.appendChild(copy);
            foodContainer[0].appendChild(option);
        }

        foodMenu.isListener();
    }
}

foodMenu.main();
