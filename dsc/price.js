const yahooStockPrices = require('yahoo-stock-prices')

module.exports.run = async (client, message, args) => {
    yahooStockPrices.getCurrentPrice(args[0], (err, price) => {
        message.reply(`The current price for **${args[0]}** is: $${price} USD`)
    })
}
module.exports.help = {
    name: "price",
    aliases: []
}