import haxe.io.UInt16Array;
import coconut.ui.View;
import coconut.Ui.hxx;
import fomantic.*;
import fomantic.Types;
import js.Browser.document as doc;
import fomantic.Icon;
import tink.pure.List;
import animation.Hideable;
import js.html.Event;
import tink.state.ObservableMap;
using Debug;

	enum Route {
	HomePage;
	OnePage;
	TwoPage;
	UnknownPage(path:String);

	}

@:pure
typedef Listed={
	public var title(default,never):String;
}
class Main {


	static var router = new coconut.router.BrowserRouter({
			routeToLocation: function(route) {
				return switch route {
					case HomePage: '/';
					case OnePage: '/one';
					case TwoPage: '/two';
					case UnknownPage(v): v;
				}
			},
			locationToRoute: function(url) {
				return switch url.path.parts().toStringArray() {
					case []: HomePage;
					case ['one']: OnePage;
					case ['two']: TwoPage;
					case _: UnknownPage(url.path.toString());
				}
			},
		});

	static function main() {
		trace("Hello, world!");
	
	 coconut.ui.Renderer.mount(
		cast doc.body.appendChild(doc.createDivElement()),
        hxx('<App router=${router} />')
		);
	
	}
	
}


class App extends coconut.ui.View {

	@:attr var router:coconut.router.BrowserRouter<Route>;

	function render() 
		<div ref=${router.intercept}>
			<div class="menu">bim</div>
			 <Pages />
			<a href="/two">totwo</a>
			<a href="/other">toother</a>
		</div>
	;
/*
	<switch ${router.route}>
				<case ${HomePage}><View0 />
				<case ${OtherPage}><View1 />
				<case ${TwoPage}><View2 />
				<case ${UnknownPage(v)}><Unknown path=${v}/>
			</switch>
			*/
}

class Pages extends View{

	var routes:ObservableMap<Route,Bool>=new ObservableMap(
		[
	HomePage=>false,
	OnePage=>true,
	TwoPage=>true,
		]);

	function goto(where:Route){
	 
	 'goto $where'.Log();//debug
			for (key in routes.keys()){
				var value=routes.get(key);
				if (value==false)
					routes.set(key,true);
				if(key==where)
					routes.set(key,false);
			}
	}

	function render()

	<div class="pages">
	
	<Hideable hidden={routes.get(HomePage)}>
	<Login act={e->{e.preventDefault();goto(OnePage);}}/>
	</Hideable>
	<View1 hidden={routes.get(OnePage)} done={e->goto(TwoPage)}/>
	<View2 hidden={routes.get(TwoPage)} done={e->goto(HomePage)}/>
	</div>
	;

}



class View0 extends View{

@:attr public var done:Event->Void;

	@:attr var contents:List<Listed>=List.fromArray([
		{title:"one"},
		{title:"two"},
		{title:"three"},
		]);
	//@:state public var hid:Bool=true;
	//@:state public var was:Route=HomePage;

/*
	var routes:ObservableMap<Route,Bool>=new ObservableMap([
	HomePage=>true,
	OtherPage=>true,
	TwoPage=>true,
	
	]);


	function goto(where:Route){
	 trace( "gogto"+where);
			for (key in routes.keys()){
				var value=routes.get(key);
				if (value==false)
					routes.set(key,true);
				if(key==where)
					routes.set(key,false);
			}
	 	trace("getstatus" +routes.get(where));
	}
*/
	//  @:attr public var getstatus=function(me:Route):Bool{
	// 	 	return map.get(me);
	//  };

	function render()
		
		<div>
		<Input value="bim" placeholder="me"/>
		<Icon img={IconName.lock} />
		<Search content={contents}/>
		
		<Button text="pop" img={IconName.check} onClick={e->e.Log()} />
		<IconicInput img={IconName.circle} direction={left} act={e->e.Log()} />
		<Button onClick={done} text="goto"/>
		
	</div>;
	
		
}

class View1 extends View{
	@:attr public var hidden:Bool=true;
	@:attr public var done:Event->Void;

	function render()
		
		<Hideable hidden={hidden}>
			<h1>One</h1>
			<Button onClick={done}/>
		</Hideable>
		
		;

		 

}

class View2 extends View{
	@:attr public var hidden:Bool=true;
	@:attr public var done:Event->Void;
	function render()
		<Hideable hidden={hidden}>
			<h1>Two</h1>
			<Button onClick={done}/>
		</Hideable>
		
		;
		
}

class View3 extends View{
	function render()
		<h1>Three</h1>;
		
}

class Unknown extends coconut.ui.View {
	@:attr var path:String;
	function render() '
		<div>
			Page not found: ${path}
		</div>
	';
}