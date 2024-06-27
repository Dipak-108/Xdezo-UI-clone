const accordionList = document.querySelectorAll(".accordion");

accordionList.forEach((item) => {
    item.addEventListener("click", function () {
        const detailsDiv = item.querySelector(".accordion_details");

        accordionList.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                const otherDetailsDiv = otherItem.querySelector(".accordion_details");
                if (otherDetailsDiv) {
                    otherDetailsDiv.style.display = "none";
                }
            }
        });

        item.classList.toggle("active");
        if (detailsDiv) {
            if (item.classList.contains('active')) {
                detailsDiv.style.display = "block";
            } else {
                detailsDiv.style.display = "none";
            }
        }
    });
});
