package fomantic;

import coconut.ui.View;

import fomantic.Types;
import fomantic.Icon;
class Button  extends View{

   @:attr public var text:String="ok";
   @:attr @:optional public var img:IconName=null;
   @:attr public var onClick:js.html.MouseEvent->Void;

   @:attr @:optional public var disabled:Boul=false;
   @:attr @:optional public var loading:Boul=false;
   @:attr @:optional public var active:Boul=true;

   @:attr @:optional public var type:ButtonType=basic;
   @:attr @:optional public var size:Size=null;



   function render()
      <button onclick={onClick} class='ui $type button $size ${active.as("active")} ${loading.as("loading")} ${disabled.as("disabled")}'>
      <if {img!=null} >
      <Icon img={img} />
      </if>
         {text} 
      </button>;
}

enum abstract ButtonType(String){

   var basic;
   var primary;
   var secondary;
   var positive;
   var negative;
   var tertiary;
   var inverted;

}