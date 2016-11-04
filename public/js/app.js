var plantilla="<div>"+
		"<p><strong>Nombre:</strong>__nombre__</p>"+
		"<p><strong>Apellido:</strong>__apellido__</p>"+
	"</div>"
$(document).ready(function(){
	$.ajax({
 		url:"http://localhost:3000/demo.json",
 		type:"GET",
 		success:function(response){
 			$("#datos").html(plantilla.replace("__nombre__",response.nombre).replace("__apellido__",response.apellido));
 			var hobbies="<ul>";
            for(var i=0, l=response.hobbies.length; i<l; i++){
                hobbies+= "<li>"+ response.hobbies[i]+"</li>";
            }
            hobbies+="</ul>";
            $("#hobbies").html(hobbies);

            $("#datos2").html(plantilla.replace("__nombre__",response.nombre2).replace("__apellido__",response.apellido2));
 			var hobbies2="<ul>";
            for(var i=0, l=response.hobbies2.length; i<l; i++){
                hobbies2+= "<li>"+ response.hobbies2[i]+"</li>";
            }
            hobbies2+="</ul>";
            $("#hobbies2").html(hobbies2);

             $("#datos3").html(plantilla.replace("__nombre__",response.nombre3).replace("__apellido__",response.apellido3));
 			var hobbies3="<ul>";
            for(var i=0, l=response.hobbies3.length; i<l; i++){
                hobbies3+= "<li>"+ response.hobbies3[i]+"</li>";
            }
            hobbies2+="</ul>";
            $("#hobbies3").html(hobbies3);

 		},
 		error:function(error){
 			console.log(error);
 		}

	});

});