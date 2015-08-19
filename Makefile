
build:
	@duo test/test.js --stdout > build.js

test: build
	@duo-test browser -c make

clean:
	rm -rf components

.PHONY: test