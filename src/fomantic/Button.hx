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
   @:attr @:optional public var role:ButtonRole=button;
   @:attr @:optional public var type:ButtonType=primary;
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
      <button ref={setup} onclick={onClick} class='ui button $type $size ${classes}' type='${role}'>
      <if {img!=null} >
      <Icon img={img} />
      </if>
      <if {text!=""} >
         {text} 
      </if>
      </button>;
}

enum abstract ButtonRole(String){
   //   l'activation du bouton entraîne la soumission du formulaire au serveur distant (après validation des contraintes du formulaire);
var submit ;
   // l'activation du bouton entraîne la réinitialisation du formulaire et dans ce cas-là, l'élément est exclu de la validation des contraintes;
var reset ;
//l'activation du bouton n'entraîne aucun action automatique et dans ce cas-là également, l'élément est exclu de la validation des contraintes. C'est cette valeur qui doit être utilisée si le bouton n'est pas utilisé pour envoyer un formulaire.
var button;
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