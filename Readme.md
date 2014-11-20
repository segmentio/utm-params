
# utm-params

  parse and get all utm parameters.

## Installation

```bash
$ component install segmentio/utm-params
```

## API

### utm(querystring)

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

