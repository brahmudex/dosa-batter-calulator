function calculateCost() {
    const riceBag = Number(
        document.getElementById("riceBag").value
    );

    const dalBag = Number(
        document.getElementById("dalBag").value
    );

    const normalRice = Number(
        document.getElementById("normalRice").value
    );

    const cover = Number(
        document.getElementById("cover").value
    );

    const inputs = [
        "riceBag", "dalBag", "normalRice", "cover"
    ];

    const error = document.getElementById("error");

    // Check that every price has been entered.
    for (const id of inputs) {
        const field = document.getElementById(id);
        const value = Number(field.value);

        if (
            field.value.trim() === "" ||
            !Number.isFinite(value) ||
            value < 0
        ) {
            error.textContent =
                "Please enter a valid price in every field.";
            return;
        }
    }

    error.textContent = "";

    // Convert bag prices to price per kilogram.
    const ricePerKg = riceBag / 26;
    const dalPerKg = dalBag / 50;

    // Calculate ingredient costs.
    const dalCost = 1.5 * dalPerKg;
    const riceCost = 0.5 * ricePerKg;
    const normalCost = 7.5 * normalRice;

    const totalIngredients =
        dalCost + riceCost + normalCost;

    // Divide the ingredient cost among 24 covers.
    const baseCost = totalIngredients / 24;

    // Add the cost of one empty cover.
    const finalCost = baseCost + cover;

    // Display the results.
    function money(amount) {
        return "₹" + amount.toFixed(2);
    }

    document.getElementById("dalCost").textContent =
        money(dalCost);

    document.getElementById("riceCost").textContent =
        money(riceCost);

    document.getElementById("normalCost").textContent =
        money(normalCost);

    document.getElementById("totalIngredients").textContent =
        money(totalIngredients);

    document.getElementById("baseCost").textContent =
        money(baseCost);

    document.getElementById("coverCost").textContent =
        money(cover);

    document.getElementById("finalCost").textContent =
        money(finalCost);

    // Move to Screen 2.
    document.getElementById("inputScreen")
        .classList.add("hidden");

    document.getElementById("resultScreen")
        .classList.remove("hidden");
}

function goBack() {
    document.getElementById("resultScreen")
        .classList.add("hidden");

    document.getElementById("inputScreen")
        .classList.remove("hidden");
}