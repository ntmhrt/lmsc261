function checkLifeSpan(hourUsed)

{
    const maxLifeSpan = 1000;

   if (typeof hourUsed != ”number”)
     { return "please enter valid number" } 

   if (hourUsed < 800)
     { return "suit in working condition"}

   else if (hourUsed >= 800 && hourUsed < maxLifeSpan)
     {return "suit needs replacement soon"}

   else 
   { return "suit no longer sage to use"}

}
