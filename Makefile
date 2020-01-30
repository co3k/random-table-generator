all:

deps:
	yarn

test: deps
	yarn test

server: deps
	yarn run dev

deploy: deps
	yarn run deploy
