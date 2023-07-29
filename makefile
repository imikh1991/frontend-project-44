install: install-deps
	npx simple-git-hooks

brain-calc:
	bin/brain-calc.js 10

brain-even:
	bin/brain-even.js 

brain-games:
	bin/brain-games.js 10

brain-gcd: 
    bin/brain-gcd.js 10

brain-prime: 
    bin/brain-prime.js 10

brain-progression: 
    bin/brain-progression.js 10

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