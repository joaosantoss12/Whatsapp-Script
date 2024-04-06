// Supports ES6
// import { create, Whatsapp } from '@wppconnect-team/wppconnect';
const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));

//

//casinos = []

//binance_id = '389574656'
//revolut_id = 'revolut.me/joor6bex'

//method = ''


function start(client){
    client.onMessage((message) => {
        if(message.body.includes('Vagas:') || message.body.includes('VAGAS:')){
            // author -> numero ; from -> onde recebi? chat privado ou chat grupo? @c é contacto @g é grupo
            // [object Object] 1712149541 351910468010@c.us 120363278410912710@g.us
            // console.log(message.sender + ' ' + message.t + ' ' + message.author + ' ' + message.from)

            setTimeout
            client
                .sendText(message.author, 'EU')
                .then((result) => {
                    console.log('Result: ', result);
                })
                .catch((error) => {
                    console.error('Error on sending message: ', error)
                });

            /*if(message.body.includes('Binance') || message.body.includes('BINANCE')){
                method = 'BINANCE'

            }
            else if(message.body.includes('Revolut' || message.body.includes('REVOLUT'))){
                method = 'REVOLUT'
            }*/
        }



        /*else if(message.body.includes('10') || message.body.includes('15') || message.body.include('20')){
            if(method === 'BINANCE'){
                client
                    .sendText(message.from, binance_id)
                    .then((result) => {
                        console.log('Result: ', result)
                    })
                    .catch((error) => {
                        console.error('Error on sending message: ', error)
                    });
            }
            else if(method === 'REVOLUT'){
                client
                    .sendText(message.from, revolut_id)
                    .then((result) => {
                        console.log('Result: ', result)
                    })
                    .catch((error) => {
                        console.error('Error on sending message: ', error)
                    });
            }
        }*/
    });
}