// JS获取地址栏参数的方法
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}
// 获取文章id
function getArtId(src) {
	var id = src.substring( src.lastIndexOf("/")+1, src.length-4 );
	return id;
}
// 引入外部HTML生成内容
function dyGenerate(element, url) {
	// 在IE7下测试通过，IE6下必须创建 new ActiveXObject("MSXML2.XMLHTTP.6.0")
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true); // 异步
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4/* && xhr.status == 200*/) {
			console.log('xhr.status: ' + xhr.status);
			// var objs = JSON.parse(xhr.responseText);
			if(element.indexOf('#') != -1){ // 根据id
				document.getElementById(element.substring(1, element.length)).innerHTML = xhr.responseText;
			} else
				document.getElementsByTagName(element)[0].innerHTML = xhr.responseText;
			// document.getElementById("tester").innerHTML = 123;
		}
	}
	xhr.send();
}