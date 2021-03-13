# Configuration WebUI

## Project overall
client: vue <br/>
server: node express on raspberry pi

## Project purpose
build a configuration webUI to configure MBOX (io device) by raspberry shell command execution


## Install
sudo apt update <br/>
sudo apt install nodejs <br/>
sudo apt install npm <br/>

git clone https://github.com/leekhai18/configuration_webui.git <br/>
npm install <br/>
npm run bootstrap <br/>
npm start <br/>

## Integrate
Update bashexec.sh at root/packages/server
