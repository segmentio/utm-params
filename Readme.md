# utm-params [![CI][ci-badge]][ci-link]

Parse a URL, returning all UTM parameters.

## Installation

```sh
$ component install segmentio/utm-params
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

## License

(MIT)


[ci-badge]: https://circleci.com/gh/segmentio/utm-params.svg?style=svg
[ci-link]: https://circleci.com/gh/segmentio/utm-params
