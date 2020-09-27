import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    menu: {
        flexGrow: 1,
    },
    empty: {
        flexGrow: 10,
    }
}));


export default function NavigationBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        물개 조아
          </Typography>
                    <Button color="inherit" href="/calender">캘린더</Button>
                    <div className={classes.empty}></div>
                    <Button color="inherit" href="/login">Login</Button>
                    <Button color="inherit" href="/signup">회원가입</Button>
                    </Toolbar>
            </AppBar>
        </div>
    );
}