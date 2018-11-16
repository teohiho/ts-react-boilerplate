var I = require('immutable')
Foo = I.Record({
	bar: 1,
	check: true
})
const foo = new Foo()
console.log(foo.check)