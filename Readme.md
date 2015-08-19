# utm-params [![CI][ci-badge]][ci-link]

Parse a URL, returning all UTM parameters.

## Installation

```sh
$ component install segmentio/utm-params
```

## API

### utm(querystring : string)

```js
utm('?utm_source=google&utm_medium=medium&utm_term=keyword&utm_content=some%20content&utm_campaign=some%20campaign');
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
