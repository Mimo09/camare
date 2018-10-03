    var carinabutton  = document.getElementById('room-button');
	var carinaroomModal = document.getElementById('carinamodalID');
	var carinaroomClose = document.getElementsByClassName('room-close')[0];	 
	carinabutton.onclick = function() {
	    carinaroomModal.style.display="block";
	}
	carinaroomClose.onclick = function() {
	    carinaroomModal.style.display = "none";
	}



    var frocellitabutton = document.getElementById('room-button2frocellita');
    var frocellitaModal = document.getElementById('frocellitamodalID');
    var frocellitaclose = document.getElementsByClassName('room-closefrocellita')[0];

    frocellitabutton.onclick=function(){
    	frocellitaModal.style.display="block";

    }

    frocellitaclose.onclick=function(){
    	frocellitaModal.style.display="none";
    }

    var veronicabutton = document.getElementById('room-button2veronica');
    var veronicamodal  = document.getElementById('veronicamodalID');
    var veronicaclose  = document.getElementsByClassName('room-closeveronica')[0];

    veronicabutton.onclick=function(){
    	veronicamodal.style.display = "block";

    }

    veronicaclose.onclick=function(){
    	veronicamodal.style.display = "none";
    }

    var ramonabutton = document.getElementById('room-button2ramona');
    var ramonamodal = document.getElementById('ramonamodalID');
    var ramonaclose = document.getElementsByClassName('room-closeramona')[0];

    ramonabutton.onclick = function(){
        ramonamodal.style.display = "block";
    }

    ramonaclose.onclick = function(){
        ramonamodal.style.display = "none";
    }


    var sylviabutton = document.getElementById('room-button2sylvia');
    var sylviamodal = document.getElementById('sylviamodalID');
    var sylviaclose = document.getElementsByClassName('room-closesylvia')[0];

    sylviabutton.onclick = function(){
        sylviamodal.style.display = "block";
    }

    sylviaclose.onclick = function(){
        sylviamodal.style.display = "none";
    }

    var oliviabutton = document.getElementById('room-button2olivia');
    var oliviamodal = document.getElementById('oliviamodalID');
    var oliviaclose = document.getElementsByClassName('room-closeolivia')[0];

    oliviabutton.onclick = function(){
        oliviamodal.style.display = "block";
    }

    oliviaclose.onclick = function(){
        oliviamodal.style.display = "none";
    }

     


        window.onclick = function(event) {
	   
	    if(event.target ==  carinaroomModal) {
	         carinaroomModal.style.display = "none";
	    }

	    else if(event.target == frocellitaModal){
	    	frocellitaModal.style.display = "none";
	    }

	    else if(event.target == veronicamodal){
	    	veronicamodal.style.display = "none";
	    }

        else if(event.target == ramonamodal){
            ramonamodal.style.display = "none";
        }

        else if(event.target == sylviamodal){
            sylviamodal.style.display = "none";
        }

         else if(event.target == oliviamodal){
            oliviamodal.style.display = "none";
        }


	}





    /*---------------------------------carina thumbnail---------------------------------*/

    var carinaverandamodal = document.getElementById('carinaverandaID');

    var carinaimgveranda   = document.getElementById('carina1veranda');
    var modalimgveranda = document.getElementById('img01carinaveranda');
    var carinaverandacaption = document.getElementById('carinacaptionveranda');
     carinaimgveranda.onclick = function(){
        carinaverandamodal.style.display ="block"
      modalimgveranda.src = this.src;
      carinaverandacaption.innerHTML =this.alt;
    }

    var spancloseverandacarina = document.getElementsByClassName("carinaverandaclose")[0];
      spancloseverandacarina.onclick = function(){
        carinaverandamodal.style.display = "none";
    }
     /*--thumbnail veranda carina--*/


    /*--thumbnail kitchen carina--*/
    var carinakitchenmodal = document.getElementById('carinakitchenID');

    var carinaimgkitchen   = document.getElementById('carinaimg');
    var modalimg = document.getElementById('img01carina');
    var carinakichencaption = document.getElementById('carinacaptionkitchen');
      carinaimgkitchen.onclick = function(){
        carinakitchenmodal.style.display ="block"
      modalimg.src = this.src;
      carinakichencaption.innerHTML =this.alt;
    }

    var spanclosekitchencarina = document.getElementsByClassName("carinakitchenclose")[0];
      spanclosekitchencarina.onclick = function(){
        carinakitchenmodal.style.display = "none";
    }
     /*--thumbnail kitchen carina--*/


    /*--thumbnail livingroom carina--*/
    var carinalivingroommodal = document.getElementById('carinalivingroomID');

    var carinaimglivingroom   = document.getElementById('carinalivingroom');
    var modalimglivingroom = document.getElementById('img01carinalivingroom');
    var carinalivingroomcaption = document.getElementById('carinacaptionlivingroom');
      carinaimglivingroom.onclick = function(){
        carinalivingroommodal.style.display ="block"
      modalimglivingroom.src = this.src;
      carinalivingroomcaption.innerHTML =this.alt;
    }

    var spancloselivingroomcarina = document.getElementsByClassName("carinalivingroomclose")[0];
      spancloselivingroomcarina.onclick = function(){
        carinalivingroommodal.style.display = "none";
    }
     /*--thumbnail livingroom carina--*/

     /*--thumbnail bathroom carina--*/
    var carinabathroommodal = document.getElementById('carinabathroomID');

    var carinaimgbathroom   = document.getElementById('carinabathroom');
    var modalimgbathroom = document.getElementById('img01carinabathroom');
    var carinabathroomcaption = document.getElementById('carinacaptionbathroom');
      carinaimgbathroom.onclick = function(){
        carinabathroommodal.style.display ="block"
      modalimgbathroom.src = this.src;
      carinabathroomcaption.innerHTML =this.alt;
    }

    var spanclosebathroomcarina = document.getElementsByClassName("carinabathroomclose")[0];
      spanclosebathroomcarina.onclick = function(){
        carinabathroommodal.style.display = "none";
    }
     /*--thumbnail bathroom carina--*/

    /*--------------------------------frocellita thumbnail-------------------------------------*/

     /*--thumbnail bathroom frocellita--*/
    var frocellitabathroommodal = document.getElementById('frocellitabathroomID');

    var frocellitaimgbathroom   = document.getElementById('frocellitabathroom');
    var frocellitamodalimgbathroom = document.getElementById('img01frocellitabathroom');
    var frocellitabathroomcaption = document.getElementById('frocellitacaptionbathroom');
      frocellitaimgbathroom.onclick = function(){
        frocellitabathroommodal.style.display ="block"
      frocellitamodalimgbathroom.src = this.src;
      frocellitabathroomcaption.innerHTML =this.alt;
    }

    var spanclosebathroomfrocellita = document.getElementsByClassName("frocellitabathroomclose")[0];
      spanclosebathroomfrocellita.onclick = function(){
        frocellitabathroommodal.style.display = "none";
    }
     /*--thumbnail bathroom frocellita--*/

      /*--thumbnail kitchen frocellita--*/
    var frocellitakitchenmodal = document.getElementById('frocellitakitchenID');

    var frocellitaimgkitchen   = document.getElementById('frocellitakitchen');
    var frocellitamodalimgkitchen = document.getElementById('img01frocellitakitchen');
    var frocellitakitchencaption = document.getElementById('kitchencaptionkitchen');
      frocellitaimgkitchen.onclick = function(){
        frocellitakitchenmodal.style.display ="block"
      frocellitamodalimgkitchen.src = this.src;
      frocellitakitchencaption.innerHTML =this.alt;
    }

    var spanclosekitchenfrocellita = document.getElementsByClassName("frocellitakitchenclose")[0];
      spanclosekitchenfrocellita.onclick = function(){
        frocellitakitchenmodal.style.display = "none";
    }
     /*--thumbnail kitchen frocellita--*/

      /*--thumbnail living room frocellita--*/
    var frocellitalivingmodal = document.getElementById('frocellitalivingroomID');

    var frocellitaimgliving   = document.getElementById('frocellitalivingroom');
    var frocellitamodalimgliving = document.getElementById('img01frocellitalivingroom');
    var frocellitalivingcaption = document.getElementById('kitchencaptionlivingroom');
      frocellitaimgliving.onclick = function(){
        frocellitalivingmodal.style.display ="block"
      frocellitamodalimgliving.src = this.src;
      frocellitalivingcaption.innerHTML =this.alt;
    }

    var spancloselivingfrocellita = document.getElementsByClassName("frocellitalivingroomclose")[0];
      spancloselivingfrocellita.onclick = function(){
        frocellitalivingmodal.style.display = "none";
    }
     /*--thumbnail livingroom frocellita--*/

      /*--------------------------------VERONICA thumbnail-------------------------------------*/

       /*--thumbnail bathroom veronica--*/
    var veronicabathroommodal = document.getElementById('veronicabathroomID');

    var veronicaimgbathroom   = document.getElementById('veronicabathroom');
    var veronicamodalimgbathroom = document.getElementById('img01veronicabathroom');
    var veronicabathroomcaption = document.getElementById('veronicacaptionbathroom');
      veronicaimgbathroom.onclick = function(){
        veronicabathroommodal.style.display ="block"
      veronicamodalimgbathroom.src = this.src;
      veronicabathroomcaption.innerHTML =this.alt;
    }

    var spanclosebathroomveronica = document.getElementsByClassName("veronicabathroomclose")[0];
      spanclosebathroomveronica.onclick = function(){
        veronicabathroommodal.style.display = "none";
    }
     /*--thumbnail bathroom veronica--*/


       /*--thumbnail kitchen veronica--*/
    var veronicabakitchenmodal = document.getElementById('veronicakitchenID');

    var veronicaimgkitchen   = document.getElementById('veronicakitchen');
    var veronicamodalimgkitchen = document.getElementById('img01kitchenveronica');
    var veronicakitchencaption = document.getElementById('kitchencaptionkitchenveronica');
      veronicaimgkitchen.onclick = function(){
        veronicabakitchenmodal.style.display ="block"
      veronicamodalimgkitchen.src = this.src;
      veronicakitchencaption.innerHTML =this.alt;
    }

    var spanclosekitchenveronica = document.getElementsByClassName("veronicakitchenclose")[0];
      spanclosekitchenveronica.onclick = function(){
        veronicabakitchenmodal.style.display = "none";
    }
     /*--thumbnail kitchen veronica--*/

       /*--thumbnail living veronica--*/
    var veronicabalivingmodal = document.getElementById('veronicalivingroomID');

    var veronicaimgliving  = document.getElementById('veronicaliving');
    var veronicamodalimgliving = document.getElementById('img01veronicalivingroom');
    var veronicalivingcaption = document.getElementById('veronicacaptionlivingroom');
      veronicaimgliving.onclick = function(){
        veronicabalivingmodal.style.display ="block"
      veronicamodalimgliving.src = this.src;
      veronicalivingcaption.innerHTML =this.alt;
    }

    var spancloselivingveronica = document.getElementsByClassName("veronicatalivingroomclose")[0];
      spancloselivingveronica.onclick = function(){
        veronicabalivingmodal.style.display = "none";
    }
     /*--thumbnail living veronica--*/


         /*--------------------------------ramona thumbnail-------------------------------------*/

    /*--thumbnail bathroom ramona--*/
    var bathroomramonamodal = document.getElementById('ramonabathroomID');

    var ramonaimgbathroom  = document.getElementById('ramonabathroom');
    var ramonamodalimgbathroom = document.getElementById('img01ramonabathroom');
    var ramonabathroomcaption = document.getElementById('ramonacaptionbathroom');
      ramonaimgbathroom.onclick = function(){
        bathroomramonamodal.style.display ="block"
      ramonamodalimgbathroom.src = this.src;
     ramonabathroomcaption.innerHTML =this.alt;
    }

    var spanclosebathroomramona = document.getElementsByClassName("ramonabathroomclose")[0];
      spanclosebathroomramona.onclick = function(){
      bathroomramonamodal.style.display = "none";
    }
     /*--thumbnail bathroom ramona--*/

     /*--thumbnail kitchen ramona--*/
    var kitchenramonamodal = document.getElementById('ramonakitchenID');

    var ramonaimgkitchen  = document.getElementById('ramonakitchen');
    var ramonamodalimgkitchen = document.getElementById('img01ramonakitchen');
    var ramonakitchencaption = document.getElementById('ramonacaptionkitchen');
      ramonaimgkitchen.onclick = function(){
        kitchenramonamodal.style.display ="block"
      ramonamodalimgkitchen.src = this.src;
     ramonakitchencaption.innerHTML =this.alt;
    }

    var spanclosekitchenramona = document.getElementsByClassName("ramonakitchenclose")[0];
      spanclosekitchenramona.onclick = function(){
      kitchenramonamodal.style.display = "none";
    }
     /*--thumbnail kitchen ramona--*/

      /*--thumbnail living ramona--*/
    var livingramonamodal = document.getElementById('ramonalivingID');

    var ramonaimgliving  = document.getElementById('ramonaliving');
    var ramonamodalimgliving = document.getElementById('img01ramonaliving');
    var ramonalivingcaption = document.getElementById('ramonacaptionliving');
      ramonaimgliving.onclick = function(){
       livingramonamodal.style.display ="block"
      ramonamodalimgliving.src = this.src;
     ramonalivingcaption.innerHTML =this.alt;
    }

    var spancloselivingramona = document.getElementsByClassName("ramonalivingclose")[0];
      spancloselivingramona.onclick = function(){
      livingramonamodal.style.display = "none";
    }
     /*--thumbnail living ramona--*/

     /*--------------------------------sylvia thumbnail-------------------------------------*/
    
     /*--thumbnail bathroom sylvia--*/
    var bathroomsylviamodal = document.getElementById('sylviabathroomID');

    var sylviaimgbathroom  = document.getElementById('sylviabathroom');
    var sylviamodalimgbathroom = document.getElementById('img01sylviabathroom');
    var sylviabathroomcaption = document.getElementById('sylviacaptionbathroom');
      sylviaimgbathroom.onclick = function(){
        bathroomsylviamodal.style.display ="block"
      sylviamodalimgbathroom.src = this.src;
     sylviabathroomcaption.innerHTML =this.alt;
    }

    var spanclosebathroomsylvia = document.getElementsByClassName("sylviabathroomclose")[0];
      spanclosebathroomsylvia.onclick = function(){
      bathroomsylviamodal.style.display = "none";
    }
     /*--thumbnail bathroom sylvia--*/

     /*--thumbnail kitchen sylvia--*/
    var kitchensylviamodal = document.getElementById('sylviakitchenID');

    var sylviaimgkitchen  = document.getElementById('sylviakitchen');
    var sylviamodalimgkitchen = document.getElementById('img01sylviakitchen');
    var sylviakitchencaption = document.getElementById('sylviacaptionkitchen');
      sylviaimgkitchen.onclick = function(){
        kitchensylviamodal.style.display ="block"
      sylviamodalimgkitchen.src = this.src;
     sylviakitchencaption.innerHTML =this.alt;
    }

    var spanclosekitchensylvia = document.getElementsByClassName("sylviakitchenclose")[0];
      spanclosekitchensylvia.onclick = function(){
      kitchensylviamodal.style.display = "none";
    }
     /*--thumbnail kitchen sylvia--*/

    /*--thumbnail living sylvia --*/
    var livingsylviamodal = document.getElementById('sylvialivingID');

    var sylviaimgliving  = document.getElementById('sylvialiving');
    var sylviamodalimgliving = document.getElementById('img01sylvialiving');
    var sylvialivingcaption = document.getElementById('sylviacaptionliving');
      sylviaimgliving.onclick = function(){
       livingsylviamodal.style.display ="block"
     sylviamodalimgliving.src = this.src;
     sylvialivingcaption.innerHTML =this.alt;
    }

    var spancloselivingsylvia = document.getElementsByClassName("sylvialivingclose")[0];
      spancloselivingsylvia.onclick = function(){
      livingsylviamodal.style.display = "none";
    }
     /*--thumbnail living sylvia--*/


     /*--------------------------------olivia thumbnail-------------------------------------*/
    
     /*--thumbnail bathroom olivia--*/
    var bathroomoliviamodal = document.getElementById('oliviabathroomID');

    var oliviaimgbathroom  = document.getElementById('oliviabathroom');
    var oliviamodalimgbathroom = document.getElementById('img01oliviabathroom');
    var oliviabathroomcaption = document.getElementById('oliviacaptionbathroom');
      oliviaimgbathroom.onclick = function(){
        bathroomoliviamodal.style.display ="block"
      oliviamodalimgbathroom.src = this.src;
     oliviabathroomcaption.innerHTML =this.alt;
    }

    var spanclosebathroomolivia = document.getElementsByClassName("oliviabathroomclose")[0];
      spanclosebathroomolivia.onclick = function(){
      bathroomoliviamodal.style.display = "none";
    }
     /*--thumbnail bathroom olivia--*/


     /*--thumbnail kitchen olivia--*/
    var kitchenoliviamodal = document.getElementById('oliviakitchenID');

    var oliviaimgkitchen  = document.getElementById('oliviakitchen');
    var oliviamodalimgkitchen = document.getElementById('img01oliviakitchen');
    var oliviakitchencaption = document.getElementById('oliviacaptionkitchen');
      oliviaimgkitchen.onclick = function(){
        kitchenoliviamodal.style.display ="block"
      oliviamodalimgkitchen.src = this.src;
     oliviakitchencaption.innerHTML =this.alt;
    }

    var spanclosekitchenolivia = document.getElementsByClassName("oliviakitchenclose")[0];
      spanclosekitchenolivia.onclick = function(){
      kitchenoliviamodal.style.display = "none";
    }
     /*--thumbnail kitchen olivia--*/

    /*--thumbnail living olivia --*/
    var livingoliviamodal = document.getElementById('olivialivingID');

    var oliviaimgliving  = document.getElementById('olivialiving');
    var oliviamodalimgliving = document.getElementById('img01olivialiving');
    var olivialivingcaption = document.getElementById('oliviacaptionliving');
      oliviaimgliving.onclick = function(){
       livingoliviamodal.style.display ="block"
     oliviamodalimgliving.src = this.src;
     olivialivingcaption.innerHTML =this.alt;
    }

    var spancloselivingolivia = document.getElementsByClassName("olivialivingclose")[0];
      spancloselivingolivia.onclick = function(){
      livingoliviamodal.style.display = "none";
    }
     /*--thumbnail living olivia--*/

      



