
async function get (ctx, next) {
    ctx.state.data = {
        msg: 'hello 小程序'
    }
}

module.exports = {
    get
}