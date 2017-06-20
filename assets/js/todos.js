/*var lis = document.querySelectorAll("li");
for(var i=0;i<lis.length;i++){
	lis[i].addEventListener("click", function(){
		this.classList.toggle("strike");
	});
};
*/

/*$("li").click(function(){
	$(this).css("text-decoration", "line-through");
});*/

/*$("li").click(function(){
	$(this).css({
		color:"gray",
		textDecoration:"line-through"           //Bcoz In JS, camelCase is preferred.So, textDecoration used instead of text-decoration like in css
	});
});*/

//To toggle text-decoration and class strike with jQuery

/*$("li").click(function(){
	if($(this).css("color")==="rgb(128, 128, 128)"){    //In this format we must put rgb version and not simply "gray"  
	$(this).css({
		color:"black",
		textDecoration:"none"
	});
	}
	else{
		$(this).css({
			color:"gray",
			textDecoration:"line-through"
		});
	}
});*/

//And a Much Easier Way
/*$("li").click(function(){
	$(this).toggleClass("strike");
});*/

/*$("li").on("click", function(){   Well, this won't work either because in jQuery we can add listeners for only those elements that exists when we run this code for the first time       
	$(this).toggleClass("strike");  So, We'll have to modify even this code as well and add a listener to the entire "ul" element and pass an argument "li" as well, which says that when a "li" is clicked inside of the ul
                                    run this code 	 
});*/

$("ul").on("click","li", function(){
	$(this).toggleClass("strike");
});

//Deleting to do
$("ul").on("click", "span", function(event/*any placeholder*/){
	/*$(this).parent().remove();*/    //with the help of parent we will fire the event on the  parent element, here it's li.So, instead of span, li will remove
	//$(this).parent().fadeOut();    /*But this will not remove the element, and instead set display:none.It's ok but if we have 1000's li we'll not want to have them hidden.So, an alternate is
	//$(this).parent().fadeOut().remove()    We can use this but the remove will not wait for the fadeout() function to complete.so, An alternate is to provide call back function
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropogation();  /*stopPropogation is used to stop EVENT BUBBLING so that the events on the elements in which the element on which we want to fire event is contained doesn't execute so with the help of this we can stop events on li, ul, container, body triggering themselves*/
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoText = $(this).val();     //grabbing new todo from input
		$(this).val("");     //Now this will act as setter rather than getter so that what we type in input vanish from there after we hit enter
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");  //create a new li and add to ul
	}
});


/* NOW THE MOST IMPORTANT POINT*/
/* When We add the new li's from input, they gets added, BUT, They don't get the functionality what we had given to the other li's.
And this is where the difference between click() and on('click') comes.
THAT IS, there is one Key difference
click() only add listeners for existing elements
on() will add listeners for all potential future elements.
And so we will modify our click event handler*/

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});