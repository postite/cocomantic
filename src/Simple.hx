
import tink.state.Promised;
import fomantic.*;
using tink.pure.List;
import js.Browser.document as doc;

import js.jquery.Helper.*;

import js.html.Event;
import coconut.Ui.hxx;
using Debug;
import js.jquery.JQuery;
class Simple {


	static function onLabelSelect(a:Array<JQuery>){
    trace( "onSelect"+a);
  }

  public static var entries= Promised.Done([
    new Named ("one","un"),
    new Named ("two","deux"),
    new Named ("troix","three"),
  ].fromArray());

  public static var change=n->{trace("value="+n);};

	static function main() {
  trace("Hello, world!");
  
  

  var onAdd=function(a,b,c){
    trace( "onAdd"+a);
  }
  var change=n->{trace("value="+n);};
	
	J(doc).ready(e->{
        coconut.ui.Renderer.mount(
            cast doc.body.appendChild(doc.createDivElement()),
            //hxx('<div/>')
           // hxx('<Dropdown entries={entries} onChange={change} onLabelSelect={onLabelSelect} onAdd={onAdd} useLabels={true} maxSelections={2} multiple={true} />')
            // hxx('<Dropdown entries={entries} onChange={change}  />')
            hxx('<InputTest />')
             // hxx('<Calendar />')
            );

    });
	
  }
  

	
}

class InputTest extends coconut.ui.View{
  function render()
    <Input type={text} />;
}

class Big extends coconut.ui.View{
    @:state
    var bim:Bool=false;

    function render()
      <div >
    {Std.string(bim)}
    <ControlledTest bim={bim} />
    </div>;

}


class ControlledTest extends coconut.ui.View{

  @:controlled
  var bim:Bool =false;


  function render(){
  <Dropdown entries={Simple.entries} onChange={r->bim=true} value={Std.string(bim)} />;
  }

}

