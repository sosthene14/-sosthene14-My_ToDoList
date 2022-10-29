   /*faire appeler aux elements du code html-->*/
   
   const heads =  document.querySelector("#myDIV");
   const input = document.querySelector("#myInput");
   const li = document.querySelector("#myUL");
   const popup = document.querySelector("#my_pop");
   const cleans = document.querySelector("#clean")
   const btn = document.querySelector("#btnb")
   const liste = []
   const space = " "
   /* inserer les informations du local storage dans la liste*/
function loader()
{
   for (var i = 0; i < localStorage.length; ++i)
   {
    liste.push(localStorage.getItem(localStorage.key(i)))
   }

   /*afficher les elements du local storage à partir de leur indice dans le tableau */

   for (j = 0; j < liste.length; ++j)
   {
    const pop = document.createElement("textarea")
    pop.rows = "1"
    pop.cols = "1"
    pop.textContent = ((liste[j]))
    pop.classList.add("my_input")
    const remove = document.createElement("div")
    remove.textContent = "X"
    remove.classList.add("croix")
    const actions = document.createElement('input');
    actions.classList.add("check");
    actions.type = "checkbox";
    const f = pop.value.charAt((pop.value.length)-1)
    li.appendChild(pop)
    li.appendChild(remove)
    li.appendChild(actions)
    actions.onclick = function ()
           
    {
       
        if (actions.checked == false)
        {
            /* notes à moi meme, le X a ete ajouté car le X du haut permettant d'effacer l'historique a comme ete additionné aux noms des differentes keys,
            car le X du haut est un enfant de l'element contenant les noms, je pense que je vais oublié, compliqué :)*/
            pop.removeAttribute("readonly")    
            console.log((pop.value.charAt(pop.textContent.length - 1))) 
        }
    else
        {
            pop.setAttribute("readonly","readonly");
               
        }
    }
   
    remove.onclick = function()
    {
        
        li.removeChild(pop);
        li.removeChild(remove)
        li.removeChild(actions)
        localStorage.removeItem(pop.value+"X");

    }
   
/* retirer l'element du local storage à partir de sa key */


   }
}

   /*fonction principal*/

  function getting()
  {

     /*Affectation de la valeur du input à la constante get*/
    get = input.value;
    /*verification de l'existence de get*/   

    if (!get.trim())
    {
        alert("Bien tenté :) ah ah ah");
        document.getElementById("myInput").value = space.trim();
    }
    else    
        {
            function getting()
            {
          
            /*reenisialisation de la vaeur du input*/
            document.getElementById("myInput").value = space.trim();

            /*creation d'elemnts qui vont heriter d'une classe css créee precedement*/
            const contains = document.createElement("div");
            const contains_two = document.createElement('textarea');
            contains_two.rows = "1"
            contains_two.cols = "1"
            contains_two.classList.add("my_input");
            contains_two.value = get.trim();
            const action = document.createElement('input');
            action.classList.add("check");
            action.type = "checkbox";
            localStorage.setItem(contains_two.value+"X",contains_two.value);
            
            const cross = document.createElement("div");
            cross.innerText = "X";
            cross.classList.add("croix");

            /*mettre le input des taches en mode lecture ou ecriture selon l'etat de la checkbox*/
            action.onclick = function ()
            
            {
               
                if (action.checked == false)
                {
                    /* notes à moi meme, le X a ete ajouté car le X du haut permettant d'effacer l'historique a comme ete additionné aux noms des differentes keys,
                    car le X du haut est un enfant de l'element contenant les noms, je pense que je vais oublié, compliqué :)*/
                    contains_two.removeAttribute("readonly") 
                    localStorage.setItem(contains_two.value+"X",contains_two.value);
                }
            else
                {
                    contains_two.setAttribute("readonly","readonly");
                    localStorage.setItem(contains_two.value+"X",contains_two.value);                  
                }
            }
           

            /* effacer la tache si l'element croix est appuiyé*/

            cross.onclick = function()
            {
                li.removeChild(contains);
                localStorage.removeItem(contains_two.value+"X");
            }

            /*ajouter les differents elements enfants aux parents afin de permettre l'affichage de ceux ci*/
            
            li.appendChild(contains);
            contains.appendChild(contains_two);
            contains.appendChild(action);
            contains.appendChild(cross);  
                  

        }
        
    getting()
    }
}
