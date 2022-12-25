# Link Searcher

Search Engine to search for relevant links from given json file (./data/links.json). 

## Tech Stack
- Typesense: Search Engine API and Indexing
- Instasearch: Frontend helper package to connect to Search Engine API
- Typesense-instasearch-adapter: Adapter to wrap Typesense interface for use in instasearch interface
- Material UI: Component Library for Frontend Design
- Metadata-scraper: To scrap metadata of a link

## Description
Firstly a Typesense server is started. Metadata-scraper scrapes metadat of links in JSON file. Links and respective metadata are saved in cache. Same data is populated in Typesense server. Frontend uses typesense-instasearch-adapter to connect instasearch API to Typesense server. Instasearch is used to render search and hit components with custom design and components designed using Material UI Component Library.

## How to run
### Running from Source Code
Build docker image
```
sudo docker build -t <username>/<containername> .
```

Run the docker image in interactive mode
```
sudo docker run --name linksearch --network="host" -it -v "/var/run/docker.sock:/var/run/docker.sock:rw" <username>/<containername>:latest
```

Run the docker image in detached mode
```
sudo docker run --name linksearch --network="host" -d -v "/var/run/docker.sock:/var/run/docker.sock:rw" <username>/<containername>:latest
```
If running in detached mode, give the image some time to run. It takes about 1-2 minutes to completely run. 
Finally go to localhost:3000 to see the application.

### Running Image from Docker Hub
Pull the docker image
```
sudo docker pull shashvat6264/linksearch:latest
```

Run the docker image in interactive mode
```
sudo docker run --name linksearch --network="host" -it -v "/var/run/docker.sock:/var/run/docker.sock:rw" shashvat6264/linksearch:latest
```

Run the docker image in detached mode
```
sudo docker run --name linksearch --network="host" -d -v "/var/run/docker.sock:/var/run/docker.sock:rw" shashvat6264/linksearch:latest
```
If running in detached mode, give the image some time to run. It takes about 1-2 minutes to completely run. 
Finally go to localhost:3000 to see the application.
