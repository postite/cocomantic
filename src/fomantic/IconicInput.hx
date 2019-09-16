package fomantic;

import coconut.ui.View;

import fomantic.Types;
import fomantic.Icon;
class IconicInput extends View{

   @:attr @:optional public var value:String="";
   @:attr @:optional public var placeholder:String="...";
   @:attr @:optional public var focus:Bool;
   @:attr @:optional public var loading:Bool;
   @:attr @:optional public var disabled:Bool =false;
   @:attr @:optional public var error:Bool;
   @:attr public var img:IconName=null;
   @:attr @:optional public var act:(js.html.Event)->Void;
   @:attr @:optional public var direction:Dir; // marche pas la dir.

    @:attribute var className:tink.domspec.ClassName = null;
    @:computed  var classes:tink.domspec.ClassName={
      var b=className;
      if(disabled)
      b=b.add("disabled");
      if(loading)
      b=b.add("loading");
      if(error)
      b=b.add("error");

      return b;
   };

   function render()

   <div  class='ui ${direction}  icon  input  ${classes}' >
      <input  type="text" value={value} placeholder={placeholder} />
         <Icon img={img} act={act} />
   </div>
   ;

}