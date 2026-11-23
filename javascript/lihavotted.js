const form = document.getElementById("lihavotted");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
        const formData = new FormData(form);
        const valik1 = formData.get("1");
        const valik2 = formData.get("2");
        const valik3 = formData.get("3");
        const valik4 = formData.get("4");
        const valik5 = formData.get("5");

        if (valik1 === "12") {
               document.getElementById("result12").innerHTML = "Vrai!"; 
        } else if (valik1 === "11") {
                document.getElementById("result11").innerHTML = "Faux!";
        } else if (valik1 === "13") {
                document.getElementById("result13").innerHTML = "Faux!";
        }
        if (valik2 === "23") {
               document.getElementById("result23").innerHTML = "Vrai!"; 
        } else if (valik2 === "22") {
                document.getElementById("result22").innerHTML = "Faux!";
        } else if (valik2 === "21") {
                document.getElementById("result21").innerHTML = "Faux!";
        }
        if (valik3 === "32") {
               document.getElementById("result32").innerHTML = "Vrai!"; 
        } else if (valik3 === "31") {
                document.getElementById("result31").innerHTML = "Faux!";
        } else if (valik3 === "33") {
                document.getElementById("result33").innerHTML = "Faux!";
        }
        if (valik4 === "41") {
               document.getElementById("result41").innerHTML = "Vrai!"; 
        } else if (valik4 === "42") {
                document.getElementById("result42").innerHTML = "Faux!";
        } else if (valik4 === "43") {
                document.getElementById("result43").innerHTML = "Faux!";
        }
        if (valik5 === "53") {
               document.getElementById("result53").innerHTML = "Vrai!"; 
        } else if (valik5 === "52") {
                document.getElementById("result52").innerHTML = "Faux!";
        } else if (valik5 === "51") {
                document.getElementById("result51").innerHTML = "Faux!";
        }
        });