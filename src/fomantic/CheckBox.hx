package fomantic;

import coconut.ui.View;
import js.jquery.Helper.*;



class CheckBox extends View{


    @:attr
    var onChange:Bool->Void=@byDefault (b)->{};
    //	HTML input element	Callback after a checkbox is either checked or unchecked.
    @:attr
    var onChecked:Void->Void=@byDefault ()->{};
    //HTML input element	Callback after a checkbox is checked.

    @:attr
    var checked:Bool=@byDefault false;

    @:attr
    var text:String=@byDefault"";

    @:state
    var _checked:Bool=checked;

    var me:js.html.InputElement;

    @:attribute var className:tink.domspec.ClassName = [];

    function setup(el:js.html.Element){
        trace(" checksetup");
        me= cast el;
        untyped(J(el)).checkbox({
            onChange: ()->{
                _checked=!_checked;
                onChange(_checked);
            },
            onChecked:onChecked
            
        });
    }


    function render()
        <div class={className.add('ui input checkbox')}>
        <input ref={setup} type="checkbox" checked={checked} ></input>
        <label>{text}</label>
        </div>;
}

