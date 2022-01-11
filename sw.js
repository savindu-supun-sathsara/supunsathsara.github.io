self.addEventListener("install", e=> {
	e.waitUntil(
		caches.open("static").then(cache => {
			return cache.addAll([
					"./",
	"./assets/style.css", 
	"./assets/raindrops.js.download",
	"./assets/logo192.png",
	"./assets/theme.js",
	"./assets/eMh1mScFTu6DkQ8NjyVPSuBWGonacdiL.png",
	"./assets/saved_resource(1).html"
				]);
		})
	);
});

self.addEventListener("fetch", e => {
	e.respondWith(
		caches.match(e.request).then(response => {
			return response || fetch(e.request);
			})
		);
});
