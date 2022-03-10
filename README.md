  1 npx create-react-app tour-project
   2 cd .\tour-project\
   3 ls
   4 npm start

## src/components
            |_navbar
            |_header
            |_cards

## src/components/navbar/Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="aboutus">ABOUT US</a>
      <a href="foryou">FOR YOU</a>
      <a href="services">SERVİCES</a>
      <a href="blog">BLOG</a>
      <a href="vlog">VLOG</a>
      <a href="contact">CONTACT</a>
    </div>
  );
};

export default Navbar;

## App.js

import React from "react";
import Navbar from "./components/navbar/Navbar";

const App = ()=>{
  return(
    <div className="App">
      <Navbar />

    </div>
  );
};

export default App;

## src/components/navbar/Navbar.css
@import url('https://fonts.googleapis.com/css2?family=Island+Moments&display=swap');


.navbar{
    background-color: black;
    display: flex;
    justify-content: center;

}

.navbar a{
    color: white;
    padding: 24px 26px;
    text-decoration: none;
    font-size: 30px;
    font-family: 'Island Moments', cursive;

}

.navbar a:hover{
    background-color: #ace0f9;
    color: black;
}

## src/components/header/Header.js

import React from "react";

const Header = ()=>{
    return(
        <div className="big-title">
            <h3>POPULER TOUR PLACES</h3>

        </div>
    );
};

export default Header;

App.js

import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
const App = ()=>{
  return(
    <div className="App">
      <Navbar />
      <Header />
      

    </div>
  );
};

export default App;


font google:
@import url('https://fonts.googleapis.com/css2?family=Island+Moments&family=Oswald&display=swap');
font-family: 'Oswald', sans-serif;
 kısımlarını kopyaladık: 
## src/components/header/Header.css

 @import url('https://fonts.googleapis.com/css2?family=Island+Moments&family=Oswald&display=swap');

.big-title{
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
}

## src/components/header/Header.js

import React from "react";
import "./Header.css";

const Header = ()=>{
    return(
        <div className="big-title">
            <h3>POPULER TOUR PLACES</h3>

        </div>
    );
};

export default Header;

## src/helpers/Data.js

export const data = [
    {
      id: 1,
      title: "New York",
      desc:
        "Home to the Statue of Liberty, Empire State Building, Central Park, Times Square, New York is the most populous city in the USA. We have a lot to tell about the city where city lights illuminate the sky.",
      image:
        "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_960_720.jpg",
    },
    {
      id: 2,
      title: "Philippines",
      desc:
        "The island country, the Philippines, is one of the most beautiful countries where blue and green are together. Forget the potion of youth, traveling to the Philippines will rejuvenate you for at least 5 years.",
      image:
        "https://bigseventravel.com/wp-content/uploads/2019/11/john-hernandez-IL-fBBnF-GU-unsplash-1920x1440.jpg",
    },
    {
      id: 3,
      title: "Bali",
      desc:
        "Bali, Indonesia's most famous island, has taken its place as the 'last paradise' in mind. Providing 80% of its livelihood with tourism, Bali hosts thousands of tourists every year.",
      image: "https://ak.picdn.net/shutterstock/videos/26368511/thumb/1.jpg",
    },
    {
      id: 4,
      title: "Egypt",
      desc:
        "Being one of the biggest countries of the Middle East, Egypt has been the transition point of many civilizations with its thousands of years of history. The pyramids and miracles that come to mind when talking about Egypt have been the subject of many films. It still remains a mystery.",
      image:
        "https://images.memphistours.com/large/34d5b5a3fbaa4b3b5d9487bf924b0145.jpg",
    },
    {
      id: 5,
      title: "Cappadocia",
      desc:
        "Cappadocia… 'Kappa Tuchia', which means 'Land of Beautiful Horses' in the words of Persians. A location in Turkey and in the center of Anatolia's most popular and unique tourist centers of someone who Cappadocia, magnificent nature, valleys of unique beauty, fairy chimneys, rock-hewn settlements, millions every year with open-air museums and underground cities, local and hosts foreign tourists.",
      image: "https://i.hurimg.com/i/hdn/75/0x0/5aa10544d3806c25541af273.jpg",
    },
    {
      id: 6,
      title: "Paris",
      desc:
        "Paris has been recognized as one of the most romantic cities in the world. Many famous buildings here have been added to the Unesco World Heritage List. It awaits you with its museums, fashion and historical buildings.",
      image:
        "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221130827/iStock-155381519.jpg",
    },
    {
      id: 7,
      title: "Venice",
      desc:
        "Venice, one of Italy's indispensable stops, is known as the 'City of Channels', 'City of Waters' or 'City of Masks' thanks to its world-famous masks. If you visit in February, you can catch the Venice Carnival, where everyone wears a mask and has fun.",
      image:
        "https://www.qantas.com/content/travelinsider/en/explore/europe/italy/venice/things-you-need-to-know-before-you-go-to-venice/_jcr_content/parsysTop/hero.img.full.medium.jpg/1535006246068.jpg",
    },
    {
      id: 8,
      title: "India",
      desc:
        "If you are not a vacationer but a traveler, we can say that India is the place for you. India, one of the most colorful places in the world, has a crazy variety. The Taj Mahal, the story of which you have heard more or less, is one of its famous buildings.",
      image: "https://lp-cms-production.imgix.net/2020-11/GettyRF_494057771.jpg",
    },
    {
      id: 9,
      title: "Northern Lights",
      desc:
        "Northern lights, the 'Aurora Borealis', named after the Dawn Goddess Aurora, are the natural glows that emerge in the sky with the interaction of the earth's magnetic field and charged particles from the Sun. This image, which makes most of us feel like in a fairy tale land, deserves to be visited at least once in a lifetime.",
      image:
        "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 10,
      title: "Fuji Mountain",
      desc:
        "The symbol and highest mountain of Japan, Mount Fuji is considered sacred by the Japanese and is called Fuji-San. This mountain, which has an active startovolcano, is depicted in art and photography and is a natural wonder visited by athletes and tourists.",
      image:
        "https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/038/943/original/pixta_43064884_S.jpg?2019&d=750x400",
    },
    {
      id: 11,
      title: "Arashiyama Bamboo Grove",
      desc:
        "Bamboo Forest, or Arashiyama Bamboo Grove or Sagano Bamboo Forest, is a natural forest of bamboo in Arashiyama, Kyoto, Japan. The forest consists mostly of Moso Bamboo (Phyllostachys edulis) and consists of several pathways for tourists and visitors. The Ministry of the Environment considers it a part of the soundscape of Japan.",
      image: "https://wallpaperaccess.com/full/534182.jpg",
    },
    {
      id: 12,
      title: "Antelope Canyon",
      desc:
        "Antelope Canyon is a slot canyon in the American Southwest, on Navajo land east of Page, Arizona. It includes two separate, scenic slot canyon sections, referred to as Upper Antelope Canyon (or The Crack), and Lower Antelope Canyon (or The Corkscrew).",
      image:
        "https://images.unsplash.com/photo-1444076784383-69ff7bae1b0a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvd2VyJTIwYW50ZWxvcGUlMjBjYW55b258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  ## src/components/cards/Cards.js

  import React from "react";
import {data} from "../../helpers/Data";
import "./Cards.css";

function Card() {
    return(
        <div className="card-container">
            <div className="cards">

                <h2>{data[0].title}</h2>

            </div>

        </div>
    );
}

export default Card;

## App.js

import Card from "./components/cards/Cards";

const App = ()=>{
  return(
    <div className="App">
      <Navbar />
      <Header />
      <Card />

      

    </div>
  );
};

export default App;

## src/components/cards/Cards.js

function Card() {
  return (
    <div className="card-container">
      <div className="cards">
        <div className="title">
          <h2>{data[0].title}</h2>
        </div>
        <img src={data[0].image} alt={data[0].title} />
        <div className="card-over">
          <p>{data[0].desc}</p>
        </div>
      </div>

      <div className="cards">
        <div className="title">
          <h2>{data[1].title}</h2>
        </div>
        <img src={data[1].image} alt={data[1].title} />
        <div className="card-over">
          <p>{data[1].desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

böyle tek tek çekebiliriz ama böyle yapmayacagız. map fonsiyonu kullanacağız.

## src/components/cards/Cards.js

import React from "react";
import { data } from "../../helpers/Data";
import "./Cards.css";

function Card() {
  return (
    <div className="card-container">
        {data.map((card)=>{
            return(
                <div className = "cards" key={card.id}>

                    <div className="title">
                        <h2>{card.title}</h2>
                    </div>

                    <img src={card.image} alt={card.title}/>

                    <div className ="card_over">
                        <p>{card.desc}</p>
                    </div>
                </div>
            )
        })}

    </div>
  );
}

export default Card;

## src/components/cards/Cards.css

@import url('https://fonts.googleapis.com/css2?family=Island+Moments&family=Oswald&display=swap');

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.cards {
    padding: 20px;
    background-color: black;
    border-radius: 7px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
    margin: 1em;
    position: relative;
    overflow: hidden;
}

.title {
    color: white;
    font-family: 'Oswald', sans-serif;
    font-size: 36px;
    padding: 1rem;

}

.cards img {
    object-fit: cover;
    height: 350px;
    width: 500px;
    filter: grayscale(0%)
}

.cards img:hover {
   filter: grayscale(100%);    
}

.card-over {
    position: absolute;
    background-color:rgba(0, 0, 0, 0.5);
    color: white;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.7s ease-in-out;

}

.cards:hover .card-over {
    transform: translateY(0%);
}  

## App.css

.App {
  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
}
bu kısmı "https://webgradients.com/ sitesinde kopyaladık

## App.js

import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Card from "./components/cards/Cards";
import "./App.css";

const App = ()=>{
  return(
    <div className="App">
      <Navbar />
      <Header />
      <Card />

      

    </div>
  );
};

export default App;

-_-_-_-_-_-_-_-_-_DEPLOY-_-_-_-_-_-_-_-_-_

https://surge.sh/ sitesine gidiyoruz.

## npm install --global surge

makinamıza bir kere kuruyoruz.
burada email ve şifre tanımlanıyor.

bundan sonra proje dizinimize geliyoruz.

## cd build
## surge