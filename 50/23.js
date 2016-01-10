var text = "'I'm the programmer,' she said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the programmer," she said, "it's my job."