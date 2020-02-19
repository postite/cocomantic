package fomantic;

class Label extends coconut.ui.View{
   @:attr public var children:coconut.ui.Children;
   @:attr @:optional  public var type:LabelType=label;

   public function setup(el:js.html.Element){

   }
   public function render(){
      <div ref={setup} class='label ui $type ' >
         {...children}
      </div>
   }
}

enum abstract LabelType(String){
   
   var label;
   var image;
   var pointing;
   var corner;
   var tag;
   var ribbon;
   var attached;
   var horizontal;
   var floating;
   var floatingLeft= "floating left";
   var floatingAligned="floating aligned";

}