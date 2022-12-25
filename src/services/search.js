import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

// import instantsearch from 'instantsearch.js';
// import { searchBox, hits } from 'instantsearch.js/es/widgets';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
        apiKey: 'xyz', // Be sure to use an API key that only allows searches, in production
        nodes: [
            {
                host: 'localhost',
                port: '8108',
                protocol: 'http',
            },
        ],
    },
    // The following parameters are directly passed to Typesense's search API endpoint.
    // So you can pass any parameters supported by the search endpoint below.
    // queryBy is required.
    // filterBy is managed and overridden by InstantSearch.js. To set it, you want to use one of the filter widgets like refinementList or use the `configure` widget.
    additionalSearchParameters: {
        queryBy: 'url,title,provider,description',
    },
});

export const searchClient = typesenseInstantsearchAdapter.searchClient;


