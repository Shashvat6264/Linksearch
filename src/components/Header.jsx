import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Container,
    Link,
    Stack,
} from '@mui/material';

import {SearchBox} from 'react-instantsearch-dom';

import HeaderBG from '../assets/img/header.jpg';

const Header = () => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '60vh',
                    backgroundImage: `url(${HeaderBG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.55),
                rgba(0, 0, 0, 0.5), 
                rgba(255, 255, 255, 0)
              )`,
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '60%',
                            position: 'absolute',
                            top: '0px',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                            }}
                        >
                            <Container sx={{ height: '100%' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        position: 'relative',
                                        top: '40%',
                                        transform: 'translateY(-50%)',
                                    }}
                                >
                                    <Box sx={{
                                        padding: '0.5em',
                                        textAlign: 'center',
                                    }}>
                                        <Typography variant="h3" component="div" sx={{
                                            margin: '0 auto',
                                            color: 'white',
                                            fontWeight: 600,

                                        }}>
                                            Search for your saved links
                                        </Typography>
                                    </Box>

                                    <Box px="0.5em" py="1.5em" sx={{
                                        textAlign: 'center',
                                    }}>
                                        <SearchBox />
                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Header;
