async function getData() {
  let result = await fetch(
    "https://utljncpx54.execute-api.ap-northeast-1.amazonaws.com/default/Students-API"
  );
  result = await result.json();
  return result;
}

module.exports = { getData };
