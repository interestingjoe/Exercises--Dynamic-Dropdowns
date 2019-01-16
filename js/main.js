let mealType = "";
let breakfastFood = ["Eggs", "Bacon", "Toast"];
let lunchFood = ["Hamburger", "Pizza", "Milkshake", "Fries"];
let dinnerFood = ["Steak", "Mash Potato", "Carrots", "Soda", "Corn"];

const yummm = {
    main: () => {
        yummm.setListener();
    },
    setListener: (n) => {
        document.getElementsByClassName("meal-container")[0].addEventListener("change", function() {
            if(this.value !== "") {
                mealType = this.value.toLowerCase();
                yummm.setOptions();
            } else {
                yummm.removeOptions();
            }
        }, false);
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
    getFoodLength: () => {
        return yummm.getArr().length;
    },
    removeOptions: () => {
        let parent = document.getElementsByClassName("food-container")[0];
        let food = document.getElementsByClassName("food");
        let len = food.length;

        if(len>0) {
            for(let i=0; i<len; i++) {
                parent.removeChild(food[0]);
            }
        }
    },
    setOptions: () => {
        let len = yummm.getFoodLength();

        yummm.removeOptions();

        for(let i=0; i <len; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", yummm.getArr()[i].toLowerCase());
            option.setAttribute("class", "food");
            let copy = document.createTextNode(yummm.getArr()[i]);
            option.appendChild(copy);
            document.getElementsByClassName("food-container")[0].appendChild(option);
        }
    }
}

yummm.main();
