
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

	static function main() {
  trace("Hello, world!");
  
  var entries= Promised.Done([
    new Named ("one","un"),
    new Named ("two","deux"),
    new Named ("troix","three"),
  ].fromArray());

  var onAdd=function(a,b,c){
    trace( "onAdd"+a);
  }
  var change=n->{trace("value="+n);};
	
	J(doc).ready(e->{
        coconut.ui.Renderer.mount(
            cast doc.body.appendChild(doc.createDivElement()),
            //hxx('<div/>')
            hxx('<Dropdown entries={entries} onChange={change} onLabelSelect={onLabelSelect} onAdd={onAdd} useLabels={true} maxSelections={2} multiple={true} />')
             // hxx('<Calendar />')
            );

    });
	
	}
	
}

