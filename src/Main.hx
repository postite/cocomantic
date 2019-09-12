import coconut.Ui.hxx;
import fomantic.*;
import js.Browser.document as doc;
class Main {
	static function main() {
		trace("Hello, world!");

	 coconut.ui.Renderer.mount(
		cast doc.body.appendChild(doc.createDivElement()),
        hxx('<Elem />')
		);

	}
}

class Elem extends coconut.ui.View{

	static var contents=tink.pure.List.fromArray([

		{title:"one"},
		{title:"two"},
		{title:"three"}
	]);

	public function render()
	<div>
		<Input value="bim" placeholder="me"/>
		<Search content={contents}/>
	</div>;
}
