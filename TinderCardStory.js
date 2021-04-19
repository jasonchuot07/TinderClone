import React from 'react'
import Slider from "react-slick";
import './TinderCardStory.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Chip from '@material-ui/core/Chip';

function NextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="next-container">
          <NavigateNextIcon className="next-slick"/>
      </div>
    );
}
function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="prev-container">
          <NavigateBeforeIcon className="prev-slick"/>
      </div>
    );
}

function TinderCardStory({person}) {

    var settings = {
        dots: true,
        speed: 500,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        fade: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        customPaging: function(i) {
            return (
              <a className="story-line">
              </a>
            );
        },
    };

    return (
        <Slider className="h-100 slider" {...settings}>
            {person.urls.map((pic,i)=> 
                <TPic person={person} url={pic} cardindex={i} />
            )}
        </Slider>
    )
}

export default TinderCardStory

function TPic ({person,url,cardindex}) {
    console.log(cardindex,person)
    return (
        <div className="carddeck" style={{backgroundImage: `url("${url}")`}}>
            <div className="position-absolute p-3" style={{bottom: '2%', width: "95%", zIndex: 1000}}>

            
                {cardindex === 0 && 
                    <>
                        <div className="carddeck__info__header">
                            <div className="person-name">{person.name}</div>
                            <div className="person-age">{person.age}</div>
                            <div className="certified">
                                <img src="/static/guarantee.png" width="20px" height="20px" alt=""/>
                            </div>
                        </div>
                        <div className="carddeck__active__container">
                            <div className="carddeck__recent__active"></div>
                            <span>Recently Active</span>
                        </div>
                        <div className="carddeck__bio__container">
                            <span>{person.bio}</span>
                        </div>
                        <div className="carddeck__interests__container">
                            {person.interests.map((interest)=>(
                                <Chip size="small" label={interest} />
                            ))}
                        </div>
                    </>   
                }
                {cardindex === 1 && 
                    <>
                        <div className="carddeck__info__header">
                            <div className="person-name">{person.name}</div>
                            <div className="person-age">{person.age}</div>
                            <div className="certified">
                                <img src="/static/guarantee.png" width="25px" alt=""/>
                            </div>
                        </div>
                        <div className="carddeck__location__container">
                            <div className="carddeck__location__icon">
                                <img src="/static/location-icon.png" width="13px" alt=""/>
                            </div>
                            <span>{person.location ? person.location : '5 killometres away'}</span>
                        </div>
                        <div className="carddeck__work__container">
                            <div className="carddeck__work__icon">
                                <img src="/static/briefcase.png" width="17px" alt=""/>
                            </div>
                            <span>{person.work && person.work}</span>
                        </div>
                    </>
                }
                {cardindex === 2 && 
                    <>
                        <div className="carddeck__info__header">
                            <div className="person-name">{person.name}</div>
                            <div className="person-age">{person.age}</div>
                            <div className="certified">
                                <img src="/static/guarantee.png" width="25px" alt=""/>
                            </div>
                        </div>
                        <div className="carddeck__education__container">
                            <div className="carddeck__education__icon">
                                <img src="/static/education.png" width="17px" alt=""/>
                            </div>
                            <span>{person.education && person.education}</span>
                        </div>
                    </>
                }
            </div>
            
        </div>
    )
}
