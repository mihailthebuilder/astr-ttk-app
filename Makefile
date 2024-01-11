deploy:
	caprover deploy --default

build:
	npm run build

runbuild:
	node ./dist/server/entry.mjs

build-run: build runbuild