window.onload = function () {
	$("#guide_ctr").hide();

	document.getElementById("bg_audio").volume=0.1;
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
			interest_points--; 
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
				interest_points--; 
				next_stage();
				$("#img_ctr").slideDown(100);
			}
			else 
				$("#btn_1").text("YES");

		},
		click_2: function () {
			interest_points++; 
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
		btn1: "Boring",
		btn2: "Continue"
	},

	// Stage 4
	{
		click_1: function () {
			interest_points--; 

			if (interest_points <= -4) {
				$("#img_view").attr("src","images/image_3.png");
				next_stage();
			} else {
				set_stage_id(6);
				$("#img_view").attr("src","images/image_4.png");
			}
		},
		click_2: function () {
			interest_points++; 

			set_stage_id(6);
			$("#img_view").attr("src","images/image_4.png");
		},

		txt: "All day and night. People went past, never bothering to notice him.",
		btn1: "Boring",
		btn2: "Continue"
	},

	// Stage 5 (GAME OVER)
	{
		click_1: function () {
			location.reload();
		},
		click_2: function () {
			location.reload();
		},

		txt: "And then he starved to dead. Moral of the story: \"Don't spend your life waiting, spend it working\" THE END",
		btn1: "RESTART",
		btn2: "RESTART"
	},

	// Stage 6 
	{
		click_1: function () {
			interest_points--; 
			next_stage();
			$("#img_view").attr("src","images/image_1.png");
		},
		click_2: function () {
			interest_points++; 

			if (interest_points >= 0) {
				$("#img_view").attr("src","images/image_6.png");
				set_stage_id(8);
			} else {
				next_stage();
				$("#img_view").attr("src","images/image_1.png");
			}
		},

		txt: "But, one special day a girl came up to him",
		btn1: "Ignore Her",
		btn2: "Greet Her"
	},

	// Stage 7 (Negative)
	{
		click_1: function () {
			interest_points--; 

			if (interest_points < 0) {
				$("#img_view").attr("src","images/image_3.png");
				set_stage_id(5);
			} else {
				$("#img_view").attr("src","images/image_7.png");
				set_stage_id(9);
			}
		},
		click_2: function () {
			interest_points++; 

			if (interest_points < 0) {
				$("#img_view").attr("src","images/image_3.png");
				set_stage_id(5);
			} else {
				$("#img_view").attr("src","images/image_7.png");
				set_stage_id(9);
			}
		},

		txt: "Sadly she just passed by like everyone else",
		btn1: "Boring",
		btn2: "Continue"
	},

	// Stage 8 (Positive)
	{
		click_1: function () {
			interest_points--; 

			if (interest_points < 0) {
				$("#img_view").attr("src","images/image_3.png");
				set_stage_id(5);
			} else {
				$("#img_view").attr("src","images/image_8.png");
				set_stage_id(10);
			}
		},
		click_2: function () {
			interest_points++; 

			if (interest_points < 0) {
				$("#img_view").attr("src","images/image_3.png");
				set_stage_id(5);
			} else {
				$("#img_view").attr("src","images/image_8.png");
				set_stage_id(10);
			}
		},

		txt: "She greeted him back, and they chatted all day and night long",
		btn1: "Boring",
		btn2: "Continue"
	},

	// Stage 9 (NEGATIVE)
	{
		click_1: function () {
			location.reload();
		},
		click_2: function () {
			location.reload();
		},

		txt: "The Policeman came and arrested this strange man. Moral Of The Story: \"No matter what you do, you always loose\" THE END",
		btn1: "RESTART",
		btn2: "RESTART"
	},

	// Stage 10 (Positive)
	{
		click_1: function () {
			location.reload();
		},
		click_2: function () {
			location.reload();
		},

		txt: "She gave him something hobody could, something to live for. The got married and lived happily ever after. Moral of this story: \"Don't be alone\"",
		btn1: "RESET",
		btn2: "RESET"
	}

];

function next_stage() {
	stage++;
	set_stage();
}

function set_stage_id (id) {
	stage = id;
	set_stage();
}

function set_stage () {
	$("#guide_txt").text(stages[stage].txt);

	$("#btn_1").text(stages[stage].btn1);
	$("#btn_2").text(stages[stage].btn2);

	console.log(interest_points);
}

$("#btn_1").click(function () {
	stages[stage].click_1();
});

$("#btn_2").click(function () {
	stages[stage].click_2();
});
