import React from 'react'


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import {
    Highlight,
} from 'react-instantsearch-dom';

const Hit = ({ hit }) => {
    return (
        <Card sx={{ display: 'flex', width: '30em' }}>
            <ButtonBase onClick={(event) => {
                window.open(hit.url, '_blank');
            }}>
                {
                    hit.icon ? (
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={hit.icon}
                            alt="Icon here"
                        />
                    ) : null
                }
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {hit.title === 'Error' ? 'Unknown' : hit.title}
                        </Typography>
                        {
                            hit.description !== 'Error' ? (
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {hit.description.length > 40 ? hit.description.substring(0, 40) + '...' : hit.description}
                                </Typography>
                            ) : null
                        }
                    </CardContent>
                </Box>
            </ButtonBase>
        </Card>
    )
}

export default Hit;