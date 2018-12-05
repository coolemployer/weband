<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="mobile-web-app-capable" content="yes">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

	<link rel="icon" type="image/png" href="favicon.png"/>
	<link rel="manifest" href="manifest.json">
	<!-- link rel="stylesheet" href="styles.css" -->

	<title>Mi Band 2</title>
</head>

<body>
<a href="https://github.com/vshymanskyy/miband-js">
	<img class="fork-me" src="https://s3.amazonaws.com/github/ribbons/forkme_left_gray_6d6d6d.png"
	     alt="Fork me on GitHub">
</a>

<header>
	<h1>
		<a href="https://github.com/vshymanskyy/miband-js">
			<span class="h1-left">MiBand</span>
			<span class="h1-right">JS</span>
		</a>
	</h1>
	<button id="scanBtn" class="btn-scan">Scan</button>
	<!--<INPUT TYPE=BUTTON VALUE="Submit Data to Text File" onClick="download("test.txt")">-->

</header>


<main style="display: none;">
	<!--<form>-->

	<div id="output"></div>

	<script language="JavaScript" type="text/javascript">

		jQuery(window).bind(
			"beforeunload",
			function (e) {
				download(document.getElementById("output"));
				var activeElementTagName = e.target.activeElement.tagName;
//				if (activeElementTagName != "A" && activeElementTagName != "INPUT") {
//
//					return "Do you really want to close?";
//				}
			})

		//		$( window ).unload(function() {
//			download(document.getElementById("output"));
//		});

//		window.addEventListener("close", function() {
//			// make the close button ineffective
//			download('hey');
//		});
		// Function to change the content of t2
//		document.addEventListener('DOMSubtreeModified', function () {
//			// code here
//		//	console.log(document.getElementById("#output"));
////			download('Hello world!');
//			download(document.getElementById("output"))});



		function readTextFile() {

//			var rawFile = new XMLHttpRequest();
//			rawFile.open("GET", file, false);
//			rawFile.onreadystatechange = function ()
//			{
//				if(rawFile.readyState === 4)
//				{
//					if(rawFile.status === 200 || rawFile.status == 0)
//					{
//						var allText = rawFile.responseText;
//						alert(allText);
//						alert("HEY");
//					}
//				}
//			};
			console.log("Post request");
			var data = new FormData();
			data.append("data", "the_text_you_want_to_save");
			console.log(data.getAll("data"));
//			var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");

			var xhr = new XMLHttpRequest();
			var file = '/miband-js/public/test.txt';
			xhr.open('post', file, false);
			xhr.onreadystatechange = function () { // Call a function when the state changes.
				if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
					// Request finished. Do processing here.
				}
				;
				xhr.send("foo=bar&lorem=ipsum");
				console.log("CHECK1");
				xhr.open('post', file, false);
				xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
				console.log("CHECK2");
				xhr.send(data);

				console.log(xhr.readyState);
				console.log(xhr.responseText);
				console.log("CHECK4");
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if (xhr.status === 200 || xhr.status == 0) {
							var allText = xhr.responseText;
							console.log(allText);
							console.log("HEY");
						}
					}
				};
				console.log("END CHANGES");
			}

//
		}






		var fs = null;
		function onInitFs(fs) {

			fs.root.getFile('test.txt', {}, function(fileEntry) {

				// Get a File object representing the file,
				// then use FileReader to read its contents.
				fileEntry.file(function(file) {
					var reader = new FileReader();

					reader.onloadend = function(e) {
						var txtArea = document.createElement('textarea');
						txtArea.value = this.result;
						document.body.appendChild(txtArea);
					};

					reader.readAsText(file);
				}, errorHandler);

			}, errorHandler);

		}
		//window.requestFileSystem(window.TEMPORARY, 5*1024*1024 /*5MB*/, onInitFs, errorHandler);
		function errorHandler(e) {
			var msg = '';

			switch (e.code) {
				case FileError.QUOTA_EXCEEDED_ERR:
					msg = 'QUOTA_EXCEEDED_ERR';
					break;
				case FileError.NOT_FOUND_ERR:
					msg = 'NOT_FOUND_ERR';
					break;
				case FileError.SECURITY_ERR:
					msg = 'SECURITY_ERR';
					break;
				case FileError.INVALID_MODIFICATION_ERR:
					msg = 'INVALID_MODIFICATION_ERR';
					break;
				case FileError.INVALID_STATE_ERR:
					msg = 'INVALID_STATE_ERR';
					break;
				default:
					msg = 'Unknown Error';
					break;
			};

			console.log('Error: ' + msg);
		}
//		window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;


//		window.requestFileSystem(window.TEMPORARY, 1024 * 1024, function (filesystem) {
//			fs = filesystem;
//		}, errorHandler);
//
//		fs.root.getFile('test.txt', {}, function(fileEntry) {
//
//			// Get a File object representing the file,
//			// then use FileReader to read its contents.
//			fileEntry.file(function(file) {
//				var reader = new FileReader();
//
//				reader.onloadend = function(e) {
//					var txtArea = document.createElement('textarea');
//					txtArea.value = this.result;
//					document.body.appendChild(txtArea);
//				};
//
//				reader.readAsText(file);
//			}, errorHandler);
//
//		}, errorHandler);
//
//
//		window.requestFileSystem(window.TEMPORARY, 1024*1024, onInitFs, errorHandler);
//		function errorHandler(e) {
//			var msg = '';
//
//			switch (e.code) {
//				case FileError.QUOTA_EXCEEDED_ERR:
//					msg = 'QUOTA_EXCEEDED_ERR';
//					break;
//				case FileError.NOT_FOUND_ERR:
//					msg = 'NOT_FOUND_ERR';
//					break;
//				case FileError.SECURITY_ERR:
//					msg = 'SECURITY_ERR';
//					break;
//				case FileError.INVALID_MODIFICATION_ERR:
//					msg = 'INVALID_MODIFICATION_ERR';
//					break;
//				case FileError.INVALID_STATE_ERR:
//					msg = 'INVALID_STATE_ERR';
//					break;
//				default:
//					msg = 'Unknown Error';
//					break;
//			};
//
//			console.log('Error: ' + msg);
//		}
//
//
//













var y=0;
//		function download(text) {
////			CreateFile();y
//			y++;
//			console.log(text);
//			text=text.toString();
//			//readTextFile();
////			window.requestFileSystem()
////			file = fopen(getScriptPath("test.txt"), 0);
////			file_length = flength(file);
////			alert(file_length)
//			var filename = "test"+y+".txt";
//			var pom = document.createElement('a');
//			pom.setAttribute('href', 'data:text/plain;charset=utf-8,' +
//
//				encodeURIComponent(text));
//			pom.setAttribute('download', filename);
//
//			pom.style.display = 'none';
//			document.body.appendChild(pom);
//
//			pom.click();
//
//			document.body.removeChild(pom);
//		}
		function download(text1) {
			y++;
			var text = text1.outerHTML;
			text=text.replace(/<br>/g,'\r\n');
			text += "\r\n";
			text+="bingo";
			var filename = "test"+y+".txt";
			var pom = document.createElement('a');
			pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
			pom.setAttribute('download', filename);

			if (document.createEvent) {
				var event = document.createEvent('MouseEvents');
				event.initEvent('click', true, true);
				pom.dispatchEvent(event);
			}
			else {
				pom.click();
			}
		}
	</script>
	<!--<pre id="output"></pre>-->
	<!--<input type="submit" value="Download">-->
	<!--</form>-->
</main>

<script src="webapp.bundle.js"></script>

<script>
	// Install service worker - for offline support (not working properly, so disabled)
	/*if ('serviceWorker' in navigator) {
	  navigator.serviceWorker.register('serviceworker.js');
	}*/
</script>
</body>
</html>
