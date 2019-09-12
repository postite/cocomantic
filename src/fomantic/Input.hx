package fomantic;

import fomantic.Types.Boul;
class Input extends coconut.ui.View{
   @:attr public var value:String="";
   @:attr public var placeholder:String="...";
   @:attr @:optional public var focus:Boul;
   @:attr @:optional public var loading:Boul;
   @:attr @:optional public var disabled:Boul =false;
   @:attr @:optional public var error:Boul;

   function render()
      <div class=' ui input 
      ${disabled.as("disabled")}  
      ${focus.as("focus")}  
      ${loading.as("loading")}  
      ${error.as("error")}  
      '>
         <input  type="text" value={value} 
         placeholder={placeholder} />
      </div>
      ;
       
}

