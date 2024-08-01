# TOP_Restaurant_Page

## Description
Create a restaurant page using JavaScript to dynamically render a restaurant homepage. The website's content is generate entirely using JavaScript, with styling handled by an external CSS file, and webpack is used to bundle files.

## Table of Contents
- [Description] (#description)
- [Technologies Used] (#technologies-used)
- [Project Structure] (#project-structure)
- [Project Setup] (#project-setup)
- [Instructions] (#instructions)
- [Deployment] (#deployment)
- [Acknowledgments] (#acknowledgments)

## Technologies Used
- JavaScript used for DOM manipulation and dynamically generating HTML content.
- Webpack used for module bundling
- CSS3 used for styling the webpage
- HTML5 used to create the basic structure and to be dynamically populated by JavaScript

# Project Structure
```
TOP_Restaurant_Page/
├--dist/
├--node_modules/
├--src/
|   ├--assets/
|      ├--fonts/
|         ├--KaushanScript-Regular.ttf
|         └--LilitaOne-Regular.ttf
|      ├--images/
|         ├--coconut-pancakes.jpg
|         ├--family.jpg
|         ├--fried-tofu.jpg
|         ├--nasi-lemak.jpg
|         ├--pineapple.jpg
|         ├--salad.jpg
|         ├--soto-ayam.jpg
|         └--waterfall.jpg
|      └--styles/
|         └--main.css
|   ├--modules/
|      ├--about.js
|      ├--faq.js
|      ├--footer.js
|      ├--home.js
|      └--menu.js
|   ├--index.js
|   └--index.html
├--.gitignore
├--package.json
├--package-lock.json
├--webpack.config.js
└--README.md
```
## Project Setup
1. Initialize the Project: run 'npm init' in the project directory to generate a 'package.json' file.
2. Install dependencies: run 'npm install webpack-cli --save-dev' to install webpack and webpack-cli
3. Webpack Configuration: create a 'webpack.config.js' file in the root directory with the necessary configuration, including 'html-webpack-plugin'.
4. Create a '.gitignore' file in the root directory to ignore the node_modules and dist directories


## Instructions
1. Initial Setup:
    - Add an HTML skeleton inside 'src/index.html'.
    - Inside 'src/index.js', write a 'console.log' or 'alert' statement to test the setup.
    -run 'npx webpack' and load 'dist/index.html' in a browswer to verify everything is working.
2. Dynamically generate content:
    - Write JavaScript code to dynamically create and append elements to 'div#content'.
    - Create separate modules for each "tab" (eg. Home, Menu, Contact) and import them into 'index.js'.
3. Tabbed Browsing:
    - Implement tab-switching logic in 'index.js' using event listeners for each button in the header navbar.
    - Each button click should clear the current contents of 'div#content' and load the appropriate module.

## Deployment
1. Follow the instructions to deploy your 'dist' directory to GitHub Pages.
2. Add an npm script in 'package.json' to simplify the deployment process:
    "scripts": {
        "deploy": "git subtree push --prefix dist origin gh-pages"
    }
3. Run 'npm run deploy' to update the live preview.

## Acknowledgments
- **Fonts:**
    - Lilita One, https://fonts.google.com/specimen/Lilita+One by Juan Montoreano
    - Kaushan Script, https://fonts.google.com/specimen/Kaushan+Script by Impallari Type
- **Photo credits:**
    - Photo by Ida Rizkha: https://www.pexels.com/photo/salad-with-fresh-vegetables-and-eggs-3008740/

    -Photo by Juan Anatama: https://www.pexels.com/photo/food-laid-out-on-a-blue-tablecloth-19981467/

    -Photo by Riki Risnandar: https://www.pexels.com/photo/fried-tofu-on-bamboo-tray-3967347/

    -Photo by Anton  Tezar: https://www.pexels.com/photo/serabi-kuah-indonesian-coconut-pancakes-6802090/

    -Photo by Oliver Sjöström: https://www.pexels.com/photo/landscape-photography-of-waterfalls-surrounded-by-green-leafed-plants-931007/

    -Photo by Dikry Ikhwanuddin: https://www.pexels.com/photo/a-family-walking-on-a-resort-7065885/

    -Photo by Shameel mukkath: https://www.pexels.com/photo/pineapple-juice-in-clear-drinking-glass-5817623/

    -Photo by Suhairy  Tri Yadhi: https://www.pexels.com/photo/nasi-lemak-served-on-banana-leaf-11912788/