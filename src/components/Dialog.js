import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import StatsTable from './Table'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const btnStyle = {
        position: 'fixed',
        zIndex: '999',
        width: '100%'
    }
    
    return (
        <div>
            <Button style={btnStyle} variant="contained" color="primary" onClick={handleClickOpen}>
                View Statistics
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Statistics
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        Close
                    </Button>
                </Toolbar>
                </AppBar>
                <StatsTable stats={props.stats}></StatsTable>
            </Dialog>
        </div>
    );
}

