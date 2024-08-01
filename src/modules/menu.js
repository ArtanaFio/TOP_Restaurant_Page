export function createMenuComponents() {

    const menuSection = document.createElement('div');
    menuSection.classList.add("part");

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = "Menu";
    menuSection.appendChild(menuHeader);

    const appetizers = document.createElement('div');
    appetizers.classList.add("part", "category", "tofu");
    menuSection.appendChild(appetizers);

    const appHeader = document.createElement('h3');
    appHeader.textContent = "Appetizers";
    appetizers.appendChild(appHeader);

    const springRolls = document.createElement('h4');
    springRolls.textContent = "Indonesian Spring Rolls";
    appetizers.appendChild(springRolls);

    const springRollsPara = document.createElement('p');
    springRollsPara.classList.add("paragraphs", "menu-items");
    springRollsPara.textContent = "Crispy on the outside and filled with a delicious mixture of vegetables and spices, our Indonesian Spring Rolls are served with a sweet and tangy dipping sauce. A perfect start to your meal.";
    appetizers.appendChild(springRollsPara);
    
    const satay = document.createElement('h4');
    satay.textContent = "Satay Skewers (Chicken, Beef, or Tofu)";
    appetizers.appendChild(satay);

    const satayPara = document.createElement('p');
    satayPara.classList.add("paragraphs", "menu-items");
    satayPara.textContent = "Tender, marinated meat skewers, grilled to perfection and served with our signature peanut sauce. Choose from chicken, beef, or tofu for a delightful, savory treat.";
    appetizers.appendChild(satayPara);

    const tahuGoreng = document.createElement('h4');
    tahuGoreng.textContent = "Tahu Goreng (Fried Tofu)";
    appetizers.appendChild(tahuGoreng);

    const tahuGorengPara = document.createElement('p');
    tahuGorengPara.classList.add("paragraphs", "menu-items");
    tahuGorengPara.textContent = "Crispy golden tofu cubes served with spicy sambal and tangy soy dipping sauce. A perfect Indonesian appetizer";
    appetizers.appendChild(tahuGorengPara);

    const friedBananas = document.createElement('h4');
    friedBananas.textContent = "Pisang Goreng (Fried Bananas)";
    appetizers.appendChild(friedBananas);

    const friedBananasPara = document.createElement('p');
    friedBananasPara.classList.add("paragraphs", "menu-items");
    friedBananasPara.textContent = "Golden-fried bananas, lightly battered and crispy, served with a drizzle of honey and a sprinkle of powdered sugar. A sweet and satisfying appetizer.";
    appetizers.appendChild(friedBananasPara);

    const salads = document.createElement('div');
    salads.classList.add("part", "category", "salad");
    menuSection.appendChild(salads);

    const saladHeader = document.createElement('h3');
    saladHeader.textContent= "Salads";
    salads.appendChild(saladHeader);

    const gadoGadoSalad = document.createElement('h4');
    gadoGadoSalad.textContent = "Gado-Gado Salad";
    salads.appendChild(gadoGadoSalad);

    const gadoGadoSaladPara = document.createElement('p');
    gadoGadoSaladPara.classList.add("paragraphs", "menu-items");
    gadoGadoSaladPara.textContent = "A vibrant mix of steamed vegetables, tofu, and hard-boiled eggs, all topped with our rich and creamy peanut sauce. A classic Indonesian favorite that’s both healthy and delicious.";
    salads.appendChild(gadoGadoSaladPara);

    const urap = document.createElement('h4');
    urap.textContent = "Urap (Spicy Vegetable Salad)";
    salads.appendChild(urap);

    const urapPara = document.createElement('p');
    urapPara.classList.add("paragraphs", "menu-items");
    urapPara.textContent = "Freshly steamed vegetables tossed with a fragrant, spicy coconut dressing. A refreshing side that pairs perfectly with our main dishes.";
    salads.appendChild(urapPara);

    const ketoprak = document.createElement('h4');
    ketoprak.textContent = "Ketoprak (Rice Cake Salad)";
    salads.appendChild(ketoprak);

    const ketoprakPara = document.createElement('p');
    ketoprakPara.classList.add("paragraphs", "menu-items");
    ketoprakPara.textContent = "Rice cakes, tofu, and bean sprouts served with a generous portion of peanut sauce and a sprinkle of crispy shallots. A flavorful and filling salad.";
    salads.appendChild(ketoprakPara);

    const soups = document.createElement('div');
    soups.classList.add("part", "category", "soup");
    menuSection.appendChild(soups);

    const soupsHeader = document.createElement('h3');
    soupsHeader.textContent = "Soups";
    soups.appendChild(soupsHeader);

    const soto = document.createElement('h4');
    soto.textContent = "Soto Ayam (Chicken Soup)";
    soups.appendChild(soto);

    const sotoPara = document.createElement('p');
    sotoPara.classList.add("paragraphs", "menu-items");
    sotoPara.textContent = "A fragrant and flavorful chicken soup with turmeric, lemongrass, and spices. Served with rice cakes, boiled eggs, and crispy fried shallots.";
    soups.appendChild(sotoPara);

    const bakso = document.createElement('h4');
    bakso.textContent = "Bakso (Meatball Soup)";
    soups.appendChild(bakso);

    const baksoPara = document.createElement('p');
    baksoPara.classList.add("paragraphs", "menu-items");
    baksoPara.textContent = "Hearty meatballs in a clear, savory broth, served with noodles, greens, and a dash of fried garlic. A comforting and delicious soup.";
    soups.appendChild(baksoPara);

    const sayur = document.createElement('h4');
    sayur.textContent = "Sayur Asem (Tamarind Vegetable Soup)";
    soups.appendChild(sayur);

    const sayurPara = document.createElement('p');
    sayurPara.classList.add("paragraphs", "menu-items");
    sayurPara.textContent = "A tangy and refreshing soup made with tamarind, vegetables, and a hint of sweetness. A perfect balance of flavors.";
    soups.appendChild(sayurPara);

    const entrees = document.createElement('div');
    entrees.classList.add("part", "category", "entree");
    menuSection.appendChild(entrees);

    const entreesHeader = document.createElement('h3');
    entreesHeader.textContent = "Entrees";
    entrees.appendChild(entreesHeader);

    const rendang = document.createElement('h4');
    rendang.textContent = "Beef Rendang";
    entrees.appendChild(rendang);

    const rendangPara = document.createElement('p');
    rendangPara.classList.add("paragraphs", "menu-items");
    rendangPara.textContent = "Slow-cooked beef in a rich, aromatic coconut milk and spice mixture. Tender, flavorful, and utterly irresistible, served with steamed rice.";
    entrees.appendChild(rendangPara);

    const nasiGoreng = document.createElement('h4');
    nasiGoreng.textContent = "Nasi Goreng (Fried Rice with Choice of Chicken, Beef, Shrimp)";
    entrees.appendChild(nasiGoreng);

    const nasiGorengPara = document.createElement('p');
    nasiGorengPara.classList.add("paragraphs", "menu-items");
    nasiGorengPara.textContent = "Indonesian-style fried rice, packed with flavor and stir-fried with vegetables, eggs, and your choice of protein. A beloved comfort food.";
    entrees.appendChild(nasiGorengPara);

    const mieGoreng = document.createElement('h4');
    mieGoreng.textContent = "Mie Goreng (Fried Noodles with Choice of Chicken, Beef, Tofu)";
    entrees.appendChild(mieGoreng);

    const mieGorengPara = document.createElement('p');
    mieGorengPara.classList.add("paragraphs", "menu-items");
    mieGorengPara.textContent = "Stir-fried noodles with a medley of vegetables and your choice of protein. Savory, slightly sweet, and delightfully satisfying.";
    entrees.appendChild(mieGorengPara);

    const penyet = document.createElement('h4');
    penyet.textContent = "Ayam Penyet (Smashed Fried Chicken)";
    entrees.appendChild(penyet);

    const penyetPara = document.createElement('p');
    penyetPara.classList.add("paragraphs", "menu-items");
    penyetPara.textContent = "Crispy, marinated chicken that’s smashed to tender perfection and served with spicy sambal sauce. A hearty and spicy favorite.";
    entrees.appendChild(penyetPara);

    const nasiKuning = document.createElement('h4');
    nasiKuning.textContent = "Nasi Kuning (Yellow Rice)";
    entrees.appendChild(nasiKuning);

    const nasiKuningPara = document.createElement('p');
    nasiKuningPara.classList.add("paragraphs", "menu-items");
    nasiKuningPara.textContent = "Aromatic yellow rice cooked with coconut milk and turmeric. Served with a side of your choice, it’s a flavorful and colorful dish.";
    entrees.appendChild(nasiKuningPara);

    const nasiCampur = document.createElement('h4');
    nasiCampur.textContent = "Nasi Campur (Mixed Rice Containing Chicken, Beef, Shrimp)";
    entrees.appendChild(nasiCampur);

    const nasiCampurPara = document.createElement('p');
    nasiCampurPara.classList.add("paragraphs", "menu-items");
    nasiCampurPara.textContent = "A complete meal featuring a variety of Indonesian dishes served over steamed rice. Includes meats, vegetables, and sambal for a true taste of Indonesia.";
    entrees.appendChild(nasiCampurPara);

    const bihunGoreng = document.createElement('h4');
    bihunGoreng.textContent = "bihun Goreng (Stir-Fried Vermicellli with Choice of Chicken, Beef, Shrimp)";
    entrees.appendChild(bihunGoreng);

    const bihunGorengPara = document.createElement('p');
    bihunGorengPara.classList.add("paragraphs", "menu-items");
    bihunGorengPara.textContent = "Delicate vermicelli noodles stir-fried with vegetables, eggs, and your choice of protein. Light, flavorful, and satisfying.";
    entrees.appendChild(bihunGorengPara);

    const desserts = document.createElement('div');
    desserts.classList.add("part", "category", "pancake");
    menuSection.appendChild(desserts);

    const dessertsHeader = document.createElement('h3');
    dessertsHeader.textContent = "Desserts";
    desserts.appendChild(dessertsHeader);

    const klepon = document.createElement('h4');
    klepon.textContent = "Klepon (Sweet Rice Cake Balls)";
    desserts.appendChild(klepon);

    const kleponPara = document.createElement('p');
    kleponPara.classList.add("paragraphs", "menu-items");
    kleponPara.textContent = "Chewy rice cake balls filled with palm sugar and coated in fresh grated coconut. A sweet and delightful treat.";
    desserts.appendChild(kleponPara);

    const cendol = document.createElement('h4');
    cendol.textContent = "Es Cendol (Coconut Jelly Dessert)";
    desserts.appendChild(cendol);

    const cendolPara = document.createElement('p');
    cendolPara.classList.add("paragraphs", "menu-items");
    cendolPara.textContent = "A refreshing dessert drink made with green rice flour jelly, coconut milk, and palm sugar syrup. Perfect for a hot day.";
    desserts.appendChild(cendolPara);

    const serabiKuah = document.createElement('h4');
    serabiKuah.textContent = "Serabi Kuah (Pandan Coconut Pancakes)";
    desserts.appendChild(serabiKuah);

    const serabiKuahPara = document.createElement('p');
    serabiKuahPara.classList.add("paragraphs", "menu-items");
    serabiKuahPara.textContent = "Soft, fluffy pandan pancakes served with a rich coconut milk sauce. A delightful end to any meal.";
    desserts.appendChild(serabiKuahPara);

    const beverages = document.createElement('div');
    beverages.classList.add("part", "category", "pineapple");
    menuSection.appendChild(beverages);

    const beveragesHeader = document.createElement('h3');
    beveragesHeader.textContent = "Beverages";
    beverages.appendChild(beveragesHeader);

    const tehBotol = document.createElement('h4');
    tehBotol.textContent = "Teh Botol (Sweetened Iced Tea)";
    beverages.appendChild(tehBotol);

    const tehBotolPara = document.createElement('p');
    tehBotolPara.classList.add("paragraphs", "menu-items");
    tehBotolPara.textContent = "Refreshing and sweet, this classic Indonesian iced tea is perfect for cooling down on a warm day.";
    beverages.appendChild(tehBotolPara);

    const esTeler = document.createElement('h4');
    esTeler.textContent = "Es Teler (Mixed Fruit Drink)";
    beverages.appendChild(esTeler);

    const esTelerPara = document.createElement('p');
    esTelerPara.classList.add("paragraphs", "menu-items");
    esTelerPara.textContent = "A tropical blend of coconut, avocado, jackfruit, and sweetened condensed milk. A delicious and refreshing beverage.";
    beverages.appendChild(esTelerPara);

    const esAlpukat = document.createElement('h4');
    esAlpukat.textContent = "Es Alpukat (Avocado Shake)";
    beverages.appendChild(esAlpukat);

    const esAlpukatPara = document.createElement('p');
    esAlpukatPara.classList.add("paragraphs", "menu-items");
    esAlpukatPara.textContent = "A creamy and indulgent avocado shake, sweetened with condensed milk and served over ice. A unique and refreshing treat.";
    beverages.appendChild(esAlpukatPara);

    const kopiBali = document.createElement('h4');
    kopiBali.textContent = "Kopi Bali (Bali Coffee)";
    beverages.appendChild(kopiBali);

    const kopiBaliPara = document.createElement('p');
    kopiBaliPara.classList.add("paragraphs", "menu-items");
    kopiBaliPara.textContent = "Rich, aromatic Balinese coffee, served hot or iced. Perfect for coffee lovers looking to try something new.";
    beverages.appendChild(kopiBaliPara);

    const juice = document.createElement('h4');
    juice.textContent = "Juice (Mango or Pineapple)";
    beverages.appendChild(juice);

    const juicePara = document.createElement('p');
    juicePara.classList.add("paragraphs", "menu-items");
    juicePara.textContent = "Fresh and naturally sweet tropical juices.";
    beverages.appendChild(juicePara);

    const soda = document.createElement('h4');
    soda.textContent = "Soda (Kaffir Lime, Ginger, Sarsaparilla)";
    beverages.appendChild(soda);

    const sodaPara = document.createElement('p');
    sodaPara.classList.add("paragraphs", "menu-items");
    sodaPara.textContent = "Speciailty soda flavors in citrusy kaffir lime, zesty ginger, and spicy sarsaparilla.";
    beverages.appendChild(sodaPara);

    return menuSection;
}