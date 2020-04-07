// 1. 对选择题/判断题进行选择
var I = { A:0, B:1, C:2, D:3, T:0, F:1 };
var radios = document.getElementsByClassName("radioAndValue");
var arr = [I.D, I.D, I.A, I.D, I.D, I.A, I.A, I.B, I.T, I.F, I.F, I.T]
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
var arr = [ 0,   1,  2, 3,             // A  B  C  D
        /*4,   5,*/  6, 7,             //       C  D
			8,   9, 10, 11,            // A  B  C  D
	   /*12,*/  13, 14/*, 15*/         //    B  C
		  ];
for(var i in arr){
	checkboxs[arr[i]].click();
}

// 3. 对填空题进行填空
var cardText = document.getElementsByClassName("text cardText");
var arr = [ "经历", "责任感", "学习", "责任感", "补充", "愿意", "了解", "汇报结果", "陈述观点", "专业知识", "心理健康"];
for(var i = 0 ; i < cardText.length ; i++){
	cardText[i].setAttribute("value", arr[i]);
}

// 4. 对简答题进行选择
var textArea = document.getElementsByClassName("cardTextArea");
var arr = ["调整心态，做好充足的准备"
		   ,
		   "突出经验：实际上，实习工作的性质或内容同许多工作相似，它们都需要自律以完成多项任务。你也有可能早已学习过许多与你应聘工作有直接关联的事物。这些事物必须在技术栏目中体现出来，就如你在工作经历栏目体现出相关的工作经历。" + 
		   "突出社团：比方说，在社团中曾经担任过社长(或是创立社团)有时就代表着领导能力，独立或经由团队合作安排跨校联谊、建教合作等活动，可能代表着协调力、谈判力、团队重视程度、或是开发市场的能力，利用社团经验的填写方式，可以有效帮助主管猜测你的个人特质与个性，也是另类彰显能力与评估发展性的指针。"];
for(var i = 0 ; i < textArea.length ; i++){
	textArea[i].focus();
	textArea[i].innerHTML = arr[i];
}