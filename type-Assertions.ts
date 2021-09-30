let message // by default the type is going to be of any //
message = 'abc'
let endsWithC = (<string>message).endsWith('c') // this first method is the commonly used one //
let alternateway = (message as string).endsWith('c')
// so we need to specify that message is a string as seen on line 3 // 
console.log(endsWithC)

// compare with the normal way as seen below //
// let message = 'abc'
// let endsWithC = message.endsWith('c')