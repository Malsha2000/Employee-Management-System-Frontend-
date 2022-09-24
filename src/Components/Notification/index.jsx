import { Snackbar, makeStyles } from "@material-ui/core";
import React from "react";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        top: theme.spacing(9),
    },
}));

function Notification(props) {
    const { notify, setNotify } = props;
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false,
        });
    };

    return (
        <div>
            <Snackbar
                className={classes.root}
                open={notify.isOpen}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert severity={notify.type} onClose={handleClose}>
                    {notify.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Notification;
