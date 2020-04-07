// 1. 对选择题/判断题进行选择
var I = { A:0, B:1, C:2, D:3, T:0, F:1 };
var radios = document.getElementsByClassName("radioAndValue");
var arr = [I.A, I.C, I.C, I.B, I.A, I.B, I.A, I.C, I.F, I.F, I.T, I.F];
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
var arr = [ /*0,*/   1,  2, 3,         //    B  C  D 
            4,   5,  6, /*7,*/         // A  B  C  
			8,   /*9, 10, 11,*/        // A
		   /*12,  13,*/ 14, /*15*/     //       C
		  ];
for(var i in arr){
	checkboxs[arr[i]].click();
}

// 3. 对填空题进行填空
var cardText = document.getElementsByClassName("text cardText");
var arr = [ "创造性", "学习性", "发展空间", "平台", "诚实守信", "奉献社会", "决定", "R", "职业化"];
for(var i = 0 ; i < cardText.length ; i++){
	cardText[i].setAttribute("value", arr[i]);
}

// 4. 对简答题进行选择
var textArea = document.getElementsByClassName("cardTextArea");
var arr = ["（1）目的不同：对于大学生来说，目的是学到知识考个好成绩；而职业人士的目的是完成公司交给的某项工作。"+
		   "（2）两者所需要的技能不一样：学生所需的技能是良好的记忆力和逻辑思维能力；而作为职业人士要想把公司交给的岗位工作做好，需要更多的技能。"+
		   "（3）工作方法不同：学生工作方法是个人的独立行为，每位学生为自己的成绩负责；而作为职业人士，更强调的是团队合作。"
		   ,
		   "（1）产品熟悉度评估 分析每个员工对产品的熟悉情况,从而了解: 那些员工对那些产品最为熟悉; ..."+
		   "（2）软技能评估 通过以上分析,我们可以看出: 员工A:综合能力在五个人No1,沟通技巧团队中..."+
		   "（3）测试技能评估 评估测试活动开始到结束过程中,所涉及到的测试技术。 搜集到数据后,可对每个..."+
		   "（4）拓展技能评估 评估员工除测试技能以外的其它技能,不局限于表格中的内容。 通过数据搜集..."+
		   "（5）其它项数据搜集 团队员工岗位等级树--看各等级岗位比例;是否有岗位缺失等 团队成员性格..."];
for(var i = 0 ; i < textArea.length ; i++){
	textArea[i].focus();
	textArea[i].innerHTML = arr[i];
}