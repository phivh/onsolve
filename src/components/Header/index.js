import React from "react";
import logo from "../../assets/images/marvel-logo.jpg"
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    header: {
        background: '#000',
        padding: '15px 20px',
        '& h1': {
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            margin: '0',
            '& img': {
                display: 'inline-block',
                marginRight: '10px',
                maxWidth:'100px'
            }
        }
    },
})

function Header() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <h1>
                <img src={logo} className="header-logo" alt="logo" /> 
                Marvel Manager
            </h1>
        </header>
    )
}

export default Header;