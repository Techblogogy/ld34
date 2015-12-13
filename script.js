window.onload = function () {
	$("#guide_ctr").hide();
}

var stage = 0; // Stage Count
var stages = [ 
	// Stage 0
	{
		click_1: function () {
			$("#btn_2").slideDown(100);

			next_stage();
		},
		click_2: function () {
			
		},

		txt: "",
		btn1: "",
		btn2: ""
	}, 

	// Stage 1
	{
		click_1: function () {
			$("#btn_1").addClass("btn-danger");
		},
		click_2: function () {
			$("#btn_1").removeClass("btn-danger");
			$("#guide_ctr").slideDown(100);
			next_stage();
		},

		txt: "",
		btn1: "Don't Click Me",
		btn2: "Click Me"
	},

	// Stage 2
	{
		click_1: function () {

		},
		click_2: function () {
			
		},

		txt: "Read me",
		btn1: "Don't Click Me",
		btn2: "Click Me"
	}

];

function next_stage() {
	stage++;
	set_stage();
}

function set_stage (id) {
	stage = id;
	set_stage();
}

function set_stage () {
	$("#guide_txt").text(stages[stage].txt);

	$("#btn_1").text(stages[stage].btn1);
	$("#btn_2").text(stages[stage].btn2);
}

$("#btn_1").click(function () {
	stages[stage].click_1();
});

$("#btn_2").click(function () {
	stages[stage].click_2();
});
