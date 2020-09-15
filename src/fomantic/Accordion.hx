package fomantic;
import js.html.Event;
import  js.jquery.Helper.*;
using uiplug.FomanticPlugin;
import fomantic.Icon;
import fomantic.Easing;

enum abstract AccordionBehaviour (String) from String to String{
var refresh;//	Refreshes all cached selectors and data
var open;// (index)	Opens accordion content at index
var close_others="close others";//	Closes accordion content that are not active
var close;// (index)	Closes accordion content at index
var toggle;// (index)	Toggles accordion content at index
}


@:observable
typedef AccordionSelector={
        ?accordion :String,// '.accordion',
        ?title     :String,// '.title',
        ?trigger   :String,// '.title',
        ?content   :String// '.content'
      
}
@:observable
typedef AccordionProps={
    ?selector:AccordionSelector,

}
class Accordion extends View{



@:ref
var ME:js.html.Element;

@:attr @:optional
var selector:AccordionSelector;

@:attr 
var className:tink.domspec.ClassName=null;

//style can be styled|fluid|inverted
//eg : <accordion class="styled" />

   @:attr @:optional
   var elements:AccList=@ByDefault null;

    @:attr @:optional
    var children:Children;

//props
@:attr
var exclusive:Bool=true;//	true	Only allow one section open at a time
@:attr @:optional
var onclick:js.html.MouseEvent->Void; //	Event on title that will cause accordion to open
@:attr
var animateChildren:Bool=true;//	true	Whether child content opacity should be animated (may cause performance issues with many child elements)
@:attr
var closeNested:Bool=true;//	true	Close open nested accordion content when an element closes
@:attr
var collapsible:Bool=true;//	true	Allow active sections to collapse
@:attr
var duration:Int=500;//	500	Duration in ms of opening animation
@:attr
var easing:Easing=Easing.easeInOutQuint;//	easeInOutQuint	Easing of opening animation. EaseInOutQuint is included with accordion, for additional options you must include easing equations.


//callbacks

@:attr @:optional
var onOpening:()->Void;//	active content	Callback before element opens
@:attr @:optional
var onOpen:()->Void;//	active content	Callback after element is open
@:attr @:optional
var onClosing:()->Void;//	active content	Callback before element closes
@:attr @:optional
var onClose:()->Void;//	active content	Callback after element is closed
@:attr @:optional
var onChanging:()->Void;//	active content	Callback before element opens or closes
@:attr @:optional
var onChange:()->Void;//	active content	Callback on element open or close


function viewDidMount(){
        trace ("mount");
       J('.ui.accordion').accordion({selector:selector},"close",1);
    }
    function render()
        <div ref={ME} class={className.add(["accordion","ui"])}>
    <if {elements!=null}>
        <for {item in elements.items} >
            <AccordionItem title={item.title} content={item.content} />
        </for>
    <else>
        {...children}
    </if>
        </div>;
}


class AccList implements coconut.data.Model{

    @:observable 
    public var items:tink.pure.List<AccItem>;


}

class AccItem implements coconut.data.Model{

    @:observable
    var title:String;
    @:observable
    var content:String;




    public static function create(title:String,content:String):AccItem{
        return new AccItem({title:title,content:content});
    }
}



class AccordionItem extends View{

    @:attr @:optional
    var title:String;
    @:attr @:optional
    var content:String; 

    @:child @:optional
    var titleView:Children;

    function render()
        <div class="accordion_item">
        <div class="title">
        <Icon img={IconName.sort_down} />
        <if {title!=null}>
            {title}
        <else>
            {...titleView}
        </if>
        </div>
            <raw tag="div" class='content' content={content} />
        </div>;
}