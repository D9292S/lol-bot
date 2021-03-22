const Discord = require('discord.js')
const client = new Discord.Client()

const command = require("./command")

client.on('ready', () => {
    console.log("The bot is Ready to go....")

    command(client, ['ping','test'], (message) => {
        message.channel.send("Pong!")
    })

    command(client, 'servers', message => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(`${guild.name} has total of ${guild.memberCount} members`
            )
        })
    })

    command(client, 'status', message => {
        const content = message.content.replace('$status ', '')
        
        client.user.setPresence({
            activity: {
                name: content,
                type: 1,
            }
        })
    })
})

client.login("NzYxNjM1MDMzNDQ1ODI2NTcw.X3dd5g.KUl6Td0jXb07msHtzimwho1K3BU")