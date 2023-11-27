import React from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, Paper } from '@mui/material';
import IBSLogo from '../../public/IBSLogo.png'

const Home = () => {
    return (
        <div style={{ display: 'flex', marginTop: '3rem', width: '100%' }}>
            <Paper
                component="footer"
                elevation={0}
                sx={{ py: 5, backgroundColor: '#00c4b4', width: '15%' }}
            >
                <Container sx={{ px: 4, pxLg: 5 }}>
                    <Typography variant="h6" align="center" color="textPrimary" style={{ fontWeight: 'bold', marginTop: '16rem' }}>
                        &copy;2022-2023 IBS Software. All rights reserved!!
                    </Typography>
                </Container>
            </Paper>
            <Container style={{ padding: '32px' }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item lg={7}>
                        <img
                            style={{
                                width: '100%',
                                borderRadius: '8px',
                                marginBottom: '16px',
                            }}
                            src={IBSLogo}
                            alt="IBS Logo"
                        />
                    </Grid>
                    <Grid item lg={5}>
                        <Typography variant="h3" style={{ fontWeight: 'light' }}>
                            Redefining the future of travel
                        </Typography>
                        <Typography variant="body1">
                            IBS Software's mission is to transform how travel companies operate
                            in a digital world by delivering next-generation products to
                            accelerate growth, drive efficiency, and create differentiated
                            customer experiences
                        </Typography>
                        <Button
                            style={{
                                backgroundColor: '#1976D2',
                                color: '#fff',
                                textDecoration: 'none',
                                marginTop: '16px',
                            }}
                            href="https://www.ibsplc.com/"
                            variant="contained"
                        >
                            Explore about IBS
                        </Button>
                    </Grid>
                </Grid>
                <Card
                    style={{
                        backgroundColor: '#6c757d',
                        marginTop: '32px',
                    }}
                >
                    <CardContent style={{ padding: '32px' }}>
                        <Typography
                            variant="h4"
                            style={{ color: '#fff' }}
                            component="div"
                        >
                            Engage, grow, adapt - mission-critical systems for travel
                        </Typography>
                    </CardContent>
                </Card>
                <Grid container spacing={4} className="cards">
                    <Grid item md={4} mb={5}>
                        <Card className="h-100">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Empowering airline operations and crew management
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    With iFlight, leading airlines safeguard passenger experiences by hitting the
                                    sweet spot between reliable, cost-effective, and optimized airline operations and crew management.
                                </Typography>
                            </CardContent>
                            <div>
                                <Button
                                    className="btn-primary btn-sm"
                                    href="https://www.ibsplc.com/product/airline-operations-solutions"
                                    style={{ marginTop: '1rem' }}
                                >
                                    Airline Operations
                                </Button>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={4} mb={5}>
                        <Card className="h-100">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Empowering air cargo
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Driving cargo revenues and innovation for airlines and ground handlers through a data-driven platform
                                    that opens new business opportunities, collaboration, and efficiencies across the value chain.
                                </Typography>
                            </CardContent>
                            <div>
                                <Button
                                    className="btn-primary btn-sm"
                                    href="https://www.ibsplc.com/product/air-cargo-solutions"
                                    style={{ marginTop: '3rem' }}
                                >
                                    Air Cargo
                                </Button>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={4} mb={5}>
                        <Card className="h-100">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Next-gen digital platform for tour & cruise
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Built for the new era of cruising, iTravel is a modern and integrated shore to ship platform designed to
                                    manage new age requirements of cruise lines that aspire to differentiate on customer experience and
                                    become total vacation providers.
                                </Typography>
                            </CardContent>
                            <div>
                                <Button
                                    className="btn-primary btn-sm"
                                    href="https://www.ibsplc.com/product/tour-and-cruise-solutions"
                                    style={{ marginTop: '-0.5rem' }}
                                >
                                    Tour & Cruise
                                </Button>
                            </div>
                        </Card>
                    </Grid>
                </Grid>

                <div className="text-white my-5 py-4 text-center">
                    <div className="center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/54aOB3Otmko"
                            frameborder="0"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

                <div className="card-body" id="youtube">
                    <p className="text-white m-8" style={{ fontSize: 'x-large', textAlign: 'center' }}>
                        <a href="https://www.youtube.com/@Ibsplccorporate">
                            <img
                                className="ing-fluid rounded mb-4 mb-lg-8"
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                                width="150px"
                                height="50px"
                                alt="YouTube Logo"
                            />
                        </a>
                    </p>
                </div>
            </Container>
            <Paper
                component="footer"
                elevation={0}
                sx={{ py: 5, backgroundColor: '#00c4b4', width: '15%' }}
            >
                <Container sx={{ px: 4, pxLg: 5 }}>
                    <Typography variant="h6" align="center" color="textPrimary" style={{ fontWeight: 'bold', marginTop: '16rem' }}>
                        &copy;2022-2023 IBS Software. All rights reserved!!
                    </Typography>
                </Container>
            </Paper>
        </div>
    );
};

export default Home;
