all:

deps:
	yarn

server: deps
	yarn run dev

deploy: deps
	yarn run deploy
