const schedule = require ('node-schedule')

//*date and time


//* interval
const myfunc = delay =>{
    let dt=new Date();
    let date=("0"+ dt.getDate()).slice(-2);
    let month=("0"+(dt.getMonth()+1)).slice(-2);
    let year = dt.getFullYear();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();
    let miliseconds = dt.getMilliseconds();
    console.log(' "text" :'+'"'+'text'+delay +'"' )
    console.log('"datetime"'+':'+'"'+ date +'-'+ month + '-'+ year +' ' + hours + ':' + minutes +':' + seconds + ':' + miliseconds + '"')

};

setTimeout(myfunc, 7*1000, 'One');
setTimeout(myfunc, 14*1000, 'Two');
setTimeout(myfunc, 21*1000, 'Three');
setTimeout(myfunc, 28*1000, 'Four');
setTimeout(myfunc, 35*1000, 'Five');
setTimeout(myfunc, 42*1000, 'Six');
setTimeout(myfunc, 49*1000, 'Seven');
setTimeout(myfunc, 56*1000, 'Eight');
setTimeout(myfunc, 63*1000, 'Nine');
setTimeout(myfunc, 70*1000, 'Final');
