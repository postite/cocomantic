package fomantic;
import fomantic.*;
import fomantic.Icon;
class NumStepper extends coconut.ui.View{

   @:attr
   public var value:Float;
   @:attr
   public var step:Float=1.;
   @:attr
   public var onChange:Float->Void;
   @:state
   var _value:Float=value;
   function setup(e:js.html.Element){
      _value=value;
   }
   function render()
   <div ref={setup}class="ui icon buttons">
      <div class="ui icon button"><Icon img={IconName.minus }act={minus} /></div>
       <div class="ui basic label button">{Std.string(value)}</div>
      <div class="ui icon button"><Icon img={IconName.plus } act={plus} /></div>
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