const attributeIcons = {

  price: { icon: "../images/dolar.svg", label: "Cena" },
  wheelchair_accessible: { icon: "../images/disabledPerson.svg", label: "Pristup za invalide" },
  time: { icon: "../images/clock.svg", label: "Radno vreme" },
  capacity: { icon: "../images/car.svg", label: "Kapacitet" },
 
};

async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : null,
    });

    if (!response.ok) {
      throw new Error(`Greška ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error.message);
    return null;
  }
}
fetchData("js/data.json")
  .then(data => {

    const allCards = document.querySelector('.all-cards-wrapper');
    data.forEach(element => { 
        console.log(element);
        
        allCards.innerHTML += 
        `   <div class="content-card">
                <div class="flex-card">
                    <div class="image-wrapper">
                        <img src="https://www.garaza.live/${element.garage.images[1]}" class="garageImage">       
                    </div>
                    <div class="content-card-wrapper">
                        <div class="content-heading">
                            <h2>${element.name}</h2>
                            <div class="btn-stats"> <img src="images/arrow.svg" alt="" srcset=""> </div>
                        </div>

                        <p class="text-block">Baba Višnjina 38/42</p>

                        <div class="all-details-wrapper">
                            <div class="detail-div">
                                    <div class="icon-wrapper"><img src="${attributeIcons.price.icon}" loading="lazy" alt="" /></div>
                                    <div class="light-text">${element.garage.price}</div>
                            </div>
                            <div class="detail-div">
                                    <div class="icon-wrapper"><img src="${attributeIcons.time.icon}" loading="lazy" alt="" /></div>
                                    <div class="light-text">${element.garage.workingTime}</div>
                            </div>
                            <div class="detail-div">
                                    <div class="icon-wrapper"><img src="${attributeIcons.capacity.icon}" loading="lazy" alt="" /></div>
                                    <div class="light-text">${element.freePlaces}</div>
                            </div>
                            <div class="detail-div">
                                
                                    <div class="icon-wrapper"><img src="${attributeIcons.wheelchair_accessible.icon}" loading="lazy" alt="" /></div>
                                    <div class="light-text">${element.garage.workingTime}</div>
                            </div>
                            

                        </div>

                        <div class="info-wrapper">
                            
                            <div class="info-div">
                                    <div class="icon-wrapper-copy">
                                        <div class="circle-red">
                                            <div class="div-block-6">
                                                <div style="font-size: 18px; color: white;">0</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="light-text">Slobodno</div>
                                </div>

                                <div class="info-div">
                                    <div class="icon-wrapper-copy">
                                        <div class="circle-red">
                                            <div class="div-block-6">
                                                <div style="font-size: 18px; color: white;">0</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="light-text">Prognoza</div>
                                </div>

                        </div>

                        <a target="_blank" href="${element.location}" class="navigation-btn">Pogledaj na navigaciji</a>
                    </div>
                </div>
                <div class="trendStats">  <canvas id="myChart"> </canvas> </div>
            </div>`

    // //grafikon, potrebno je dodati ucitavanje na klik elementa kao i dinamicki povezati informacije sa bazom vreme i broj slobodnih mesta
    // const chartCanvases = document.querySelectorAll('#myChart');

    //     chartCanvases.forEach(element => {
    //     const data = {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         datasets: [{
    //         label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         fill: false,
    //         borderColor: 'rgb(75, 192, 192)',
    //         tension: 0.1,
    //         pointStyle: 'circle',
    //         pointRadius: 5,
    //         pointHoverRadius: 10
    //         }]
    //     };

    //     const config = {
    //         type: 'line',
    //         data: data,
    //         options: {
    //         responsive: true,
    //         plugins: {
    //             title: {
    //             display: true,
    //             text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle
    //             }
    //         },
    //         scales: {
    //             y: {
    //             beginAtZero: true
    //             }
    //         }
    //         }
    //     };

    //     new Chart(element, config);
    //     });
     });
    


  });


    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
  });

    document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});



  

  

