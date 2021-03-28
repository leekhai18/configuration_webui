# Configuration WebUI

## Project overall
client: vue <br/>
server: node express on raspberry pi

## Project purpose
build a configuration webUI to configure MBOX (io device) by raspberry shell command execution


## Install
```jsx
sudo apt update
sudo apt install nodejs
sudo apt install npm

git clone https://xforce-rio@dev.azure.com/xforce-rio/RioMboxV2/_git/Hub-FW-WebUI
npm install --prefix ./Hub-FW-WebUI
npm run bootstrap --prefix ./Hub-FW-WebUI
npm start --prefix ./Hub-FW-WebUI
```
