// 1. 对选择题/判断题进行选择
var I = { A:0, B:1, C:2, D:3, T:0, F:1 };
var radios = document.getElementsByClassName("radioAndValue");
var arr = [I.C, I.B, I.A, I.C, I.B, I.D, I.C, I.B, I.F, I.F, I.F, I.F]
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
		   12,  13, /*14, 15*/         // A  B
		  ];
for(var i in arr){
	checkboxs[arr[i]].click();
}

// 3. 对填空题进行填空
var cardText = document.getElementsByClassName("text cardText");
var arr = [ "镜子", "打断", "2/3", "从容", "定型", "礼貌", "仪式"];
for(var i = 0 ; i < cardText.length ; i++){
	cardText[i].setAttribute("value", arr[i]);
}

// 4. 对简答题进行选择
var textArea = document.getElementsByClassName("cardTextArea");
var arr = ["（1）面试时的礼仪第一个要点就是要有较强的时间观念，提前到达面试地点，既表示了诚意，又可调整自已的心态。" + 
	       "（2）出入场要有礼貌，应试者应先敲门，在得到允许后才可以进入面试现场。应向用人单位问好致意，并做自我介绍，此时可以顺手递一份自荐材料，然后在用人单位许可后可入座。坐姿要端正，不要有小动作，离去时应说“再见”，这些都是基本面试时的礼仪要求。"+
		   "（3）在交谈过程中要认真聆听，不要左顾右盼，不要随意走动，不要未经允许能便翻阅用人单位的资科，有手机的要关掉，不要因为自己的不注意而影响面试时间和效果。举止要文雅大方，谈吐谦虚谨慎，态度积极热情。既能体现出你的个人修养，也会因为这些面试时的礼仪而加分。"+
           "（4）面试时的礼仪一个方面就是要求求职者装扮要大方得体，运动装，冰鞋、背囊之类的都绝不活宜。匆穿新衣，勿浓妆艳抹，不要标奇立异。整洁最重要，头发和指甲要干净、衣服要整齐、皮鞋要漂亮。"+
		   "（5）握手应有技巧：注意姿势、伸手的顺序、握手的力度。"+
		   "（6）恰当运用肢体语言，一犟一笑，一举千一投足，这就是你的肢体语言。在面试时的礼仪中，用词内容占7%，肢休语言占55%，剩下的38%来自语音语调。"
		   ,
		   "面试时候，有很多涉及到礼仪方面的事情，包括走路、坐姿、谈吐、穿着、行为等各方面。对于不同岗位、不同类型的求职者，单位对这些方面的考虑会有不同。比如：纯技术人员与客服人员、应届毕业生与有工作经历的人"];
for(var i = 0 ; i < textArea.length ; i++){
	textArea[i].focus();
	textArea[i].innerHTML = arr[i];
}