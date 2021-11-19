package fomantic;

import js.jquery.JQuery;
using tink.pure.List;

import tink.domspec.ClassName;
import js.jquery.Helper.*;

using tink.CoreApi;
using tink.state.Promised;

@:enum abstract DropdownMatch(String) {
	var both;
	var value;
	var text;
}

@:enum abstract DropdownPlaceholder(String) {
	var auto;
	var value;
	var nope = "false"; // false is not a possible value...
}

@:enum abstract DropdownAction(String) {
	var activate;
	var select;
	var combo;
	var noting;
	var hide;
}


@:structInit
class NamedSel<T>{

public final name:String;
public final value:T;
public final selected:Bool;

  public inline function new(name, value, ?selected=false) {
    this.name = name;
	this.value = value;
	this.selected=selected;
  }
}

// TODO: support non-string values. (entries should contain a string ID to be used as data-value attr)
class Dropdown<T> extends coconut.ui.View {


	
	@:attr var className:ClassName = null;
	@:attr var name:String = null;
	//@:attr var value:T = @byDefault null;
	@:skipCheck
	@:attr var values:Array<NamedSel<T>> = @byDefault null;
	@:attr var defaultText:String = null;
	@:attr var entries:Promised<List<NamedSel<T>>> = @byDefault Loading;

	@:attr var onChange:T->Void = @byDefault (a)->{};
	//
	@:attr var clearable:Bool = false;
	@:attr var ignoreCase:Bool = false; //	eNew in 2.2.13	Whether values with non matching cases should be treated as identical when adding them to a dropdown.
	@:attr var ignoreSearchCase:Bool = true; //	New in 2.8.0	Whether values with non matching cases should be treated as identical when filtering the items.
	@:attr var allowReselection:Bool = false; //		When set to true will fire onChange even when the value a user select matches the currently selected value.
	@:attr var allowAdditions:Bool = false;

	@:attr var hideAdditions:Bool = true; //	If disabled user additions will appear in the dropdown/’s menu using a specially formatted selection item formatted by templates.addition.
	@:attr var action:DropdownAction = activate;
	/*auto Sets a default action to occur. (See usage guide)
		activate (default)
		Updates dropdown text with selected value, sets element state to active, updates any hidden fields if available
		select
		activates menu and updates input fields, but does not change current text
		combo
		changes text of previous sibling element
		nothing
		no action occurs
		hide
		Dropdown menu is hidden
		function(text, value, element){}
		custom function is executed with values specified in callback
	 */
	@:attr var minCharacters:Int = 0; //	The minimum characters for a search to begin showing results
	@:attr var match:DropdownMatch = both;
	/*	both	When using search selection specifies how to match values.
		both
		Matches against text and value
		value
		matches against value only
		text
		matches against text only
	 */
	@:attr var selectOnKeydown:Bool = true; //	Whether dropdown should select new option when using keyboard shortcuts. Setting to false will require enter or left click to confirm a choice.
	@:attr var forceSelection:Bool = true; //	Whether search selection will force currently selected choice when element is blurred.
	@:attr var allowCategorySelection:Bool = false; //	Whether menu items with sub-menus (categories) should be selectable
	@:attr var placeholder:DropdownPlaceholder = auto;
	/*	auto	
		auto
		Convert option with "" (blank string) value to placeholder text
		value
		Sets string value to placeholder text, leaves "" value
		false
		Leaves "" value as a selectable option
	 */
	@:attr var ignoreDiacritics:Bool = false; //	When activated, searches will also match results for base diacritic letters. For example when searching for 'a', it will also match 'á' or 'â' or 'å' and so on... It will also ignore diacritics for the searchterm, so if searching for 'ó', it will match 'ó', but also 'o', 'ô' or 'õ' and so on...New in 2.7.2Not available in IE

	///Multiple Select Settings
	@:attr var multiple:Bool = @byDefault false;
	@:attr var useLabels:Bool = true; //	Whether multiselect should use labels. Must be set to true when allowAdditions is true
	@:attr var maxSelections:Int = 0; //	When set to a number, sets the maximum number of selections
	@:attr var glyphWidth:Float = 1.0714; //	Maximum glyph width, used to calculate search size. This is usually size of a "W" in your font in em
	@:skipCheck
	@:attr var label:{transition:String, duration:Int, variation:Bool} = {
		transition: 'horizontal flip',
		duration: 200,
		variation: false
	};

	/*	
		label: {
		transition : 'horizontal flip',
		duration   : 200,
		variation  : false
	}*/
	// additional settings //todo
	// callBacks
	@:attr var onAdd:T->String->T->Void = @byDefault (a, b, c) -> {};
	@:attr var onRemove:(removedValue:T, removedText:String, removedChoice:T) -> Void = (a, b, c) -> {};
	//not implemented
	@:attr @:optional var onLabelCreate:(value:T, text:String) -> JQuery =
	(a, b) -> 
	{ var t=J("<label><i class='close'></i></label>");
		t.addClass("ui label");
		t.text(b);
		return  t;
	};
	@:attr var onLabelRemove:(value:T) -> Bool = (a) -> true;
	@:attr var onLabelSelect:(selectedLabels:Array<JQuery>) -> Void = @byDefault (a) -> {};
	@:attr var onNoResults:(searchValue:T) -> Void = (a) -> {};
	@:attr var onShow:Void->Bool = () -> true;
	@:attr var onHide:Void->Bool = () -> true;
	@:attr var onSearch:Void->Bool = () -> true;

	function render()
		'
		<div ref=${setup} class=${getClassName()} >
			<input type="hidden" name=${name} value=${Std.string(value)}/>
			<i class="dropdown icon"></i>
			<div class="default text">${defaultText}</div>
			<div class="menu">
				<switch ${entries}>
					<case ${Done(data)}>
						<for ${entry in data}>
							<div class="item" data-value=${Std.string(entry.value)}>${entry.name.Log('name')}</div>
						</for>
					<case ${Loading}>
					
					<case ${Failed(f)}>
					
				</switch>
			</div>
		</div>
	';

	inline function getClassName() {
		var t = className.add('ui selection dropdown');
		if (multiple)
			t = t.add("multiple normal");
		return t.add(switch entries {
			case Loading: 'loading';
			case Failed(_): 'error';
			case Done(_): null;
		});
	}


	 function shouldViewUpdate(){
		if (values == null )
			untyped element.dropdown('clear');
		return true;
	 }
	 var element:js.jquery.JQuery;
	function setup(e) {
		trace( "setup" + values);
		
		var vv= 
		try
			values.map(n->{name:n.name,value:n.value,selected:n.selected}) 
		catch(msg:Dynamic)
			null;
			
		
		element= (J(e));
		untyped element.dropdown({
			values:vv,
			onChange: function(value, text) if (onChange != null)
				onChange(value),
			clearable: clearable,
			ignoreCase: ignoreCase,
			ignoreSearchCase: ignoreSearchCase,
			allowReselection: allowReselection,
			allowAdditions: allowAdditions,
			minCharacters: minCharacters,
			match: match,
			selectOnKeydown: selectOnKeydown,
			forceSelection: forceSelection,
			allowCategorySelection: allowCategorySelection,
			placeholder: placeholder,
			useLabels: useLabels,
			maxSelections: maxSelections,
			glyphWidth: glyphWidth,

			label: label,
			className: {
				label: 'ui label'
			},
			onAdd: onAdd,
			onRemove: onRemove,
			//onLabelCreate:  onLabelCreate,
			onLabelRemove: onLabelRemove,
			onNoResults: onNoResults,
			onLabelSelect: onLabelSelect,
			onShow: onShow,
			onHide: onHide,
			onSearch: onSearch,
			
		});


		if (values == null )
			untyped element.dropdown('clear');
	}
}
