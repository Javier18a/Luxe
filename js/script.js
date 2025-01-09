document.addEventListener("DOMContentLoaded", function() {
    const text1 = document.querySelector(".text1");
    const text2 = document.querySelector(".text2");

    function animateText() {
        setTimeout(() => {
            text1.style.opacity = 0;
            setTimeout(() => {
                text1.style.display = "none";
                text2.style.display = "block";
                setTimeout(() => {
                    text2.style.opacity = 1;
                    setTimeout(() => {
                        text2.style.opacity = 0;
                        setTimeout(() => {
                            text2.style.display = "none";
                            text1.style.display = "block";
                            setTimeout(() => {
                                text1.style.opacity = 1;
                                animateText();
                            }, 50);
                        }, 1000);
                    }, 3000);
                }, 50);
            }, 1000);
        }, 3000);
    }

    animateText();
});


/*Gallery*/ 
function filterSelection(category) {
    var elements = document.getElementsByClassName("filterDiv");
    if (category == "all") category = "";
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
        if (elements[i].className.indexOf(category) > -1) {
            elements[i].style.display = "block";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    filterSelection("all");
});