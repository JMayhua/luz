window.onload = function () {
    setTimeout(function () {
        history.pushState(null, "", location.href);
    }, 0);
};

window.addEventListener("popstate", function (event) {
    setTimeout(function () {
        history.pushState(null, "", location.href);
    }, 0);
});
