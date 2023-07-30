install:
	npm ci

brain-games:
	node bin/brain-games.js 10

publish:
	npm publish --dry-run

lint:
	npx eslint .