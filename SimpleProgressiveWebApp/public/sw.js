addEventListener('install', event => {
	event.waitUntil((async () => {})());
});

addEventListener('activate', event => {
	event.waitUntil((async () => {
		console.log("Step 2");
		
		await clients.claim();
		let swClients = await clients.matchAll();
		
		swClients.forEach(function(el) {
			console.log(el);
		});
	})());
});