var event = requlre ('event')
var em = new event.EventEmitter();

em.on('myEvent',function(date){
    count=0;
    date, forEach(i=> {
     count = count + i;       
    });
    console.log(count);
});
em.emit('myEvent',[1,2,3,4]);
