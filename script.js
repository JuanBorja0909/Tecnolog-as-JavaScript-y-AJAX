window.onload=function(){
 document.getElementById("url").value=window.location.href;
};

function mostrar(t){document.getElementById("resultado").innerText=t;}

function ej1(){
 let t=prompt("Ingrese una frase:");
 let c=t.toLowerCase().replace(/[^a-z0-9áéíóúüñ]/g,"");
 let inv=c.split("").reverse().join("");
 mostrar(c===inv?"Es palíndromo":"No es palíndromo");
}

function ej2(){
 let a=parseFloat(prompt("Primer número:"));
 let b=parseFloat(prompt("Segundo número:"));
 if(a>b)mostrar("El mayor es: "+a);
 else if(b>a)mostrar("El mayor es: "+b);
 else mostrar("Son iguales");
}

function ej3(){
 let f=prompt("Ingrese frase:");
 let v=f.match(/[aeiouáéíóú]/gi);
 mostrar(v?("Vocales: "+[...new Set(v)].join(", ")):"No hay vocales");
}

function ej4(){
 let f=prompt("Ingrese frase:");
 let o={a:0,e:0,i:0,o:0,u:0};
 for(let x of f.toLowerCase()) if(o[x]!=undefined) o[x]++;
 mostrar(`A:${o.a}\nE:${o.e}\nI:${o.i}\nO:${o.o}\nU:${o.u}`);
}

function cargarAjax(){
 let url=document.getElementById("url").value;
 let xhr=new XMLHttpRequest();
 xhr.onreadystatechange=function(){
   let estados=["No iniciada","Cargando","Cargada","Procesando","Completada"];
   document.getElementById("ajax_estados").innerText=xhr.readyState+" - "+(estados[xhr.readyState]||"");
   if(xhr.readyState===4){
     document.getElementById("ajax_contenidos").innerText=xhr.responseText;
     document.getElementById("ajax_cabeceras").innerText=xhr.getAllResponseHeaders();
     document.getElementById("ajax_codigo").innerText=xhr.status+" "+xhr.statusText;
   }
 };
 xhr.open("GET",url,true);
 xhr.send();
}
