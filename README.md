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

git clone https://github.com/leekhai18/configuration_webui.git
cd configuration_webui
npm install
npm run bootstrap
npm start
```

## Integrate
Update [bashexec.sh](https://github.com/leekhai18/configuration_webui/blob/master/packages/server/bashexec.sh) at root/packages/server
