function CCCCC(txt) {
	window.top.postMessage({
		message: "ReceiveMessageFromUnity",
		data: txt
	}, "*");
}