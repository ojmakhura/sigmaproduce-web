##
## Build docker images

build_web_image:
	. ./.env && docker compose build web

###
## Run the local api and web
###    
	
local_web_deps:
	npm i && npm install file-saver --save && npm install @types/file-saver --save-dev

run_web_local:
	npm start

# run_local_web: build_local_images up_local_app

