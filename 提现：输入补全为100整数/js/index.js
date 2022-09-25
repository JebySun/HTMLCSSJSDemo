function watchInput() {
	var inputNode = document.getElementById("money")
	
	inputNode.oninput = function(e) {
		// 过滤以0和.开头
		if (inputNode.value == '.' || inputNode.value == '0') {
			inputNode.value = ''
			return
		}
		// 过滤中间输入.
		inputNode.value = inputNode.value.replace('.', '')
		if (inputNode.value % 100 != 0) {
			inputNode.value = inputNode.value * 100
		} else if (inputNode.value == '00') {
			inputNode.value = ''
		}
		var cursorPosition = inputNode.value.length - 2
		inputNode.setSelectionRange(cursorPosition, cursorPosition)

	}

}

window.onload = function() {
	watchInput()
}