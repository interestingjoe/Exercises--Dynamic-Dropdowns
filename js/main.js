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
            mealType = this.value.toLowerCase();
            yummm.setOptions();
        }, false);
    },
    getArr: () => {
        if(mealType==="breakfast") {
            return breakfastFood;
        } else if(mealType==="lunch") {
            return lunchFood;
        } else if(mealType==="dinner") {
            return dinnerFood;
        } else {
            console.log("ELSE");
        }
    },
    getFoodLength: () => {
        return yummm.getArr().length;
    },
    setOptions: () => {
        let len = yummm.getFoodLength();

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
