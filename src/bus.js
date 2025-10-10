function Bus(){
    let self = this;
    const handlers = {};

    self.subscribe = function(eventType, handler){
        if(handlers[eventType] == undefined){
            handlers[eventType] = []
        }
        handlers[eventType].push(handler)
    };

    self.publish = function(eventType, theEvent){
        if(handlers[eventType] != undefined){
            handlers[eventType].forEach((handler) => {
                handler(theEvent);
            })
        }
    };
}

if(module && module.exports){
    module.exports	= Bus;
}