test:
		./node_modules/.bin/mocha --reporter spec

nyan:
		./node_modules/.bin/mocha --reporter nyan

.PHONY: test
