

const reviewContainer = document.getElementById(
    "review-display-container"
);

const reviewButtons = {
    "ac-review": {
        path: "reviews/assassins-creed.md",
        title: "Assassin's Creed"
    },

    "fatal-frame-review": {
        path: "reviews/fatal-frame-2.md",
        title: "Fatal Frame II"
    }
};

let currentReview = null;

Object.entries(reviewButtons).forEach(([buttonId, review]) => {

    const button = document.getElementById(buttonId);

    button.addEventListener("click", async function () {

        // Clicking the currently open review closes it.
        if (currentReview === buttonId) {
            reviewContainer.innerHTML = "";
            button.textContent = "Read Review";
            currentReview = null;
            return;
        }

        // Reset the previously selected button.
        Object.keys(reviewButtons).forEach(id => {
            document.getElementById(id).textContent = "Read Review";
        });

        button.textContent = "Loading...";

        try {
            const response = await fetch(review.path);

            if (!response.ok) {
                throw new Error("Unable to load " + review.path);
            }

            const markdown = await response.text();

            reviewContainer.innerHTML = `
                <div class="card shadow rounded-4 border-0">
                    <div class="card-body p-4 p-md-5">
                        ${marked.parse(markdown)}
                    </div>
                </div>
            `;

            currentReview = buttonId;
            button.textContent = "Hide Review";

        } catch (error) {
            console.error(error);
            button.textContent = "Read Review";
            alert("Unable to load the review. Check the Markdown file path.");
        }

    });

});



// Assassin's Creed Marathon tier list
const tierListButton = document.getElementById("ac-tier-list-button");
const tierListContainer = document.getElementById("ac-tier-list-container");

tierListButton.addEventListener("click", function () {

    if (tierListContainer.classList.contains("d-none")) {

        tierListContainer.classList.remove("d-none");
        tierListButton.textContent = "Hide This";

    } else {

        tierListContainer.classList.add("d-none");
        tierListButton.textContent = "Show More";

    }

});
