function redirectToCategory(category) {
    const categoryPages = {
        category1: "construction.html",
        category2: "food.html",
        category3: "technical.html",
        category4: "textile.html",
        category5: "transport.html"
    };
    // Redirect to the corresponding category page
    window.location.href = categoryPages[category];
}
