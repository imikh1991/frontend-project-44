install: install-deps
	npx simple-git-hooks

run:
	bin/brain-games.js 10

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

jest-test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

publish:
	npm publish --dry-run

.PHONY: test