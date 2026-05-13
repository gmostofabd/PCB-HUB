fetch("data/pcb-data.json")
.then(res => res.json())
.then(data => {

    const grid =
    document.getElementById("pcbGrid");

    data.forEach(pcb => {

        grid.innerHTML += `
        
        <div class="pcb-card">

            <img src="${pcb.image}">

            <h3>${pcb.title}</h3>

            <p>${pcb.description}</p>

        </div>

        `;

    });

});