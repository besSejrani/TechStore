import React from 'react'

import {Box, Container} from "@material-ui/core"
import {makeStyles ,createStyles, Theme} from "@material-ui/core/styles"

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Container>
                <Box>
                    hello
                </Box>
            </Container>
            
        </footer>
    )
}

export default Footer


// =================================================================

    

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
        backgroundColor: "#212121",
        height: "120px"
    }
}))
