/* eslint-disable */

// Start Typesense server with `npm run typesenseServer`
// Then run `npm run populateTypesenseIndex` or `node populateTypesenseIndex.js`

const Typesense = require('typesense');

const { getDataWithDescription } = require('./scraper');

module.exports = (async () => {
    const typesense = new Typesense.Client({
        nodes: [
            {
                host: 'localhost',
                port: '8108',
                protocol: 'http',
            },
        ],
        apiKey: 'xyz',
    });

    const schema = {
        name: 'links',
        fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'url', type: 'string' },
            { name: 'provider', type: 'string' },
            { name: 'icon', type: 'string' }
        ],
    };

    console.log('Populating index in Typesense');

    try {
        await typesense.collections('links').delete();
        console.log('Deleting existing collection: links');
    } catch (error) {
        // Do nothing
    }

    console.log('Creating schema: ');
    console.log(JSON.stringify(schema, null, 2));
    await typesense.collections().create(schema);

    console.log('Adding records: ');
    const linkData = await getDataWithDescription();
    try {
        const returnData = await typesense
            .collections('links')
            .documents()
            .import(linkData);
        console.log(returnData);
        console.log('Done indexing...');

        const failedItems = returnData.filter(item => item.success === false);
        if (failedItems.length > 0) {
            throw new Error(
                `Error indexing items ${JSON.stringify(failedItems, null, 2)}`
            );
        }

        return returnData;
    } catch (error) {
        console.log(error);
    }
})();
