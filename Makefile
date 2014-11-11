
build:
	@duo test/test.js > build.js

test: build
	@duo-test browser -c make

clean:
	rm -rf components

.PHONY: test