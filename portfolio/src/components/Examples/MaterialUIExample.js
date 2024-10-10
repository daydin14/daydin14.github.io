// Dependencies
import React from 'react';
import { Button, TextField, AppBar, Toolbar, Typography, Container, Grid, Paper } from '@mui/material';

const MaterialUIExample = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Material UI Example
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    <Grid item xs={12}>
                        <Paper style={{ padding: '20px' }}>
                            <Typography variant="h5" gutterBottom>
                                Form Example
                            </Typography>
                            <form noValidate autoComplete="off">
                                <TextField label="Name" fullWidth margin="normal" />
                                <TextField label="Email" fullWidth margin="normal" />
                                <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                                    Submit
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={{ padding: '20px' }}>
                            <Typography variant="h5" gutterBottom>
                                Button Example
                            </Typography>
                            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
                                Primary
                            </Button>
                            <Button variant="contained" color="secondary" style={{ marginRight: '10px' }}>
                                Secondary
                            </Button>
                            <Button variant="outlined" color="primary">
                                Outlined
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default MaterialUIExample