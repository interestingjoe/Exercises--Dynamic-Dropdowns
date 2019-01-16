let mealType = "";
let breakfastFood = ["Eggs", "Bacon", "Toast"];
let lunchFood = ["Hamburger", "Pizza", "Milkshake", "Fries"];
let dinnerFood = ["Steak", "Fettuccine Alfredo", "Baked Fish", "Chicken Salad", "Soylent Green"];
let isListener = false;

const yummm = {
    main: () => {
        yummm.setListener1();
    },
    setListener1: () => {
        document.getElementsByClassName("meal-container")[0].addEventListener("change", function() {
            yummm.isEmpty(this.value);
        }, false);
    },
    setListener2: () => {
        document.getElementsByClassName("food-container")[0].addEventListener("change", function() {
            console.log(this.value);
        }, false);
    },
    isEmpty: (e) => {
        if(e !== "") {
            mealType = e.toLowerCase();
            yummm.setOptions();
        } else {
            yummm.removeOptions();
        }
    },
    isListener: () => {
        if(isListener===false) {
            yummm.setListener2();
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
        let len = yummm.getArrLength();

        yummm.removeOptions();

        for(let i=0; i <len; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", yummm.getArr()[i].toLowerCase());
            option.setAttribute("class", "food");
            let copy = document.createTextNode(yummm.getArr()[i]);
            option.appendChild(copy);
            document.getElementsByClassName("food-container")[0].appendChild(option);
        }

        yummm.isListener();
    }
}

yummm.main();
