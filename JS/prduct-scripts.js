
	var slideIndex = 1;
	var isMenu=false;
	var show_menu=document.getElementById('show-menu');
	var add_to_wishlist=document.getElementById('add-to-wishlist');
	var heart=document.getElementById('heart');
	var added=false;
	showSlides(slideIndex);

	function plusSlides(n) 
	{
	  showSlides(slideIndex += n);
	}

	function currentSlide(n) 
	{
	  showSlides(slideIndex = n);
	}

	function showSlides(n)
	{
		var i;
		var slides=document.getElementsByClassName("images");
		if (n > slides.length) {slideIndex = 1}    
  		if (n < 1) {slideIndex = slides.length}
  		for (i = 0; i < slides.length; i++) 
  		{
      		slides[i].style.display = "none";
      	}
      	slides[slideIndex-1].style.display = "block";
	}
	function showMenu()
	{
		if(isMenu)
		{
			document.getElementById('home-header').style.display="block";
			document.getElementById('menu-on-left').style.marginLeft="-300px";
			document.getElementById('mobileNav').style.position="absolute";
			document.getElementById('mobileNav').style.transition="visibility .9s ease";
			document.getElementById('mobileNav').style.visibility="hidden";
			document.getElementById('mobileNav').style.opacity="0";		
			isMenu=false;
			show_menu.style.transform="rotate(45deg)";
			show_menu.setAttribute('title','Explore');	
		}
		else
		{
			document.getElementById('home-header').style.display="none";
			document.getElementById('menu-on-left').style.marginLeft="0px";
			document.getElementById('mobileNav').style.transition="all .9s ease";
			document.getElementById('mobileNav').style.visibility="visible";
			document.getElementById('mobileNav').style.opacity="1";	
			document.getElementById('mobileNav').style.position="relative";
			show_menu.setAttribute('title','Shrink');
			isMenu=true;
			show_menu.style.transform="rotate(90deg)";
		}
		
	}

	function addToWishList()
	{
		if(!added)
		{
			heart.style.padding="10px";
			add_to_wishlist.style.color="red";
			add_to_wishlist.style.backgroundColor="black";
			add_to_wishlist.style.border="2px dashed #F50057";
			document.getElementById('message').innerHTML="Remove from wishlist";
			added=true;
		}
		else
		{
			heart.style.padding="0px";
			add_to_wishlist.style.color="white";
			add_to_wishlist.style.backgroundColor="black";
			add_to_wishlist.style.border="none";
			document.getElementById('message').innerHTML="Add to Wishlist";
			added=false;
		}
		
	}
