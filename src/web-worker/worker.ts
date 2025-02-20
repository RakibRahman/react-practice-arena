// worker.js

// This function will be executed in the worker thread
self.onmessage = function (e) {
    const { data } = e;
  
    // Perform some heavy computation or task
    let result = 0;
    console.time('render')
    for (let i = 0; i < data; i++) {
      result += i;
    }
    console.timeEnd('render')
  
    // Send the result back to the main thread
    self.postMessage(result);
  };