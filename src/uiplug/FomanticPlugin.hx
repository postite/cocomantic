package uiplug;

import js.jquery.JQuery;
import fomantic.Accordion;
import fomantic.Calendar;
    // refresh	Refreshes all cached selectors and data
    // open (index)	Opens accordion content at index
    // close others	Closes accordion content that are not active
    // close (index)	Closes accordion content at index
    // toggle (index)	Toggles accordion content at index
   // } 
    
extern class FomanticPlugin implements js.jquery.Plugin {
    public function modal(arg:Dynamic):js.jquery.JQuery;
    public function accordion(?AccordionProps:fomantic.Accordion.AccordionProps,?behviour:fomantic.Accordion.AccordionBehaviour,?index:Int):js.jquery.JQuery;
    public function calendar(?one:Dynamic,?two:Dynamic):js.jquery.JQuery;
   // //static public function myStaticMethod(arg:Dynamic):Void;
}







