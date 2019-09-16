package animation;
import js.Syntax;
import coconut.ui.View;
import coconut.ui.Children;
import js.Browser.*;
import tink.state.Observable;
using Debug;
class Hideable extends View {
	
	@:ref var element:js.html.Element;
	@:attribute var hidden:Bool;
	@:attribute var fast:Bool = false;
	@:attribute var animationIn:String = "fadeIn";
	@:attribute var animationOut:String = "fadeOut";
	@:attribute var children:Children;
	@:computed var classes:String = 'animated ${fast ? "faster" : ""} ${hidden ? animationOut : animationIn}';
	@:computed var timerDelay:Int = fast ? 650 : 1150;
	@:state var shouldRender:Bool = false;
	
	var timeoutHandle:Null<Int> = null;
	
	function render() '<div ref=${element} class={classes}>
		<if {shouldRender}>
			{...children}
		</if>
	</div>';
	
	override function viewDidMount():Void {
		element.addEventListener(animEndEvent, animEnd);
		Observable.auto(function () return this.hidden)
			.bind({ direct: true }, function (hidden) {
				if(hidden) {
					if(timeoutHandle != null) window.clearTimeout(timeoutHandle);
					timeoutHandle = window.setTimeout(animEnd, timerDelay);
				} else shouldRender = true;
			});
	}
	override function viewWillUnmount():Void {
		element.removeEventListener(animEndEvent, animEnd);
	}
	
	function animEnd() if(hidden) shouldRender = false;
	
	private static var animEndEvent:String = {
		var el = document.createElement('fakeelement');
		var animations = [
			['animation', 'animationend'],
			['OAnimation', 'oAnimationEnd'],
			['MozAnimation', 'Animationend'],
			['WebkitAnimation', 'webkitAnimationEnd'],
		];
		var event:String = 'animationend';

		for(t in animations) {
			if(Syntax.strictNeq(untyped (el.style[t[0]]),js.Lib.undefined)){
			//if(untyped __strict_neq__(el.style[t[0]], js.Lib.undefined) ){
				event = t[1];
				break;
			}
		}
		event;
	}
	
}
