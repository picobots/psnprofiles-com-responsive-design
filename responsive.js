var url = window.location.href;
if (url && url.length) {
	if (url.indexOf('psnprofiles.com/guides') >= 0 ||
		url.indexOf('psnprofiles.com/guide') >= 0 ||
		url.indexOf('psnprofiles.com/trophies') >= 0 ||
		url.indexOf('psnprofiles.com/trophy')) {

		// meta viewport tag
		var metaTag=document.createElement('meta');
		metaTag.name = "viewport"
		metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
		document.getElementsByTagName('head')[0].appendChild(metaTag);

		// responsive body class
		document.body.classList.add("responsive");
	}
}
