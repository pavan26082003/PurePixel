document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav"); // Replace with your navbar ID
    const targetSection = document.getElementById("about"); // Replace with your target container ID

    window.addEventListener("scroll", function () {
        const targetPosition = targetSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 2; // Adjust threshold if needed

        if (targetPosition < screenPosition) {
            nav.style.display = "block";
        } else {
            nav.style.display = "none";
        }
    });
});