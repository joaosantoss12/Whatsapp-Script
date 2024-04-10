const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));

  
dealer = ''

//casinos = []

binance_id = '389574656'
revolut_id = 'revolut.me/joor6bex'

method = ''


function start(client){
    
    client.onAnyMessage((message) => {
        if(message.body === 'CLOSE123')
            client.close()
    });


    client.onMessage((message) => {

        if(message.body.toUpperCase().includes('VAGAS:')){
            // author -> numero ; from -> onde recebi? chat privado ou chat grupo? @c é contacto @g é grupo
            // [object Object] 1712149541 351910468010@c.us 120363278410912710@g.us
            // console.log(message.sender + ' ' + message.t + ' ' + message.author + ' ' + message.from)

            client
                .sendText(message.author, 'EU')
                .then((result) => {
                    //console.log('Result: ', result);
                    dealer = message.author
                })
                .catch((error) => {
                    console.error('Error on sending message: ', error)
                });

            if(message.body.toUpperCase().includes('BINANCE')){
                method = 'BINANCE'
            }
            else if(message.body.toUpperCase().includes('REVOLUT')){
                method = 'REVOLUT'
            }
        }



        else if(message.author == dealer && (message.body.includes('10') || message.body.includes('15') || message.body.includes('20') || message.body.includes('25') || message.body.includes('30'))){
            if(method == 'BINANCE'){
                client
                    .sendText(message.from, binance_id)
                    .then((result) => {
                        //console.log('Result: ', result)
                    })
                    .catch((error) => {
                        console.error('Error on sending message: ', error)
                    });
            }
            else if(method == 'REVOLUT'){
                client
                    .sendText(message.from, revolut_id)
                    .then((result) => {
                        //console.log('Result: ', result)
                    })
                    .catch((error) => {
                        console.error('Error on sending message: ', error)
                    });
            }
        }

    });


}