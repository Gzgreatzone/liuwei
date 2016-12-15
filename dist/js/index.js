var addIndex = function () {
	var images = document.querySelectorAll('.groups');
	//getElementsByTagName('img');
	console.log(images);
	//var pic = images.getElementsByTagName('img');
	//console.log(pic);
	var n = images.length;
	for(var i = 0; i < n;i++ ) {
		//console.log(images[i].className);
		if (images[i].className.match('show-center')) {
			images[i].className = "groups show-right";
			var plus_one = i+1;
			var plus_two = i+2;
			var sub_one = i-1;
			var sub_two = i-2;
			if (i==n-1){
				plus_one = 0; //i+1;
				plus_two = 1;
			}
			if (i==n-2) {
				plus_two = 0;
			}
			if (i==0) {
				sub_one = n-1;
				sub_two = n-2;
			} 
			if (i==1) {
				sub_two = n-1;
			}
			images[plus_one].className = 'groups unshow';
			images[sub_one].className = "groups show-center";
			images[sub_two].className = "groups show-left";
			break;
		}

	}
}
var subIndex = function () {
	var images = document.querySelectorAll('.groups');
	//getElementsByTagName('img');
	console.log(images);
	//var pic = images.getElementsByTagName('img');
	//console.log(pic);
	var n = images.length;
	for(var i = 0; i < n;i++ ) {
		//console.log(images[i].className);
		
		if (images[i].className.match('show-center')) {
			images[i].className = "groups show-left";
			var plus_one = i+1;
			var plus_two = i+2;
			var sub_one = i-1;
			var sub_two = i-2;
			if (i==n-1){
				plus_one = 0; //i+1;
				plus_two = 1;
			}
			if (i==n-2) {
				plus_two = 0;
			}
			if (i==0) {
				sub_one = n-1;
				sub_two = n-2;
			} 
			if (i==1) {
				sub_two = n-1;
			}
			images[sub_one].className = 'groups unshow';
			images[plus_one].className = "groups show-center";
			images[plus_two].className = "groups show-right";
			break;
		}

	}
}