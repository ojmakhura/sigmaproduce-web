build_web: 
	mvn -f angular install -DskipTests=true -o

##
## Build docker images

build_web_image:
	. ./.env && docker compose build web

###
## Run the local api and web
###    
	
local_web_deps: build_web
	npm i && npm install file-saver --save && npm install @types/file-saver --save-dev

run_web_local: build_web
	npm start

# run_local_web: build_local_images up_local_app

