const data = [
    {
        _id: "60795d4e0489a32f948c4167",
        name: "Honda Sedan",
        price: "132",
        description:
            "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
        imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
        _id: "60795e440489a32f948c4168",
        name: "MitoSedan",
        price: "221",
        description:
            "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
        imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
        _id: "60795fc20489a32f948c4169",
        name: "Isuzu Tacoma",
        price: "105",
        description:
            "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
        imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
        _id: "6079615d0489a32f948c416a",
        name: "Chevrolet Crossover",
        price: "434",
        description:
            "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
        imageURL:  "https://i.ibb.co/VggL0Wz/jeep.png",
    },
];


data.forEach(car => {
    const { name,price ,imageURL,description }=car;
    const dataContainer =document.getElementById("card-container")
    const singleCard=document.createElement("div");
    singleCard.classList.add("col");
    singleCard.innerHTML=`
    <div class="card">
        <img src= ${imageURL} class="card-img-top img-fluid" alt="...">
        <div class="card-body">
        <h5 class="card-title"> name: ${name}</h5>
        <p class="card-text">description: ${description}</p>
        <button class="background-gradient btn text-white reunded-pill"><small>price: ${price}</small></button>
        </div>
  </div>
    `
    dataContainer.appendChild(singleCard)
    
})
 