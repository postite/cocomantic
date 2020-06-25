package fomantic;
import  js.jquery.Helper.*;
using uiplug.FomanticPlugin;
class Accordion extends View{

    @:ref
    var ME:js.html.Element;

    @:attr 
    var className:tink.domspec.ClassName=null;

   @:attr
   var elements:AccList=@ByDefault null;

    function viewDidMount(){
        trace ("mount");
       J('.ui.accordion').accordion();
    }
    function render()
        <div ref={ME} class={className.add(["accordion","ui"])}>
        <for {item in elements.items} >
            <AccordionItem title={item.title} content={item.content} />
        </for>
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

    @:attr 
    var title:String;
    @:attr 
    var content:Children; 

    function render()
        <div class="accordion_item">
        <div class="title">{title}</div>
            <div class='content'>
            {...content}
        </div>
        </div>;
}