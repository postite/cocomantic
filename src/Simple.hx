
import fomantic.*;

import js.Browser.document as doc;

import js.jquery.Helper.*;

import js.html.Event;
import coconut.Ui.hxx;
using Debug;

class Simple {


	

	static function main() {
		trace("Hello, world!");
	
	J(doc).ready(e->{
        coconut.ui.Renderer.mount(
            cast doc.body.appendChild(doc.createDivElement()),
            //hxx('<div/>')
              hxx('<Calendar />')
            );

    });
	
	}
	
}

