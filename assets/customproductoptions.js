
//========================================PRODUCT DETAIL PAGE CODDE============================================


//nds id dynamic 
setTimeout(function() {
  var ndsid = $('#check_nds').val();
  }, 2500);

//end nds id dynamic

//-------Insert upcharges added from product detail page---------
$("#insertUpcharge").click(function(){
  
 //var qty = product.quantity; 
 var qty = 1; 

     var custom_op_vid ="";
  	// var custom_product_op_values=""; 
     $.ajax({
            type: 'GET',
            url: 'https://137.184.223.104/fetchAllUpchargeOptions.php',
            dataType: 'json',
            headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*'
                     },
            success: function(data) { 

              var count= data.length;

               for(var i=0; i< count; i++){

                    if(data[i].type == "radio")
                    {
                        var option_name = data[i].name.replace(/\s/g , "-");

                        let option_name_lower = option_name.toLowerCase();

                        var selected = $("."+option_name_lower+"[type='radio']:checked");
                        if (selected.length > 0) {
                            var selectedVal = $(selected).attr('id');

                          custom_op_vid += selectedVal+",";
                        }                     

                    }else if(data[i].type == "select")                 
                    {
                      var option_name = data[i].name.replace(/\s/g , "-");

                      let option_name_lower = option_name.toLowerCase();
                      //console.log("not pass");

                      var can_depth_val = $('.'+option_name_lower).find(":selected").attr('id');
                      if(can_depth_val != null){
                        //console.log("pass");
                       if (can_depth_val.length > 0) {

                          var selectedVal = can_depth_val;

                          custom_op_vid += selectedVal+",";
                        }
                      }
                      
                    }
               }
             passVarientIds(custom_op_vid); 
            }
     });
  
      function passVarientIds(varient_ids){  

              var array = varient_ids;
              Shopify.queue = [];
              //alert("new array " + array);
              var newArray = array.split(',');
                for (var i = 0; i < newArray.length-1; i++) {

                  if( i >= 0){
                      product = newArray[i]
                      Shopify.queue.push({
                        variantId: product,
                      });
                  	}
                }

         insertSubProduct();
      }
         
     function insertSubProduct(){
     
     console.log("Total lenght= " + Shopify.queue.length)
          
        Shopify.moveAlong = function() {
           
              if(Shopify.queue.length == 0){
                setInterval(function(){ console.log('Interval time'); }, 3000);
                 //window.location.href = '/cart'; 
                 $("#AddToCart").trigger('click');
               }
           
             if (Shopify.queue.length) {
               var request = Shopify.queue.shift();
               
               var price_check= $("#" + request.variantId).attr("data-price"); 
               
               if(price_check > 0 ){
               console.log("subp= " + request.variantId);
               var data = 'id='+ request.variantId + '&quantity=' + qty
               $.ajax({
                 type: 'POST',
                 url: '/cart/add.js',
                 dataType: 'json',
                 data: data,
                 success: function(res){
                   console.log("response= " + request.variantId);
                  //alert('y');
                    console.log("length= " + Shopify.queue.length);
                   Shopify.moveAlong();
				  //window.location.href = '/cart'; 
                 }
               });
               
               }else{
               
               Shopify.moveAlong();
               }
             }
         }; 
          
		Shopify.moveAlong();
     }
          
})
//--------------End product detail page upcharge add code -------------------



//===============================================CART PAGE CODDE============================================

// -------------- Remove item from the cart Code-----------------------
// Note : Remove main item with its subcharge item

$(document).ready(function() {

  $('.selection-add-price').attr('style','display:none !important');
  
    $(".here-remove").click(function(event) {
      event.preventDefault();
      
      var qty = $(this).attr("data-attr"); 
      var prod_data_key = $(this).attr("data-key");

      var product_vid = event.target.id.split(",");
      var p_count = "";
      
      $.ajax({
      type: 'GET',
      url: '/cart.json',
      dataType: 'json',
      success: function(data) { 

        var count = data.items.length;
        var upadtesObjectNew = {};
     
        var match = event.target.id.split(",");
        
        const Check_varient_ava = [];		
        
 			for(var i=0; i< count; i++){
              
                   for (var a in match)
                        {
                            var variable = match[a];

                            if(data.items[i].variant_id == variable){                             

                              	var check= Check_varient_ava.includes(variable);
                              	Check_varient_ava.push(variable);                  

                              	if(check == false)
                              	{
                                  
                                  if(i == 0){
                                    variable = prod_data_key;
                                  }
                                  	//alert(i);
                              		//alert(data.items[i].variant_id);
                                  	//alert(variable);
                                  
                                    if(parseInt(data.items[i].quantity) > 1){
                                       p_count = parseInt(data.items[i].quantity) - qty;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }else{
                                       p_count = 0;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }
                            	}
                         	 }
                        }                            
			}
       
           $.ajax({
                   type: 'POST',
                   url: '/cart/update.js',
                   data: {
                     updates:upadtesObjectNew
                   },
                   dataType: 'json',
                   success: function() { 
                      window.location.href = '/cart'; 
                   }
                 });
			}
		});    
    });
});
// -------------- Remove item from the cart Code End ---------------------


// --------------- Edit cart product in popup code -------------------------
// Edit product which is in cart like subcharge product edit aginst main product
//     $(document).ready(function() {
//       var modal = document.getElementById("myModal");
//       $(".edit_cart_option").click(function(event) {
//         event.preventDefault();
        
//         modal.style.display = "block";
        
//         var prod_data_key = $(this).attr("data-key");
//         $("#prod_data_key_val").val(prod_data_key);
        
//       	var product_vid = event.target.id.split(",");
//         document.getElementById('next-day-shipping').style.display = 'block';
//         document.getElementById('digital-proof').style.display = 'block';
//       	$("#get_all_var_id").val(product_vid);
        
//         var data_qty =$(this).attr("data-attr"); 
//         $("#get_tot_prod_qty").val(data_qty);

//         $.ajax({
//         type: 'GET',
//         url: '/cart.json',
//         dataType: 'json',
//         success: function(data) { 

//             let items = data.items;
//             for(var i=0; i < items.length; i++){

//                 if(items[i].id == 41364848017589)
//                 {
//                       document.getElementById('next-day-shipping').style.display = 'none';
//                       document.getElementById('digital-proof').style.display = 'none';
//                 }
//             }

//           		var count = items.length;

//       			for(var i=0; i< count; i++){
        
//                   if(data.items[i].key == prod_data_key){
                    
//                     var product_title = data.items[i].product_title;
                    
                    
                    
//                     var customily_preview = data.items[i].properties['_customily-preview'];
//                     var customily_production_url =data.items[i].properties['_customily-production-url'];
//                     var custom_thumb= data.items[i].properties['_custom-thumb'];
                    
//                     $("#customily-preview-val").val(customily_preview);
//                     $("#customily-production-url-val").val(customily_production_url);
//                     $("#custom-thumb-val").val(custom_thumb);
                    
//                      $("#productedit_title").text(product_title);
//                      $("#get_main_prod_var_id").val(product_vid[1]);
                    
                    
//                   }
//      		 	}
      
//       			var bs_checked="no";
      
//       			for(var i=0; i< count; i++){
        
//                   if(data.items[i].variant_id == product_vid[2]){

//                     var blined_shipped = document.getElementById(data.items[i].variant_id);
// 					blined_shipped.checked = true;
//                     bs_checked = "yes";
//                   }
//      		 	}
      
//                 if(bs_checked == "no"){
//                   var blined_shipped = document.getElementById(41364777599157);
//                   blined_shipped.checked = true;
//                 }
      
//       			var cd_checked="no";
      
//      			 for(var i=0; i< count; i++){
        
//                   if(data.items[i].variant_id == product_vid[3]){

//                     var canvas_depth = document.getElementById(data.items[i].variant_id);
// 					canvas_depth.selected = true;
//                     cd_checked = "yes";
//                   }
//      		 	}
      			
//       			if(cd_checked == "no"){
//                   var canvas_depth = document.getElementById(41364785234101);
//                   canvas_depth.selected = true;
//                 }
      
      
//       			var nds_checked="no";
      
//       			for(var i=0; i< count; i++){
        
//                   if(data.items[i].variant_id == product_vid[5]){

//                     var next_day_shipping = document.getElementById(data.items[i].variant_id);
// 					next_day_shipping.checked = true;
//                     nds_checked = "yes";
                    
//                     if(data.items[i].title == "NEXT DAY SHIPPING - Yes (+$15.00)" ){
//                     document.getElementById('next-day-shipping').style.display = 'block';
//             		document.getElementById('digital-proof').style.display = 'none';
//                     }
//                   }
//      		 	}
      
//       			if(nds_checked == "no"){
//                   var next_day_shipping = document.getElementById(41364848050357);
//                   next_day_shipping.selected = true;
//                 }
      
      
//       			var dp_checked="no";
      
//       			 for(var i=0; i< count; i++){
        
//                   if(data.items[i].variant_id == product_vid[4]){

//                     var digital_proof = document.getElementById(data.items[i].variant_id);
// 					digital_proof.checked = true;
//                     dp_checked = "yes";
                    
//                   }
//      		 	}
      
//       			if(dp_checked == "no"){
//                   var digital_proof = document.getElementById(41364815347893);
//                   digital_proof.selected = true;
//                 }
//    		 	}
//         }); 
//       });
//     });


    $(document).ready(function() {
      
      var ip_address = 'https://137.184.223.104/';
      $("#btn_cancel").click(function() {
       var modal = document.getElementById("myModal");
       //window.location.reload(true);
       })
      
		
      $(".edit_cart_option").click(function(event) {
        event.preventDefault();
        var curr = window.meta.page.customerId;
        var prod_data_key = $(this).attr("data-key");
        var product_vid = event.target.id;
        var data_qty =$(this).attr("data-attr");
        
        //alert(curr);
        
        //getting modal data dynamically
        var pvid = event.target.id;
          var m = pvid.split(',');
		  
			var product_id = m[1];
              $.ajax({
               url: ip_address+'modalProductOptions.php',
              // data: {func: 'getProductOptions', product_id: product_id},
                data: {product_id: product_id, curr: curr},
                type:'POST',
                dataType: "json",
               success: function (data) {
                  //alert(data.html);
                   $(".modal-body").html(data.html);
                   $('.selection-add-price').attr('style','display:none !important');
          		modal.style.display = "block";

        
        //var prod_data_key = $(this).attr("data-key");
        $("#prod_data_key_val").val(prod_data_key);
        
      	//var product_vid = event.target.id;
        
        // replaced data
        //document.getElementById('next-day-shipping').style.display = 'block';
        //document.getElementById('digital-proof').style.display = 'block';
      	$("#get_all_var_id").val(product_vid);
        
        //var data_qty =$(this).attr("data-attr"); 
        $("#get_tot_prod_qty").val(data_qty);

        $.ajax({
        type: 'GET',
        url: '/cart.json',
        dataType: 'json',
        success: function(data) {   
          
         let items = data.items;
            for(var i=0; i < items.length; i++){
              //alert(data.items[i].product_title);
				
              //new changes
              if(items[i].product_title == 'NEXT DAY SHIPPING' && items[i].product_title == 'DIGITAL PROOF')
              
                {
                      document.getElementById('next-day-shipping').style.setProperty('display', 'none', 'important');
                      document.getElementById('digital-proof').style.setProperty('display', 'none', 'important');
                }
              
                //if(items[i].id == 41364848017589)
              if(items[i].product_title == 'NEXT DAY SHIPPING')
              
                {
                      document.getElementById('next-day-shipping').style.setProperty('display', 'none', 'important');
                      document.getElementById('digital-proof').style.setProperty('display', 'none', 'important');
                }
            }

        var count = data.items.length;
        var editObjectNew = {};
          
        var tot_upcharge_price=0;
     
        var match = product_vid.split(",");
                
        var j=0;
        
      		for (var a in match)
                        {	
                        var variable = match[a];  
                         
                          j++;

                          if( j == 2){
        
                      			for(var i=0; i< count; i++){

                                      if(data.items[i].variant_id == variable && data.items[i].key == prod_data_key){                                                        
                                                                 
                                        
                                        var product_title = data.items[i].product_title;
                    
                                        var customily_preview = data.items[i].properties['_customily-preview'];
                                        var customily_production_url =data.items[i].properties['_customily-production-url'];
                                        var custom_thumb= data.items[i].properties['_custom-thumb'];

                                        $("#customily-preview-val").val(customily_preview);
                                        $("#customily-production-url-val").val(customily_production_url);
                                        $("#custom-thumb-val").val(custom_thumb);

                                        $("#productedit_title").text(product_title);
                                        $("#get_main_prod_var_id").val(variable);
                                       }
                                  }  
                          
                          }else{
                            
                            var isFound= "no";
                            
                            for(var i=0; i< count; i++){             

                            if(data.items[i].variant_id == variable ){                                                        

                                   	var upcharge_id = document.getElementById(data.items[i].variant_id);
									upcharge_id.checked = true;                              
                   					upcharge_id.selected = true;

                              		$("#"+variable).attr( 'checked-yes', true );
                             		var isFound= "yes";                              
                              
                              		var price = data.items[i].price /100;                       
                              
                              		tot_upcharge_price +=  price;                             	                     		
                              
                              		//--code for display none digital ,proof if next day shipping exists
                              		if(data.items[i].title == "NEXT DAY SHIPPING - Yes (+$15.00)" ){
                                            //alert('yes');
                                        document.getElementById('next-day-shipping').style.setProperty('display', 'flex', 'important');
                                        if(document.getElementById('digital-proof') != null) {
                                        	document.getElementById('digital-proof').style.setProperty('display', 'none', 'important');
                                        }
                                        }
                              
                              //--code for display none NDS if digital proof exists
                              		if(data.items[i].title == "DIGITAL PROOF - Yes (+$15.00)" ){
                                            //alert('yes');
                                      if(document.getElementById('next-day-shipping') != null) {
                                        document.getElementById('next-day-shipping').style.setProperty('display', 'none', 'important');
                                      }
                                        document.getElementById('digital-proof').style.setProperty('display', 'flex', 'important');
                         	 			}
                              
                         	 		}
                        		} 
                            
                                if(isFound == 'no' && variable != "")
                                {
                                  var upcharge_ids = document.getElementById(variable);
                                  upcharge_ids.checked = true;                              
                                  upcharge_ids.selected = true;
                                  $("#"+variable).attr( 'checked-yes', true );
                                }
                            
                            
                            
                          }
					}

                            
               $("#calculated_option_total").text(tot_upcharge_price);
          
          		if(tot_upcharge_price > 0)
                {
                  
                 $('.selection-add-price').attr('style','display:flex !important');
                }

            }

        }) 
               }
             });
          var y = $(".product__price").text();
        //end getting modal data dynamically
        
           
        
        
  
})  
  
      });
//--------------- Edit cart product in popup code End----------------------


//--------------- Hide digital proof code----------------------------------
// If Next day shipping is in cart then when edit product digital proof should be display none ow display block

   function Myfunction(id)
   {
     if(id == "41364848017589"){  // 41364848017589 => NDS- YES id Make dynamic
       if(document.getElementById('digital-proof') != null) {
       	var digital_proof = document.getElementById('41488003203253'); // 41364815347893 => DP- No id Make dynamic
	   	digital_proof.checked = true;
       
   		document.getElementById('digital-proof').style.setProperty('display', 'none', 'important');
       }
     }else {
       
       //alert('hi');
         if(document.getElementById('digital-proof') != null) {
          document.getElementById('digital-proof').style.setProperty('display', 'flex', 'important');
         }
       }
   }

function Mydigital(id)
   {
     if(id == "41488003137717"){  // 41364848017589 => DF- YES id Make dynamic
       if(document.getElementById('next-day-shipping') != null) {
          var nds = document.getElementById('41364848050357'); // 41364815347893 => NDS- No id Make dynamic
          nds.checked = true;

          document.getElementById('next-day-shipping').style.setProperty('display', 'none', 'important');
       }
     }else {
       
       //alert('hi');
       if(document.getElementById('next-day-shipping') != null) {
   		document.getElementById('next-day-shipping').style.setProperty('display', 'flex', 'important');
       }
       }
   }

//--------------- Hide digital proof code End----------------------------------


//------------ Update the product in edit popup when click on submit------------


      $(".update_save_cart").click(function(event) {
      event.preventDefault();
      
	    //--------------Delete all product first which is edited then insert------------------
	   // Get all variant id for delete
        var all_values = $("#get_all_var_id").val();
        var tot_qty = $("#get_tot_prod_qty").val();       
        
        var p_data_key=$("#prod_data_key_val").val();
        
        console.log("delete= " + all_values);
        
        var product_vid = all_values.split(",");
        var p_count = "";

      
        $.ajax({
        type: 'GET',
        url: '/cart.json',
        dataType: 'json',
        success: function(data) { 

          var count = data.items.length;
          //alert(count);
        var upadtesObjectNew = {};
     
        var match = all_values.split(",");
          
          var j=0;
        	
          for (var a in match)
                        {
                            var variable = match[a];
                          
                          j++;
                          
                         if( j == 2){
        
 			for(var i=0; i< count; i++){
              
                   

                             if(data.items[i].variant_id == variable && data.items[i].key == p_data_key){                                                        
                                              variable = p_data_key;

                              	
                                    
                                  //alert("upd" + i);
                                  //alert(variable);
                                  
                                    if(parseInt(data.items[i].quantity) > 1){
                                       p_count = parseInt(data.items[i].quantity) - tot_qty;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }else{
                                       p_count = 0;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }
                            	
                         	 }
                        }  
                          
                          
                     }else{
                       
                       
                       for(var i=0; i< count; i++){
              
                   

                            if(data.items[i].variant_id == variable){

                              	
                                    
                                  //alert("upd" + i);
                                  //alert(variable);
                                  
                                    if(parseInt(data.items[i].quantity) > 1){
                                       p_count = parseInt(data.items[i].quantity) - tot_qty;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }else{
                                       p_count = 0;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }
                            	
                         	 }
                        } 
                     }
                          
                          
                          
                          
                          
			}

           $.ajax({
                   type: 'POST',
                   url: '/cart/update.js',
                   data: {
                     updates:upadtesObjectNew
                   },
                   dataType: 'json',
                   success: function(res) { 
                     console.log("res del= " + res);
                     console.log('deleted');
                     
                     insertFunction();
                   }
             
             });   
          
   // ----------------insert main product--------------
                     
   function insertFunction(){         
     
     var custom_op_vid_all ="";
     var custom_product_op_values=""; 
     var upadtesObject = {};
      
  //----New code dynamic
          $.ajax({
            type: 'GET',
            url: 'https://137.184.223.104/fetchAllUpchargeOptions.php', 
            dataType: 'json',
            headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*'
                     },
            success: function(data) { 

              var count= data.length;

               for(var i=0; i< count; i++){

                    if(data[i].type == "radio")
                    {
                        var option_name = data[i].name.replace(/\s/g , "-");

                        let option_name_lower = option_name.toLowerCase();

                        var selected = $("."+option_name_lower+"[type='radio']:checked");
                        if (selected.length > 0) {
                            var selectedVal = $(selected).attr('id');

                          custom_op_vid_all += selectedVal+",";
                        }
                      
                      let option_name_upper = data[i].name.toUpperCase();
                      
                      var prod_option_value = $('input[name="properties['+option_name_upper+']"]:checked').val();                      
                      
                      upadtesObject[option_name_upper]=prod_option_value;
                      

                    }else if(data[i].type == "select")                 
                    {
                      var option_name = data[i].name.replace(/\s/g , "-");

                      let option_name_lower = option_name.toLowerCase();

                      var can_depth_val = $('.'+option_name_lower).find(":selected").attr('id');
                      if(can_depth_val != null){
                      if (can_depth_val.length > 0) {

                          var selectedVal = can_depth_val;

                          custom_op_vid_all += selectedVal+",";
                        }
                      }
                      
                      let option_name_upper = data[i].name.toUpperCase();
                     
                      var prod_option_value = $('.'+option_name_lower).find(":selected").attr('value');
                      
                      upadtesObject[option_name_upper]=prod_option_value;
                    }
               }
              
			//console.log("here=> " + upadtesObject['BLIND SHIPPED']);
            passVarientIdsInsert(custom_op_vid_all,upadtesObject); 
            }
     });
     
     function passVarientIdsInsert(custom_op_vid_all,upadtesObject){
        
        var main_prod_id = $("#get_main_prod_var_id").val();
       
       
        //var array = main_prod_id+","+selectedVal+","+selectedVal1+ ","+selectedVal2+ ","+can_depth_val;
     	var array = main_prod_id+","+custom_op_vid_all;
        console.log("Insert= " + array);
    	Shopify.queue = [];
        
        var newArray = array.split(',');
          for (var i = 0; i < newArray.length; i++) {
           
            if( i > 0){
            product = newArray[i]
            Shopify.queue.push({
              variantId: product,
            });
            }
          }

                   insertSubProduct(upadtesObject,main_prod_id);
                 
       
     }
	 // ----------------insert subcharge product code--------------
     
     function insertSubProduct(upadtesObject,main_prod_id){
       
       var ndsid = $('#check_nds').val();
       
     
     console.log("Total lenght= " + Shopify.queue.length)
          
        Shopify.moveAlong = function() {
           
              if(Shopify.queue.length == 0){
                setInterval(function(){ console.log('Interval time'); }, 3000);
                
                 	var customily_preview = $("#customily-preview-val").val();
                    var customily_production_url = $("#customily-production-url-val").val();
                    var customily_thumb = $("#custom-thumb-val").val();
                
//                 alert(customily_preview);
//                 alert(customily_production_url);
//                 alert(customily_thumb);
                
                
                            upadtesObject['_customily-preview']=customily_preview;
                            upadtesObject['_customily-production-url']=customily_production_url;
                            upadtesObject['_custom-thumb']=customily_thumb;
                //alert(tot_qty);
                
                     		var params = {
                            quantity: tot_qty,
                            id: main_prod_id,
                            properties:upadtesObject

                              };
                             $.ajax({
                                 type: 'POST',
                                 url: '/cart/add.js',
                                 dataType: 'json',
                                 data: params,
                                 success: function(res){
                                   console.log("main Inserted");
                                   window.location.href = '/cart'; 
                                 }
                               });
                
                 
               }
           
             if (Shopify.queue.length) {
               var request = Shopify.queue.shift();
               var price_check= $("#" + request.variantId).attr("data-price-pop"); 
               
               console.log("subp= " + request.variantId);
               if(price_check > 0 ){
                 
                 if(request.variantId == ndsid)  // ---NDS-Yes id make dynamic
                    {
                      var tot_new_qty = 1;
                    }else{
                    
                    var tot_new_qty = tot_qty;
                    }
                    
                   var data = 'id='+ request.variantId + '&quantity='+ tot_new_qty
                   $.ajax({
                     type: 'POST',
                     url: '/cart/add.js',
                     dataType: 'json',
                     data: data,
                     success: function(res){
                       console.log("response= " + request.variantId);
                       console.log("length= " + Shopify.queue.length);
                       Shopify.moveAlong();
                     }
                   });

                 }else{

                   Shopify.moveAlong();
                   }
              }
         }; 
          
			Shopify.moveAlong();
      	}
                     
    	}       
	}

    }); 
});
//------------------------End-----------------------------------




//--------------Edit cart code ----------------------------
var modal = document.getElementById("myModal");

// var btn = document.getElementById("myBtn");

//var span = document.getElementsByClassName("btn_cancel");

// btn.onclick = function() {
//   modal.style.display = "block";
// }
$(".hulkapp_close").click(function(event) {
  //alert('hi');
  modal.style.display = "none";
})
// span.onclick = function() {
//   alert();
//   modal.style.display = "none";
// }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//-----------------------End---------------------------


//=============================================WHOLE CART UPDATE CODE===========================================

//------------- Update line item quantity ondecrement button click--------------

$(".qtyminus").click(function(evt){
  
  var qty = 1; 
  var prod_data_key = $(this).attr("data-key"); 
  var all_ids = $(this).attr("id"); 
  //alert(qty);
//   alert(prod_data_key);
//   alert(all_ids);

  var p_count = "";
        
              $.ajax({
              type: 'GET',
              url: '/cart.json',
              dataType: 'json',
              success: function(data) {         

        var count = data.items.length;
        var upadtesObjectNew = {};
     
        var match = all_ids.split(",");
                
        var j=0;
        
      		for (var a in match)
                        {	
                        var variable = match[a];  
                         
                          j++;

                          if( j == 2){
        
                      			for(var i=0; i< count; i++){

                                      if(data.items[i].variant_id == variable && data.items[i].key == prod_data_key){                                                        
                                              variable = prod_data_key;

                                              if(parseInt(data.items[i].quantity) > 0){
                                                 p_count = parseInt(data.items[i].quantity) - parseInt(qty);
                                                 upadtesObjectNew[variable]=parseInt(p_count);
                                                //alert("main" + p_count);
                                              }else{
                                                 p_count = qty;
                                                 upadtesObjectNew[variable]=parseInt(p_count);
                                              }
                                       }
                                  }  
                          
                          }else{
                            
                            for(var i=0; i< count; i++){             

                            if(data.items[i].variant_id == variable ){                                                        

                                    if(parseInt(data.items[i].quantity) > 0){
                                       p_count = parseInt(data.items[i].quantity) - parseInt(qty);
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                      //alert("upcharge" + p_count);
                                    }else{
                                       p_count = qty;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }
                            	
                         	 		}
                        		} 
                            
                          }
			}
       
           $.ajax({
                   type: 'POST',
                   url: '/cart/update.js',
                   data: {
                     updates:upadtesObjectNew
                   },
                   dataType: 'json',
                   success: function() { 
                      window.location.href = '/cart'; 
                   }
                 });

            }

        })       
  
})  

//--------------- Update line item on increment button click--------------

$(".qtyplus").click(function(evt){
  
  var ndsid = $('#check_nds').val();
  //alert(ndsid);
  
  var qty = 1; 
  var prod_data_key = $(this).attr("data-key"); 
  var all_ids = $(this).attr("id"); 
  //alert(qty);
//   alert(prod_data_key);
//   alert(all_ids);

  var p_count = "";
        
              $.ajax({
              type: 'GET',
              url: '/cart.json',
              dataType: 'json',
              success: function(data) {         

        var count = data.items.length;
        var upadtesObjectNew = {};
     
        var match = all_ids.split(",");
                
        var j=0;
        
      		for (var a in match)
                        {	
                        var variable = match[a];  
                         
                          j++;

                          if( j == 2){
        
                      			for(var i=0; i< count; i++){

                                      if(data.items[i].variant_id == variable && data.items[i].key == prod_data_key){                                                        
                                              variable = prod_data_key;

                                              if(parseInt(data.items[i].quantity) > 0){
                                                 p_count = parseInt(data.items[i].quantity) + parseInt(qty);
                                                 upadtesObjectNew[variable]=parseInt(p_count);
                                                //alert("main" + p_count);
                                              }else{
                                                 p_count = qty;
                                                 upadtesObjectNew[variable]=parseInt(p_count);
                                              }
                                       }
                                  }  
                          
                          }else{
                            
                            for(var i=0; i< count; i++){             

                            if(data.items[i].variant_id == variable ){                                                        

                                    if(parseInt(data.items[i].quantity) > 0){
                                      //alert(ndsid);
                                      //if(data.items[i].variant_id == "41364848017589")
                                      //alert(ndsid);
                                      if(data.items[i].variant_id == ndsid) // ---NDS-Yes id make dynamic
                                                  {
                                                    var p_count = 1;
                                                    //alert(data.items[i].variant_id);
                                                  }else{

                                                  p_count = parseInt(data.items[i].quantity) + parseInt(qty);
                                                  }
                                      
                                      
                                       //p_count = parseInt(data.items[i].quantity) + parseInt(qty);
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                      //alert("upcharge" + p_count);
                                    }else{
                                       p_count = qty;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }
                            	
                         	 		}
                        		} 
                            
                          }
			}
       
           $.ajax({
                   type: 'POST',
                   url: '/cart/update.js',
                   data: {
                     updates:upadtesObjectNew
                   },
                   dataType: 'json',
                   success: function() { 
                      window.location.href = '/cart'; 
                   }
                 });

            }

        })       
  
}) 

//-------------------Update line item on quantity blur event--------------

$(".cart__quantity-selector").blur(function(){
  
  var ndsid = $('#check_nds').val();
  
  var newValue = $(this).val();
    //alert(newValue);
  
  
   var data_old_val = $(this).attr("data-old-val"); 
  
  //alert(data_old_val);

  var prod_data_key = $(this).attr("data-key"); 
  var all_ids = $(this).attr("id"); 
  //alert(qty);
  //alert(prod_data_key);
  //alert(all_ids);

  var p_count = "";
        
              $.ajax({
              type: 'GET',
              url: '/cart.json',
              dataType: 'json',
              success: function(data) {         

        var count = data.items.length;
        var upadtesObjectNew = {};
     
        var match = all_ids.split(",");

        var j=0;
          
        for (var a in match)
                        {
                            var variable = match[a];

                            j++;

if( j == 2){
        
      for(var i=0; i< count; i++){
              
                   

                            if(data.items[i].variant_id == variable && data.items[i].key == prod_data_key){                                                        
                                              variable = prod_data_key;                            
                                  
                                  if(parseInt(newValue) > parseInt(data_old_val))
                                     {
                                     
                                     var qty = parseInt(newValue) - parseInt(data_old_val);
                                       
                                       if(parseInt(data.items[i].quantity) > 0){
                                       p_count = parseInt(data.items[i].quantity) + parseInt(qty);
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }else{
                                       p_count = 0;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }
                                       
                                       
                                     }else{
                                       
                                       
                                       var qty = parseInt(data_old_val) - parseInt(newValue);
                                       
                                       if(parseInt(data.items[i].quantity) > 0){
                                         
                                          //if(data.items[i].variant_id == "41364848017589")
                                         if(data.items[i].variant_id == ndsid)  // ---NDS-Yes id make dynamic
                                                  {
                                                    var p_count = 1;
                                                    //alert(data.items[i].variant_id);
                                                  }else{

                                                  p_count = parseInt(data.items[i].quantity) + parseInt(qty);
                                                  }
                                       //p_count = parseInt(data.items[i].quantity) - parseInt(qty);
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }else{
                                       p_count = 0;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }
                                       
                                     }
                                  
                                   //alert("main " + p_count); 
                                    
                              
                           }
                        }    


}else{


      for(var i=0; i< count; i++){
              
                   

                            if(data.items[i].variant_id == variable){                             
                                  
                                  if(parseInt(newValue) > parseInt(data_old_val))
                                     {
                                     
                                     var qty = parseInt(newValue) - parseInt(data_old_val);
                                       
                                       if(parseInt(data.items[i].quantity) > 0){
                                       p_count = parseInt(data.items[i].quantity) + parseInt(qty);
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }else{
                                       p_count = 0;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }
                                       
                                       
                                     }else{
                                       
                                       
                                       var qty = parseInt(data_old_val) - parseInt(newValue);
                                       
                                       if(parseInt(data.items[i].quantity) > 0){
                                       p_count = parseInt(data.items[i].quantity) - parseInt(qty);
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }else{
                                       p_count = 0;
                                       upadtesObjectNew[variable]=parseInt(p_count);
                                    }
                                       
                                     }
                                  
                                  
                                   //alert("upcharge" + p_count); 
                              
                           }
                        } 

}



      }
       
           $.ajax({
                   type: 'POST',
                   url: '/cart/update.js',
                   data: {
                     updates:upadtesObjectNew
                   },
                   dataType: 'json',
                   success: function() { 
                      window.location.href = '/cart'; 
                   }
                 });

            }

        }) 
  
  });



  
//-------------------Add and minus upcharge calculation of cart popup--------------
  
  
function AddPrice(name,para,price){
  
  var checked = $('.'+name+'-yes').attr("checked-yes");
  
  if(checked != "true"){
  
  var total_all = $("#calculated_option_total").text();
  
  if(para == 'yes'){
    
    var total = parseInt(total_all) + parseInt(price);
    
    $('#calculated_option_total').text(total);
    
    if(total > 0){

      $('.selection-add-price').attr('style','display:flex !important');
    }else{
      $('.selection-add-price').attr('style','display:none !important');
    }
    
  }
    
    $('.'+name+'-yes').attr( 'checked-yes', true );
    $('.'+name+'-no').attr( 'checked-yes', false );
  }

  
}

function MinusPrice(name,para){
  

  
  var total_all = $("#calculated_option_total").text();
  
  if(para != 'no' && para != ''){
    
	let text = para;
	let result = text.includes("$");
    
    if( result == true){
      
    var price = $('.'+name+'-yes').attr("data-price-pop");

    var total  = parseInt(total_all) + parseInt(price);
    
    $('#calculated_option_total').text(total);
      
    if(total > 0){

      $('.selection-add-price').attr('style','display:flex !important');
    }else{
      $('.selection-add-price').attr('style','display:none !important');
    }
      
      
    }else{
      
          var price = $('.'+name+'-yes').attr("data-price-pop");

    	var total  = parseInt(total_all) - parseInt(price);
    
    	$('#calculated_option_total').text(total);
      
        if(total > 0){

          $('.selection-add-price').attr('style','display:flex !important');
        }else{
          $('.selection-add-price').attr('style','display:none !important');
        }

    }
    
  }
  else if(para == 'no')
  { 
  
   var checked = $('.'+name+'-'+para).attr("checked-yes");
  
  
  if(checked != "true"){
    
    var price = $('.'+name+'-yes').attr("data-price-pop");

    var total  = parseInt(total_all) - parseInt(price);
    
    $('#calculated_option_total').text(total);
    
    if(total > 0){

      $('.selection-add-price').attr('style','display:flex !important');
    }else{
      $('.selection-add-price').attr('style','display:none !important');
    }
    
     $('.'+name+'-yes').attr( 'checked-yes', false );
    $('.'+name+'-no').attr( 'checked-yes', true );
    
  }
  }
  
  

}

//-------------------Add and minus upcharge calculation of product page--------------

// function AddPriceProd(para,price){
  
//   var total_all = $("#calculated_prod_option_total").text();
  
//   if(para == 'yes'){
    
//     var total = parseInt(total_all) + parseInt(price);
    
//     $('#calculated_prod_option_total').text(total);
    
//     if(total > 0){

//       $('.selection-add-price').attr('style','display:flex !important');
//     }else{
//       $('.selection-add-price').attr('style','display:none !important');
//     }
    
//   }
  
// }

function AddPriceProd(name,para,price){
  
  var checked = $('.'+name+'-yes').attr("checked-yes");
  
  if(checked != "true"){
  
  var total_all = $("#calculated_prod_option_total").text();
  
  if(para == 'yes'){
    
    var total = parseInt(total_all) + parseInt(price);
    
    $('#calculated_prod_option_total').text(total);
    
    if(total > 0){

      $('.selection-add-price').attr('style','display:flex !important');
    }else{
      $('.selection-add-price').attr('style','display:none !important');
    }
    
  }
    
    $('.'+name+'-yes').attr( 'checked-yes', true );
    $('.'+name+'-no').attr( 'checked-yes', false );
  }

  
}

function MinusPriceProd(name,para){
  
  var total_all = $("#calculated_prod_option_total").text();
  
  if(para != 'no' && para != ''){
    
	let text = para;
	let result = text.includes("$");
    
    if( result == true){
      
    var price = $('.'+name+'-yes').attr("data-price");

    var total  = parseInt(total_all) + parseInt(price);
    
    $('#calculated_prod_option_total').text(total);
      
    if(total > 0){

      $('.selection-add-price').attr('style','display:flex !important');
    }else{
      $('.selection-add-price').attr('style','display:none !important');
    }
      
    }else{
      
          var price = $('.'+name+'-yes').attr("data-price");

    	var total  = parseInt(total_all) - parseInt(price);
    
    	$('#calculated_prod_option_total').text(total);
      
        if(total > 0){

          $('.selection-add-price').attr('style','display:flex !important');
        }else{
          $('.selection-add-price').attr('style','display:none !important');
        }
    }
    
  }
  else if(para == 'no')
  { 
    
	var checked = $('.'+name+'-'+para).attr("checked-yes");
  
  if(checked != "true"){
    
    var price = $('.'+name+'-yes').attr("data-price");

    var total  = parseInt(total_all) - parseInt(price);
    
    $('#calculated_prod_option_total').text(total);
    
    if(total > 0){

      $('.selection-add-price').attr('style','display:flex !important');
    }else{
      $('.selection-add-price').attr('style','display:none !important');
    }
    
    $('.'+name+'-yes').attr( 'checked-yes', false );
    $('.'+name+'-no').attr( 'checked-yes', true );
    
  }
  } 
  
}



