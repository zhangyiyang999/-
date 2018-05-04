	var arealist = $("#shortcut .w .fl .dropdown");
	var myjd = $("#shortcut .w .fr #ttbar-myjd");
	var serv = $("#shortcut .w .fr #ttbar-serv");
	var navs = $("#shortcut .w .fr #ttbar-navs");
    var settleup = $("#settleup");
	var showdroplist = function(name){
		name.hover(function(){
		name.addClass("hover");
	},function(){
		name.removeClass("hover");

	});
	}
	showdroplist(arealist);
	showdroplist(myjd);
	showdroplist(serv);
	showdroplist(navs);
	showdroplist(settleup);


