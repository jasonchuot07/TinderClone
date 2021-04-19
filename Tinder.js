import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import SwipeButtons from './SwipeButtons'
import TinderCards from './TinderCards'
// import TinderHeader from './TinderHeader'
import TinderSide from './TinderSide'

const instance = axios.create({
    baseURL: 'http://localhost:3300'
})

const changeFavicon = () => {
    var link = document.querySelector("link[rel~='icon']")
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = '/favicon/favicon-96x96.png'
}
function Tinder() {
    const [people, setPeople] = useState([]);
    useEffect(()=> {
        async function fetchData () {
            const req = await axios.get('http://localhost:3300/tinder/cards');
            await setPeople(req.data)
            console.log(req.data)
        }
        fetchData()
        changeFavicon()
    },[])

    document.title = 'Tinder | Dating, make friends & meet new people'
    return (
        <>
            {/* <TinderHeader /> */}
            <div className="d-flex w-100 h-100">
                <TinderSide person={people[0]} />
                <TinderCards />
            </div>
        </>
    )
}

export default Tinder
