# usePaginationParams

A simple React library for managing pagination through the URL

## API

### usePaginationParams()

```typescript
usePaginationParams(args? : { limit? : number, offset? : number }) => {
        limit: number, 
        offset: number,
        setLimit: (limit: number) => void,
        setOffset: (offset: number) => void,
}
```

| Parameter | Type     | Required? | Default value | Description    |
|-----------|----------|-----------|---------------|----------------|
| `limit`   | `number` | optional  | 5             | Default limit  |
| `offset`  | `number` | optional  | 0             | Default offset |
