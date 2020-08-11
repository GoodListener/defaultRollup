
async function init() {
    var result = await test()
    console.log(result);
}

function test() {
    return new Promise(res => {
        res('test');
    })
}

init();