// const counter = (a) => {
//   var x = a;
//   return () => {
//     return x++
//   }
// }

// const count = counter(2)
// console.log(count())


const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  const filtered = data.filter(({ id }) => id % 2 === 0)
 console.log(filtered)  
}
getData()
