axios = require('axios')

// 비동기 : ajax
async function getBoard(){
  let res = await axios("/api/board/1")
  console.log("2", res.data.title);
}
getBoard();
console.log("1", "the end")