package fomantic;


import js.html.Text;
import fomantic.Types;
import fomantic.Icon;
class Input extends coconut.ui.View{
   @:attr public var value:String="";
   @:attr public var placeholder:String="...";
   @:attr @:optional public var focus:Boul;
   @:attr @:optional public var loading:Boul;
   @:attr @:optional public var disabled:Boul =false;
   @:attr @:optional public var error:Boul;
   @:attr @:optional public var type:InputType=text;
   @:attr @:optional public var direction:Dir; // marche pas la dir.
   @:attr @:optional public var img:IconName=null;
   @:attr @:optional public var name:String=null;

   function render()
      <div  class=' ui input 
      ${disabled.as("disabled")}  
      ${focus.as("focus")}  
      ${loading.as("loading")}  
      ${error.as("error")}  
      $direction 
      ${{(img!=null)?" icon":" ";}}
      '>
         <input name={name} type='${type}' value={value} 
         placeholder={placeholder} />
         <if {img!=null} >
            <Icon img={img} />
         </if>
      </div>
      ;
       
}
enum abstract InputType(String){
   
    var email;
    var password;
    var reset;
    var search;
    var tel;
    var text;
    var time;
    var url;
    var week;

}

