package fomantic;

import tink.pure.List;
import tink.domspec.ClassName;
import js.jquery.Helper.*;

using tink.CoreApi;
using tink.state.Promised;

// TODO: support non-string values. (entries should contain a string ID to be used as data-value attr)
class Dropdown<T> extends coconut.ui.View {

	@:attr var className:ClassName = null;
	@:attr var name:String = null;
	@:attr var value:T = null;
	@:attr var defaultText:String = null;
	@:attr var entries:Promised<List<Named<T>>>;
	@:attr var onChange:T->Void = null;
	
	function render() '
		<div ref=${setup} class=${getClassName()}>
			<input type="hidden" name=${name} value=${Std.string(value)}/>
			<i class="dropdown icon"></i>
			<div class="default text">${defaultText}</div>
			<div class="menu">
				<switch ${entries}>
					<case ${Done(data)}>
						<for ${entry in data}>
							<div class="item" data-value=${Std.string(entry.value)}>${entry.name}</div>
						</for>
					<case ${_}>
				</switch>
			</div>
		</div>
	';
	
	inline function getClassName() {
		var t=className.add('ui selection dropdown');
		return t.add(switch entries {
			case Loading: 'loading';
			case Failed(_): 'error';
			case Done(_): null;
		});
	}
	
	function setup(e){
		untyped (J(e)).dropdown({
			onChange: function(value, text) if(onChange != null) onChange(value),
		});
		if(value == null) untyped (J(e)).dropdown('clear');
	}
}