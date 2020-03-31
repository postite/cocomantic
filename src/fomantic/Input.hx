package fomantic;


import js.html.Text;
import js.html.Event;
import fomantic.Types;
import fomantic.Icon;
import js.html.*;
class Input extends coconut.ui.View{

   @:attr public var value:String="";
   @:attr public var placeholder:String="...";
   @:attr @:optional public var focus:Bool;
   @:attr @:optional public var loading:Bool;
   @:attr @:optional public var disabled:Bool =false;
   @:attr @:optional public var error:Bool=false;
   @:attr @:optional var labeled:Bool=false;
   @:attr @:optional var fluid:Bool=false;
   @:attr @:optional var transparent:Bool=false;
   @:attr @:optional public var type:InputType=text;
   @:attr @:optional public var direction:Dir=null; // marche pas la dir.
   @:attr @:optional public var img:IconName=null;
   @:attr @:optional public var name:String=null;
   @:attr @:optional var onChange:Event->Void;
   @:attr @:optional var onFocus:Event->Void;

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

      if(labeled)
      b=b.add('labeled');

      if(fluid)
         b=b.add('fluid');
      
      if(transparent)
         b=b.add('transparent');

      if(direction!=null)
      b=b.add(cast direction);
      
      return b;

   };

   var input:js.html.InputElement;
   function setup(el:Element){
      this.input=cast el;
   }
   public function clear(){
      input.value="";
   }
   public function getValue(){
      return input.value;
   }

   

   function render()
      <div class={className.add('ui input')} >
         <input ref={setup} name={name} type='${type}' value={value} onfocus={onFocus} onchange={onChange}
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

