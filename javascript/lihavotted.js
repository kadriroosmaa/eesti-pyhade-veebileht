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
                document.getElementById("result1").innerHTML = "Correct!"; 
            }
        else {
                document.getElementById("result1").innerHTML = "Wrong answer!";
        }
        if (valik2 === "23") {
                document.getElementById("result2").innerHTML = "Correct!"; 
            }
        else {
                document.getElementById("result2").innerHTML = "Wrong answer!";
        }
        if (valik3 === "32") {
                document.getElementById("result3").innerHTML = "Correct!"; 
            }
        else {
                document.getElementById("result3").innerHTML = "Wrong answer!";
        }
        if (valik4 === "41") {
                document.getElementById("result4").innerHTML = "Correct!"; 
            }
        else {
                document.getElementById("result4").innerHTML = "Wrong answer!";
        }
        if (valik5 === "53") {
               document.getElementById("result5").innerHTML = "Correct!"; 
            }
        else {
                document.getElementById("result5").innerHTML = "Wrong answer!";
            }
        });