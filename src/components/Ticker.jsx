import React from 'react';
import ReactDOM from 'react-dom';

import '../style.css';

import image1 from "../img/burke.png";
import image2 from "../img/emily-post.png";
import image3 from "../img/metropolis.png";
import image4 from "../img/monteverde.png";
import image5 from "../img/nalgene.png";
import image6 from "../img/runamok.jpg";

class Ticker extends React.Component{
    
    render() {
        return (
<div class= "ticker-wrap">
<div class="ticker">
  <div class="ticker__list">
    <div class="ticker_item"><img src={image1}/></div>
    <div class="ticker_item"><img src={image2}/></div>
    <div class="ticker_item"><img src={image3}/></div>
    <div class="ticker_item"><img src={image4}/></div>
    <div class="ticker_item"><img src={image5}/></div>
    <div class="ticker_item"><img src={image6}/></div>
  </div>
</div>
</div>
        );
    }
}

export default Ticker;

// const ticker = document.querySelector('.ticker')
//   , list = document.querySelector('.ticker__list')
//   , clone = list.cloneNode(true)
// ticker.append(clone)