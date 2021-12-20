class Observable{

    constructor() {
        this.data = [];
    }

    on(eventName, callback){
        let array = [eventName, callback]
        this.data.push(array);
    }

    off(eventName, callback){
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i][0] === eventName && this.data[i][1] === callback){
                // DEBUG
                //console.log("L'event: " + eventName + " a été trouvé à l'index: " + i + " avec comme callback cette fonction: " + callback);
                this.data[i].splice(i, 2);
            }
        }
    }

    trigger(eventName, ...args){
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i][0] === eventName){
                let callback = this.data[i][1];
                switch (eventName){
                    case "win":
                        if(args.length === 1){
                            callback(args[0])
                        }
                        break;
                    case "move":
                        if(args.length === 3){
                            callback(args[0], args[1], args[2])
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }

}