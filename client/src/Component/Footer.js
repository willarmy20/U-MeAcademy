import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../index.css';

export default function Footer() {
    return (
        <AppBar position="static" color="primary" style={{backgroundColor: '#D4E09B'}} className="footer">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 TBD
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}