package fomantic;


import js.html.Text;
import fomantic.Types;
import fomantic.Icon;
class Input extends coconut.ui.View{
   @:attr public var value:String="";
   @:attr public var placeholder:String="...";
   @:attr @:optional public var focus:Bool;
   @:attr @:optional public var loading:Bool;
   @:attr @:optional public var disabled:Bool =false;
   @:attr @:optional public var error:Bool;
   @:attr @:optional public var type:InputType=text;
   @:attr @:optional public var direction:Dir; // marche pas la dir.
   @:attr @:optional public var img:IconName=null;
   @:attr @:optional public var name:String=null;
    @:attribute var className:tink.domspec.ClassName = null;
    @:computed  var classes:tink.domspec.ClassName={
      var b=className;
      if(disabled)
      b=b.add("disabled");
      if(loading)
      b=b.add("loading");
      if(focus)
      b=b.add("focus");
      if(img!=null)
      b=b.add("icon");
    

      return b;
   };

   function render()
      <div  class=' ui input  $direction  ${classes}'>
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

