// This component will play various relaxing noises: white noise, ocean noise, desert noise, creek noise
// https://soundbible.com/mp3/Crisp_Ocean_Waves-Mike_Koenig-1486046376.mp3
// https://soundbible.com/mp3/rainforest_ambience-GlorySunz-1938133500.mp3
// https://soundbible.com/mp3/Ocean_Waves-Mike_Koenig-980635527.mp3

import React, { Component } from 'react';
import {Howl} from "howler"
const audioClips = [
    {sound: "https://soundbible.com/mp3/Crisp_Ocean_Waves-Mike_Koenig-1486046376.mp3", label: "Ocean Waves"},
    {sound: "https://soundbible.com/mp3/rainforest_ambience-GlorySunz-1938133500.mp3", label: "Rain Forest"},
    {sound: "https://soundbible.com/mp3/2_Minute_Thunderstorm-Mike_Koenig-574654058.mp3", label: "Thunderstorm"},
    {sound: "#", label: "Stop Sound"}
]
var sound = null
class Sounds extends Component {
    soundPlay = (src) => {
        if (sound != null){
            sound.stop()
            sound.unload()
            sound = null
        }
        sound = new Howl({
            src,
            html5: true,
            volume: .5
        })
        sound.play()
    }

    RenderButtonSound = () => {
        console.log("RenderButtonSound")
        return audioClips.map((soundObj, index) => {
        return (<button className="sound-btn" key={index} onClick={() => this.soundPlay(soundObj.sound)}>{soundObj.label}</button>)})
    }

    render() {
        return (
            <div>
                <h2>Sounds</h2>
                {this.RenderButtonSound()}
            </div>
        );
    }
}

export default Sounds;