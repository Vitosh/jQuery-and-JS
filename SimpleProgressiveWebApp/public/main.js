document.addEventListener('DOMContentLoaded', () => {
	if ('serviceWorker' in navigator) 
	{
		console.warn ("Activating step 1")
		navigator.serviceWorker.register('/sw.js').then(function(registration) 
		{
			console.warn('Service worker registration succeeded:', registration);
		}).catch(function(error) 
		{
		console.warn('Service worker registration failed:', error);
		});
	}
	else 
	{
		console.warn('Service workers are not supported.');
	}
});

function reply_click(clicked_id)
{
	console.log(clicked_id);
	Notification.requestPermission().then(function(result) {
	if (result === 'denied') {
	console.log('Permission wasn\'t granted. Allow a retry.');
	return;
	}
	if (result === 'default') {
	console.log('The permission request was dismissed.');
	return;
	}
		var link = document.getElementById(clicked_id);
		link.style.visibility = 'hidden';
		useNotificationApi();
	});
}

function useNotificationApi(){
	navigator.serviceWorker.getRegistration().then(function(reg){
		var options = {
			body: "Here is notification body",
			icon: "conf.png",
		};
	reg.showNotification("Hello world", options);
	});
};