let mealItem = "";

const dropdown = {
    main: () => {
        dropdown.addListener();
    },
    addListener: (n) => {
        document.getElementsByClassName("meal-container")[0].addEventListener("change", function() {
            mealItem = this.value;
            console.log("----mealItem: ", mealItem);
        }, false);
    },
    two: () => {

    },
    three: () => {

    }
}

dropdown.main();
