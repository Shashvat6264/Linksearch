import React from 'react';

// Material UI Imports

import { Box } from "@mui/material";

import {
    InstantSearch,
    Hits,
    SearchBox,
    Pagination,
    Highlight,
    ClearRefinements,
    RefinementList,
    Configure,
} from 'react-instantsearch-dom';

import { searchClient } from '../../services/search';
import Header from '../Header';
import Hit from '../Hit';

const HomePage = () => {
    return (
        <>
            <InstantSearch indexName="links" searchClient={searchClient}>
                <Header />
                <div className="right-panel">
                    <Hits hitComponent={Hit} />
                    <Pagination />
                </div>
            </InstantSearch>
        </>
    )
}


export default HomePage;