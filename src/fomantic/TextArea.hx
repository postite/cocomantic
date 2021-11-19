package fomantic;

import js.html.Text;
import js.html.Event;
import fomantic.Types;
import fomantic.Icon;
import js.html.*;
class TextArea extends coconut.ui.View{

    @:attr public var value:String=@byDefault "";
    @:attr public var placeholder:String="...";
    @:attr @:optional public var focus:Bool;
    @:attr @:optional public var loading:Bool;
    @:attr @:optional public var disabled:Bool =false;
    @:attr @:optional public var error:Bool=false;
    @:attr @:optional var labeled:Bool=false;
    @:attr @:optional var fluid:Bool=false;
    @:attr @:optional var transparent:Bool=false;
   
    @:attr @:optional public var img:IconName=null;
    @:attr @:optional public var name:String=null;
    @:attr @:optional var onChange:Event->Void;
    @:attr @:optional var onFocus:Event->Void;
    @:attr @:optional var onBlur:String->Void=n->{};

    @:attribute var className:tink.domspec.ClassName = classes;

    @:computed  
    var classes:tink.domspec.ClassName={
      var b:tink.domspec.ClassName="ui input";

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

      
      
      return b;

   };

   var input:js.html.TextAreaElement;
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
       <textarea 
       ref={setup}
       name={name}
       
       onfocus={onFocus} 
       onchange={onChange}
       placeholder={placeholder} 
       onblur={e->onBlur(untyped(e.currentTarget).value)} 
       >
       {value}
       </textarea>
       <if {img!=null} >
          <Icon img={img} />
       </if>
    </div>
    ;
     
}