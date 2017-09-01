$(document).ready(function() {

$("#tekst1").hide();
$("#tekst2").hide();
$("#tekst3").hide();

		$("#knop1").click( function() {
		var income = Number($("#inkomen").val());
		console.log(income);

		window.income = income;

		$("#tekst1").show();
		$("#demo").append(income);

		$("#stap1").css('display','none');
		$("#stap2").css('display','block');
		
	});

		$("#knop2").click( function() {
		var rent = Number($("#huur").val());
		console.log(rent);

		window.rent = rent;

		$("#stap2").css('display','none');
		$("#stap3").css('display','block');
		
	});

		$("#knop3").click( function() {
		var utility = Number($("#kosten").val());
		console.log(utility);

		window.utility = utility;

		$("#stap3").css('display','none');
		$("#stap4").css('display','block');
		
	});

		$("#knop4").click( function() {
		var food = Number($("#eten").val());
		console.log(food);

		window.food = food;
		
		var totalCosts = rent + utility + food;
		var outcome = income- totalCosts;
		var percentage = income / 100;
		var percentageSpent = totalCosts / percentage;
		percentageSpent = Math.round(percentageSpent) + "%";

		console.log(percentageSpent)
/*		$(".progress").width(percentageSpent);*/

		if(totalCosts <= income) {
		$(".progress").animate({width: percentageSpent}, 1500, function() {
			$("#percentage").append(percentageSpent + " spent")
		});
}
		else {
		$(".progress").css("background-color", "red");
		$(".progress").animate({width: 1000}, 1500, function() {
			$("#percentage").append("100%")
		});
};





		$("#stap4").css('display','none');
		$("#stap5").css('display','block');

		$("#tekst2").show();
		$("#tekst3").show();

		$("#kostenen").append(totalCosts);
		
		$("#over").animate({countNum: outcome}, { duration: 2000,
  		/*easing:'linear',*/
  		step: function() {
    	console.log(Math.floor(this.countNum));
    	$("#over").html(Math.floor(this.countNum));
  		}
}
		);
		

	});

		$("#reset").click( function() {
			location.reload()

	});

		$("#details").click( function() {
			$("#popinfo").css('display', 'block');

			$("#verdient").append(income);
			$("#huur1").append(rent);
			$("#gas1").append(utility);

	});
		$(".close").click( function() {
			$("#popinfo").css('display', 'none');
		});

});