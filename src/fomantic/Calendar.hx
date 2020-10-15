package fomantic;
import js.jquery.Helper.*;
import Date as HxDate;
using DateTools;
import tink.pure.List;
// borowwed from kevinREsol :)
class Calendar extends coconut.ui.View {
    
	@:attr var type:CalendarType = Date;
	@:attr var inlined:Bool = false;
	@:attr var onChange:HxDate->Void = d->{};
	@:attr var formatDate:HxDate->String = function(date:Date) return date.format('%F');
	@:attr var formatTime:HxDate->String = function(date:Date) return date.format('%H:%M');
	@:attr var value:Date = HxDate.now();

	@:skipCheck
	@:attr var eventDates:List<{date:Date,message:String,classe:String}>=new List();
	
	function render() '
		<div ref=${setup} class="ui calendar">
			<if ${!inlined}>
				<div class="ui input left icon">
					<div class="ui popup calendar"/>
					<i class="calendar icon"/>
					<input type="text" value={value.toString()} />
				</div>
			</if>
		</div>
	';
	
	
	function setup(e:js.html.Element) {
		trace("setup" +e);
		var p=this.eventDates.map(n->
			{
			Reflect.setField(n,"class",n.classe);
			n;
			} 
			).toArray();
		
		 untyped (J(e)).calendar({
			type: type,
			'inline': inlined,
			parser: {
				date: function (text) return text == '' ? null : untyped __js__('new Date({0})', text),
			},
			//eventDates:this.eventDates.map(n->{Reflect.setField(n,"classe",n.classe);n;}),
			eventDates:p,
			formatter: {
				time: _formatTime,
				date: _formatDate,
				cell: function(cell:Array<Dynamic>, date:HxDate, options) {
					var c:Dynamic = cell[0];
					c.style.cursor = 'pointer';
					
					if(!options.disabled) {
						switch date.getDay() {
							case 0: J(c).addClass('sunday');
							case 1: J(c).addClass('monday');
							case 2: J(c).addClass('tuesday');
							case 3: J(c).addClass('wednesday');
							case 4: J(c).addClass('thursday');
							case 5: J(c).addClass('friday');
							case 6: J(c).addClass('saturday');
						}
					}
					return cell;
				}
			},
			onChange: function(date:Date, text, mode) {
				if(date == null) return;
				var date = switch type {
					case DateTime: date;
					case Date: new HxDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
					case Time: new HxDate(1970, 0, 1, date.getHours(), date.getMinutes(), date.getSeconds());
					case Month: new HxDate(date.getFullYear(), date.getMonth(), 0, 0, 0, 0);
					case Year: new HxDate(date.getFullYear(), 0, 0, 0, 0, 0);
				}
				onChange(date);
			}
		});
	}
	
	function _formatTime(date:HxDate) return date == null ? '' : formatTime(date);
	function _formatDate(date:HxDate) return date == null ? '' : formatDate(date);
}

@:enum abstract CalendarType(String) to String {
	var DateTime = 'datetime';
	var Date = 'date';
	var Time = 'time';
	var Month = 'month';
	var Year = 'year';
}