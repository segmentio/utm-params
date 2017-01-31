# utm-params

[![CircleCI](https://circleci.com/gh/segmentio/utm-params/tree/master.png?style=badge)](https://circleci.com/gh/segmentio/utm-params)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/utm-params/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/utm-params)

Parse a URL, returning all UTM parameters.

## Installation

```sh
$ npm install @segment/utm-params
```

## API

### utm(querystring : string)

```js
utm('?utm_source=google&utm_medium=medium&utm_term=keyword&utm_content=some%20content&utm_campaign=some%20campaign&utm_test=other%20value');
```

```json
{
  "source": "google",
  "medium": "medium",
  "term": "keyword",
  "content": "some content",
  "name": "some campaign",
  "test": "other value"
}
```

###utm.strict(querystring : string)

Will *only* return the 5 Google Analytics spec'd utm params 

```js
utm.strict('?utm_source=google&utm_medium=medium&utm_term=keyword&utm_content=some%20content&utm_campaign=some%20campaign&utm_test=other%20value');
```

```json
{
  "source": "google",
  "medium": "medium",
  "term": "keyword",
  "content": "some content",
  "name": "some campaign"
}
```
