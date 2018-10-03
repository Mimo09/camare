	
	//HELP-CONTENT

	var helpHome = document.getElementById("help-home");
	var helpHomeContent = document.getElementById("help-home-content");
	var helpHomeClose = document.getElementById("help-home-close");
	helpHome.onclick = function(){
		helpHomeContent.style.display = "inherit";
		helpHome.style.display = "none";
		helpHomeClose.style.display = "inherit";
	}
	helpHomeClose.onclick = function(){
		helpHomeContent.style.display = "none";
		helpHome.style.display = "block";
		helpHomeClose.style.display = "none";
	}

	var helpRoomRate = document.getElementById("help-room-rate");
	var helpRoomRateContent = document.getElementById("help-room-rate-content");
	var helpRoomRateClose = document.getElementById("help-room-rate-close");
	helpRoomRate.onclick = function(){
		helpRoomRateContent.style.display = "inherit";
		helpRoomRate.style.display = "none";
		helpRoomRateClose.style.display = "inherit";
	}
	helpRoomRateClose.onclick = function(){
		helpRoomRateContent.style.display = "none";
		helpRoomRate.style.display = "block";
		helpRoomRateClose.style.display = "none";
	}

	var helpAbout = document.getElementById("help-about");
	var helpAboutContent = document.getElementById("help-about-content");
	var helpAboutClose = document.getElementById("help-about-close");
	helpAbout.onclick = function(){
		helpAboutContent.style.display = "inherit";
		helpAbout.style.display = "none";
		helpAboutClose.style.display = "inherit";
	}
	helpAboutClose.onclick = function(){
		helpAboutContent.style.display = "none";
		helpAbout.style.display = "block";
		helpAboutClose.style.display = "none";
	}


	var helpContact = document.getElementById("help-contact");
	var helpContactContent = document.getElementById("help-contact-content");
	var helpContactClose = document.getElementById("help-contact-close");
	helpContact.onclick = function(){
		helpContactContent.style.display = "inherit";
		helpContact.style.display = "none";
		helpContactClose.style.display = "inherit";
	}
	helpContactClose.onclick = function(){
		helpContactContent.style.display = "none";
		helpContact.style.display = "block";
		helpContactClose.style.display = "none";
	}
	
	var helpGallery = document.getElementById("help-gallery");
	var helpGalleryContent = document.getElementById("help-gallery-content");
	var helpGalleryClose = document.getElementById("help-gallery-close");
	helpGallery.onclick = function(){
		helpGalleryContent.style.display = "inherit";
		helpGallery.style.display = "none";
		helpGalleryClose.style.display = "inherit";
	}
	helpGalleryClose.onclick = function(){
		helpGalleryContent.style.display = "none";
		helpGallery.style.display = "block";
		helpGalleryClose.style.display = "none";
	}
	
	

						//POP-UP-MODAL


	//help

	var helpBUtton  = document.getElementById("help-center");
	var helpModal = document.getElementById('help-modal');
	var helpClose = document.getElementsByClassName("help-close")[0];	 
	helpBUtton.onclick = function() {
	    helpModal.style.display="block";
	}
	helpClose.onclick = function() {
	    helpModal.style.display = "none";
	}	



	//learn-more

	var LearnMoreButton  = document.getElementById("learn-more-button");
	var LeanMoreModal = document.getElementById('learn-more-modal');
	var LearnMoreClose = document.getElementsByClassName("learn-more-close")[0];	 
	LearnMoreButton.onclick = function() {
	    LeanMoreModal.style.display="block";
	}
	LearnMoreClose.onclick = function() {
	    LeanMoreModal.style.display = "none";
	}

	//content-4

	var icon1Button  = document.getElementById("icon-1");
	var icon1Modal = document.getElementById('content-3-modal-1');
	var icon1Close = document.getElementsByClassName("content-3-close-1")[0];	 
	icon1Button.onclick = function() {
	    icon1Modal.style.display="block";
	}
	icon1Close.onclick = function() {
	    icon1Modal.style.display = "none";
	}
	
	

	var icon2Button  = document.getElementById("icon-2");
	var icon2Modal = document.getElementById('content-3-modal-2');
	var icon2Close = document.getElementsByClassName("content-3-close-2")[0];	 
	icon2Button.onclick = function() {
	   icon2Modal.style.display="block";
	}
	icon2Close.onclick = function() {
	    icon2Modal.style.display = "none";
	}
	

	var icon3Button  = document.getElementById("icon-3");
	var icon3Modal = document.getElementById('content-3-modal-3');
	var icon3Close = document.getElementsByClassName("content-3-close-3")[0];	 
	icon3Button.onclick = function() {
	    icon3Modal.style.display="block";
	}
	icon3Close.onclick = function() {
	    icon3Modal.style.display = "none";
	}

	window.onclick = function(event) {
	    if(event.target == helpModal){
	    	helpModal.style.display = "none";
	    }
	    else if(event.target ==  LeanMoreModal) {
	         LeanMoreModal.style.display = "none";
	    }
	    else if(event.target == icon1Modal) {
	        icon1Modal.style.display = "none";
	    }
	    else if (event.target == icon2Modal) {
	        icon2Modal.style.display = "none";
	    }
	    else if(event.target ==  icon3Modal) {
	         icon3Modal.style.display = "none";
	    }
	   
	}

    
    
    
    
    //FOODS PAGE
    
    
    
    