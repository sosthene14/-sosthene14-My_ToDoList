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
   }