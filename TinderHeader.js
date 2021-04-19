import { IconButton } from '@material-ui/core'
import React from 'react'
import './TinderHeader.css'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'

function TinderHeader() {
    return (
        <div className="header">
            <IconButton className="btn-border">
                <PersonIcon fontSize="large" className="header-icon" />
            </IconButton>
            <img className="header-logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.jpg" alt=""/>
            <IconButton className="btn-border">
                <ForumIcon fontSize="large" className="header-icon" />
            </IconButton>
        </div>
    )
}

export default TinderHeader
