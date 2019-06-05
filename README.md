![STACK NFQ](docs/static/media/logo-blue.32a521ee.svg)

# STACK NFQ
## This is a SPA created with #reactJS⚛

Developed with ❤️ by ***GirlsOverflow*** and data provided by [NFQ](http://nfq.es/en) :)

![NFQ](docs/static/media/logo-nfq.1fffbe56.png)

Our project is called StackNFQ and consists of a SPA where NFQ's developers can find solutions to recurrent programming dificulties. Also, they will be able to propose questions to their possible doubts in order to improve the efficency of the company's programming processes when creating their own products. The platform is aimed at improving communication between colleagues by sharing their knowledge acquired while developing at NFQ. 

## 🏗 Getting Started

You need to install [Node.js](https://nodejs.org/), and then:
1. Download or clone our project repository
2. Install dependencies with `$ npm install`
3. Run the project with `$ npm start`

***IMPORTANT!*** 
The API of the project will be soon disconnected, but there is an alternative: 
1. Move the db.json file from our project to your local folder
2. Install `$ npm install -g json-server`
3. Open your terminal and change directory to the location of the db.json file (and NOT to the project folder)
4. Run `$ json-server --watch db.json --port 3005`
5. In services' folder, change the ENDPOINT in createQuestion and fetchQuestion to http://localhost:3005/questions 
6. In services' folder, change the ENDPOINT in updateQuestion to http://localhost:3005/questions/

## 📊 Dependencies

* [@material-ui/core](https://www.npmjs.com/package/@material-ui/core) - For app styles
* [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) - For app icons
* [lodash](https://www.npmjs.com/package/lodash) - For sorting lists by date
* [moment](https://www.npmjs.com/package/moment) - For date format
* [node-sass](https://www.npmjs.com/package/node-sass) - For the use of SCSS in the project 
* [react](https://www.npmjs.com/package/react) - Framework of the project ⚛
* [react-dom](https://www.npmjs.com/package/react-dom) 
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - For routing 
* [react-scripts](https://www.npmjs.com/package/react-scripts)
* [prop-types](https://www.npmjs.com/package/prop-types)

## 📦 Project Structure
```
/
`-_src
    |-components
        |-App
        |-Footer
        |-Header
        |-Home
        |-QuestionDetails
            |-Answer
            |-Form
        |-StackList
            |-Button
            |-Filter
            |-ModalInfo
            |-Question
            |-QuestionContent
        |-TeamInfo
            |-Member
    |-data
    |-images
    |-scss
    |-services
```

## 👩🏻‍💻 Authors 
* [Libertad Chapinal](https://www.linkedin.com/in/libertadchapinalcervantes/)
* [Iris Paredes](https://www.linkedin.com/in/iris-paredes-jiménez-654a5144/)
* [Leire Rico](https://www.linkedin.com/in/leirerico/)
* [Carla Rodriguez](https://www.linkedin.com/in/carla-rodriguez-rodriguez/)
* [Aia Rupsom](https://www.linkedin.com/in/aia-rupsom/)

## 🙏🏿 Acknowledgments 

* Hector Martos - UI/UX Team Manager at NFQ Solutions
* Verónica Reina Hernández - Senior Frontend Developer
* José Luis López Hernández - Front-end Analyst
* and to all the wonderful and amazing adalabers that have been with us through our time at NFQ: Clara, Laura, Alba and Carolina, THANK YOU!
