export default function LocalServiceWorkerRegister() {

 
/*  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js');
    });
  }  */

  console.log('hello...in process...')

  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js')
             .then(function() { console.log("Service Worker Registered"); });
  }
}

