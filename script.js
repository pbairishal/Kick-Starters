$(document).ready(function() {
    //----------------------------------------READY ------------------------
    
         $.getJSON("http://starlord.hackerearth.com/kickstarter", function(data) {
             
                var html = "";
                    data.forEach(function(val) {
                          html += "<div class='data img-rounded'>";
                          html += "<img class='resimg img-rounded' src='http://webmaster.ypsa.org/wp-content/uploads/2012/08/no_thumb.jpg' alt='sample image' height='240' width='225'>";
                          html += '<span title="' + val.blurb + '"><h3 style="color:#D50000;"><strong>' + val.title + '</strong></h3></span>';
                          html += "<h4 style='color:grey;'>by " + val.by + "</h4><hr style='background-color:#BDBDBD;border-color:#BDBDBD;height: 2px;opacity:0.5;'>";
                          var currencySymbol=val.currency=='usd'?'$':val.currency=="aud"?"AU$":val.currency=="cad"?"Can$":val.currency=="gbp"?"£":val.currency=="eur"?'€':val.currency;
                          html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+currencySymbol + val['amt.pledged']+" <small>pledged</small></strong></h4>";
                           html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+val["percentage.funded"]+"% <small>funded</small></strong></h4>";
                           html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+val["num.backers"]+" <small>backers</small></strong></h4>";
                        var time=new Date(val["end.time"]).toGMTString();
                           html += "<h5 style='color:#424242;line-height:1.5;'><strong>End Time: "+ time + "</strong></h5>";
                           html += "<h4 style='color:#546E7A;float:right;'><span class='glyphicon glyphicon-map-marker'></span><strong> "+val.location+"</strong></h4><br>";
                           html += "</div><br>";
                             });
        $(".message").html(html);
              });
       
    //--------------------------------------------SORTING BY FUNDING----------------------
        
   function select() { 
            $.getJSON("http://starlord.hackerearth.com/kickstarter", function(data) {

                     var html = "";
                
               data = data.sort(function(a,b) {
                   if(select1=="low"){
  return a["percentage.funded"] - b["percentage.funded"];
                   }
                   if(select1=="high"){
  return b["percentage.funded"] - a["percentage.funded"];
                   }
});
                
                     data.forEach(function(val) {
                
                       html += "<div class='data img-rounded'>";
                          html += "<img class='resimg img-rounded' src='http://webmaster.ypsa.org/wp-content/uploads/2012/08/no_thumb.jpg' alt='sample image' height='240' width='225'>";
                          html += '<span title="' + val.blurb + '"><h3 style="color:#D50000;"><strong>' + val.title + '</strong></h3></span>';
                          html += "<h4 style='color:grey;'>by " + val.by + "</h4><hr style='background-color:#BDBDBD;border-color:#BDBDBD;height: 2px;opacity:0.5;'>";
                          var currencySymbol=val.currency=='usd'?'$':val.currency=="aud"?"AU$":val.currency=="cad"?"Can$":val.currency=="gbp"?"£":val.currency=="eur"?'€':val.currency;
                          html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+currencySymbol + val['amt.pledged']+" <small>pledged</small></strong></h4>";
                           html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+val["percentage.funded"]+"% <small>funded</small></strong></h4>";
                           html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+val["num.backers"]+" <small>backers</small></strong></h4>";
                        var time=new Date(val["end.time"]).toGMTString();
                           html += "<h5 style='color:#424242;line-height:1.5;'><strong>End Time: "+ time + "</strong></h5>";
                           html += "<h4 style='color:#546E7A;float:right;'><span class='glyphicon glyphicon-map-marker'></span><strong> "+val.location+"</strong></h4><br>";
                           html += "</div><br>";
                     });

        $(".message").html(html);
                });
 
   }
     //--------------------------------------------SORTING BY END TIME----------------------
        
   function selectTime() { 
            $.getJSON("http://starlord.hackerearth.com/kickstarter", function(data) {

                     var html = "";
                
               data = data.sort(function(a,b) {
                 
                   if(selectTimeVal=="low"){
   return new Date(a["end.time"]).getTime() - new Date(b["end.time"]).getTime();
                   }
                   if(selectTimeVal=="high"){
  return new Date(b["end.time"]).getTime() - new Date(a["end.time"]).getTime();
                   }
});
                
                     data.forEach(function(val) {
               html += "<div class='data img-rounded'>";
                          html += "<img class='resimg img-rounded' src='http://webmaster.ypsa.org/wp-content/uploads/2012/08/no_thumb.jpg' alt='sample image' height='240' width='225'>";
                          html += '<span title="' + val.blurb + '"><h3 style="color:#D50000;"><strong>' + val.title + '</strong></h3></span>';
                          html += "<h4 style='color:grey;'>by " + val.by + "</h4><hr style='background-color:#BDBDBD;border-color:#BDBDBD;height: 2px;opacity:0.5;'>";
                          var currencySymbol=val.currency=='usd'?'$':val.currency=="aud"?"AU$":val.currency=="cad"?"Can$":val.currency=="gbp"?"£":val.currency=="eur"?'€':val.currency;
                          html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+currencySymbol + val['amt.pledged']+" <small>pledged</small></strong></h4>";
                           html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+val["percentage.funded"]+"% <small>funded</small></strong></h4>";
                           html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+val["num.backers"]+" <small>backers</small></strong></h4>";
                        var time=new Date(val["end.time"]).toGMTString();
                           html += "<h5 style='color:#424242;line-height:1.5;'><strong>End Time: "+ time + "</strong></h5>";
                           html += "<h4 style='color:#546E7A;float:right;'><span class='glyphicon glyphicon-map-marker'></span><strong> "+val.location+"</strong></h4><br>";
                           html += "</div><br>";
                     });

        $(".message").html(html);
                });
 
   }
    
    //-------------------------------------------------FILTER BY LOCATION-------------------------------------
     
   function filter() { 
            var select2 = $('#select_id2').val();
       
     if(select2=="Town"||"Zip"||"Suburb"||"County"){ 
         var html = "";
       $.getJSON("http://starlord.hackerearth.com/kickstarter", function(data) {
           
                data = data.filter(function(val) {

       return select2==val.type;  
     
});
                    
                     data.forEach(function(val) {
                       html += "<div class='data img-rounded'>";
                          html += "<img class='resimg img-rounded' src='http://webmaster.ypsa.org/wp-content/uploads/2012/08/no_thumb.jpg' alt='sample image' height='240' width='225'>";
                          html += '<span title="' + val.blurb + '"><h3 style="color:#D50000;"><strong>' + val.title + '</strong></h3></span>';
                          html += "<h4 style='color:grey;'>by " + val.by + "</h4><hr style='background-color:#BDBDBD;border-color:#BDBDBD;height: 2px;opacity:0.5;'>";
                          var currencySymbol=val.currency=='usd'?'$':val.currency=="aud"?"AU$":val.currency=="cad"?"Can$":val.currency=="gbp"?"£":val.currency=="eur"?'€':val.currency;
                          html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+currencySymbol + val['amt.pledged']+" <small>pledged</small></strong></h4>";
                           html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+val["percentage.funded"]+"% <small>funded</small></strong></h4>";
                           html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+val["num.backers"]+" <small>backers</small></strong></h4>";
                        var time=new Date(val["end.time"]).toGMTString();
                           html += "<h5 style='color:#424242;line-height:1.5;'><strong>End Time: "+ time + "</strong></h5>";
                           html += "<h4 style='color:#546E7A;float:right;'><span class='glyphicon glyphicon-map-marker'></span><strong> "+val.location+"</strong></h4><br>";
                           html += "</div><br>";
                     });
                     

        $(".message").html(html); 
    
      }); 
   }
   }
   
    
   //-----------------------------------------------SEARCH BY TEXT---------------------------------------------- 
    function searchText() { 
            var searchField = $('#txtSearch').val();
           $.getJSON("http://starlord.hackerearth.com/kickstarter", function(data) {
             
                var html = "";
                data = data.filter(function(val) {
                    var lowcase1=val.title.toLowerCase();
                    var lowcase2=searchField.toLowerCase();
                   if(~lowcase1.indexOf(lowcase2)){
       return val.title;
     }
});
                    
                     data.forEach(function(val) {
                      html += "<div class='data img-rounded'>";
                          html += "<img class='resimg img-rounded' src='http://webmaster.ypsa.org/wp-content/uploads/2012/08/no_thumb.jpg' alt='sample image' height='240' width='225'>";
                          html += '<span title="' + val.blurb + '"><h3 style="color:#D50000;"><strong>' + val.title + '</strong></h3></span>';
                          html += "<h4 style='color:grey;'>by " + val.by + "</h4><hr style='background-color:#BDBDBD;border-color:#BDBDBD;height: 2px;opacity:0.5;'>";
                          var currencySymbol=val.currency=='usd'?'$':val.currency=="aud"?"AU$":val.currency=="cad"?"Can$":val.currency=="gbp"?"£":val.currency=="eur"?'€':val.currency;
                          html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+currencySymbol + val['amt.pledged']+" <small>pledged</small></strong></h4>";
                           html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+val["percentage.funded"]+"% <small>funded</small></strong></h4>";
                           html += "<h4 style='color:#4A148C;line-height:0.5;'><strong>"+val["num.backers"]+" <small>backers</small></strong></h4>";
                        var time=new Date(val["end.time"]).toGMTString();
                           html += "<h5 style='color:#424242;line-height:1.5;'><strong>End Time: "+ time + "</strong></h5>";
                           html += "<h4 style='color:#546E7A;float:right;'><span class='glyphicon glyphicon-map-marker'></span><strong> "+val.location+"</strong></h4><br>";
                           html += "</div><br>";
                     });
                     

        $(".message").html(html); 
    
      });
    
    }
 
    
//-------------------------------------------------------------------------------------------------------
                                    
                            
    $("#radio_1, #radio_2").change(function () {
        if ($("#radio_1").is(":checked")) {
            select1="low";
            select();
        }
        if ($("#radio_2").is(":checked")) {
            select1="high";
            select();
        } 
    }); 
    
     $("#radio_3, #radio_4").change(function () {
        if ($("#radio_3").is(":checked")) {
            selectTimeVal="low";
            selectTime();
        }
        if ($("#radio_4").is(":checked")) {
            selectTimeVal="high";
            selectTime();
        } 
    }); 

          $("#getMessage").on("click", function(){ 
             searchText();
         });
         $("#select_id2").change(function(){ 
             filter();
         });
    //-------------------------------------------AUTOCOMPLETE-------------------------------
    $( function() {
     $.getJSON("http://starlord.hackerearth.com/kickstarter",function (response){
                  JSON.stringify(response);
                   var availableTags = $.map(response, function(el) { return el.title });
    $( "#txtSearch" ).autocomplete({
      source: availableTags
                    });       
                 });   
            });
   // -----------------------------------------------------------------------------------------       
         
     });               