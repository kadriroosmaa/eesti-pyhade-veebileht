/* 
Selle koodi kirjutas Maria Alas.
Kasutasin teadmisi, mille sain eelmise JavaScript faili (joulud-ja-uusaasta) kirjutamisel.
HTML "radio"-nuppude süntaksit õppisin MDN lehelt (https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio)
Teksti värvi muutmise õppisin W3Schools-ist (https://www.w3schools.com/jsref/prop_style_color.asp)
*/

const form = document.getElementById("lihavotted");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear")

// Kui vajutatakse "Submit" nuppu, siis kasutaja valitud vastused edastatakse form'i abil siia ning neile saab "name" abil ligi.

submitButton.addEventListener("click", () => {
        const formData = new FormData(form);
        const valik1 = formData.get("1");
        const valik2 = formData.get("2");
        const valik3 = formData.get("3");
        const valik4 = formData.get("4");
        const valik5 = formData.get("5");

        /* Kui valiti õige vastusevariant, siis kuvatakse valitud variandi kõrvale roheline tekst tähendusega "Õige!".
        Kui valiti vale variant, siis kuvatakse valitud variandi kõrvale punane tekst tähendusega "Vale!".
        */

        if (valik1 === "12") {
               document.getElementById("result12").innerHTML = "Vrai!";
               document.getElementById("result12").style.color = "#1e8000"; 
        } else if (valik1 === "11") {
                document.getElementById("result11").innerHTML = "Faux!";
                document.getElementById("result11").style.color = "#ae0101";
        } else if (valik1 === "13") {
                document.getElementById("result13").innerHTML = "Faux!";
                document.getElementById("result13").style.color = "#ae0101";
        }
        if (valik2 === "23") {
               document.getElementById("result23").innerHTML = "Vrai!";
               document.getElementById("result23").style.color = "#1e8000";
        } else if (valik2 === "22") {
                document.getElementById("result22").innerHTML = "Faux!";
                document.getElementById("result22").style.color = "#ae0101";
        } else if (valik2 === "21") {
                document.getElementById("result21").innerHTML = "Faux!";
                document.getElementById("result21").style.color = "#ae0101";
        }
        if (valik3 === "32") {
               document.getElementById("result32").innerHTML = "Vrai!";
               document.getElementById("result32").style.color = "#1e8000"; 
        } else if (valik3 === "31") {
                document.getElementById("result31").innerHTML = "Faux!";
                document.getElementById("result31").style.color = "#ae0101";
        } else if (valik3 === "33") {
                document.getElementById("result33").innerHTML = "Faux!";
                document.getElementById("result33").style.color = "#ae0101";
        }
        if (valik4 === "41") {
               document.getElementById("result41").innerHTML = "Vrai!";
               document.getElementById("result41").style.color = "#1e8000";
        } else if (valik4 === "42") {
                document.getElementById("result42").innerHTML = "Faux!";
                document.getElementById("result42").style.color = "#ae0101";
        } else if (valik4 === "43") {
                document.getElementById("result43").innerHTML = "Faux!";
                document.getElementById("result43").style.color = "#ae0101";
        }
        if (valik5 === "53") {
               document.getElementById("result53").innerHTML = "Vrai!";
               document.getElementById("result53").style.color = "#1e8000";
        } else if (valik5 === "52") {
                document.getElementById("result52").innerHTML = "Faux!";
                document.getElementById("result52").style.color = "#ae0101";
        } else if (valik5 === "51") {
                document.getElementById("result51").innerHTML = "Faux!";
                document.getElementById("result51").style.color = "#ae0101";
        }
        });

clearButton.addEventListener("click", () => {
        form.reset();
        document.getElementById("result11").innerHTML = ""
        document.getElementById("result12").innerHTML = ""
        document.getElementById("result13").innerHTML = ""
        document.getElementById("result21").innerHTML = ""
        document.getElementById("result22").innerHTML = ""
        document.getElementById("result23").innerHTML = ""
        document.getElementById("result31").innerHTML = ""
        document.getElementById("result32").innerHTML = ""
        document.getElementById("result33").innerHTML = ""
        document.getElementById("result41").innerHTML = ""
        document.getElementById("result42").innerHTML = ""
        document.getElementById("result43").innerHTML = ""
        document.getElementById("result51").innerHTML = ""
        document.getElementById("result52").innerHTML = ""
        document.getElementById("result53").innerHTML = ""
        });