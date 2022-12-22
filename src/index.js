const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({intents: [GatewayIntentBits.Guilds]})

client.once("ready", ()=>{
    console.log("ready")
})
client.on("interactionCreate", async(interaction)=>{
    if (interaction.isChatInputCommand()){
        if (interaction.commandName==="ping"){
            await interaction.reply("pong")
        }else if (interaction.commandName==="cat"){
            await interaction.reply("meow")
        }else if (interaction.commandName==="user"){
            await interaction.reply("your tag: "+interaction.user.tag+"\nyour id: "+interaction.user.avatarURL())
        }else if (interaction.commandName==="server"){
            await interaction.reply("servername: "+interaction.guild.name)
        }
    }
})

client.login("MTAzMDIzMDMyMTY3OTA2MTA1NA.GYxiYq.gpkUyQ9H4tUkQ6Sfi2o5fPNQtOjKLokI28mAKQ")