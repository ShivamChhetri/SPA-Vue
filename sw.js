this.addEventListener('install',(event)=>{
    console.log("SW installed");
    event.waitUntil(
        caches.open('static')
        .then((cache)=>{
            // cache.add("/");
            // cahce.add('/src/main.js');
            cache.addAll([
                '/',
                '/index.html',
                '/src/main.js'
            ]);
        })
    );
});
this.addEventListener('activate',()=>{
    console.log("SW Activated");
});

this.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request)
         .then((res)=>{
             if(res) return res;
             else return fetch(event.request);
         })
    );
});