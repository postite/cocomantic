import haxe.io.UInt16Array;
import coconut.ui.View;
import coconut.Ui.hxx;
import fomantic.*;

import js.Browser.document as doc;


import js.html.Event;

using Debug;

class Solo {


	

	static function main() {
		trace("Hello, world!");
	
	 coconut.ui.Renderer.mount(
		cast doc.body.appendChild(doc.createDivElement()),
       // hxx('<App router=${router} />')
		  hxx('<Bouton text="op" onClick={e->e} class="bim"/>')
		);
	
	}
	
}

