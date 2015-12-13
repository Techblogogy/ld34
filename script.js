window.onload = function () {
	$("#guide_ctr").hide();
}

var interest_points = 0; //Story Interesting

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
			if ($("#btn_1").text() == "YES"){
				next_stage();
				$("#img_ctr").slideDown(100);
			}
			else 
				$("#btn_1").text("YES");

		},
		click_2: function () {
			next_stage();
			$("#img_ctr").slideDown(100);
		},

		txt: "Do you want to hear a story?",
		btn1: "NO",
		btn2: "YES"
	},

	// Stage 3
	{
		click_1: function () {
			interest_points--; 
			next_stage();

			$("#img_view").attr("src","images/image_2.png");
		},
		click_2: function () {
			interest_points++; 
			next_stage();

			$("#img_view").attr("src","images/image_2.png");
		},

		txt: "A long, long time ago, a man stood still for a whole year, looking at the sky. ",
		btn1: "Skip!",
		btn2: "Continue"
	},

	// Stage 4
	{
		click_1: function () {
		},
		click_2: function () {
		},

		txt: "All day and night. People went past, never bothering to notice him.",
		btn1: "Skip!",
		btn2: "Continue"
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
