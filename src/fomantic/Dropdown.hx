package fomantic;

using tink.pure.List;
import tink.domspec.ClassName;
import js.jquery.Helper.*;

using tink.CoreApi;
using tink.state.Promised;

@:enum abstract DropdownMatch(String){
	var both;
	var value;
	var text;
}
@:enum abstract DropdownPlaceholder(String){
	var auto;
	var value;
	var nope="false"; //false is not a possible value...
}
@:enum abstract DropdownAction(String){
	var activate;
	var select;
	var combo;
	var noting;
	var hide;
}

// TODO: support non-string values. (entries should contain a string ID to be used as data-value attr)
class Dropdown<T> extends coconut.ui.View {
	@:attr var className:ClassName = null;
	@:attr var name:String = null;
	@:attr var value:T = null;
	@:attr var defaultText:String = null;
	@:attr var entries:Promised<List<Named<T>>> = Done( [new Named("default",null) ].fromArray() );
	
	@:attr var onChange:T->Void = null;
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
	@:attr var match:DropdownMatch=both;
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
	@:attr var placeholder:DropdownPlaceholder=auto;
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
	@:attr var useLabels:Bool = true; //	Whether multiselect should use labels. Must be set to true when allowAdditions is true
	@:attr var maxSelections:Bool = false; //	When set to a number, sets the maximum number of selections
	@:attr var glyphWidth:Float = 1.0714; //	Maximum glyph width, used to calculate search size. This is usually size of a "W" in your font in em
	///@:attr var label:{?transition:String,?duration:Int,?variation:Bool};
	/*	
		label: {
		transition : 'horizontal flip',
		duration   : 200,
		variation  : false
	}*/


	// additional settings //todo



	// callBacks
	@:attr var onAdd:T->String->?T->Void = (null,null)->{};
	@:attr var onRemove:(removedValue:T, removedText:String, ?removedChoice:T) -> Void=null;
	@:attr var onLabelCreate:(value:T, text:String) -> Void=null;
	@:attr var onLabelRemove:(value:T) -> Bool=null;
	@:attr var onLabelSelect:(?selectedLabels:Array<String>) -> Void=null;
	@:attr var onNoResults:(searchValue:T) -> Void=null;
	@:attr var onShow:Void->Bool=null;
	@:attr var onHide:Void->Bool=null;
	@:attr var onSearch:Void->Bool=null;

	function render()
		'
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
		var t = className.add('ui selection dropdown');
		return t.add(switch entries {
			case Loading: 'loading';
			case Failed(_): 'error';
			case Done(_): null;
		});
	}

	function setup(e) {
		untyped (J(e)).dropdown({
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
			onAdd: onAdd,
			onRemove: onRemove,
			onLabelCreate: onLabelCreate,
			onLabelRemove: onLabelRemove,
			onLabelSelect: onLabelSelect,
			onNoResults: onNoResults,
			onShow: onShow,
			onHide: onHide,
			onSearch: onSearch,
		});
		if (value == null)
			untyped (J(e)).dropdown('clear');
	}
}
