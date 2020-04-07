// 1. 对选择题/判断题进行选择
var radios = document.getElementsByClassName("radioAndValue");
var arr = [3, 0, 3, 1, 0, 1, 1, 2, 1, 0, 0, 1 ]
//         D  A  D  B  A  B  B  C  B  A  A  B 
var preParentNode = null;
var group = -1;
for(var i = 0 ; i < radios.length ; i++){
	var parentNode = radios[i].parentNode;
	if(preParentNode != parentNode){
		group++;
		preParentNode = parentNode;
	}
	var iNodes = parentNode.getElementsByTagName("i");
	var node = iNodes[arr[group]];
	console.log(node);
	node.click();
}

// 2. 对多选题进行选择
var checkboxs = document.getElementsByClassName("bg checkbox");
var arr = [ 0, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15 ];
for(var i in arr){
	checkboxs[arr[i]].click();
}

// 3. 对填空题进行填空
var cardText = document.getElementsByClassName("text cardText");
var arr = [ "就业", "权威性", "纠正", "计划", "市场信息", "控制", "成功故事和经历", "创新实践活动", "", "", "" ];
for(var i = 0 ; i < cardText.length ; i++){
	cardText[i].setAttribute("value", arr[i]==""?"创业"+i:arr[i]);
}

// 4. 对简答题进行选择
var textArea = document.getElementsByClassName("cardTextArea");
for(var i = 0 ; i < textArea.length ; i++){
	textArea[i].focus();
	textArea[i].innerHTML = "创业" + (i+1);
}

// 5. 提交
$("#submitBtn").click();

// 0. 初始化 
setInterval(function(){
	$(".layui-layer-btn0").click();
}, 1000);