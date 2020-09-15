package fomantic;
import fomantic.*;
import fomantic.Icon;
import js.jquery.Helper.*;
class NumStepper extends coconut.ui.View{

   @:attr
   public var value:Float;
   @:attr
   public var step:Float=1.;
   @:attr
   public var onChange:Float->Void;
   @:state
   var _value:Float=value;
   @:attr 
   var contentEditable:Bool=false;

   
   function setup(e:js.html.Element){
      _value=value;
      J(e).on('blur keyup paste input', '[contenteditable]',function() {
             _value=Std.parseInt(JTHIS.html());
             onChange(_value);
         });
   }

   function render()
   <div ref={setup} class="ui icon buttons" >
      <div class="ui icon button"><Icon img={IconName.minus } act={e->minus(e)} /></div>
       <div class="ui basic label button" contentEditable={contentEditable} >{Std.string(value)}</div>
      <div class="ui icon button"><Icon img={IconName.plus } act={e->plus(e)} /></div>
   </div>;

   function minus(e){
      _value=_value-step;
      onChange(_value);
   }
   function plus(e){
      _value=_value+step;
      onChange(_value);
   }

}