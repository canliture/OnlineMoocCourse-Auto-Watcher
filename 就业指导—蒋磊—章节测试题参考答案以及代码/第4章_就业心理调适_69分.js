// 1. 对选择题/判断题进行选择
var I = { A:0, B:1, C:2, D:3, T:0, F:1 };
var radios = document.getElementsByClassName("radioAndValue");
var arr = [I.B, I.C, I.A, I.A, I.A, I.A, I.A, I.A, I.T, I.F, I.T, I.F]
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
var arr = [ 0,   /*1,*/  2, 3,         // A     C  D
            4,     5,    6,  7,        // A  B  C  D
			8,   /*9,*/ 10, 11,        // A     C  D
		   12,    13,   14, /*15*/     // A  B  C
		  ];
for(var i in arr){
	checkboxs[arr[i]].click();
}

// 3. 对填空题进行填空
var cardText = document.getElementsByClassName("text cardText");
var arr = [ "职业", "觉察", "认知", "心理健康", "要求", "心流", "期待"];
for(var i = 0 ; i < cardText.length ; i++){
	cardText[i].setAttribute("value", arr[i]);
}

// 4. 对简答题进行选择
var textArea = document.getElementsByClassName("cardTextArea");
var arr = ["暗示调节，放松调节，想象调节，倾诉、旅游、读书、听音乐、做好事"
	       ,
		   "（1）坦然面对。心理健康也跟身体健康-样,在人的一生中难免会出现这样那样的问题，出现心理困惑只是成长正常状态，没有问题哪有成长可言，而不必大惊小怪、怨天忧人。"+
		   "（2）不要急于\"诊断\"。心理问题本身多种多样，成因往往也很复杂，切忌盲目从一些书籍.上断章取义，或者道听途说，于“对号入座”，认定自己患了什么病。弄清问题当然是必要的,但大学生的问题还是发展性的居多，多都是“成长中的烦恼”，实在不必自己吓自己。"+
		   "（3）转移注意。心理问题往往有这么一个特点，就是越注意它，它似乎就越严重。所以，不要老盯着自己的所谓问题不放，可过分关注自我，而应把注意力转移到学习、生活、工作的方方面面。有自己感兴趣的事情并全力投入是很有利于心理健康的。"
	      ];
for(var i = 0 ; i < textArea.length ; i++){
	textArea[i].focus();
	textArea[i].innerHTML = arr[i];
}