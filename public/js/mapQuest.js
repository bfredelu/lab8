function initMap() {
	L.mapquest.key = 'v26b5gKvE2P2U3sJFBZLSD5yPMbC5Q2Q';

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}