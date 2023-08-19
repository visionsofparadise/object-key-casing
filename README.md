# object-key-casing

Utilities and utility types to capitalize, uppercase, uncapitalize and lowercase object keys.

## Utility Examples

```javascript
const capitalized = capitalizeKeys({
	string: 'test'
});

// { String: 'test' }
```

```javascript
const uppercased = uppercaseKeys({
	string: 'test'
});

// { STRING: 'test' }
```

```javascript
const uncapitalized = uncapitalizeKeys({
	String: 'test'
});

// { string: 'test' }
```

```javascript
const lowercased = lowercaseKeys({
	STRING: 'test'
});

// { string: 'test' }
```

## Utility Type Examples

```javascript
type Capitalized = CapitalizeKeys<{
	string: 'test'
}>;

// { String: 'test' }
```

```javascript
type Uppercased = UppercaseKeys<{
	string: 'test'
}>;

// { STRING: 'test' }
```

```javascript
type Uncapitalized = UncapitalizeKeys<{
	String: 'test'
}>;

// { string: 'test' }
```

```javascript
type Lowercased = LowercaseKeys<{
	STRING: 'test'
}>;

// { string: 'test' }
```
