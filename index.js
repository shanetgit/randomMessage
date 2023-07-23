function randomMessage (num){
    return (Math.floor(Math.random()*num))

}

const collectiveMessage = {
    yourCurrentPosition :['hopeful expectation','investment','relaiability and credibility','knowledge and skills in finance,business and maths','wealth'],
    situationHappenedRecently:['bright future','A wish that come true','Happiness and joy'],
    future:['New offer','A fresh offer,motivation,life force','you want to accomplish a big goal']

}

let personalMessage = []
for (let prop in collectiveMessage ){
    let optionIdx = randomMessage(collectiveMessage[prop].length)

switch(prop) {
    case 'yourCurrentPosition':
        personalMessage.push (`Your current position is "${collectiveMessage[prop][optionIdx]}".`)
        break;
    case 'situationHappenedRecently':
        personalMessage.push (`Situation that happened recently for you is "${collectiveMessage[prop][optionIdx]}".`)
        break;
    case 'future':
        personalMessage.push (`The final result of your quastion is "${collectiveMessage[prop][optionIdx]}".` )
        break;
    default:
        personalMessage.push('There is not enough info')

  }
}

function formatMessage(message){
    const formatted = personalMessage.join('\n')
    console.log(formatted)
}
formatMessage(personalMessage);
