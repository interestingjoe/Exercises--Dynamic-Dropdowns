let mealItem = "";

const dropdown = {
    main: () => {
        dropdown.addListener();
    },
    addListener: (n) => {
        document.getElementsByClassName("meal-container")[0].addEventListener("change", function() {
            mealItem = this.value;
            dropdown.populateSecondDropDown();
        }, false);
    },
    populateSecondDropDown: () => {
        if(mealItem==="breakfast") {
            console.log("breakfast");
        } else if(mealItem==="lunch") {
            console.log("lunch");
        } else if(mealItem==="dinner") {
            console.log("dinner");
        } else {
            console.log("ELSE");
        }
    },
    three: () => {

    }
}

dropdown.main();
