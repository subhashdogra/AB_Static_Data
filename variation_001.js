(function () {
        "use strict";

        if (typeof unsafeWindow !== "undefined") window = unsafeWindow;

        var tag = "Focus-Desktop-Navigation-Menu-on-Most-Frequented-Categories",
                debug = document.cookie.indexOf("OM") > -1;

        window[tag] = {
                log: function (msg) {
                        if (debug) console.log("[OM]", tag, "-->", msg);
                },

                waitForElement: function (cssSelector, callback) {
                        var wait = setInterval(function () {
                                if (document.querySelector(cssSelector)) {
                                        callback(document.querySelector(cssSelector));
                                        clearInterval(wait)
                                }

                        }, 5000)

                        setTimeout(function () {
                                clearInterval(wait);
                        }, 10000)

                },

                init: function () {
                        try {
                                this.waitForElement("body", function (docBody) {
                                        docBody.classList.add(tag);
                                });
                                if (debug && document.title.indexOf("OM") < 0) {
                                        document.title = "[OM] " + document.title;
                                }

                                this.waitForElement('div> [routerlink="/c/restaurant-equipment"]', initVariation);

                                window[tag].log("test running");
                        } catch (err) {
                                window[tag].log(err.message);
                        }
                },
        };
        window[tag].init();


        var newSvg = `
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z"
                fill="#46494E" />
  </svg>`;


        var submenu =
                ` <div class="omrestrudant-submenu-container">
        <div class="omrestrudant-inner-container">
                <a href="https://www.gofoodservice.com/c/restaurant-equipment" class="shopallheading">
                        <h1 class="omsubmenu-heading">Shop All Restaurant Equipment </h1>
                        ${newSvg}
                </a>
                <div class="omsubmenu-image-section">
                        <div class="om-imgbox-one omall-box-img">
                                <a href="https://www.gofoodservice.com/c/refrigeration-equipment"><img
                                                src="https://cdn2.gofoodservice.com/cms/aa.5e04f0b0bf67b.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Refrigeration Equipment </p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-two omall-box-img">
                                <a href="https://www.gofoodservice.com/c/cooking-equipment"><img
                                                src="https://cdn2.gofoodservice.com/cms/cooking-equipment.5e067c4f0717b.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Cooking Equipment</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-three omall-box-img">
                                <a href="https://www.gofoodservice.com/c/commercial-ovens"><img
                                                src="https://cdn2.gofoodservice.com/cms/ovens.607dc537d523a.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Commercial Ovens</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/food-holding-warming-equipment"><img
                                                src="https://cdn2.gofoodservice.com/cms/food-holding-warming-equipment.5e0669cd345d9.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Food Holding & <span class="divider"></span> Warming Equipment</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/commercial-dish-washing-equipment-accessories"><img
                                                src="https://cdn2.gofoodservice.com/cms/dish-washing.5e068c875f1e3.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Dish Washing Equipment</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                </div>
                <!-- ------------------------------------------image-section------------------------- -->
                <div class="om-popular-productsection">
                        <div class="om-popular-heading ">
                                <h1>Popular Restaurant Equipment Categories</h1>
                        </div>
                        <div class="om-popular-product-list desktop">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-ice-equipment-supplies">
                                                        <li>Ice Equipment & Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-display-merchandising">
                                                        <li>Food Display & Merchandising</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-preparation-equipment">
                                                        <li>Food Preparation</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/beverage-equipment">
                                                        <li>Beverage Equipment</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-work-tables-stations">
                                                        <li>Commercial Worktables & Stations</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/commercial-sinks">
                                                        <li>Commercials Sinks</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-faucets-plumbing">
                                                        <li>Faucets & Plumbing</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/convection-ovens">
                                                        <li>Convection Ovens</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/commercial-gas-ranges">
                                                        <li>Commercial Gas Ranges</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/air-fryers">
                                                        <li>Air Fryers</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/reach-in-refrigerators">
                                                        <li>Reach-In Refrigeration</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/high-speed-rapid-cook-ovens">
                                                        <li>High Speed and Rapid Cook Ovens</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/reach-in-refrigerators-freezers">
                                                        <li>Reach-In Refrigerators & Freezers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/countertop-gas-griddles">
                                                        <li>Countertop Gas Griddles</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/ice-water-dispensers">
                                                        <li>Ice & Water Dispensers</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/commercial-kitchen-hoods">
                                                        <li>Commercial Kitchen & Range Hoods</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/gas-fryers">
                                                        <li>Gas Fryers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/undercounter-dishwashers">
                                                        <li>Undercounter Dishwashers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/undercounter-ice-machines">
                                                        <li>Undercounter Ice Machines</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/merchandiser-glass-door-refrigerators">
                                                        <li>Merchandiser Glass Door Refrigerators</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>

                        <div class="om-popular-product-list tablet">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-dish-washing-equipment-accessories">
                                                        <li>Dish Washing Equipment</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-ice-equipment-supplies">
                                                        <li>Ice Equipment & Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-display-merchandising">
                                                        <li>Food Display & Merchandising</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-preparation-equipment">
                                                        <li>Food Preparation</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/beverage-equipment">
                                                        <li>Beverage Equipment</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-work-tables-stations">
                                                        <li>Commercial Worktables & Stations</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/commercial-sinks">
                                                        <li>Commercials Sinks</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-faucets-plumbing">
                                                        <li>Faucets & Plumbing</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/convection-ovens">
                                                        <li>Convection Ovens</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/commercial-gas-ranges">
                                                        <li>Commercial Gas Ranges</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/air-fryers">
                                                        <li>Air Fryers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/reach-in-refrigerators">
                                                        <li>Reach-In Refrigeration</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/high-speed-rapid-cook-ovens">
                                                        <li>High Speed and Rapid Cook Ovens</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/reach-in-refrigerators-freezers">
                                                        <li>Reach-In Refrigerators & Freezers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/countertop-gas-griddles">
                                                        <li>Countertop Gas Griddles</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/ice-water-dispensers">
                                                        <li>Ice & Water Dispensers</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                </div>
                <!-----------------------popularlist section----------------------------->
        </div>
</div>`;

        var smallware = `<div class="omrestrudant-submenu-container om-smallwares-container">
        <div class="omrestrudant-inner-container">
                <a href="https://www.gofoodservice.com/c/smallwares" class="shopallheading">
                        <h1 class="omsubmenu-heading">Shop All Smallwares</h1>
                        ${newSvg}
                </a>
                <div class="omsubmenu-image-section">
                        <div class="om-imgbox-one omall-box-img">
                                <a href="https://www.gofoodservice.com/c/kitchen-hand-tools"><img
                                                src="https://cdn2.gofoodservice.com/cms/kitchen-hand-tools.5e0baf5634c1a.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Kitchen Hand Tools</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-two omall-box-img">
                                <a href="https://www.gofoodservice.com/c/cookware"><img
                                                src="https://cdn2.gofoodservice.com/cms/cookware2.5e148f104faeb.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Cookware</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-three omall-box-img">
                                <a href="https://www.gofoodservice.com/c/food-storage-supplies"><img
                                                src="https://cdn2.gofoodservice.com/cms/food-beverage-storage.5e0baf627ede3.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Food Storage Supplies</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/kitchen-cutlery"><img
                                                src="https://cdn2.gofoodservice.com/cms/kitchen-cutlery.5e0fbd287c17c.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Kitchen Cutlery</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/beverage-service"><img
                                                src="https://cdn2.gofoodservice.com/cms/beverageservice2.5e136af9a9d65.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Beverage Service</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                </div>
                <!-- ------------------------------------------image-section------------------------- -->
                <div class="om-popular-productsection">
                        <div class="om-popular-heading ">
                                <h1>Popular smallwares Categories</h1>
                        </div>
                        <div class="om-popular-product-list desktop">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/kitchen-supplies">
                                                        <li>Kitchen Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/baking-smallwares">
                                                        <li>Baking Smallwares</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/chafing-dishes-chafers-chafer-accessories">
                                                        <li>Chafing Dishes, Chafers, & Chafer Accessories</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/pizza-tools">
                                                        <li>Pizza Tools & Accessories</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/bartending-supplies">
                                                        <li>Bartending Supplies</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/host-server-waiter-supplies-accessories">
                                                        <li>Host, Server, Waiter Supplies & Accessories</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/hotel-restaurant-apparel-linens">
                                                        <li>Hotel / Restaurant Apparel & Linens</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-signs-boards">
                                                        <li>Restaurant Signs & Boards</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/supermarket-retail-supplies">
                                                        <li>Supermarket & Retail Supplies</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/salad-bar-equipment-accessories">
                                                        <li>Salad Bar, Food Bar, & Buffet Line Supplies</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/cup-utensil-and-condiment-organizers-dispensers">
                                                        <li>Cup Dispensers, Lid Organizers, & Condiment Organizers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/baking-molds">
                                                        <li>Baking Molds & Rings</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/wire-shelving">
                                                        <li>Wire Shelving</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/chafing-dishes">
                                                        <li>Chafing Dishes</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cutting-boards">
                                                        <li>Cutting Boards</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/underbar-ice-bins-ice-chests">
                                                        <li>Underbar Ice Bins & Ice Chests</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/stock-pots">
                                                        <li>Stock Pots</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/guest-checks">
                                                        <li>Guest Checks</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/beer-dispensers">
                                                        <li>Beer Dispensers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cake-boxes-bakery-boxes">
                                                        <li>Bakery boxes</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                        <div class="om-popular-product-list tablet">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/beverage-service">
                                                        <li>Beverage Service</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/kitchen-supplies">
                                                        <li>Kitchen Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/baking-smallwares">
                                                        <li>Baking Smallwares</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/chafing-dishes-chafers-chafer-accessories">
                                                        <li>Chafing Dishes, Chafers, & Chafer Accessories</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/pizza-tools">
                                                        <li>Pizza Tools & Accessories</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/bartending-supplies">
                                                        <li>Bartending Supplies</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/host-server-waiter-supplies-accessories">
                                                        <li>Host, Server, Waiter Supplies & Accessories</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/hotel-restaurant-apparel-linens">
                                                        <li>Hotel / Restaurant Apparel & Linens</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/restaurant-signs-boards">
                                                        <li>Restaurant Signs & Boards</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/supermarket-retail-supplies">
                                                        <li>Supermarket & Retail Supplies</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/salad-bar-equipment-accessories">
                                                        <li>Salad Bar, Food Bar, & Buffet Line Supplies</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/cup-utensil-and-condiment-organizers-dispensers">
                                                        <li>Cup Dispensers, Lid Organizers, & Condiment Organizers</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/baking-molds">
                                                        <li>Baking Molds & Rings</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/wire-shelving">
                                                        <li>Wire Shelving</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/chafing-dishes">
                                                        <li>Chafing Dishes</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cutting-boards">
                                                        <li>Cutting Boards</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>

                </div>
                <!-----------------------popularlist section----------------------------->
        </div>
</div>`;


        var tabletop = `<div class="omrestrudant-submenu-container om-table-container">
        <div class="omrestrudant-inner-container">
                <a href="https://www.gofoodservice.com/c/tabletop" class="shopallheading">
                        <h1 class="omsubmenu-heading">Shop All Tabletop</h1>
                        ${newSvg}
                </a>
                <div class="omsubmenu-image-section">
                        <div class="om-imgbox-one omall-box-img">
                                <a href="https://www.gofoodservice.com/c/dinnerware"><img
                                                src="https://cdn2.gofoodservice.com/cms/dinnerware.5e0e37125de75.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Dinnerware</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-two omall-box-img">
                                <a href="https://www.gofoodservice.com/c/servingware-displayware"><img
                                                src="https://cdn2.gofoodservice.com/cms/servingware-displayware.5e0bc6bc33075.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Servingware &<span class="divider"></span> Displayware</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-three omall-box-img">
                                <a href="https://www.gofoodservice.com/c/flatware"><img
                                                src="https://cdn2.gofoodservice.com/cms/flatware.5e0bbf64653f7.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Flatware</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/beverageware"><img
                                                src="https://cdn2.gofoodservice.com/cms/beverageware.5e0e366e169ba.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Beverageware</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/tabletop-accessories"><img
                                                src="https://cdn2.gofoodservice.com/cms/tabletopaccessories.5f6a13f8251e7.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Tabletop Accessories</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                </div>
                <!-- ------------------------------------------image-section------------------------- -->
                <div class="om-popular-productsection">
                        <div class="om-popular-heading ">
                                <h1>Popular tabletop Categories</h1>
                        </div>
                        <div class="om-popular-product-list desktop">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/beverage-service">
                                                        <li>Beverage Service</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/cup-utensil-and-condiment-organizers-dispensers">
                                                        <li>Cup Dispensers, Lid Organizers, & Condiment Organizers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-dinnerware">
                                                        <li>Disposable Dinnerware</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-beverageware">
                                                        <li>Disposable Beverageware</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/melamine-plates">
                                                        <li>Melamine Plates</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/cocktail-glasses">
                                                        <li>Cocktail Glasses</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-plastic-cups">
                                                        <li>Disposable Plastic Cups</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-paper-cups">
                                                        <li>Disposable Paper Cups</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/reusable-plastic-bowls">
                                                        <li>Reusable Plastic Bowls</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/china-dinnerware">
                                                        <li>China Dinnerware</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/glassware">
                                                        <li>Glassware</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/porcelain-plates">
                                                        <li>Porcelain Plates</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/beverage-dispensers">
                                                        <li>Beverage Dispensers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-paper-dinnerware">
                                                        <li>Disposable Paper Dinnerware</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/refrigerated-beverage-dispensers">
                                                        <li>Refrigerated Beverage Dispensers</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/flatware-forks">
                                                        <li>Flatware Forks</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/cold-frozen-beverage-dispensers">
                                                        <li>Cold & Frozen Beverage Dispensers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/beer-glasses">
                                                        <li>Beer Glasses</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-flatware">
                                                        <li>Disposable Flatware</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/paper-napkins">
                                                        <li>Paper Napkins</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                        <div class="om-popular-product-list tablet">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/tabletop-accessories">
                                                        <li>Tabletop Accessories</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/beverage-service">
                                                        <li>Beverage Service</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/cup-utensil-and-condiment-organizers-dispensers">
                                                        <li>Cup Dispensers, Lid Organizers, & Condiment Organizers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-dinnerware">
                                                        <li>Disposable Dinnerware</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/disposable-beverageware">
                                                        <li>Disposable Beverageware</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/melamine-plates">
                                                        <li>Melamine Plates</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cocktail-glasses">
                                                        <li>Cocktail Glasses</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-plastic-cups">
                                                        <li>Disposable Plastic Cups</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/disposable-paper-cups">
                                                        <li>Disposable Paper Cups</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/reusable-plastic-bowls">
                                                        <li>Reusable Plastic Bowls</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/china-dinnerware">
                                                        <li>China Dinnerware</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/glassware">
                                                        <li>Glassware</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/porcelain-plates">
                                                        <li>Porcelain Plates</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/beverage-dispensers">
                                                        <li>Beverage Dispensers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-paper-dinnerware">
                                                        <li>Disposable Paper Dinnerware</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/refrigerated-beverage-dispensers">
                                                        <li>Refrigerated Beverage Dispensers</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                </div>
                <!-----------------------popularlist section----------------------------->
        </div>
</div>`;


        var janitor = `<div class="omrestrudant-submenu-container om-janitor-container">
        <div class="omrestrudant-inner-container">
                <a href="https://www.gofoodservice.com/c/janitorial-supplies" class="shopallheading">
                        <h1 class="omsubmenu-heading">Shop All Janitorial Supplies</h1>
                        ${newSvg}
                </a>
                <div class="omsubmenu-image-section">
                        <div class="om-imgbox-one omall-box-img">
                                <a href="https://www.gofoodservice.com/c/floor-care-equipment-supplies"><img
                                                src="https://cdn2.gofoodservice.com/cms/floorcare.5e14c01336f9c.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Janitorial Floor<span class="divider"></span> Equipment</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-two omall-box-img">
                                <a href="https://www.gofoodservice.com/c/janitorial-disposables"><img
                                                src="https://cdn2.gofoodservice.com/cms/janitorialdisposables4.5eaae80ddb2ad.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Janitorial Disposables</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-three omall-box-img">
                                <a href="https://www.gofoodservice.com/c/restroom-supplies"><img
                                                src="https://cdn2.gofoodservice.com/cms/restroomsupplies.5e14bffe29dd2.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Restroom Supplies</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/trash-recycling"><img
                                                src="https://cdn2.gofoodservice.com/cms/trashrecycling.5e14c00a071ab.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Waste & Trash Cans</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/cleaning-chemicals"><img
                                                src="https://cdn2.gofoodservice.com/cms/cleaningchemicals2.5e14c0260e9a7.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Cleaning Chemicals</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                </div>
                <!-- ------------------------------------------image-section------------------------- -->
                <div class="om-popular-productsection">
                        <div class="om-popular-heading ">
                                <h1>Popular Janitorial Supplies Categories</h1>
                        </div>
                        <div class="om-popular-product-list desktop">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/safety-security">
                                                        <li>Safety & Security</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cleaning-supplies-tools">
                                                        <li>Cleaning Tools & Supplies</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/facility-sanitation-maintenance">
                                                        <li>Facility Sanitation & Maintenance </li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-beverageware">
                                                        <li>Commercial Floor Mats</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/janitorial-maintenance-industrial-carts">
                                                        <li>Janitorial & Maintenance Carts</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/hand-soap-lotion-sanitizers">
                                                        <li>Hand Soap & Sanitizers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/trash-cans-recycling-bins">
                                                        <li>Trash Cans & Recycling Bins</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/vacuum-cleaners">
                                                        <li>Vacuum Cleaners</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-gloves">
                                                        <li>Disposable Gloves</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/china-dinnerware">
                                                        <li>Garbage Bags & Trash Can Liners</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-toilet-paper-toilet-tissue">
                                                        <li>Commercial Toilet Paper & Tissue</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/electric-hand-dryers">
                                                        <li>Electric Hand Dryers</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/food-equipment-cleaners-descalers-degreasers">
                                                        <li>Food Equipment Cleaners, Descalers, & Degreasers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/housekeeping-chemicals">
                                                        <li>Housekeeping Chemicals</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/restaurant-pest-control-products">
                                                        <li>Pest Control Products</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/flatware-forks">
                                                        <li>Cleaning Wipes</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/cold-frozen-beverage-dispensers">
                                                        <li>Warewashing Chemicals</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/beer-glasses">
                                                        <li>Mops & Mopping Accessories</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-flatware">
                                                        <li>First Aid Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/paper-napkins">
                                                        <li>Heating, Cooling, & Air Quality</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                        <div class="om-popular-product-list tablet">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/cleaning-chemicals">
                                                        <li>Cleaning Chemicals</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/safety-security">
                                                        <li>Safety & Security</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cleaning-supplies-tools">
                                                        <li>Cleaning Tools & Supplies</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/facility-sanitation-maintenance">
                                                        <li>Facility Sanitation & Maintenance </li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/disposable-beverageware">
                                                        <li>Commercial Floor Mats</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/janitorial-maintenance-industrial-carts">
                                                        <li>Janitorial & Maintenance Carts</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/hand-soap-lotion-sanitizers">
                                                        <li>Hand Soap & Sanitizers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/trash-cans-recycling-bins">
                                                        <li>Trash Cans & Recycling Bins</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/vacuum-cleaners">
                                                        <li>Vacuum Cleaners</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-gloves">
                                                        <li>Disposable Gloves</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/china-dinnerware">
                                                        <li>Garbage Bags & Trash Can Liners</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-toilet-paper-toilet-tissue">
                                                        <li>Commercial Toilet Paper & Tissue</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/electric-hand-dryers">
                                                        <li>Electric Hand Dryers</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/food-equipment-cleaners-descalers-degreasers">
                                                        <li>Food Equipment Cleaners, Descalers, & Degreasers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/housekeeping-chemicals">
                                                        <li>Housekeeping Chemicals</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/restaurant-pest-control-products">
                                                        <li>Pest Control Products</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                </div>
                <!-----------------------popularlist section----------------------------->
        </div>
</div>`;

        var Disposables = `<div class="omrestrudant-submenu-container om-Disposables-container">
        <div class="omrestrudant-inner-container">
                <a href="https://www.gofoodservice.com/c/janitorial-supplies" class="shopallheading">
                        <h1 class="omsubmenu-heading">Shop All Disposables</h1>
                        ${newSvg}
                </a>
                <div class="omsubmenu-image-section">
                        <div class="om-imgbox-one omall-box-img">
                                <a href="https://www.gofoodservice.com/c/food-containers-packaging-supplies"><img
                                                src="https://cdn2.gofoodservice.com/cms/foodcontainerspackagingsupplies.5e14f9ce4e300.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Food Containers &<span class="divider"></span> Packaging Supplies</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-two omall-box-img">
                                <a href="https://www.gofoodservice.com/c/disposable-dinnerware"><img
                                                src="https://cdn2.gofoodservice.com/cms/disposabledinnerware.5e14f9b0c76f9.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Disposable Dinnerware</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-three omall-box-img">
                                <a href="https://www.gofoodservice.com/c/disposable-beverageware"><img
                                                src="https://cdn2.gofoodservice.com/cms/disposablebeverageware2.5e14f9ba523aa.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Disposable Beverageware</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/janitorial-disposables"><img
                                                src="https://cdn2.gofoodservice.com/cms/janitorialdisposables4.5eb445170daf2.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Janitorial Disposables</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/food-safety-disposables"><img
                                                src="https://cdn2.gofoodservice.com/cms/foodsafety3.5eb444bf095fd.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Food Safety Disposables</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                </div>
                <!-- ------------------------------------------image-section------------------------- -->
                <div class="om-popular-productsection">
                        <div class="om-popular-heading ">
                                <h1>Popular Disposables Categories</h1>
                        </div>
                        <div class="om-popular-product-list desktop">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/food-take-out-boxes">
                                                        <li>Food Take-Out Boxes & Containers</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/disposable-host-server-supplies">
                                                        <li>Disposable Host & Server Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-take-out-containers">
                                                        <li>To-Go Boxes & Take-Out Containers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-packaging-supplies">
                                                        <li>Food Packaging Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-food-bags">
                                                        <li>Disposable Food Bags</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/cleaning-wipes">
                                                        <li>Cleaning Wipes</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/guest-checks">
                                                        <li>Guest Checks</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-food-trays">
                                                        <li>Disposable Food Trays</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/aluminum-foil-pans">
                                                        <li>Aluminum Foil Pans</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-paper-dinnerware">
                                                        <li>Disposable Paper Dinnerware</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/disposable-plastic-cups">
                                                        <li>Disposable Plastic Cups</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/grocery-bags">
                                                        <li>Grocery Bags</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/reusable-to-go-containers">
                                                        <li>Reusable To-Go Containers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-paper-cups">
                                                        <li>Disposable Paper Cups</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cake-boxes-bakery-boxes">
                                                        <li>Bakery Boxes</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/food-basket-liners">
                                                        <li>Food Basket Liners</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-flatware">
                                                        <li>Disposable Flatware</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/paper-napkins">
                                                        <li>Paper Napkins</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-pan-liners">
                                                        <li>Food Pan Liners</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/vacuum-packaging-machine-bags">
                                                        <li>Vacuum Sealer Bags & Packaging Bags</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                        <div class="om-popular-product-list tablet">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/food-safety-disposables">
                                                        <li>Food Safety Disposables</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-take-out-boxes">
                                                        <li>Food Take-Out Boxes & Containers</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/disposable-host-server-supplies">
                                                        <li>Disposable Host & Server Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-take-out-containers">
                                                        <li>To-Go Boxes & Take-Out Containers</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/food-packaging-supplies">
                                                        <li>Food Packaging Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-food-bags">
                                                        <li>Disposable Food Bags</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cleaning-wipes">
                                                        <li>Cleaning Wipes</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/guest-checks">
                                                        <li>Guest Checks</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/disposable-food-trays">
                                                        <li>Disposable Food Trays</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/aluminum-foil-pans">
                                                        <li>Aluminum Foil Pans</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-paper-dinnerware">
                                                        <li>Disposable Paper Dinnerware</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-plastic-cups">
                                                        <li>Disposable Plastic Cups</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/grocery-bags">
                                                        <li>Grocery Bags</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/reusable-to-go-containers">
                                                        <li>Reusable To-Go Containers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/disposable-paper-cups">
                                                        <li>Disposable Paper Cups</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cake-boxes-bakery-boxes">
                                                        <li>Bakery Boxes</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                </div>
                <!-----------------------popularlist section----------------------------->
        </div>
</div>`;


        var Storage = `<div class="omrestrudant-submenu-container om-Storage-container">
        <div class="omrestrudant-inner-container">
                <a href="https://www.gofoodservice.com/c/storage-transport" class="shopallheading">
                        <h1 class="omsubmenu-heading">Shop All Storage & Transport</h1>
                        ${newSvg}
                </a>
                <div class="omsubmenu-image-section">
                        <div class="om-imgbox-one omall-box-img">
                                <a href="https://www.gofoodservice.com/c/commercial-restaurant-shelving"><img
                                                src="https://cdn2.gofoodservice.com/cms/shelving2.627c22e0c7c3a.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Commercial Shelving</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-two omall-box-img">
                                <a href="https://www.gofoodservice.com/c/food-carriers-beverage-dispensers"><img
                                                src="https://cdn2.gofoodservice.com/cms/foodcarriersbeveragedispensers2.5e4d94f778b40.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Food Carriers &<span class="divider"></span> Beverage Dispensers</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-three omall-box-img">
                                <a href="https://www.gofoodservice.com/c/storage-racks"><img
                                                src="https://cdn2.gofoodservice.com/cms/storageracks2.5e160a57751e0.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Storage Racks</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/commercial-carts"><img
                                                src="https://cdn2.gofoodservice.com/cms/carts.5e1609fb9f463.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Commercial Carts</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/trucks-dollies"><img
                                                src="https://cdn2.gofoodservice.com/cms/trucksdollies.5e160a1b0f3ca.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Trucks & Dollies</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                </div>
                <!-- ------------------------------------------image-section------------------------- -->
                <div class="om-popular-productsection">
                        <div class="om-popular-heading ">
                                <h1>Popular storage transport Categories</h1>
                        </div>
                        <div class="om-popular-product-list desktop">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/industrial-storage-transport">
                                                        <li>Industrial Storage & Transport</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/wire-shelving">
                                                        <li>Wire Shelving</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cooking-carts">
                                                        <li>Cooking Carts</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/refrigeration-shelving">
                                                        <li>Refrigeration Shelving</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/glass-racks-cup-racks-extenders">
                                                        <li>Glass Racks, Cup Racks, & Extenders</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/food-pan-carriers">
                                                        <li>Food Pan Carriers</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/insulated-food-delivery-bags-catering-bags">
                                                        <li>Insulated Food Delivery Bags & Catering Bags</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/utility-carts-bus-carts">
                                                        <li>Utility Carts & Bus Carts</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/refrigerated-beverage-dispensers">
                                                        <li>Refrigerated Beverage Dispensers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/portable-bars">
                                                        <li>Portable Bars</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/dish-flatware-racks">
                                                        <li>Dish & Flatware Racks</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/cold-frozen-beverage-dispensers">
                                                        <li>Cold & Frozen Beverage Dispensers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/meal-delivery-carts">
                                                        <li>Meal Delivery Carts</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/janitorial-maintenance-industrial-carts">
                                                        <li>Janitorial, Maintenance, & Industrial Carts</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-beverage-service-carts">
                                                        <li>Food & Beverage Service Carts</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/dish-cleanup-storage-carts">
                                                        <li>Dish Cleanup & Storage Carts</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-beverage-carrier-dollies">
                                                        <li>Food & Beverage Carrier Dollies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/utility-trucks-dollies">
                                                        <li>Utility Trucks & Dollies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/bun-pan-sheet-pan-racks">
                                                        <li>Bun Pan & Sheet Pan Racks</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/heated-shelf-food-warmers">
                                                        <li>Heated Shelf Food Warmers</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                        <div class="om-popular-product-list tablet">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/trucks-dollies">
                                                        <li>Trucks & Dollies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/industrial-storage-transport">
                                                        <li>Industrial Storage & Transport</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/wire-shelving">
                                                        <li>Wire Shelving</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cooking-carts">
                                                        <li>Cooking Carts</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/refrigeration-shelving">
                                                        <li>Refrigeration Shelving</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/glass-racks-cup-racks-extenders">
                                                        <li>Glass Racks, Cup Racks, & Extenders</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-pan-carriers">
                                                        <li>Food Pan Carriers</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/insulated-food-delivery-bags-catering-bags">
                                                        <li>Insulated Food Delivery Bags & Catering Bags</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/utility-carts-bus-carts">
                                                        <li>Utility Carts & Bus Carts</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/refrigerated-beverage-dispensers">
                                                        <li>Refrigerated Beverage Dispensers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/portable-bars">
                                                        <li>Portable Bars</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/dish-flatware-racks">
                                                        <li>Dish & Flatware Racks</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/cold-frozen-beverage-dispensers">
                                                        <li>Cold & Frozen Beverage Dispensers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/meal-delivery-carts">
                                                        <li>Meal Delivery Carts</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/janitorial-maintenance-industrial-carts">
                                                        <li>Janitorial, Maintenance, & Industrial Carts</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-beverage-service-carts">
                                                        <li>Food & Beverage Service Carts</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                </div>
                <!-----------------------popularlist section----------------------------->
        </div>
</div>`;

        var FoodBeverages = `<div class="omrestrudant-submenu-container om-FoodBeverages-container">
        <div class="omrestrudant-inner-container">
                <a href="https://www.gofoodservice.com/c/food-beverage" class="shopallheading">
                        <h1 class="omsubmenu-heading">Shop All Food & Beverages</h1>
                        ${newSvg}
                </a>
                <div class="omsubmenu-image-section">
                        <div class="om-imgbox-one omall-box-img">
                                <a href="https://www.gofoodservice.com/c/beverages"><img
                                                src="https://cdn.gofoodservice.com/cms/beverages3.6331d29a26f89.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Beverages</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-two omall-box-img">
                                <a href="https://www.gofoodservice.com/c/herbs-spices"><img
                                                src="https://cdn2.gofoodservice.com/cms/herbs-spicesv1.5ffcc5c4191ec.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Herbs, Spices, &<span class="divider"></span> Seasonings</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-three omall-box-img">
                                <a href="https://www.gofoodservice.com/c/condiments-sauces"><img
                                                src="https://cdn2.gofoodservice.com/cms/condiments2.5e1637e507562.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Condiments & Sauces</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/ingredients-snacks"><img
                                                src="https://cdn2.gofoodservice.com/cms/ingredientssnacks.6178276e71dec.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Ingredients & Snacks</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/concession-specialty-foods"><img
                                                src="https://cdn2.gofoodservice.com/cms/concessionfoods.5e1637ee74ff7.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Concession & Specialty<span class="divider"></span> Foods</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                </div>
                <!-- ------------------------------------------image-section------------------------- -->
                <div class="om-popular-productsection">
                        <div class="om-popular-heading ">
                                <h1>Popular Food & Beverages Categories</h1>
                        </div>
                        <div class="om-popular-product-list desktop">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/cooking-oil-sprays">
                                                        <li>Cooking Oils & Sprays</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/beverage-flavoring-syrups-sauces">
                                                        <li>Beverage Flavoring Syrups & Sauces</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/fryer-oil-cooking-oil">
                                                        <li>Cooking Oil & Fryer Oil</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/slushy-snow-cone-shaved-ice-syrups">
                                                        <li>Slushy, Snow Cone & Shaved Ice Syrups</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/ketchup-ketchup-packets">
                                                        <li>Ketchup Packets</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/bottled-canned-drinks">
                                                        <li>Bottled & Canned Drinks</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/coffee-espresso">
                                                        <li>Coffee & Espresso</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/soft-serve-ice-cream-mix">
                                                        <li>Soft Serve Ice Cream Mix</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/chips-pretzels">
                                                        <li>Chips & Pretzels</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/nacho-chips-toppings">
                                                        <li>Nacho Chips & Toppings</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/hot-beverages">
                                                        <li>Hot Beverages</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cold-beverages">
                                                        <li>Cold Beverages</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/iced-frozen-beverages">
                                                        <li>Iced & Frozen Beverages</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/dry-baking-ingredients">
                                                        <li>Dry Baking Ingredients</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/breading-mixes">
                                                        <li>Breading & Mixes</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/snacks-cookies">
                                                        <li>Snacks & Cookies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/icing-frosting">
                                                        <li>Icing & Frosting</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/popcorn-supplies">
                                                        <li>Popcorn & Popcorn Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/bar-drink-mixes">
                                                        <li>Bar Drink Mixes</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/tea-mixes-syrups-bags">
                                                        <li>Tea</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                        <div class="om-popular-product-list tablet">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/concession-specialty-foods">
                                                        <li>Concession & Specialty Foods</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cooking-oil-sprays">
                                                        <li>Cooking Oils & Sprays</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/beverage-flavoring-syrups-sauces">
                                                        <li>Beverage Flavoring Syrups & Sauces</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/fryer-oil-cooking-oil">
                                                        <li>Cooking Oil & Fryer Oil</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/slushy-snow-cone-shaved-ice-syrups">
                                                        <li>Slushy, Snow Cone & Shaved Ice Syrups</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/ketchup-ketchup-packets">
                                                        <li>Ketchup Packets</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/bottled-canned-drinks">
                                                        <li>Bottled & Canned Drinks</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/coffee-espresso">
                                                        <li>Coffee & Espresso</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/soft-serve-ice-cream-mix">
                                                        <li>Soft Serve Ice Cream Mix</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/chips-pretzels">
                                                        <li>Chips & Pretzels</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/nacho-chips-toppings">
                                                        <li>Nacho Chips & Toppings</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/hot-beverages">
                                                        <li>Hot Beverages</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/cold-beverages">
                                                        <li>Cold Beverages</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/iced-frozen-beverages">
                                                        <li>Iced & Frozen Beverages</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/dry-baking-ingredients">
                                                        <li>Dry Baking Ingredients</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/breading-mixes">
                                                        <li>Breading & Mixes</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                </div>
                <!-----------------------popularlist section----------------------------->
        </div>
</div>`;

        var Furniture = `<div class="omrestrudant-submenu-container om-Furniture-container">
        <div class="omrestrudant-inner-container">
                <a href="https://www.gofoodservice.com/c/commercial-furniture" class="shopallheading">
                        <h1 class="omsubmenu-heading">Shop All Furniture</h1>
                        ${newSvg}
                </a>
                <div class="omsubmenu-image-section">
                        <div class="om-imgbox-one omall-box-img">
                                <a href="https://www.gofoodservice.com/c/restaurant-furniture"><img
                                                src="https://cdn2.gofoodservice.com/cms/furniture.5f64bad1bd28c.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Restaurant Furniture</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-two omall-box-img">
                                <a href="https://www.gofoodservice.com/c/restaurant-seating"><img
                                                src="https://cdn2.gofoodservice.com/cms/restaurantseating2.5e148e8b105eb.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Restaurant Seating</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-three omall-box-img">
                                <a href="https://www.gofoodservice.com/c/restaurant-tables"><img
                                                src="https://cdn2.gofoodservice.com/cms/restauranttables4.5e148e5394e9b.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Restaurant Tables</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/outdoor-restaurant-furniture"><img
                                                src="https://cdn2.gofoodservice.com/cms/outdoorrestaurantfurniture25e148d4307867.60d1607a99d18.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Outdoor Furniture</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/folding-tables-chairs"><img
                                                src="https://cdn2.gofoodservice.com/cms/folding-tables-chairs.6149de425cba6.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Folding Tables & Chairs</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                </div>
                <!-- ------------------------------------------image-section------------------------- -->
                <div class="om-popular-productsection">
                        <div class="om-popular-heading ">
                                <h1>Popular Furniture Categories</h1>
                        </div>
                        <div class="om-popular-product-list desktop">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/restaurant-bar-stools">
                                                        <li>Restaurant Barstools</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-table-tops">
                                                        <li>Restaurant Table Tops</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-chairs">
                                                        <li>Restaurant Chairs</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-booths-benches">
                                                        <li>Restaurant Booths & Benches</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/restaurant-host-stations-wait-stations">
                                                        <li>Host Stations & Wait Stations</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/highchairs-and-booster-seats">
                                                        <li>Highchairs & Booster Seats</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-patio-furniture">
                                                        <li>Patio Furniture</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/fire-pits-patio-heaters-outdoor-heaters">
                                                        <li>Fire Pits, Patio Heaters, & Outdoor Heaters</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/industrial-storage-transport">
                                                        <li>Receiving Desks & Lockers</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-furniture-parts-accessories">
                                                        <li>Furniture Parts & Accessories</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/tables-dining-sets">
                                                        <li>Tables & Dining Sets</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/outdoor-tables">
                                                        <li>Outdoor Tables</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/outdoor-seating">
                                                        <li>Outdoor Seating</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/outdoor-table-umbrellas-bases">
                                                        <li>Outdoor Table Umbrellas & Bases</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-table-bases">
                                                        <li>Table Bases</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/buffet-tables">
                                                        <li>Buffet Tables</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/table-covers-skirts">
                                                        <li>Table Covers & Skirts</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/furniture-carts-trucks-and-dollies">
                                                        <li>Furniture Carts, Trucks, & Dollies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/outdoor-lounge-chairs">
                                                        <li>Lounge Chairs & Sling Chairs</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/towel-valets">
                                                        <li>Towel Valets</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                        <div class="om-popular-product-list tablet">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/folding-tables-chairs">
                                                        <li>Folding Tables & Chairs</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-bar-stools">
                                                        <li>Restaurant Barstools</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-table-tops">
                                                        <li>Restaurant Table Tops</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-chairs">
                                                        <li>Restaurant Chairs</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/restaurant-booths-benches">
                                                        <li>Restaurant Booths & Benches</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/restaurant-host-stations-wait-stations">
                                                        <li>Host Stations & Wait Stations</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/highchairs-and-booster-seats">
                                                        <li>Highchairs & Booster Seats</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-patio-furniture">
                                                        <li>Patio Furniture</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/fire-pits-patio-heaters-outdoor-heaters">
                                                        <li>Fire Pits, Patio Heaters, & Outdoor Heaters</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/industrial-storage-transport">
                                                        <li>Receiving Desks & Lockers</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-furniture-parts-accessories">
                                                        <li>Furniture Parts & Accessories</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/tables-dining-sets">
                                                        <li>Tables & Dining Sets</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/outdoor-tables">
                                                        <li>Outdoor Tables</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/outdoor-seating">
                                                        <li>Outdoor Seating</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/outdoor-table-umbrellas-bases">
                                                        <li>Outdoor Table Umbrellas & Bases</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-table-bases">
                                                        <li>Table Bases</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                </div>
                <!-----------------------popularlist section----------------------------->
        </div>
</div>`;


        var Filtration = `<div class="omrestrudant-submenu-container om-Filtration-container">
        <div class="omrestrudant-inner-container">
                <a href="https://www.gofoodservice.com/c/filters" class="shopallheading">
                        <h1 class="omsubmenu-heading">Shop All Filtration</h1>
                        ${newSvg}
                </a>
                <div class="omsubmenu-image-section">
                        <div class="om-imgbox-one omall-box-img">
                                <a href="https://www.gofoodservice.com/c/water-filter-systems-cartridges"><img
                                                src="https://cdn2.gofoodservice.com/cms/waterfilters2.5e13830889a2a.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Water Filter Systems<span class="divider"></span> & Cartridges </p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-two omall-box-img">
                                <a href="https://www.gofoodservice.com/c/fryer-oil-filtration-equipment-supplies"><img
                                                src="https://cdn2.gofoodservice.com/cms/oilfilters2.5e1383133aec8.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Fryer Oil Filtration<span class="divider"></span> Equipment &
                                                        Supplies</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-three omall-box-img">
                                <a href="https://www.gofoodservice.com/c/commercial-water-filters-systems"><img
                                                src="https://cdn2.gofoodservice.com/cms/waterfilters2.5e13830889a2a.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Commercial Water <span class="divider"></span>Filters & Systems</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/residential-water-filter-systems-cartridges"><img
                                                src="https://cdn2.gofoodservice.com/cms/waterfilters2.5e13830889a2a.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Residential Water<span class="divider"></span> Filters & Systems</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/fryer-oil-filters"><img
                                                src="https://cdn2.gofoodservice.com/cms/oilfilters2.5e1383133aec8.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Fryer Oil Filters</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                </div>
                <!-- ------------------------------------------image-section------------------------- -->
                <div class="om-popular-productsection">
                        <div class="om-popular-heading ">
                                <h1>Popular Filtration Categories</h1>
                        </div>
                        <div class="om-popular-product-list desktop">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/water-softener-salt">
                                                        <li>Water Softener Salt</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-water-filters-systems?facet=water-filter-application:espresso-coffee-tea-brewers">
                                                        <li>Hot Beverage Water Filters</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-water-filters-systems?facet=water-filter-application:steam-equipment">
                                                        <li>Steam Equipment Water Filters</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-water-filters-systems?facet=water-filter-application:ice-machines">
                                                        <li>Ice Machine Water Filters</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-water-filters-systems?facet=water-filter-application:cold-beverage-equipment">
                                                        <li>Cold Beverage Water Filters</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/fryer-oil-test-kits-devices">
                                                        <li>Fryer Oil Test Kits & Devices</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/shortening-oil-disposal-units">
                                                        <li>Fryer Oil Transporters</li>
                                                </a>

                                        </ul>
                                </div>

                        </div>
                        <div class="om-popular-product-list tablet">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/fryer-oil-filters">
                                                        <li>Fryer Oil Filters</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/fryer-oil-filter-media">
                                                        <li>Fryer Oil Filter Media</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/water-softener-salt">
                                                        <li>Water Softener Salt</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-water-filters-systems?facet=water-filter-application:espresso-coffee-tea-brewers">
                                                        <li>Hot Beverage Water Filters</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-water-filters-systems?facet=water-filter-application:steam-equipment">
                                                        <li>Steam Equipment Water Filters</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-water-filters-systems?facet=water-filter-application:ice-machines">
                                                        <li>Ice Machine Water Filters</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/commercial-water-filters-systems?facet=water-filter-application:cold-beverage-equipment">
                                                        <li>Cold Beverage Water Filters</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/fryer-oil-test-kits-devices">
                                                        <li>Fryer Oil Test Kits & Devices</li>
                                                </a>
                                        </ul>
                                </div>


                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/shortening-oil-disposal-units">
                                                        <li>Fryer Oil Transporters</li>
                                                </a>

                                        </ul>
                                </div>

                        </div>
                </div>
                <!-----------------------popularlist section----------------------------->
        </div>
</div>`;

        var Business = `<div class="omrestrudant-submenu-container om-Business-container">
        <div class="omrestrudant-inner-container">
                <a href="https://www.gofoodservice.com/c/filters" class="shopallheading">
                        <h1 class="omsubmenu-heading">View All Business Types</h1>
                        ${newSvg}
                </a>
                <div class="omsubmenu-image-section">
                        <div class="om-imgbox-one omall-box-img">
                                <a href="https://www.gofoodservice.com/c/food-truck-equipment"><img
                                                src="https://cdn2.gofoodservice.com/cms/foodtrucksupplies.618bf4e587937.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Food Truck Supplies<span class="divider"></span> & Equipment</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-two omall-box-img">
                                <a href="https://www.gofoodservice.com/c/butcher-equipment-and-supplies"><img
                                                src="https://cdn2.gofoodservice.com/cms/butchersupplies.618bfaac6570d.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Butcher Equipment &<span class="divider"></span> Supplies</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-three omall-box-img">
                                <a href="https://www.gofoodservice.com/c/bar-supplies"><img
                                                src="https://cdn2.gofoodservice.com/cms/barsupplies.618bf1e8d8ae2.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Bar Supplies</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/bakery-supplies"><img
                                                src="https://cdn2.gofoodservice.com/cms/bakerysupplies.618bee2d332a6.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Bakery Supplies</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                        <div class="om-imgbox-four omall-box-img">
                                <a href="https://www.gofoodservice.com/c/catering-equipment-supplies"><img
                                                src="https://cdn2.gofoodservice.com/cms/cateringsupplies.618befcfb54c3.jpg"
                                                alt="refre" />
                                        <div class="product-info">
                                                <p>Catering Equipment &<span class="divider"></span> Supplies</p>
                                                ${newSvg}
                                        </div>
                                </a>
                        </div>
                </div>
                <!-- ------------------------------------------image-section------------------------- -->
                <div class="om-popular-productsection">
                        <div class="om-popular-heading ">
                                <h1>Popular Business Types Categories</h1>
                        </div>
                        <div class="om-popular-product-list desktop">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/convenience-store-supplies-equipment">
                                                        <li>Convenience Store Supplies & Equipment </li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/breakroom-supplies">
                                                        <li>Breakroom Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/pizza-supplies-and-equipment">
                                                        <li>Pizza Supplies & Equipment</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/banquet-supplies">
                                                        <li>Banquet Supplies & Equipment</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/merchandiser-glass-door-refrigerators">
                                                        <li>Merchandiser Glass Door Refrigerators </li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/undercounter-ice-machines">
                                                        <li>Undercounter Ice Machines</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/frozen-granita-beverage-slushy-machines">
                                                        <li>Slushy Machines</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/ice-beverage-dispensers">
                                                        <li>Soda Fountain Machines</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-bar-stools">
                                                        <li>Bar Stools</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-take-out-boxes">
                                                        <li>Food Take-Out Boxes & Containers</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/back-bar-coolers">
                                                        <li>Back Bar Coolers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/electric-fryers">
                                                        <li>Electric Fryers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cappuccino-espresso-machines">
                                                        <li>Espresso & Cappuccino Machines</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/pizza-ovens">
                                                        <li>Pizza Ovens</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/soft-serve-ice-cream-machines">
                                                        <li>Soft Serve Ice Cream Machines</li>
                                                </a>
                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a
                                                        href="https://www.gofoodservice.com/c/dry-refrigerated-bakery-display-cases">
                                                        <li>Dry & Refrigerated Bakery Cases</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/glass-top-display-freezers">
                                                        <li>Glass Top Display Freezers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/baking-molds">
                                                        <li>Baking Molds</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/beer-dispensers">
                                                        <li>Beer Dispensers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/countertop-gas-griddles">
                                                        <li>Countertop Griddles</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                        <div class="om-popular-product-list tablet">
                                <div class="ompopular-box-one popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/catering-equipment-supplies">
                                                        <li>Catering Equipment & Supplies</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/convenience-store-supplies-equipment">
                                                        <li>Convenience Store Supplies & Equipment </li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/breakroom-supplies">
                                                        <li>Breakroom Supplies</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/pizza-supplies-and-equipment">
                                                        <li>Pizza Supplies & Equipment</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-two popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/banquet-supplies">
                                                        <li>Banquet Supplies & Equipment</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/merchandiser-glass-door-refrigerators">
                                                        <li>Merchandiser Glass Door Refrigerators </li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/undercounter-ice-machines">
                                                        <li>Undercounter Ice Machines</li>
                                                </a>
                                                <a
                                                        href="https://www.gofoodservice.com/c/frozen-granita-beverage-slushy-machines">
                                                        <li>Slushy Machines</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-three popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/ice-beverage-dispensers">
                                                        <li>Soda Fountain Machines</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/restaurant-bar-stools">
                                                        <li>Bar Stools</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/food-take-out-boxes">
                                                        <li>Food Take-Out Boxes & Containers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/back-bar-coolers">
                                                        <li>Back Bar Coolers</li>
                                                </a>

                                        </ul>
                                </div>
                                <div class="ompopular-box-four popular-boxes">
                                        <ul>
                                                <a href="https://www.gofoodservice.com/c/electric-fryers">
                                                        <li>Electric Fryers</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/cappuccino-espresso-machines">
                                                        <li>Espresso & Cappuccino Machines</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/pizza-ovens">
                                                        <li>Pizza Ovens</li>
                                                </a>
                                                <a href="https://www.gofoodservice.com/c/soft-serve-ice-cream-machines">
                                                        <li>Soft Serve Ice Cream Machines</li>
                                                </a>
                                        </ul>
                                </div>
                        </div>
                </div>
                <!-----------------------popularlist section----------------------------->
        </div>
</div>`;


        function initVariation() {
                document.querySelector('div> [routerlink="/c/restaurant-equipment"]').insertAdjacentHTML("beforeend", submenu);
                document.querySelector('div> [routerlink="/c/smallwares"]').insertAdjacentHTML("beforeend", smallware);
                document.querySelector('div> [routerlink="/c/tabletop"]').insertAdjacentHTML("beforeend", tabletop);
                document.querySelector('div> [routerlink="/c/janitorial-supplies"]').insertAdjacentHTML("beforeend", janitor);
                document.querySelector('div> [routerlink="/c/disposables"]').insertAdjacentHTML("beforeend", Disposables);
                document.querySelector('div> [routerlink="/c/storage-transport"]').insertAdjacentHTML("beforeend", Storage);
                document.querySelector('div> [routerlink="/c/food-beverage"]').insertAdjacentHTML("beforeend", FoodBeverages);
                document.querySelector('div> [routerlink="/c/commercial-furniture"]').insertAdjacentHTML("beforeend", Furniture);
                document.querySelector('div> [routerlink="/c/filters"]').insertAdjacentHTML("beforeend", Filtration);
                document.querySelector('div> [routerlink="/c/business-types"]').insertAdjacentHTML("beforeend", Business);

                var body = document.body;
                body.classList.add("running-test");


                var elementEl = document.querySelectorAll(".omrestrudant-submenu-container");

                elementEl.forEach(function (e) {
                        e.addEventListener('mouseover', () => {
                                body.classList.add('noscroll');

                        });

                        e.addEventListener('mouseout', () => {
                                body.classList.remove('noscroll');
                        });
                });

        }

})();




