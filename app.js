let dict = {};

fetch("data.json")
.then(res => res.json())
.then(data => {
    dict = data;
    console.log("Dictionary loaded ✔");
})
.catch(err => console.log("Error loading JSON", err));

function translateWord(){
    let word = document.getElementById("input").value.toLowerCase().trim();

    if(dict[word]){
        document.getElementById("result").innerText = dict[word];
    } else {
        document.getElementById("result").innerText = "Not found";
    }
}
