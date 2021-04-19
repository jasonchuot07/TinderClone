import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import { IconButton } from '@material-ui/core'
import './SwipeButtons.css'

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <div className="swipeButtons_container">
                <IconButton className="btn-border">
                    <ReplayIcon className="swipeButtons_repeat" fontSize="large" />
                </IconButton>
                <IconButton className="btn-border btn-large">
                    <CloseIcon className="swipeButtons_left" fontSize="large" />
                </IconButton>
                <IconButton className="btn-border">
                    <StarRateIcon className="swipeButtons_star" fontSize="large" />
                </IconButton>
                <IconButton className="btn-border btn-large">
                    <FavoriteIcon className="swipeButtons_right" fontSize="large" />
                </IconButton>
            
                <IconButton className="btn-border">
                    <FlashOnIcon className="swipeButtons_lightning" fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default SwipeButtons
