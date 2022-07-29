import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles'

const Header = ({ setCoordinates }) => {
    // Style
    const classes = useStyles()

    // Search different cities
    const [autocomplete, setAutocomplete] = useState(null)
    // Autofill when searching
    const onLoad = (autoC) => setAutocomplete(autoC)
    // Change place on map
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat()
        const lng = autocomplete.getPlace().geometry.location.lng()
        setCoordinates({ lat, lng })
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                {/* Title */}
                <Typography variant="h5" className={classes.title}>
                    Travel Companion
                </Typography>
                <Box display="flex">
                    {/* Search Bar Subtitle */}
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    {/* Search Bar */}
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header