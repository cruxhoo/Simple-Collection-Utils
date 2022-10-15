# Simple list of utilities to validate collections

This is meant to be a simple set of utility methods to do simple validations
over collections. Something similar to the Apache StringUtils in Java.

### Offers basic methods:

```typescript
- isEmptyList()
- isNotEmptyList()
- isEmptyString()
- isBlankString()
- pathExistsInObject()
```

### How to install:
```shell
npm install simple-collection-utils
```

### How to use:
```typescript
import SimpleCollectionUtils from 'simple-collection-utils';

const thisIsAnEmptyList: any[] = [];
const thisIsABlankString = '      ';

if (SimpleCollectionUtils.isEmptyList(thisIsAnEmptyList)) {
    // This collection is empty
}

if (SimpleCollectionUtils.isBlankString(thisIsAnEmptyList)) {
    // This string only contains whitespaces is empty
}

const object = {
    a: {
        b: {
            c: 'hello'
        }
    }
};

const result = CollectionUtils.pathExistsInObject('a.b.c', object);

```
