const myPromise = new Promise(function(resolve, reject) {
  reject('Errored, sorry!');
});


async function getData() {
    const data = await myPromise;
    return data
}
getData().catch(error=>console.log(error));