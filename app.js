const express = require('express');
const dotenv=require('dotenv');
const bodyParser=require('body-parser');
const app = express();
app.use(bodyParser.json());



var cors = require('cors')
app.use(cors())
app.listen(3000);

const connectDB=require('./config/db');
dotenv.config({path:'./config/config.env'});

connectDB();

//including routed folder

app.use('',require('../users/routes/index'))
app.use('',require('../users/stations/routes/index'));




// <button id="set_radio_button" style="display: none;" played="1" listeners="295" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="https://playerservices.streamtheworld.com/api/livestream-redirect/FM947_SC?dist=onlineradiobox" streamtype="mp3" radioid="za.947" radioimg="//cdn.onlineradiobox.com/img/l/0/11380.v7.png" radioname="947"></button>
// <button id="set_radio_button" style="display: none;" played="1" listeners="112" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="https://iceant.antfarm.co.za/Bosveld" streamtype="mp3" radioid="za.bosveldstereo" radioimg="//cdn.onlineradiobox.com/img/l/2/11682.v16.png" radioname="Bosveld Stereo"></button>
// <button id="set_radio_button" style="display: none;" played="0" listeners="63" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="http://radiostream.co.za:9104/;" streamtype="mp3" radioid="za.bokradio" radioimg="//cdn.onlineradiobox.com/img/l/7/867.v3.png" radioname="Bok Radio"></button>
// <button id="set_radio_button" style="display: none;" played="0" listeners="15" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="https://edge.iono.fm/xice/ecr_live_medium.aac" streamtype="mp3" radioid="za.ecr" radioimg="//cdn.onlineradiobox.com/img/l/8/268.v4.png" radioname="East Coast Radio"></button>
// <button id="set_radio_button" style="display: none;" played="1" listeners="18" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="" streamtype="mp3" radioid="za.munghana" radioimg="" radioname="Munghana Lonene FM"></button>
// <button id="set_radio_button" style="display: none;" played="0" listeners="54" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="" streamtype="mp3" radioid="za.metrofm" radioimg="//cdn.onlineradiobox.com/img/l/9/839.v15.png" radioname="Metro FM"></button>