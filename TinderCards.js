import React, { useEffect, useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import SwipeButtons from './SwipeButtons';
import axios from 'axios'
import TinderCardStory from './TinderCardStory';
import Chip from '@material-ui/core/Chip';


const instance = axios.create({
    baseURL: 'http://localhost:3300'
})

const Htu = ({label,picture, width}) => {
    return (
        <div className="htu ml-3">
            <img src={`/static/${picture}.png`} width={width} alt={picture} />
            <span className="htu-label">{label}</span>
        </div>



    )
}

function TinderCards() {

    
    const [example, setExample] = useState([
        {
            name:'Pewdiepie',
            urls: [
                "https://mavenbuzz.com/wp-content/uploads/2020/02/pewdiepie.jpg",
                "https://wallpapercave.com/wp/wp1815293.jpg"
            ]
        },
        {
            name:'Pewdiepie',
            urls: [
                "https://mavenbuzz.com/wp-content/uploads/2020/02/pewdiepie.jpg",
                "https://wallpapercave.com/wp/wp1815293.jpg"
            ]
        }
    ])
    const [people, setPeople] = useState([]);

    useEffect(()=> {
        async function fetchData () {
            const req = await instance.get('/tinder/cards');
            setPeople(req.data)
        }

        fetchData()
        
    },[])
    console.log(people);
    const swiped = (direction, nameToDelete) => {
        console.log('Removed:', nameToDelete, direction)
    }

    const outOfFrame = name => {
        console.log(name, 'Left the screeen');
    }
    const [htu, setHtu] = useState(true)
    return (
        <div className="tinderCard__container">    
            <div className="card__container">
                {people.map(person => (
                    <TinderCard className="swipe" onSwipe={(dir)=> swiped(dir,person.name)} onCardLeftScreen={()=> outOfFrame(person.name)}>
                        <div className="deck">
                            <TinderCardStory person={person} />
                            <a className="carddeck__info__icon">
                                <img src="/static/info-button.png" alt=""/>
                            </a>
                        </div> 
                    </TinderCard>
                ))}
            </div> 
            <SwipeButtons />
            {htu ? 
                <div className="how_to_use_container">
                    <Chip label="Hide" className="hide_htu" size="small" onClick={()=>setHtu(false)} />
                    <div className="how_to_use">
                        <Htu label="NOPE" picture="nope" width="20px" />
                        <Htu label="LIKE" picture="like" width="20px" />
                        <Htu label="OPEN PROFILE" picture="open-profile" width="20px" />
                        <Htu label="CLOSE PROFILE" picture="close-profile" width="20px" />
                        <Htu label="SUPER LIKE" picture="super-like" width="25px" />
                        <Htu label="NEXT PHOTO" picture="next-photo" width="60px" />
                    </div>
                </div> 
                : <div className="how_to_use_container">
                    <Chip label="Show" className="hide_htu" size="small" onClick={()=>setHtu(true)} />
                </div>
            }
        </div>
    )
}

export default TinderCards
