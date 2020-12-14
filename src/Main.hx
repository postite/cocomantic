import haxe.io.UInt16Array;
import coconut.ui.View;
import coconut.Ui.hxx;
import fomantic.*;
import fomantic.Types;
import js.Browser.document as doc;
import fomantic.Icon;
using tink.pure.List; // incompat with IconName
import animation.Hideable;
import js.html.Event;
import tink.state.ObservableMap;
import fomantic.Accordion;
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
		var accordionListe=new AccList({items:[for (a in 0 ...4) AccItem.create('item$a','content$a')].fromArray()});
	 coconut.ui.Renderer.mount(
		cast doc.body.appendChild(doc.createDivElement()),
        hxx('<App router=${router}  elements={accordionListe} />')
		//   hxx('<Bouton text="op" />')
		);
	
	}
	
}


class App extends coconut.ui.View {

	@:attr var router:coconut.router.BrowserRouter<Route>;
	@:attr var elements:AccList;
	function render() 
		<div >
			<div class="menu">bim</div>
			 <Pages  router={router} />
			 <Calendar onChange={v->v} />
			 <Accordion class="styled">
				 <for {a in 0...3} >
					 <AccordionItem  content={'content '+a} >
					 	<Input value={'input$a'}/>
					 </AccordionItem>
				 </for>
			 </Accordion> 
			<a href="/two">totwo</a>
			<a href="/other">toother</a>
		</div>
	;

}

class Pages extends View{
	@:attr var router:coconut.router.BrowserRouter<Route>;
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
	function viewDidMount(){
		goto(router.route);
	}

	function render(){
	
	return <div ref=${router.intercept} class="pages">
		
		
		
		<p>{Std.string(router.route)}</p>
			
		<switch ${router.route}>	
				<case ${HomePage}>
				<Hideable hidden={routes.get(HomePage)}>
					<Login act={e->{goto(OnePage);}}/>
					<Inscript  act={e->e} />
				</Hideable>
				<case ${OnePage}><p>one</p>
				<case ${TwoPage}><View2 hidden={routes.get(TwoPage)} done={e->router.push(OnePage)}/>
				<case ${UnknownPage(v)}><Unknown path=${v}/>
		</switch>
		
	</div>
	;
	}

}
/*

<switch ${router.route}>
				<case ${HomePage}><p>home</p>
				<case ${OnePage}><p>home</p>
				<case ${TwoPage}><p>home</p>
				<case ${UnknownPage(v)}><Unknown path=${v}/>
			</switch>
<switch ${router.route}>
				<case ${HomePage}><Hideable hidden={routes.get(HomePage)}>
	<Login act={e->{e.preventDefault();goto(OnePage);}}/>
	</Hideable>
				<case ${OnePage}><View1 hidden={routes.get(OnePage)} done={e->goto(TwoPage)}/>
				<case ${TwoPage}><View2 hidden={routes.get(TwoPage)} done={e->goto(HomePage)}/>
				<case ${UnknownPage(v)}><Unknown path=${v}/>
			</switch>
			
	
	<!--<Hideable hidden={routes.get(HomePage)}>
	<Login act={e->{e.preventDefault();goto(OnePage);}}/>
	</Hideable>
	<View1 hidden={routes.get(OnePage)} done={e->goto(TwoPage)}/>
	<View2 hidden={routes.get(TwoPage)} done={e->goto(HomePage)}/>
	-->
*/


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