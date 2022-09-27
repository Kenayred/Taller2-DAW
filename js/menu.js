function init(){    
    var btnpedir=document.getElementById("pedir");
    if(btnpedir.addEventListener){
        btnpedir.addEventListener("click", caracoles, false);
    }
    
    var tot = document.getElementById("total");
    tot.style.backgroundColor = "#F7ECDE";
    tot.style.borderRadius = "10px";
    tot.style.paddingLeft = "20px";
}
function caracoles(){
    var cm = new combos( sc=7.25, cp=5.75,nf=3.50, cantidad);
    checbos();
}
function combos( sc=7.25, cp=5.75,inf=3.50, cantidad){
    //Propiedades de la clase
    this.sc= sc;
    this.cp = cp;
    this.inf=inf;
    this.cantidad = cantidad;
    var result=document.getElementById('total');
    var resul3 = document.getElementById('cantidad2');
    var resul4 = document.getElementById("producto");
    var cantidad = document.getElementById("cantidad").value;
    
    if(document.getElementById('super').checked){
        resul4.innerHTML = "El producto seleccionado es el supercombo";
        resul3.innerHTML = "Cantidad de productos " + cantidad;
        result.innerHTML = "El total es $" + sc*cantidad;
    }
    if(document.getElementById('personal').checked){
        resul4.innerHTML = "El producto seleccionado es el personal";
        resul3.innerHTML = "Cantidad de productos " + cantidad;
        result.innerHTML = "El total es $" + cp*cantidad;
    }
    if(document.getElementById('infantil').checked){
        resul4.innerHTML = "El producto seleccionado es el infantil";
        resul3.innerHTML = "Cantidad de productos " + cantidad;
        result.innerHTML = "El total es $" + inf*cantidad;
    }
    
}
function checbos(i1=1.50, i2=1.25, i3=1.75, i4=1.50, i5=1.25, i6=1.50, i7=1.25, i8=1.00, i9=0.50, i10=1.25){
    cont=0;
    var ingredientes = new Array(10);
    var result2=document.getElementById("totale");
    var chec=document.getElementById("i1");
    if(chec.checked){
        var ensalada="Ensaladas";
        ingredientes[cont] = "Ensaladas";
        cont++;
    }

    var chec2=document.getElementById("i2");
    if(chec2.checked){
        
        var papas="Papa fritas";
        
        ingredientes[cont] = "Papas fritas";
        cont++;
    }

    var chec3=document.getElementById("i3");
    if(chec3.checked){
        
        ingredientes[cont] = "Pieza de pollo grande";
        cont++;
    }

    var chec4=document.getElementById("i4");
    if(chec4.checked){
        
        var ingredientes="Pieza de pollo mediana";
        
        ingredientes[cont] = "Pieza de pollo mediana";
        cont++;
    }

    var chec5=document.getElementById("i5");
    if(chec5.checked){
        
        var ingredientes="Pieza de pollo pequeña";
        

        ingredientes[cont] = "Pieza de pollo pequeña";
        cont++;
    }

    var chec6=document.getElementById("i6");
    if(chec6.checked){
        
        var ingredientes="Bebida grande";
        
        ingredientes[cont] = "Bebida grande";
        cont++;
    }

    var chec7=document.getElementById("i7");
    if(chec7.checked){
        
        var ingredientes="Bebida mediana";
        ingredientes[cont] = "Bebida mediana";
        cont++;
    }

    var chec8=document.getElementById("i8");
    if(chec8.checked){
        var ingredientes="Bebida pequeña";
    
        ingredientes[cont] = "Bebida pequeña";
        cont++;
    }

    var chec9=document.getElementById("i9");
    if(chec9.checked){
        
        var ingredientes="cafe";
        
        ingredientes[cont] = "Cafe";
        cont++;    
    }

    var chec10=document.getElementById("i10");
    if(chec10.checked){
        var ingredientes="Postre";
        
        ingredientes[cont] = "Postre";
        cont++;
    }

    ingredientes.forEach(function(elemento){
        result2.innerHTML = elemento;
    })
        
    

    // for(var i=0; i<cont; i++){
    //     result2.innerHTML = ingredientes.forEach(cont);
    // }
    
}
function comentarios(){
    
    var comment=document.getElementById('comment').value;
 
    if(comment ==""){
        alert("No deje vacio");
    }else{
        var parent=document.createElement('div');
        var el_message=document.createElement('p');
        var el_line=document.createElement('hr');
        var txt_message=document.createTextNode(comment);
        el_message.appendChild(txt_message);
        el_line.style.border='1px solid #000';
        parent.appendChild(el_line);
        parent.appendChild(el_message);
        parent.setAttribute('class', 'pane');
        document.getElementById('result').appendChild(parent);
        document.getElementById('comment').value="";
    }

    var comentar=document.getElementById("comment");
    
 
}









if(window.addEventListener){
    window.addEventListener("load", init, false);
}
//COMENTARIO IMPORTANTE MIGUELITO TENES QUE USAR POO SINO VAMOS A SALIR PISADOS
