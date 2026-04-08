console.log('JS Date Objects');

(function(){
    const today = new Date();
    let offSet = today.getTimezoneOffset();
    console.log(offSet);
    let dst = 60;

    if((today.getMonth() < 3) &&  today.getDate()< 10){
        dst = 0;
    } 
    if ((today.getMonth() > 9) && (today.getDate() > 2)) {
        dst = 0;
    }

    switch(offSet){
        case (-300 - dst):
            offSet = 'East Coast';
            break;
        case (-360 - dst):
            offSet = 'Central';
            break;
        case (-420 - dst):
            offSet = 'Mountain';
            break;
        case (-480 - dst):
            offSet = 'Pacific';
            break;
        default:
            offSet = "All";
    }
    // template literal
    console.log(`SYSTEM TIME: ${today.toString()}`);
    console.log(`UTC (GMT) TIME: ${today.toUTCString()}`);
    console.log(`Welcome to: ${offSet} Visitors`);
})();

function findMyUTCTime(){
    const today = new Date();
    let offSet = today.getTimezoneOffset();
    console.log(offSet);
    let dst = 60;

    if((today.getMonth() < 3) &&  today.getDate()< 10){
        dst = 0;
    } 
    if ((today.getMonth() > 9) && (today.getDate() > 2)) {
        dst = 0;
    }

    switch(offSet){
        case (-300 - dst):
            offSet = 'East Coast';
            break;
        case (-360 - dst):
            offSet = 'Central';
            break;
        case (-420 - dst):
            offSet = 'Mountain';
            break;
        case (-480 - dst):
            offSet = 'Pacific';
            break;
        default:
            offSet = "All";
    }
    // template literal
    console.log(`SYSTEM TIME: ${today.toString()}`);
    console.log(`UTC (GMT) TIME: ${today.toUTCString()}`);
    console.log(`Welcome to: ${offSet} Visitors`);
}


findMyUTCTime();