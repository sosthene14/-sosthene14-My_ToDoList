   /*faire appeler aux elements du code html grace au DOM-->*/
   
   const heads =  document.querySelector("#myDIV");
   const input = document.querySelector("#myInput");
   const li = document.querySelector("#myUL");
   const popup = document.querySelector("#my_pop");
   const cleans = document.querySelector("#clean")
   const btn = document.querySelector("#btnb")
   const liste = []
   const space = " "
   /*creation de la premiere fonction loader dont le role consistera à charger lhistorique à partir du localstorage*/
   function loader()
   {
    for (var i = 0; i < localStorage.length; ++i)
    {
     liste.push(localStorage.getItem(localStorage.key(i)))
    }

    for (j = 0; j < liste.length; ++j)
    {
        /* Creation des constates qui vont se charger de creer les differents elemnts me permettant d'afficher en front-end l'historique du localstorage*/
     const pop = document.createElement("textarea")
     const remove = document.createElement("div")
     const actions = document.createElement('input');

     /*Ici nous les attribuons une classe afin d'avoir une mise en assez propre, veuillez noter que les differentes classes sont appelées depuis notre fichier css*/
     actions.classList.add("check");
     pop.classList.add("my_input");
     remove.classList.add("croix");

    /*Remove correspond à la croix qui apparait à droite de historique*/
     remove.textContent = "X"

     /*Le type de notre input*/
     actions.type = "checkbox";

     pop.rows = "1"
     pop.cols = "1"
     /*Ici etant donné que nous somme dans une boucle, pop.textcontent correspond à l'element qui va nous
     permettre d'afficher notre historique, et le contenue de celle est L[j] qui va donc parcourir toute l'historique et tout afficher */
     pop.textContent = ((liste[j])) 
     
     /*const f est une constante que j'ai crée pour resoudre un probleme, notament l'effaçage de notre historique*/
     const f = pop.value.charAt((pop.value.length)-1)

     /* là nous ajoutons tous nos elements dans notre li, qui a ete defini au dessus, au niveau du queryselector*/
     li.appendChild(pop)
     li.appendChild(remove)
     li.appendChild(actions)
            
   }
}