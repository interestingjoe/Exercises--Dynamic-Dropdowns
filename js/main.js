let mealItem = "";
let mealCourse = "";
let breakfastFood = ["Eggs", "Bacon", "Toast"];
let lunchFood = ["Hamburger", "Pizza", "Milkshake", "Fries"];
let dinnerFood = ["Steak", "Mash Potato", "Carrots", "Soda", "Corn"];

const dropdown = {
    main: () => {
        dropdown.addListener();
    },
    addListener: (n) => {
        document.getElementsByClassName("meal-container")[0].addEventListener("change", function() {
            mealItem = this.value;
            dropdown.setOptions();
        }, false);
    },
    getFoodLength: () => {
        let arr = mealItem + "Food";
        console.log("---", arr);
        return arr.length;
    },
    setOptions: () => {
        let len = dropdown.getFoodLength();
        let mealCourse = mealItem + "Food";

        for(let i=0; i <len; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", mealCourse[i].toLowerCase());
            option.setAttribute("class", "food");
            let copy = document.createTextNode(mealCourse[i]);
            option.appendChild(copy);
            document.getElementsByClassName("food-container")[0].appendChild(option);
        }
    }
}

dropdown.main();
