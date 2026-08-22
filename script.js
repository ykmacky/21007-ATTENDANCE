/* =====================================================
   DARK / LIGHT MODE
   DARK MODE IS DEFAULT
   ===================================================== */


const themeToggle =
    document.getElementById("themeToggle");


const themeIcon =
    document.getElementById("themeIcon");



/* =====================================================
   LOAD SAVED THEME
   ===================================================== */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeIcon) {

        themeIcon.textContent = "🌙";

    }

}



/* =====================================================
   CHANGE THEME
   ===================================================== */

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {


            document.body.classList.toggle("light");


            const isLight =
                document.body.classList.contains("light");


            if (isLight) {

                themeIcon.textContent = "🌙";

                localStorage.setItem(
                    "theme",
                    "light"
                );

            } else {

                themeIcon.textContent = "☀️";

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            }

        }
    );

}



/* =====================================================
   FULLSCREEN IMAGE VIEWER
   ===================================================== */


const imageViewer =
    document.getElementById("imageViewer");


const fullImage =
    document.getElementById("fullImage");


const closeViewer =
    document.getElementById("closeViewer");



/* =====================================================
   OPEN IMAGE
   ===================================================== */


const clickableImages =
    document.querySelectorAll(
        ".clickable-image"
    );


clickableImages.forEach(
    function (image) {


        image.addEventListener(
            "click",
            function () {


                if (!imageViewer || !fullImage) {

                    return;

                }


                fullImage.src =
                    image.src;


                fullImage.alt =
                    image.alt;


                imageViewer.classList.add(
                    "show"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);



/* =====================================================
   CLOSE IMAGE
   ===================================================== */


function closeImageViewer() {

    if (!imageViewer) {

        return;

    }


    imageViewer.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";


    if (fullImage) {

        fullImage.src = "";

    }

}



/* CLOSE BUTTON */

if (closeViewer) {

    closeViewer.addEventListener(
        "click",
        closeImageViewer
    );

}



/* =====================================================
   CLOSE WHEN CLICKING OUTSIDE IMAGE
   ===================================================== */


if (imageViewer) {

    imageViewer.addEventListener(
        "click",
        function (event) {


            if (
                event.target === imageViewer
            ) {

                closeImageViewer();

            }

        }
    );

}



/* =====================================================
   CLOSE WITH ESC KEY
   ===================================================== */


document.addEventListener(
    "keydown",
    function (event) {


        if (
            event.key === "Escape"
        ) {

            closeImageViewer();

        }

    }
);