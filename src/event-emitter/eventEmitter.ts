import EventEmitter from 'eventemitter3';

type Events = 'on' | 'once' | 'off' | 'emit'
type AppEmitter = Pick<EventEmitter,Events>;

// Create and export a single instance of EventEmitter
 const eventEmitter  = new EventEmitter();

const AppEmitter:AppEmitter ={
    on: (event, fn) => eventEmitter.on(event, fn),
    once: (event, fn) => eventEmitter.once(event, fn),
    off: (event, fn) => eventEmitter.off(event, fn),
    emit: (event, payload) => eventEmitter.emit(event, payload),
}

Object.freeze(AppEmitter); // Prevents the modification of existing property attributes and values, and prevents the addition of new properties. 

export default AppEmitter;