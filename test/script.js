function inner() {
  let a = 10
  return function outer(){
    console.log(a)
  }
}

let close = inner()
console.log(close())