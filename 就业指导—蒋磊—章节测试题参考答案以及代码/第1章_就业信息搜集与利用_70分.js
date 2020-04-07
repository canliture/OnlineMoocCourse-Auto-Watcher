// 1. 对选择题/判断题进行选择
var radios = document.getElementsByClassName("radioAndValue");
var arr = [2, 2, 1, 2, 0, 3, 1, 0, 1, 0, 1, 1]
       //  C  C  B  C  A  D  B  A  ×  √  ×  ×
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
var arr = [ 0,   1,  2, /*3,*/         // A  B  C 
            4,   5,  6, /*7,*/         // A  B  C
			8,   9, 10, 11,            // A  B  C  D
	   /*12,*/  13, 14, 15             //    B  C  D
		  ];
for(var i in arr){
	checkboxs[arr[i]].click();
}

// 3. 对填空题进行填空
var cardText = document.getElementsByClassName("text cardText");
var arr = [ "报告", "路径", "岗位", "经济", "技术", "整理", "选择", "经济活动"];
for(var i = 0 ; i < cardText.length ; i++){
	cardText[i].setAttribute("value", arr[i]);
}

// 4. 对简答题进行选择
var textArea = document.getElementsByClassName("cardTextArea");
var arr = ["（1）每日数据监控多位置，分不同时段查看流量趋势等，进行同比，环比，及时洞察数据波动;\n"+
	       "（2）计划设置调整通过查看数据分析，及时按需求调整计划，如出价、预算、文案、落地页、时段等调整;\n"+
		   "（3）数据再跟踪基于计划前期的调整，复盘数据，对比分析，找出最优投放思路;\n" + 
		   "（4）定期上新计划，监控数据实时做出调整;"
		   ,
		   "（1）选择你所学的专业"+
		   "（2）选择你所爱好的专业"+
		   "（3）最坏的选择就是先就业再择业"];
for(var i = 0 ; i < textArea.length ; i++){
	textArea[i].focus();
	textArea[i].innerHTML = arr[i];
}