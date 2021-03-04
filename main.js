import Card from './components/Card.js'
import cardData from './dictionary/cardData.js'

//mengambil data yang akan di Inject
const App = document.getElementById("App");


//inject component ke main component App 
App.innerHTML += `

    ${
        cardData.map((e)=>{
            return Card(e.id, e.title, e.body, e.img);
        }).join("")
    }

`;