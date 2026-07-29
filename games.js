let reviewOpen = false;

document.getElementById("ac-review").addEventListener("click", function() {

    const reviewContainer = document.getElementById("review-container");
    const button = document.getElementById("ac-review");


    if (reviewOpen) {

        reviewContainer.innerHTML = "";
        button.textContent = "Read Review";
        reviewOpen = false;

    } else {

        fetch("reviews/assassins-creed.md")
            .then(response => response.text())
            .then(markdown => {

                reviewContainer.innerHTML =
                `
                <div class="card shadow rounded-4 border-0">

                    <div class="card-body p-5">

                        ${marked.parse(markdown)}

                    </div>

                </div>
                `;

                button.textContent = "Hide Review";
                reviewOpen = true;

            });

    }

});