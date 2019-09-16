package fomantic;

import coconut.ui.View;

import fomantic.Types;
import fomantic.Icon;
class IconicInput extends View{

   @:attr @:optional public var value:String="";
   @:attr @:optional public var placeholder:String="...";
   @:attr @:optional public var focus:Boul;
   @:attr @:optional public var loading:Boul;
   @:attr @:optional public var disabled:Boul =false;
   @:attr @:optional public var error:Boul;
   @:attr public var img:IconName=null;
   @:attr @:optional public var act:(js.html.Event)->Void;
   @:attr @:optional public var direction:Dir; // marche pas la dir.

   function render()

   <div  class='ui ${direction}  icon  input ${loading.as("loading")} ' >
      <input  type="text" value={value} placeholder={placeholder} />
         <Icon img={img} act={act} />
   </div>
   ;

}