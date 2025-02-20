import React, { useState } from 'react'

export const WorkerComponent = () => {
  const [result, setResult] = useState(null);
  const [worker, setWorker] = useState<Worker | null>(null);

  // Initialize the worker when the component mounts
  React.useEffect(() => {
    const myWorker = new Worker(new URL('./worker.js', import.meta.url));
    setWorker(myWorker);

    // Listen for messages from the worker
    myWorker.onmessage = (e) => {
      setResult(e.data); // Update the state with the result from the worker
    };

    // Clean up the worker when the component unmounts
    return () => {
      myWorker.terminate();
    };
  }, []);

  // Function to send data to the worker
  const runWorkerTask = () => {
    const myWorker = new Worker(new URL('./worker.js', import.meta.url));
    if (myWorker) {
   myWorker.postMessage(1000000000); // Send a large number to the worker
    myWorker.onmessage = (e) => {
      console.log(e.data);
    };
    
    }
  };

  return (
    <div>
      <h1>Web Worker Example</h1>
      <button onClick={runWorkerTask}>Run Worker Task</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}
