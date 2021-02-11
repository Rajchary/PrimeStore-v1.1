
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
	var menu=document.getElementById('menu-on-left');
	window.onclick=(event) => {
		if (event.target.id !== 'menu-on-left' && event.target.id !=="show-menu" ) {
			//alert("Closing");
			//showMenu();
			document.getElementById('body-overlay-div').classList.remove("body-overlay");
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
	}
	function showMenu()
	{
		if(isMenu)
		{
			document.getElementById('body-overlay-div').classList.remove("body-overlay");
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
			document.getElementById('body-overlay-div').classList.add("body-overlay");
			document.getElementById('home-header').style.display="none";
			document.getElementById('menu-on-left').style.marginLeft="0px";
			document.getElementById('mobileNav').style.transition="all .9s ease";
			document.getElementById('mobileNav').style.visibility="visible";
			document.getElementById('mobileNav').style.opacity="1";	
			document.getElementById('mobileNav').style.position="relative";
			show_menu.setAttribute('title','Shrink');
			isMenu=true;
			show_menu.style.transform="rotate(90deg)";
			//closeOnOutside();
		}
	
		
	}
	
	function closeOnOutside()
	{
		window.onclick=function(event)
		{
		if(event.target=menu)
			{
				//
				alert("Closing");
				showMenu();
			}
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
