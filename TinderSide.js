import { Avatar, Box, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import './TinderSide.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { IconButton } from '@material-ui/core'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

function tabProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div className="pt-4 pl-3 flex-grow-1" role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
        {value === index && (
            <>{children}</> 
        )}
      </div>
    );
}

function TinderSide({person}) {
    console.log(person)
    const [value, setValue] = useState(0);
    // const [person, setPerson] = useState({})
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="h-100 tinder__side">
            <div className="tinder__side__navbar">
                <button className="d-flex tinder__side__info">
                    <Avatar className="tinder__side__avatar">H</Avatar>
                    <h5 className="tinder__side__name">
                        My Profile
                    </h5>
                </button>
                <button className="tinder__side__meetingbox">
                    <BusinessCenterIcon className="tinder__side__meeting"/>
                </button>
                
            </div>
            <div className="tinder__side__info__box">
                <Tabs className="w-100 swipe-tabs" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Matches" {...tabProps(0)} />
                    <Tab label="Messages" {...tabProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className="WLY-Container" >
                        <div className="WLY-pic-container" >
                            <div className="WLY-pic" style={{backgroundImage: `url("https://mavenbuzz.com/wp-content/uploads/2020/02/pewdiepie.jpg")`}}>
                                
                            </div>
                        </div>
                        <div className="WLY-info-container">
                            <div className="WLY-info">
                                <div className="WLY-like-number">
                                    83 
                                </div>
                                <div className="WLY-goldenheart">
                                    <img src="/static/TinderFlyingGoldenHeart.png" alt=""/>
                                </div>
                                <div className="WLY-likes">
                                    {person ? person.matches.length > 5 ? person.matches.length + ' likes' : '83 likes' : 0}
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="messages-tab">
                        <div>
                            <img src="/static/SayHello.png" alt=""/>
                        </div>
                        <span>Say Hello</span>
                        <div className="greetings">
                            Looking to strike up a conversation? When you match with others, you can send them a message under “Matches”
                        </div>
                    </div>
                    
                </TabPanel>
                {/* <path d="M2.16 7.354h6.37a5.947 5.947 0 00-.894 2.084H2.16c-.406.04-.8-.15-1.015-.49a1.04 1.04 0 010-1.114c.215-.341.61-.532 1.015-.491v.01zm1.68 6.263c-.406.04-.8-.15-1.015-.49a1.04 1.04 0 010-1.114c.215-.34.61-.531 1.015-.49h3.796c.077.375.186.751.35 1.106l.021.043.022.043.546.902H3.84zm2.476 4.18c-.59 0-1.069-.472-1.069-1.053 0-.582.479-1.053 1.07-1.053h3.49l1.266 2.106H6.316zm13.746-1.837l-6.36 2.89a.495.495 0 01-.611-.183l-3.971-6.5a4.132 4.132 0 01-.185-3.02C9.556 7.183 11.127 6 12.949 6c.404 0 .818.064 1.233.183 1.222.365 1.745.999 2.476 2.299a5.271 5.271 0 012.346-.73c.327 0 .665.064 1.047.171 2.29.677 3.382 2.901 2.618 5.297a4.287 4.287 0 01-1.909 2.396l-.153.086-.152.075-.393.183z" fill="url(#svg-fill-radial__tinder-gold)" stroke="" stroke-width=""></path> */}
            </div>
        </div>
    )
}

export default TinderSide
