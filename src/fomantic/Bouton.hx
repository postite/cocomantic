package fomantic;

import coconut.ui.View;

import fomantic.Types;

class Bouton  extends View{

   @:attr public var text:String="ok";
   
   @:attr public var onClick:js.html.MouseEvent->Void;

   @:attr @:optional public var disabled:Bool=true;
  // @:attr @:optional public var loading:Bool=false;
   //@:attr @:optional public var active:Bool=true;

   //@:attr @:optional public var type:ButtonType=basic;
   //@:attr @:optional public var size:Size=null;
   
  @:attribute var className:tink.domspec.ClassName = null;
   @:computed  var classes:tink.domspec.ClassName={
      var b=className;
      if(disabled)
      b=b.add("disabled");
      return b.add("ero");
   };

   function render()
      <button  onclick={onClick} class=
         {
           classes
         }
         >
      
         {text} 
      </button>;
}

