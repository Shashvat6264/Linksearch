const getMetaData = require('metadata-scraper');
const settings = require('./settings.json');
const fs = require('fs');


async function getDescription(link) {
    const metadata = await getMetaData(link);
    return metadata;
}

async function writeToCache(data){
    fs.writeFile(settings.cache_file, JSON.stringify(data), (err) => {
        if (err){
            console.log("Error in writing to cache");
        }
        else{
            console.log("Successfully written to cache");
        }
    })
}

async function getDataWithDescription() {
    // Special for this file
    if (fs.existsSync(settings.cache_file)){
        var cachedData = require(settings.cache_file);
        console.log("Using cached data");
        cachedData = cachedData.map((item) => {
            if (item.description === undefined){
                item.description = "Error";
            }
            if (item.title === undefined){
                item.title = "Error";
            }
            return item;
        })
        return cachedData;
    }

    var data = require(settings.origin_file);
    console.log(data)
    data = data.links

    const finalData = [];
    var metadata = null;
    for (const link of data) {
        try{
            metadata = await getDescription(link);
        }
        catch(err){
            console.log(err);
            metadata = {
                title: "Error",
                description: "Error",
                url: link,
                provider: "Error",
                image: "Error",
                icon: "Error"
            }
        }
        console.log(metadata)
        finalData.push(metadata);
    }
    console.log(finalData);

    writeToCache(finalData);

    return finalData;
}

module.exports = {getDataWithDescription}