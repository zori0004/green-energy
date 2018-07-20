// Load your images on page-load
function preloader() {
    const imagesList = [
       "./img/img-1.jpg",
       "./img/img-2.jpg",
       "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

const resources = {
    buttonOne: {
        title: "Solar Panels",
        imgUrl: "./img/solar-panel.jpg",
        imgAlt: "Solar Panels",
        bodyTxt: "This is probably the most common and obvious method, if you're looking into renewable power. Solar panels typically go on your roof, although you can also install them in your yard. Depending on your latitude and the orientation of the panels, you could generate 10 or more watts per square foot. A typical house consumes at least a kilowatt of power, so a few square feet of solar panels should be enough to power most or all of your needs. <br><br>If your current roof is nearing the end of its lifespan, you could also consider investing in solar shingles. Where standard rooftop solar panels are mounted on top of your current roof, solar shingles actually take the place of your roof tiles. Elon Musk's SolarCity recently announced a plan to start producing solar shingles, and other companies like SunTegra have been making them for years. <br><br>Of course, one big weakness of solar power is that it only works when the sun is up. If you want to power your home when the sun is down, you'll need to pay for grid electricity or invest in a second type of renewable energy.</p>"
    },
    buttonTwo: {
        title: "Wind Turbines",
        imgUrl: "./img/windmill.jpg",
        imgAlt: "Windmills",
        bodyTxt: "Wind turbines are most commonly found in windfarms or floating offshore, but if you have enough real estate you can install a small wind turbine on your property to power your home. There are a few downsides to a wind turbine that make them less popular in residential areas. <br><br>They can be ugly and make a lot of noise. They take up space, and depending on where you live, local laws and zoning regulations may outright forbid it. But if these disadvantages don't apply to you or don't bother you, wind power may be a great asset. <br><br>Wind power is more stable than solar, and a good-sized wind turbine can easily generate most or all of your electricity needs. Depending on your area, wind might be a better renewable investment than solar.</p>"
    },
    buttonThree: {
        title: "Hydro Power",
        imgUrl: "./img/water-dam.jpg",
        imgAlt: "Water Dam",
        bodyTxt: "This won't work for most people, but if your property contains a source of flowing water, you're in luck. You can divert some or all of the stream or river to flow through a turbine and power your home. There are a number of ways to go about doing this, but at its most basic, you'll want to find the largest vertical distance the water will travel, and divert that water so it flows through a turbine in a controlled manner. <br><br>Depending on the amount of water and vertical distance, you can produce a substantial amount of power this way. Setting up a hydro power generator is not easy, and you may need to have a professional install it for you. If you have some engineering knowledge, though, you could even build it yourself from scratch. And the advantages to hydro power are immense. Unlike solar and wind, hydro is stable and continuous, which means you'll always get the same input no matter what. <br><br>You'll never have to worry that your generator won't be able to power your home. That piece of mind might be worth a little engineering project."
    }
}

const btns = document.querySelectorAll("button");
const container = document.querySelector(".content");
const active = document.querySelector(".buttons-container"); 

// Add New Content
function eventClick(ev) {
    let btnLabel = ev.target.textContent;
    if (btnLabel === "Solar Panels") {
        container.innerHTML =   `<hr class="top-hr">
                                 <h2>${resources.buttonOne.title}</h2>
                                 <hr class="bottom-hr">
                                 <div class="left-content">
                                    <img src="${resources.buttonOne.imgUrl}" alt="${resources.buttonOne.imgAlt}">
                                 </div>
                                 <div class="right-content">
                                    <p>${resources.buttonOne.bodyTxt}</p>
                                 </div>`;
    } else if (btnLabel === "Wind Turbines") {
        container.innerHTML =   `<hr class="top-hr">
                                 <h2>${resources.buttonTwo.title}</h2>
                                 <hr class="bottom-hr">
                                 <div class="left-content">
                                    <img src="${resources.buttonTwo.imgUrl}" alt="${resources.buttonTwo.imgAlt}">
                                 </div>
                                 <div class="right-content">
                                    <p>${resources.buttonTwo.bodyTxt}</p>
                                 </div>`;
    } else {
        container.innerHTML =   `<hr class="top-hr">
                                 <h2>${resources.buttonThree.title}</h2>
                                 <hr class="bottom-hr">
                                 <div class="left-content">
                                    <img src="${resources.buttonThree.imgUrl}" alt="${resources.buttonThree.imgAlt}">
                                 </div>
                                 <div class="right-content">
                                    <p>${resources.buttonThree.bodyTxt}</p>
                                 </div>`;
    }
}

for (let btn of btns) {
    btn.addEventListener('click', eventClick);
}


// Active Button ID Change
function handleClick(e) {
    let eventActive = e.target;
    
    for(let a of btns) {
        if(a.hasAttribute("id") == true) {
            a.removeAttribute("id");
        }
    }

    eventActive.setAttribute("id", "active-button");
}

for (let btn of btns) {
    btn.addEventListener('click', handleClick);
}