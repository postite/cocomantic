package fomantic;

import coconut.ui.View;

import fomantic.Types;
import fomantic.Icon;
class Button  extends View{

   @:attr public var text:String="ok";
   @:attr @:optional public var img:IconName=null;
   @:attr public var onClick:js.html.MouseEvent->Void;

   @:attr @:optional public var disabled:Bool=false;
   @:attr @:optional public var loading:Bool=false;
   @:attr @:optional public var active:Bool=true;

   @:attr @:optional public var type:ButtonType=basic;
   @:attr @:optional public var size:Size=null;
   @:attr @:optional public var toolTip:String;

   @:attribute var className:tink.domspec.ClassName = null;
   
   @:computed  var classes:tink.domspec.ClassName={
      var b=className;
      if(disabled)
      b=b.add("disabled");
      if(loading)
      b=b.add("loading");
      if(active)
      b=b.add("active");

      return b;
   };

   function setup(e:js.html.Element){


      if(toolTip!=null)
         cast(e).dataset.tooltip=toolTip;
      
     
   }

   function render()
      <button ref={setup} onclick={onClick} class='ui button $type $size ${classes}' >
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