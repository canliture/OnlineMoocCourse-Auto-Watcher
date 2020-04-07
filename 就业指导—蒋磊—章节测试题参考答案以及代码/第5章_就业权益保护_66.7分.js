// 1. 对选择题/判断题进行选择
var I = { A:0, B:1, C:2, D:3, T:0, F:1 };
var radios = document.getElementsByClassName("radioAndValue");
var arr = [I.C, I.A, I.C, I.B, I.B, I.D, I.A, I.C, I.T, I.T, I.F, I.T]
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
var arr = [ 0,   1,  /*2,*/ 3,         // A  B     D 
            4,   5,  /*6,*/ 7,         // A  B     D
			8,   9, /*10,*/ 11,        // A  B     D
		   12,  13, /*14,*/ 15         // A  B     D
		  ];
for(var i in arr){
	checkboxs[arr[i]].click();
}

// 3. 对填空题进行填空
var cardText = document.getElementsByClassName("text cardText");
var arr = [ "立法", "劳动", "物质", "损失", "补救措施", "仲裁", "调解", "诉讼", "履行", "劳动者", "解除", "劳动合同", "最低", "百分之八十"];
for(var i = 0 ; i < cardText.length ; i++){
	cardText[i].setAttribute("value", arr[i]);
}

// 4. 对简答题进行选择
var textArea = document.getElementsByClassName("cardTextArea");
var arr = ["拿起法律武器保护自己",
		   "两者的相同点：毕业生与用人单位签订的就业协议与劳动合同都具有法律效力，受我国有关法律的保护，任何一方违约，都要承担违约责任。"+
		   "两者的不同点 ：（1） 主题范围不同，就业协议是专指高校毕业生与用人单位签订的工作协议；劳动合同无此限制，既可以是高校毕业生，也可以是其他劳动者同用人单位签订合同。（2） 内容不同，就业协议是确定用人单位录用毕业生的书面协议，体现了双向选择的结果；劳动合同是明确劳动者与用人单位之间具体权利和义务的书面协议，一些具体条款应当体现在合同里。"];
for(var i = 0 ; i < textArea.length ; i++){
	textArea[i].focus();
	textArea[i].innerHTML = arr[i];
}