/* =========================
   FINWISE WOMEN - COMMON JS
========================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("FinWise Women loaded successfully!");

    /* =========================
       LOGIN STATUS
    ========================= */

    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    let user = null;

    if (userData) {
        try {
            user = JSON.parse(userData);
        } catch (error) {
            console.error("Invalid user data:", error);
        }
    }

    const loginLinks = document.querySelectorAll(".nav-login");

    loginLinks.forEach(function (link) {

        if (token && user) {
            link.textContent = "Dashboard";
            link.href = "dashboard.html";
        } else {
            link.textContent = "Login";
            link.href = "login.html";
        }

    });


    /* =========================
       LOGOUT FUNCTION
    ========================= */

    const logoutButtons =
        document.querySelectorAll(".logout-btn");

    logoutButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            alert("You have been logged out.");

            window.location.href = "index.html";

        });

    });


    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });

});


/* =========================
   HELPER FUNCTIONS
========================= */

function getToken() {

    return localStorage.getItem("token");

}


function getUser() {

    const userData =
        localStorage.getItem("user");

    if (!userData) {
        return null;
    }

    try {
        return JSON.parse(userData);
    } catch (error) {
        console.error("Invalid user data:", error);
        return null;
    }

}


function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "index.html";

}