let mealSelection = document.getElementsByClassName("meal");
let mealItem = "";

const dropdown = {
    main: () => {
        dropdown.addListeners(dropdown.findListLength());
    },
    findListLength: () => {
        return mealSelection.length;
    },
    addListeners: (n) => {
        document.getElementsByClassName("meal-container")[0].addEventListener("change", function() {
            mealItem = this.value;
        }, false);
    },
    two: () => {

    },
    three: () => {

    }
}

dropdown.main();
