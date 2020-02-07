

fetch("https://caferanking.000webhostapp.com/get.php?&e=json&f=cafe")
.then((resp) => resp.json())
.then(function(data) {
    var ranking = Object.entries(data).sort((a, b) => b[1] - a[1])
    for (var i = 0; i < 100; i++) {
        var tr = document.createElement("tr");

        var td = document.createElement("td");
        td.id = "position";
        td.id = "user-rank";
        td.innerHTML = "#" +(i + 1) 

        var tdNick = document.createElement("td");
        tdNick.id = "user-info";
        tdNick.innerHTML = `<span id="user-name">${ranking[i][0]}</span>`

        var tdMessages = document.createElement("td");
        tdMessages.innerHTML = ranking[i][1]

        tr.appendChild(td)
        tr.appendChild(tdNick)
        tr.appendChild(tdMessages)

        document.getElementById("tableRanking").appendChild(tr)
     }
})
