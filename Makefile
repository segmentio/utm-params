#
# Binaries.
#

DUO = node_modules/.bin/duo
DUOT = node_modules/.bin/duo-test
ESLINT = node_modules/.bin/eslint

#
# Files.
#

SRCS = index.js
TESTS = test/index.test.js
BUILD = build.js

#
# Arguments.
#

BROWSER ?= chrome

PORT ?= 0

DUOT_ARGS = \
	--reporter spec \
	--port $(PORT) \
	--commands "make $(BUILD)"

#
# Chore tasks.
#

# Install node dependencies.
node_modules: package.json $(wildcard node_modules/*/package.json)
	@npm install

# Remove temporary/built files.
clean:
	@rm -rf *.log $(BUILD)
.PHONY: clean

# Remove temporary/built files and vendor dependencies.
distclean: clean
	@rm -rf components node_modules
.PHONY: distclean

#
# Build tasks.
#

# Build test bundle.
$(BUILD): node_modules component.json $(SRCS) $(TESTS)
	@$(DUO) --development --stdout test/index.test.js > $@
.DEFAULT_GOAL = $(BUILD)

#
# Test tasks.
#

# Lint JavaScript files.
lint: node_modules
	@$(ESLINT) $(SRCS) $(TESTS)

# Test locally in PhantomJS.
test-phantom: node_modules $(BUILD)
	@$(DUOT) $(DUOT_ARGS) phantomjs

# Test locally in a browser.
test-browser: node_modules $(BUILD)
	@$(DUOT) $(DUOT_ARGS) browser $(BROWSER)

# Test with Sauce Labs.
test-sauce: $(BUILD)
	@$(DUOT) $(DUOT_ARGS) saucelabs \
		--browsers $(BROWSER) \
		--title analytics.js
.PHONY: test-sauce

# Test shortcut.
test: test-phantom
.PHONY: test
