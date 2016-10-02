
`@partially-applied/decimal-to-binary`

Takes a decimal value and outputs the binary value as an array.

Install

```livescript
npm install @partially-applied/decimal-to-binary
```
**Quick Guide in Code**

```livescript

dec-to-bin = require '@partially-applied/decimal-to-binary'

dec-to-bin 0 # [0]

dec-to-bin 1 # [1]

dec-to-bin 2 # [1,0]

dec-to-bin 3 # [1,1]

```

`type-signature`

```livescript
decimal-to-binary :: Int -> [Bool,..Bool]
```



**Todo**

- reduce final `.reverse`

