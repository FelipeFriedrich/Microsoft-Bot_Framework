const { BotFrameworkAdapter, MemoryStorage} = require("botbuilder");
const restify = require("restify");
const {EchoBot} = require("./bot");

const echo = new EchoBot();

let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, ()=>{
    console.log(` ${server.name} listening on ${server.url}`);
});

const adapter = new BotFrameworkAdapter({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});


server.post("/api/messages", (req,res)=>{
    adapter.processActivity(req, res, async (context)=>{
        await echo.onTurn(context);
    });
}); 