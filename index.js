// Supports ES6
// import { create, Whatsapp } from '@wppconnect-team/wppconnect';
const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));


function start(client){
    client.onMessage((message) => {
        if(message.body.includes('Vagas:')){
            // author -> numero ; from -> onde recebi? chat privado ou chat grupo?
            // [object Object] 1712149541 351910468010@c.us 120363278410912710@g.us
            //console.log(message.sender + ' ' + message.t + ' ' + message.author + ' ' + message.from)
            client
                .sendText(message.author, 'EU')
                .then((result) => {
                    console.log('Result: ', result);
                })
                .catch((error) => {
                    console.error('Error on sending message: ', error)
                });
        }
    });
}