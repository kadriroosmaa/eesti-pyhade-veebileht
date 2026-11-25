/* 
Selle koodi kirjutas Maria Alas.
Kasutasin õppimiseks eelkõige W3Schools platvormi: 
        (https://www.w3schools.com/js/js_if_else.asp)
        (https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp)
"Form"'i ja "Submit"-nupu süntaksi võtsin nii JavaScripti kui HTML-i jaoks TutorialsPoint platvormilt AmitDiwani kirjutatud artiklist:
        (https://www.tutorialspoint.com/article/javascript-create-submit-button-for-form-submission-and-another-button-to-clear-input)
*/


const form = document.getElementById("joulud_uusaasta");
const submitButton = document.getElementById("submit");

// Kui vajutatakse "Submit" nuppu, siis kasutaja valitud vastused edastatakse form'i abil siia ning neile saab "name" abil ligi.

submitButton.addEventListener("click", () => {
        const formData = new FormData(form);
        const valik1 = formData.get("1");
        const valik2 = formData.get("2");
        const valik3 = formData.get("3");
        const valik4 = formData.get("4");
        const valik5 = formData.get("5");
        const valik6 = formData.get("6");
        const valik7 = formData.get("7");
        const valik8 = formData.get("8");
        const valik9 = formData.get("9");
        const valik10 = formData.get("10");

        // Kui kasutaja valis õige vastusevariandi (esimene, teine või kolmas), siis muutub tekstikast roheliseks, vastasel juhul punaseks. 
        
        if (valik1 === "teine") {
                document.getElementById("1").style.backgroundColor = "#d4fece"; 
            } else {
                document.getElementById("1").style.backgroundColor = "#ffcbcb";
        }
        if (valik2 === "esimene") {
                document.getElementById("2").style.backgroundColor = "#d4fece"; 
            } else {
                document.getElementById("2").style.backgroundColor = "#ffcbcb";
        }
        if (valik3 === "kolmas") {
                document.getElementById("3").style.backgroundColor = "#d4fece"; 
            } else {
                document.getElementById("3").style.backgroundColor = "#ffcbcb";
        }
        if (valik4 === "teine") {
                document.getElementById("4").style.backgroundColor = "#d4fece"; 
            } else {
                document.getElementById("4").style.backgroundColor = "#ffcbcb";
        }
        if (valik5 === "esimene") {
                document.getElementById("5").style.backgroundColor = "#d4fece"; 
            } else {
                document.getElementById("5").style.backgroundColor = "#ffcbcb";
        }
        if (valik6 === "kolmas") {
                document.getElementById("6").style.backgroundColor = "#d4fece"; 
            } else {
                document.getElementById("6").style.backgroundColor = "#ffcbcb";
        }
        if (valik7 === "teine") {
                document.getElementById("7").style.backgroundColor = "#d4fece"; 
            } else {
                document.getElementById("7").style.backgroundColor = "#ffcbcb";
        }
        if (valik8 === "kolmas") {
                document.getElementById("8").style.backgroundColor = "#d4fece"; 
            } else {
                document.getElementById("8").style.backgroundColor = "#ffcbcb";
        }
        if (valik9 === "esimene") {
                document.getElementById("9").style.backgroundColor = "#d4fece"; 
            } else {
                document.getElementById("9").style.backgroundColor = "#ffcbcb";
        }
        if (valik10 === "kolmas") {
                document.getElementById("10").style.backgroundColor = "#d4fece"; 
            } else {
                document.getElementById("10").style.backgroundColor = "#ffcbcb";
        }
        });