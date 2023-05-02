 var fonctionSalut =  function(nom){    
    document.writeln('Salut M./Mme '+nom+'.');
}

var fonctionAjout = function(n, m){
    var r;
    r = n+m;
    document.writeln(n+'+'+m+'='+r);
}

var fonctionSoustrait = function(n, m){
    var r;
    r = n-m;
    document.writeln(n+'+'+m+'='+r);
}

var fonctionTableMultiplication = function(n){
    for(var i=1; i<=10; i++){
        document.writeln(n+'x'+i+' = '+n*i+'<br>');   
    }

}

// ### PROGRAMME PRINCIPAL
var nom = '';
var n = parseInt(1);
var m = parseInt(1);
var choix;
do{
    choix = prompt("Menu\n1. Dire bonjour\n2. Faire l'addition\n3. Faire la soustraction\n4. Table de Multiplication\n5. Quitter");
    choix = parseInt(choix);
    switch(choix){
        case 1:
            nom = prompt('Quel est votre nom: ');
            fonctionSalut(nom);
            break;
        case 2:
            n = parseInt(prompt('Donner le premier entier'));
            m = parseInt(prompt('Donner le deuxieme entier'));
            
            break;
        case 3:
            n = parseInt(prompt('Donner le premier entier'));
            m = parseInt(prompt('Donner le deuxieme entier'));
            document.writeln(n+'-'+m+'='+fonctionSoustrait(n, m));
            break;
        case 4:
            n = parseInt(prompt('Donner le nombre: '));
            fonctionTableMultiplication(n);
            break;
        case 5:           
            if(confirm('Voulez-vous vraiment quitter ?')){
                document.close();
            };
            break;
        default:
            alert("Erreur: Mauvais choix !");
            break;
    }
} while(choix!=5);


document.writeln(""); 


