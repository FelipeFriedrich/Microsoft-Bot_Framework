export class EchoBot{
    async onTurn(context){
        if(context.activity.type =="message"){
            await context.sendActivity(`you said ${context.activity.text}`);
        }else{
            await context.sendActivity(`${context.activity.type} event detected`);
        }
    }
}