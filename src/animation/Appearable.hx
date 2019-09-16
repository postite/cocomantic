package animation;
import coconut.ui.View;
import coconut.ui.Children;
import js.Browser.*;
import tink.state.Observable;
using Debug;

//todo
class Appearable extends View {
	
	@:ref var element:js.html.Element;
	@:attribute var hidden:Bool;
	@:attribute var fast:Bool = false;
	@:attribute var animationIn:String = "fadeIn";
	@:attribute var animationOut:String = "fadeOut";
	@:attribute var children:Children;
	@:computed var classes:String = 'animated  ${fast ? "faster" : ""} ${hidden ? animationOut : animationIn}';
	@:computed var timerDelay:Int = fast ? 650 : 3000;
	@:state var shouldRender:Bool = true;
   

	var timeoutHandle:Null<Int> = null;

	function render(){
   
    <div ref=${element} class={classes}>
		<if {shouldRender}>
			{...children}
		</if>
	</div>;
   }
	override function viewDidMount():Void {
      trace( "mount");
		element.addEventListener(animEndEvent, animEnd);
		Observable.auto(function () return this.hidden)
			.bind({ direct: true }, function (hidden) {
				if(hidden){

					if(timeoutHandle != null) window.clearTimeout(timeoutHandle);
					timeoutHandle = window.setTimeout(animEnd, timerDelay);

				} else{
                shouldRender = true;
                }
			});
	}

	override function viewWillUnmount():Void {
      trace( "unmount");
		element.removeEventListener(animEndEvent, animEnd);
	}
	
	function animEnd(){ 
      trace("hemllo");
      if(hidden){
         
         //element.classList.add(animationIn);
         shouldRender = true;
   } 
   }
	
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
         t.Log("out");

			if(untyped __strict_neq__(el.style[t[0]], js.Lib.undefined) ){
				event = t[1];
				break;
			}
		}
		event;
	}
	
}
