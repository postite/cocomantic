(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var DateTools = function() { };
DateTools.__name__ = true;
DateTools.__format_get = function(d,e) {
	switch(e) {
	case "%":
		return "%";
	case "A":
		return DateTools.DAY_NAMES[d.getDay()];
	case "B":
		return DateTools.MONTH_NAMES[d.getMonth()];
	case "C":
		return StringTools.lpad(Std.string(d.getFullYear() / 100 | 0),"0",2);
	case "D":
		return DateTools.__format(d,"%m/%d/%y");
	case "F":
		return DateTools.__format(d,"%Y-%m-%d");
	case "I":case "l":
		var hour = d.getHours() % 12;
		return StringTools.lpad(Std.string(hour == 0 ? 12 : hour),e == "I" ? "0" : " ",2);
	case "M":
		return StringTools.lpad(Std.string(d.getMinutes()),"0",2);
	case "R":
		return DateTools.__format(d,"%H:%M");
	case "S":
		return StringTools.lpad(Std.string(d.getSeconds()),"0",2);
	case "T":
		return DateTools.__format(d,"%H:%M:%S");
	case "Y":
		return Std.string(d.getFullYear());
	case "a":
		return DateTools.DAY_SHORT_NAMES[d.getDay()];
	case "b":case "h":
		return DateTools.MONTH_SHORT_NAMES[d.getMonth()];
	case "d":
		return StringTools.lpad(Std.string(d.getDate()),"0",2);
	case "e":
		return Std.string(d.getDate());
	case "H":case "k":
		return StringTools.lpad(Std.string(d.getHours()),e == "H" ? "0" : " ",2);
	case "m":
		return StringTools.lpad(Std.string(d.getMonth() + 1),"0",2);
	case "n":
		return "\n";
	case "p":
		if(d.getHours() > 11) {
			return "PM";
		} else {
			return "AM";
		}
		break;
	case "r":
		return DateTools.__format(d,"%I:%M:%S %p");
	case "s":
		return Std.string(d.getTime() / 1000 | 0);
	case "t":
		return "\t";
	case "u":
		var t = d.getDay();
		if(t == 0) {
			return "7";
		} else if(t == null) {
			return "null";
		} else {
			return "" + t;
		}
		break;
	case "w":
		return Std.string(d.getDay());
	case "y":
		return StringTools.lpad(Std.string(d.getFullYear() % 100),"0",2);
	default:
		throw new haxe_exceptions_NotImplementedException("Date.format %" + e + "- not implemented yet.",null,{ fileName : "DateTools.hx", lineNumber : 101, className : "DateTools", methodName : "__format_get"});
	}
};
DateTools.__format = function(d,f) {
	var r_b = "";
	var p = 0;
	while(true) {
		var np = f.indexOf("%",p);
		if(np < 0) {
			break;
		}
		var len = np - p;
		r_b += len == null ? HxOverrides.substr(f,p,null) : HxOverrides.substr(f,p,len);
		r_b += Std.string(DateTools.__format_get(d,HxOverrides.substr(f,np + 1,1)));
		p = np + 2;
	}
	var len = f.length - p;
	r_b += len == null ? HxOverrides.substr(f,p,null) : HxOverrides.substr(f,p,len);
	return r_b;
};
DateTools.format = function(d,f) {
	return DateTools.__format(d,f);
};
var Debug = function() { };
Debug.__name__ = true;
Debug.Log = function(val,msg,pos) {
	if(msg == null) {
		msg = "";
	}
	haxe_Log.trace("" + pos.className + " " + pos.lineNumber + " " + msg,{ fileName : "Debug.hx", lineNumber : 3, className : "Debug", methodName : "Log", customParams : [val]});
	return val;
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10 ? "0" + m : "" + m) + "-" + (d < 10 ? "0" + d : "" + d) + " " + (h < 10 ? "0" + h : "" + h) + ":" + (mi < 10 ? "0" + mi : "" + mi) + ":" + (s < 10 ? "0" + s : "" + s);
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.now = function() {
	return Date.now();
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
var Simple = function() { };
Simple.__name__ = true;
Simple.onLabelSelect = function(a) {
	haxe_Log.trace("onSelect" + Std.string(a),{ fileName : "src/Simple.hx", lineNumber : 17, className : "Simple", methodName : "onLabelSelect"});
};
Simple.main = function() {
	haxe_Log.trace("Hello, world!",{ fileName : "src/Simple.hx", lineNumber : 21, className : "Simple", methodName : "main"});
	var entries = tink_state_PromisedWith.Done(tink_pure_List.fromArray([new tink_core_NamedWith("one","un"),new tink_core_NamedWith("two","deux"),new tink_core_NamedWith("troix","three")]));
	var onAdd = function(a,b,c) {
		haxe_Log.trace("onAdd" + a,{ fileName : "src/Simple.hx", lineNumber : 30, className : "Simple", methodName : "main"});
	};
	$(window.document).ready(function(e) {
		var tmp = window.document.body.appendChild(window.document.createElement("div"));
		var tmp1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return entries;
		}),null,null);
		var tmp2 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return Simple.onLabelSelect;
		}),null,null);
		var tmp3 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return onAdd;
		}),null,null);
		coconut_vdom_Renderer.mountInto(tmp,fomantic_Dropdown.fromHxx({ },{ entries : tmp1, onLabelSelect : tmp2, onAdd : tmp3, useLabels : new tink_state__$Observable_ConstObservable(true,null), maxSelections : new tink_state__$Observable_ConstObservable(2,null), multiple : new tink_state__$Observable_ConstObservable(true,null)}));
	});
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = x.charCodeAt(i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var nc = x.charCodeAt(i + 1);
				var v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return s.lastIndexOf(start,0) == 0;
	} else {
		return false;
	}
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	var buf_b = "";
	l -= s.length;
	while(buf_b.length < l) buf_b += c == null ? "null" : "" + c;
	buf_b += s == null ? "null" : "" + s;
	return buf_b;
};
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	var buf_b = "";
	buf_b = "" + (s == null ? "null" : "" + s);
	while(buf_b.length < l) buf_b += c == null ? "null" : "" + c;
	return buf_b;
};
var coconut_Ui = function() { };
coconut_Ui.__name__ = true;
var coconut_data_Model = function() { };
coconut_data_Model.__name__ = true;
coconut_data_Model.__isInterface__ = true;
var coconut_data_Value = {};
coconut_data_Value.getValue = function(this1) {
	return tink_state_Observable.get_value(this1);
};
coconut_data_Value.or = function(this1,fallback) {
	if(this1 == null) {
		return fallback;
	} else {
		return this1;
	}
};
var coconut_data_helpers_Annex = function(target) {
	this.target = target;
	this.registry = new haxe_ds_ObjectMap();
};
coconut_data_helpers_Annex.__name__ = true;
coconut_data_helpers_Annex.prototype = {
	__doGet: function(cls,fn) {
		var _g = this.registry.h[coconut_data_helpers__$Annex_ClassKey.fromClass(cls).__id__];
		if(_g == null) {
			var this1 = this.registry;
			var k = coconut_data_helpers__$Annex_ClassKey.fromClass(cls);
			var v = fn(this.target);
			this1.set(k,v);
			return v;
		} else {
			var v = _g;
			return v;
		}
	}
	,__class__: coconut_data_helpers_Annex
};
var coconut_data_helpers__$Annex_ClassKey = {};
coconut_data_helpers__$Annex_ClassKey.fromClass = function(c) {
	return c;
};
var coconut_data_macros_Helper = function() { };
coconut_data_macros_Helper.__name__ = true;
var coconut_diffing_Applicator = function() { };
coconut_diffing_Applicator.__name__ = true;
coconut_diffing_Applicator.__isInterface__ = true;
coconut_diffing_Applicator.prototype = {
	__class__: coconut_diffing_Applicator
};
var coconut_diffing_Cursor = function(applicator) {
	this.applicator = applicator;
};
coconut_diffing_Cursor.__name__ = true;
coconut_diffing_Cursor.prototype = {
	current: function() {
		return null;
	}
	,__class__: coconut_diffing_Cursor
};
var coconut_diffing_Factory = function() {
	var this1 = coconut_diffing_TypeId.idCounter++;
	this.type = this1;
};
coconut_diffing_Factory.__name__ = true;
coconut_diffing_Factory.prototype = {
	adopt: function(target) {
		return null;
	}
	,hydrate: function(target,data) {
	}
	,vnode: function(data,key,ref,children) {
		return new coconut_diffing_internal_VNative(this,data,key,ref,children);
	}
	,__class__: coconut_diffing_Factory
};
var coconut_diffing_Properties = function(construct,apply) {
	coconut_diffing_Factory.call(this);
	this.construct = construct;
	this.apply = apply;
};
coconut_diffing_Properties.__name__ = true;
coconut_diffing_Properties.set = function(target,nu,old,apply) {
	if(nu == null) {
		if(old != null) {
			var _g = 0;
			var _g1 = Reflect.fields(old);
			while(_g < _g1.length) {
				var k = _g1[_g];
				++_g;
				apply(target,k,null,null);
			}
		}
	} else if(old == null) {
		var _g_keys = Reflect.fields(nu);
		var _g_index = 0;
		while(_g_index < _g_keys.length) {
			var key = _g_keys[_g_index++];
			var _g1_value = nu[key];
			apply(target,key,_g1_value,null);
		}
	} else {
		var _g_keys = Reflect.fields(nu);
		var _g_index = 0;
		while(_g_index < _g_keys.length) {
			var key = _g_keys[_g_index++];
			var _g1_value = nu[key];
			var old1 = old[key];
			if(_g1_value != old1) {
				apply(target,key,_g1_value,old1);
			}
		}
		var _g = 0;
		var _g1 = Reflect.fields(old);
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			if(!Object.prototype.hasOwnProperty.call(nu,k)) {
				apply(target,k,null,null);
			}
		}
	}
};
coconut_diffing_Properties.__super__ = coconut_diffing_Factory;
coconut_diffing_Properties.prototype = $extend(coconut_diffing_Factory.prototype,{
	create: function(data) {
		var ret = this.construct();
		this.update(ret,data,null);
		return ret;
	}
	,update: function(target,next,prev) {
		coconut_diffing_Properties.set(target,next,prev,this.apply);
	}
	,__class__: coconut_diffing_Properties
});
var coconut_diffing_internal_Child = function() { };
coconut_diffing_internal_Child.__name__ = true;
coconut_diffing_internal_Child.__isInterface__ = true;
coconut_diffing_internal_Child.prototype = {
	__class__: coconut_diffing_internal_Child
};
var coconut_diffing_internal_Parent = function(context,parent) {
	this.pendingUpdates = [];
	this.context = context;
	this.parent = parent;
};
coconut_diffing_internal_Parent.__name__ = true;
coconut_diffing_internal_Parent.__interfaces__ = [coconut_diffing_internal_Child];
coconut_diffing_internal_Parent.withLater = function(f) {
	var tasks = [];
	var ret = f(function(task) {
		if(task != null) {
			tasks.push(task);
		}
	});
	var _g = 0;
	while(_g < tasks.length) {
		var t = tasks[_g];
		++_g;
		t();
	}
	return ret;
};
coconut_diffing_internal_Parent.prototype = {
	scheduleUpdate: function(child) {
		if(this.pendingUpdates.push(child) == 1) {
			this.invalidateParent();
		}
	}
	,performUpdate: function(later) {
		if(this.pendingUpdates.length > 0) {
			var _g = 0;
			var _g1 = this.pendingUpdates.splice(0,this.pendingUpdates.length);
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				c.performUpdate(later);
			}
		}
	}
	,invalidateParent: function() {
		var _gthis = this;
		var _g = this.parent;
		if(_g == null) {
			tink_state_Observable.scheduler.schedule(tink_state__$Scheduler_JustOnce.call(function() {
				coconut_diffing_internal_Parent.withLater($bind(_gthis,_gthis.performUpdate));
			}));
		} else {
			_g.scheduleUpdate(this);
		}
	}
	,__class__: coconut_diffing_internal_Parent
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
haxe_IMap.prototype = {
	__class__: haxe_IMap
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
haxe_ds_ObjectMap.__name__ = true;
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__;
		if(id == null) {
			id = (key.__id__ = $global.$haxeUID++);
		}
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) {
			return false;
		}
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return new haxe_iterators_ArrayIterator(a);
	}
	,__class__: haxe_ds_ObjectMap
};
var coconut_diffing_Root = function(parent,applicator,content,hydration) {
	if(hydration == null) {
		hydration = 0;
	}
	var _gthis = this;
	coconut_diffing_internal_Parent.call(this,new coconut_ui_internal_ImplicitContext());
	var rendered = coconut_diffing_internal_Parent.withLater(function(later) {
		return new coconut_diffing_internal_RCell(_gthis,content,hydration == 2 ? applicator.siblings(parent) : applicator.children(parent),later,hydration != 0);
	});
	this.rendered = rendered;
};
coconut_diffing_Root.__name__ = true;
coconut_diffing_Root.fromNative = function(parent,applicator) {
	var _g = coconut_diffing_Root.byParent.h[parent.__id__];
	var tmp;
	if(_g == null) {
		var v = new coconut_diffing_Root(parent,applicator);
		coconut_diffing_Root.byParent.set(parent,v);
		tmp = v;
	} else {
		tmp = _g;
	}
	return tmp;
};
coconut_diffing_Root.__super__ = coconut_diffing_internal_Parent;
coconut_diffing_Root.prototype = $extend(coconut_diffing_internal_Parent.prototype,{
	render: function(v) {
		var _gthis = this;
		coconut_diffing_internal_Parent.withLater(function(later) {
			return _gthis.rendered.update(v,null,later);
		});
	}
	,__class__: coconut_diffing_Root
});
var coconut_diffing_TypeId = {};
coconut_diffing_TypeId._new = function() {
	var this1 = coconut_diffing_TypeId.idCounter++;
	return this1;
};
var coconut_diffing_VNode = {};
coconut_diffing_VNode.embed = function(n) {
	return new coconut_diffing_internal_VNativeInst(n);
};
coconut_diffing_VNode.many = function(c) {
	return new coconut_diffing_internal_VMany(c);
};
var coconut_diffing_Widget = function(rendered,mounted,updated,unmounting) {
	this._coco_vStructure = rendered;
	this._coco_viewMounted = mounted;
	this._coco_viewUpdated = updated;
	this._coco_viewUnmounting = unmounting;
};
coconut_diffing_Widget.__name__ = true;
coconut_diffing_Widget.getAllNative = function(w) {
	var _g = w._coco_lifeCycle;
	if(_g == null) {
		return [];
	} else {
		var ret = [];
		_g.forEach(function(n) {
			ret.push(n);
		});
		return ret;
	}
};
coconut_diffing_Widget.prototype = {
	__class__: coconut_diffing_Widget
};
var coconut_diffing_internal_Cast = function() { };
coconut_diffing_internal_Cast.__name__ = true;
coconut_diffing_internal_Cast.down = function(v,c) {
	if(js_Boot.__instanceof(v,c)) {
		return v;
	} else {
		throw haxe_Exception.thrown("invalid cast");
	}
};
var coconut_diffing_internal_KeyMap = {};
coconut_diffing_internal_KeyMap._new = function() {
	var this1 = new Map();
	var this2 = this1;
	return this2;
};
coconut_diffing_internal_KeyMap.get = function(this1,key) {
	var _g = this1.get(key);
	if(_g == null) {
		return null;
	} else {
		this1.delete(key);
		return _g;
	}
};
coconut_diffing_internal_KeyMap.exists = function(this1,key) {
	return this1.has(key);
};
coconut_diffing_internal_KeyMap.set = function(this1,key,value) {
	this1.set(key,value);
};
coconut_diffing_internal_KeyMap.each = function(this1,f) {
	this1.forEach(function(v,_,_1) {
		f(v);
	});
};
coconut_diffing_internal_KeyMap.eachEntry = function(this1,f) {
	this1.forEach(function(v,k,_) {
		f(k,v);
	});
};
var coconut_diffing_internal_RCell = function(parent,virtual,cursor,later,hydrate) {
	this.empty = new coconut_diffing_internal_VEmpty();
	this.parent = parent;
	if(virtual == null) {
		virtual = this.empty;
	}
	this.virtual = virtual;
	this.rendered = virtual.render(parent,cursor,later,hydrate);
	this.applicator = cursor.applicator;
};
coconut_diffing_internal_RCell.__name__ = true;
coconut_diffing_internal_RCell.prototype = {
	reiterate: function(applicator) {
		return this.rendered.reiterate(applicator);
	}
	,update: function(virtual,cursor,later) {
		var cursor1 = cursor == null ? this.rendered.reiterate(this.applicator) : cursor;
		var unchanged = virtual == this.virtual;
		if(unchanged) {
			this.rendered.justInsert(cursor1,later);
		} else {
			if(virtual == null) {
				virtual = this.empty;
			}
			var last = this.virtual;
			this.virtual = virtual;
			if(last.type == virtual.type) {
				this.rendered.update(virtual,cursor1,later);
			} else {
				var old = this.rendered;
				this.rendered = virtual.render(this.parent,cursor1,later,false);
				cursor1.delete(old.destroy(this.applicator));
			}
		}
		return !unchanged;
	}
	,destroy: function(applicator) {
		return this.rendered.destroy(applicator);
	}
	,forEach: function(f) {
		this.rendered.forEach(f);
	}
	,__class__: coconut_diffing_internal_RCell
};
var coconut_diffing_internal_RChildren = function(parent,children,cursor,later,hydrate) {
	this.order = [];
	this.counts = new haxe_ds_IntMap();
	this.byType = new haxe_ds_IntMap();
	this.parent = parent;
	var _g = 0;
	while(_g < (children == null ? 0 : children.length)) {
		var c = children == null ? null : children[_g];
		++_g;
		if(c != null) {
			var r = c.render(parent,cursor,later,hydrate);
			var _g1 = c.key;
			var _g2 = this.byType.h[r.type];
			if(_g1 == null) {
				if(_g2 == null) {
					var v = [r];
					this.byType.h[r.type] = v;
				} else {
					_g2.push(r);
				}
			} else {
				var k = _g1;
				this.setKey(k,r);
			}
			this.order.push(r);
		}
	}
};
coconut_diffing_internal_RChildren.__name__ = true;
coconut_diffing_internal_RChildren.prototype = {
	setKey: function(k,v) {
		var m;
		var _g = this.byKey;
		if(_g == null) {
			var this1 = new Map();
			var this2 = this1;
			m = this.byKey = this2;
		} else {
			m = _g;
		}
		m.set(k,v);
		return v;
	}
	,update: function(children,cursor,later) {
		var k = this.byType.keys();
		while(k.hasNext()) {
			var k1 = k.next();
			this.counts.h[k1] = 0;
		}
		var oldKeyed = this.byKey;
		this.byKey = null;
		var deleteCount = 0;
		var applicator = cursor.applicator;
		var index = 0;
		var _g = 0;
		while(_g < (children == null ? 0 : children.length)) {
			var v = children == null ? null : children[_g];
			++_g;
			if(v != null) {
				var tmp = this.order;
				var tmp1 = index++;
				var _g1 = v.key;
				var _g2 = this.byType.h[v.type];
				var tmp2;
				if(_g1 == null) {
					if(_g2 == null) {
						var v1 = [];
						this.byType.h[v.type] = v1;
						this.counts.h[v.type] = 0;
						var tmp3 = this.byType.h[v.type];
						var tmp4 = v.type;
						var tmp5 = this.counts.h[tmp4];
						var v2 = tmp5 + 1;
						this.counts.h[tmp4] = v2;
						tmp2 = tmp3[tmp5] = v.render(this.parent,cursor,later,false);
					} else {
						var _g3 = _g2[this.counts.h[v.type]];
						if(_g3 == null) {
							var tmp6 = this.byType.h[v.type];
							var tmp7 = v.type;
							var tmp8 = this.counts.h[tmp7];
							var v3 = tmp8 + 1;
							this.counts.h[tmp7] = v3;
							tmp2 = tmp6[tmp8] = v.render(this.parent,cursor,later,false);
						} else {
							var tmp9 = v.type;
							var v4 = this.counts.h[tmp9] + 1;
							this.counts.h[tmp9] = v4;
							_g3.update(v,cursor,later);
							tmp2 = _g3;
						}
					}
				} else {
					var k = _g1;
					var _g4;
					if(oldKeyed == null) {
						_g4 = null;
					} else {
						var _g5 = oldKeyed.get(k);
						var _g6;
						if(_g5 == null) {
							_g6 = null;
						} else {
							oldKeyed.delete(k);
							_g6 = _g5;
						}
						_g4 = _g6;
					}
					if(_g4 == null) {
						tmp2 = this.setKey(k,v.render(this.parent,cursor,later,false));
					} else {
						var old = _g4;
						if(old.type == v.type) {
							old.update(v,cursor,later);
							tmp2 = this.setKey(k,old);
						} else {
							deleteCount += old.destroy(applicator);
							tmp2 = this.setKey(k,v.render(this.parent,cursor,later,false));
						}
					}
				}
				tmp[tmp1] = tmp2;
			}
		}
		this.order.length = index;
		var _g = new haxe_iterators_MapKeyValueIterator(this.counts);
		while(_g.hasNext()) {
			var _g1 = _g.next();
			var id = _g1.key;
			var count = _g1.value;
			var _g2 = this.byType.h[id];
			if(_g2.length - count != 0) {
				var _g3 = count;
				var _g4 = _g2.length;
				while(_g3 < _g4) {
					var i = _g3++;
					deleteCount += _g2[i].destroy(applicator);
				}
				_g2.length = count;
			}
		}
		if(oldKeyed != null) {
			var _g = this.byKey;
			if(_g == null) {
				var f = function(r) {
					deleteCount += r.destroy(applicator);
				};
				oldKeyed.forEach(function(v,_,_1) {
					f(v);
				});
			} else {
				var m = _g;
				var f1 = function(k,r) {
					if(!m.has(k)) {
						deleteCount += r.destroy(applicator);
					}
				};
				oldKeyed.forEach(function(v,k,_) {
					f1(k,v);
				});
			}
		}
		cursor.delete(deleteCount);
	}
	,justInsert: function(cursor,later) {
		var _g = 0;
		var _g1 = this.order;
		while(_g < _g1.length) {
			var r = _g1[_g];
			++_g;
			r.justInsert(cursor,later);
		}
	}
	,destroy: function(applicator) {
		var ret = 0;
		var _g = 0;
		var _g1 = this.order;
		while(_g < _g1.length) {
			var r = _g1[_g];
			++_g;
			ret += r.destroy(applicator);
		}
		return ret;
	}
	,forEach: function(f) {
		var _g = 0;
		var _g1 = this.order;
		while(_g < _g1.length) {
			var r = _g1[_g];
			++_g;
			r.forEach(f);
		}
	}
	,__class__: coconut_diffing_internal_RChildren
};
var coconut_diffing_internal_RNode = function() { };
coconut_diffing_internal_RNode.__name__ = true;
coconut_diffing_internal_RNode.__isInterface__ = true;
coconut_diffing_internal_RNode.prototype = {
	__class__: coconut_diffing_internal_RNode
};
var coconut_diffing_internal_VNode = function() { };
coconut_diffing_internal_VNode.__name__ = true;
coconut_diffing_internal_VNode.__isInterface__ = true;
coconut_diffing_internal_VNode.prototype = {
	__class__: coconut_diffing_internal_VNode
};
var coconut_diffing_internal_VEmpty = function() {
	this.isSingular = true;
	this.key = null;
	this.type = coconut_diffing_internal_VEmpty.TYPE;
};
coconut_diffing_internal_VEmpty.__name__ = true;
coconut_diffing_internal_VEmpty.__interfaces__ = [coconut_diffing_internal_VNode];
coconut_diffing_internal_VEmpty.prototype = {
	render: function(_,cursor,_1,hydrate) {
		return new coconut_diffing_internal_REmpty(cursor);
	}
	,__class__: coconut_diffing_internal_VEmpty
};
var coconut_diffing_internal_REmpty = function(cursor) {
	this.type = coconut_diffing_internal_VEmpty.TYPE;
	cursor.insert(this.marker = cursor.applicator.createMarker());
};
coconut_diffing_internal_REmpty.__name__ = true;
coconut_diffing_internal_REmpty.__interfaces__ = [coconut_diffing_internal_RNode];
coconut_diffing_internal_REmpty.prototype = {
	reiterate: function(applicator) {
		return applicator.siblings(this.marker);
	}
	,update: function(next,cursor,later) {
		cursor.insert(this.marker);
	}
	,justInsert: function(cursor,_) {
		cursor.insert(this.marker);
	}
	,destroy: function(applicator) {
		applicator.releaseMarker(this.marker);
		return 1;
	}
	,forEach: function(f) {
		f(this.marker);
	}
	,__class__: coconut_diffing_internal_REmpty
};
var coconut_diffing_internal_VMany = function(children) {
	this.isSingular = false;
	this.key = null;
	this.type = coconut_diffing_internal_VMany.TYPE;
	this.children = children;
};
coconut_diffing_internal_VMany.__name__ = true;
coconut_diffing_internal_VMany.__interfaces__ = [coconut_diffing_internal_VNode];
coconut_diffing_internal_VMany.prototype = {
	render: function(parent,cursor,later,hydrate) {
		return new coconut_diffing_internal_RMany(parent,this.children,cursor,later,hydrate);
	}
	,__class__: coconut_diffing_internal_VMany
};
var coconut_diffing_internal_RMany = function(parent,children,cursor,later,hydrate) {
	this.empty = [new coconut_diffing_internal_VEmpty()];
	this.type = coconut_diffing_internal_VMany.TYPE;
	this.children = new coconut_diffing_internal_RChildren(parent,this.ensure(children),cursor,later,hydrate);
};
coconut_diffing_internal_RMany.__name__ = true;
coconut_diffing_internal_RMany.__interfaces__ = [coconut_diffing_internal_RNode];
coconut_diffing_internal_RMany.prototype = {
	ensure: function(c) {
		var _g = 0;
		while(_g < (c == null ? 0 : c.length)) {
			var n = c == null ? null : c[_g];
			++_g;
			if(n != null) {
				return c;
			}
		}
		return this.empty;
	}
	,reiterate: function(applicator) {
		return this.children.order[0].reiterate(applicator);
	}
	,update: function(next,cursor,later) {
		var tmp = this.children;
		var v = next;
		var tmp1;
		if(((v) instanceof coconut_diffing_internal_VMany)) {
			tmp1 = v;
		} else {
			throw haxe_Exception.thrown("invalid cast");
		}
		tmp.update(this.ensure(tmp1.children),cursor,later);
	}
	,justInsert: function(cursor,later) {
		this.children.justInsert(cursor,later);
	}
	,destroy: function(applicator) {
		return this.children.destroy(applicator) + 1;
	}
	,forEach: function(f) {
		this.children.forEach(f);
	}
	,__class__: coconut_diffing_internal_RMany
};
var coconut_diffing_internal_VNativeBase = function(type,key,ref,children) {
	this.isSingular = true;
	this.type = type;
	this.key = key;
	this.ref = ref;
	this.children = children;
};
coconut_diffing_internal_VNativeBase.__name__ = true;
coconut_diffing_internal_VNativeBase.__interfaces__ = [coconut_diffing_internal_VNode];
coconut_diffing_internal_VNativeBase.prototype = {
	render: function(parent,cursor,later,hydrate) {
		return new coconut_diffing_internal_RNativeBase(this,coconut_diffing_internal_VNativeBase,parent,cursor,later,hydrate);
	}
	,create: function(previous) {
		throw haxe_Exception.thrown("abstract");
	}
	,__class__: coconut_diffing_internal_VNativeBase
};
var coconut_diffing_internal_VNative = function(factory,data,key,ref,children) {
	coconut_diffing_internal_VNativeBase.call(this,factory.type,key,ref,children);
	this.factory = factory;
	this.data = data;
};
coconut_diffing_internal_VNative.__name__ = true;
coconut_diffing_internal_VNative.__super__ = coconut_diffing_internal_VNativeBase;
coconut_diffing_internal_VNative.prototype = $extend(coconut_diffing_internal_VNativeBase.prototype,{
	render: function(parent,cursor,later,hydrate) {
		return new coconut_diffing_internal_RNative(this,coconut_diffing_internal_VNative,parent,cursor,later,hydrate);
	}
	,create: function(previous) {
		if(previous == null) {
			return this.factory.create(this.data);
		} else {
			var _g = this.factory.adopt(previous);
			if(_g == null) {
				return this.factory.create(this.data);
			} else {
				this.factory.hydrate(_g,this.data);
				return _g;
			}
		}
	}
	,__class__: coconut_diffing_internal_VNative
});
var coconut_diffing_internal_RNativeBase = function(v,cls,parent,cursor,later,hydrate) {
	this.last = v;
	this.cls = cls;
	this.type = v.type;
	this.native = v.create(hydrate ? cursor.current() : null);
	this.children = new coconut_diffing_internal_RChildren(parent,v.children,cursor.applicator.children(this.native),later,hydrate);
	cursor.insert(this.native);
	var _g = v.ref;
	if(_g != null) {
		_g(this.native);
	}
};
coconut_diffing_internal_RNativeBase.__name__ = true;
coconut_diffing_internal_RNativeBase.__interfaces__ = [coconut_diffing_internal_RNode];
coconut_diffing_internal_RNativeBase.prototype = {
	justInsert: function(cursor,_) {
		cursor.insert(this.native);
	}
	,updateNative: function(native,next,last,parent,later) {
		throw haxe_Exception.thrown("abstract");
	}
	,update: function(next,cursor,later) {
		var v = next;
		var next;
		if(js_Boot.__instanceof(v,this.cls)) {
			next = v;
		} else {
			throw haxe_Exception.thrown("invalid cast");
		}
		if(next == this.last) {
			this.justInsert(cursor,later);
			return;
		}
		this.updateNative(this.native,next,this.last,this.children.parent,later);
		var prev = this.last;
		this.last = next;
		this.children.update(next.children,cursor.applicator.children(this.native),later);
		cursor.insert(this.native);
		if(prev.ref != next.ref) {
			var _g = prev.ref;
			if(_g != null) {
				_g(null);
			}
			var _g = next.ref;
			if(_g != null) {
				_g(this.native);
			}
		}
	}
	,reiterate: function(applicator) {
		return applicator.siblings(this.native);
	}
	,destroy: function(applicator) {
		applicator.children(this.native).delete(this.children.destroy(applicator));
		var _g = this.last.ref;
		if(_g != null) {
			_g(null);
		}
		return 1;
	}
	,forEach: function(f) {
		f(this.native);
	}
	,__class__: coconut_diffing_internal_RNativeBase
};
var coconut_diffing_internal_RNative = function(v,cls,parent,cursor,later,hydrate) {
	coconut_diffing_internal_RNativeBase.call(this,v,cls,parent,cursor,later,hydrate);
};
coconut_diffing_internal_RNative.__name__ = true;
coconut_diffing_internal_RNative.__super__ = coconut_diffing_internal_RNativeBase;
coconut_diffing_internal_RNative.prototype = $extend(coconut_diffing_internal_RNativeBase.prototype,{
	updateNative: function(native,next,last,_,_1) {
		next.factory.update(native,next.data,last.data);
	}
	,__class__: coconut_diffing_internal_RNative
});
var coconut_diffing_internal_VNativeInst = function(native) {
	this.isSingular = true;
	this.type = coconut_diffing_internal_VNativeInst.TYPE;
	this.native = native;
	this.key = native;
};
coconut_diffing_internal_VNativeInst.__name__ = true;
coconut_diffing_internal_VNativeInst.__interfaces__ = [coconut_diffing_internal_RNode,coconut_diffing_internal_VNode];
coconut_diffing_internal_VNativeInst.prototype = {
	render: function(_,cursor,later,hydrate) {
		cursor.insert(this.native);
		return this;
	}
	,reiterate: function(applicator) {
		return applicator.siblings(this.native);
	}
	,justInsert: function(cursor,_) {
		cursor.insert(this.native);
	}
	,update: function(next,cursor,_) {
		cursor.insert(this.native);
	}
	,destroy: function(_) {
		return 1;
	}
	,forEach: function(f) {
		f(this.native);
	}
	,__class__: coconut_diffing_internal_VNativeInst
};
var coconut_diffing_internal_VWidget = function(factory,data,key,ref) {
	this.isSingular = false;
	this.factory = factory;
	this.type = factory.type;
	this.data = data;
	this.ref = ref;
	this.key = key;
};
coconut_diffing_internal_VWidget.__name__ = true;
coconut_diffing_internal_VWidget.__interfaces__ = [coconut_diffing_internal_VNode];
coconut_diffing_internal_VWidget.prototype = {
	render: function(parent,cursor,later,hydrate) {
		return new coconut_diffing_internal_RWidget(parent,this,cursor,later,hydrate);
	}
	,__class__: coconut_diffing_internal_VWidget
};
var tink_state_internal_Invalidatable = function() { };
tink_state_internal_Invalidatable.__name__ = true;
tink_state_internal_Invalidatable.__isInterface__ = true;
tink_state_internal_Invalidatable.prototype = {
	__class__: tink_state_internal_Invalidatable
};
var coconut_diffing_internal_WidgetLifeCycle = function(owner,context,parent,cursor,later,hydrate) {
	coconut_diffing_internal_Parent.call(this,context,parent);
	this.owner = owner;
	if(owner._coco_lifeCycle != null) {
		throw haxe_Exception.thrown("" + Std.string(owner) + " has been mounted twice");
	}
	owner._coco_lifeCycle = this;
	this.applicator = cursor.applicator;
	this.rendered = new coconut_diffing_internal_RCell(this,this.poll(),cursor,later,hydrate);
	this.link = owner._coco_vStructure.onInvalidate(this);
	later(owner._coco_viewMounted);
};
coconut_diffing_internal_WidgetLifeCycle.__name__ = true;
coconut_diffing_internal_WidgetLifeCycle.__interfaces__ = [tink_state_internal_Invalidatable];
coconut_diffing_internal_WidgetLifeCycle.__super__ = coconut_diffing_internal_Parent;
coconut_diffing_internal_WidgetLifeCycle.prototype = $extend(coconut_diffing_internal_Parent.prototype,{
	poll: function() {
		var before = tink_state_internal_AutoObservable.cur;
		tink_state_internal_AutoObservable.cur = null;
		var ret = tink_state_Observable.get_value(this.owner._coco_vStructure);
		tink_state_internal_AutoObservable.cur = before;
		return ret;
	}
	,reiterate: function(applicator) {
		return this.rendered.rendered.reiterate(applicator);
	}
	,justInsert: function(cursor,later) {
		this.rerender(later,cursor);
	}
	,rerender: function(later,cursor) {
		if(this.rendered.update(this.poll(),cursor,later)) {
			later(this.owner._coco_viewUpdated);
		}
	}
	,performUpdate: function(later) {
		if(this.owner._coco_lifeCycle != this) {
			return;
		}
		this.rerender(later);
		coconut_diffing_internal_Parent.prototype.performUpdate.call(this,later);
	}
	,invalidate: function() {
		this.invalidateParent();
	}
	,destroy: function(applicator) {
		var _g = this.owner._coco_viewUnmounting;
		if(_g != null) {
			_g();
		}
		var this1 = this.link;
		if(this1 != null) {
			this1.cancel();
		}
		this.owner._coco_lifeCycle = null;
		return this.rendered.destroy(applicator);
	}
	,forEach: function(f) {
		this.rendered.forEach(f);
	}
	,__class__: coconut_diffing_internal_WidgetLifeCycle
});
var coconut_diffing_internal_RWidget = function(parent,v,cursor,later,hydrate) {
	var context = parent.context;
	var widget = v.factory.create(v.data,context);
	coconut_diffing_internal_WidgetLifeCycle.call(this,widget,context,parent,cursor,later,hydrate);
	this.last = v;
	this.type = v.type;
	this.widget = widget;
	var _g = v.ref;
	if(_g != null) {
		_g(widget);
	}
};
coconut_diffing_internal_RWidget.__name__ = true;
coconut_diffing_internal_RWidget.__interfaces__ = [coconut_diffing_internal_RNode];
coconut_diffing_internal_RWidget.__super__ = coconut_diffing_internal_WidgetLifeCycle;
coconut_diffing_internal_RWidget.prototype = $extend(coconut_diffing_internal_WidgetLifeCycle.prototype,{
	update: function(next,cursor,later) {
		var v = next;
		var next;
		if(((v) instanceof coconut_diffing_internal_VWidget)) {
			next = v;
		} else {
			throw haxe_Exception.thrown("invalid cast");
		}
		if(this.last == next) {
			this.justInsert(cursor,later);
			return;
		}
		if(next.ref != this.last.ref) {
			var _g = this.last.ref;
			if(_g != null) {
				_g(null);
			}
			var _g = next.ref;
			if(_g != null) {
				_g(this.widget);
			}
		}
		this.last = next;
		next.factory.update(this.widget,next.data);
		this.rerender(later,cursor);
	}
	,destroy: function(applicator) {
		var _g = this.last.ref;
		if(_g != null) {
			_g(null);
		}
		return coconut_diffing_internal_WidgetLifeCycle.prototype.destroy.call(this,applicator);
	}
	,__class__: coconut_diffing_internal_RWidget
});
var coconut_diffing_internal_WidgetFactory = function(create,update) {
	var this1 = coconut_diffing_TypeId.idCounter++;
	this.type = this1;
	this._create = create;
	this._update = update;
};
coconut_diffing_internal_WidgetFactory.__name__ = true;
coconut_diffing_internal_WidgetFactory.prototype = {
	create: function(data,context) {
		return this._create(data,context);
	}
	,update: function(target,next) {
		this._update(target,next);
	}
	,__class__: coconut_diffing_internal_WidgetFactory
};
var coconut_ui_Ref = {};
coconut_ui_Ref._new = function(f) {
	return f;
};
coconut_ui_Ref.merge = function(this1,other) {
	return function(v) {
		this1(v);
		other(v);
	};
};
var coconut_ui_internal_Children = {};
coconut_ui_internal_Children.get_length = function(this1) {
	if(this1 == null) {
		return 0;
	} else {
		return this1.length;
	}
};
coconut_ui_internal_Children.get = function(this1,index) {
	if(this1 == null) {
		return null;
	} else {
		return this1[index];
	}
};
coconut_ui_internal_Children.ofSingle = function(r) {
	return [r];
};
coconut_ui_internal_Children.concat = function(this1,that) {
	if(this1 == null) {
		return that;
	} else {
		return this1.concat(that);
	}
};
coconut_ui_internal_Children.prepend = function(this1,r) {
	if(this1 == null) {
		if(r == null) {
			return null;
		} else {
			return coconut_ui_internal_Children.ofSingle(r);
		}
	} else if(r == null) {
		return this1;
	} else {
		return [r].concat(this1);
	}
};
coconut_ui_internal_Children.append = function(this1,r) {
	if(this1 == null) {
		if(r == null) {
			return null;
		} else {
			return coconut_ui_internal_Children.ofSingle(r);
		}
	} else if(r == null) {
		return this1;
	} else {
		return this1.concat([r]);
	}
};
var coconut_ui_internal_ImplicitValues = {};
coconut_ui_internal_ImplicitValues._new = function(a) {
	var _g = new haxe_ds_ObjectMap();
	var _g1 = 0;
	while(_g1 < a.length) {
		var o = a[_g1];
		++_g1;
		_g.set(o.key,o.val);
	}
	return _g;
};
var tink_state_internal_ObservableObject = function() { };
tink_state_internal_ObservableObject.__name__ = true;
tink_state_internal_ObservableObject.__isInterface__ = true;
tink_state_internal_ObservableObject.prototype = {
	__class__: tink_state_internal_ObservableObject
};
var tink_state__$Observable_ConstObservable = function(value,toString) {
	this.revision = tink_state_internal_Revision._new();
	this.value = value;
};
tink_state__$Observable_ConstObservable.__name__ = true;
tink_state__$Observable_ConstObservable.__interfaces__ = [tink_state_internal_ObservableObject];
tink_state__$Observable_ConstObservable.prototype = {
	getRevision: function() {
		return this.revision;
	}
	,getValue: function() {
		return this.value;
	}
	,isValid: function() {
		return true;
	}
	,getComparator: function() {
		return null;
	}
	,onInvalidate: function(i) {
		return null;
	}
	,__class__: tink_state__$Observable_ConstObservable
};
var tink_core__$Lazy_Computable = function() { };
tink_core__$Lazy_Computable.__name__ = true;
tink_core__$Lazy_Computable.__isInterface__ = true;
tink_core__$Lazy_Computable.prototype = {
	__class__: tink_core__$Lazy_Computable
};
var tink_core__$Lazy_LazyObject = function() { };
tink_core__$Lazy_LazyObject.__name__ = true;
tink_core__$Lazy_LazyObject.__isInterface__ = true;
tink_core__$Lazy_LazyObject.__interfaces__ = [tink_core__$Lazy_Computable];
tink_core__$Lazy_LazyObject.prototype = {
	__class__: tink_core__$Lazy_LazyObject
};
var tink_core__$Lazy_LazyConst = function(value) {
	this.value = value;
};
tink_core__$Lazy_LazyConst.__name__ = true;
tink_core__$Lazy_LazyConst.__interfaces__ = [tink_core__$Lazy_LazyObject];
tink_core__$Lazy_LazyConst.prototype = {
	isComputed: function() {
		return true;
	}
	,get: function() {
		return this.value;
	}
	,compute: function() {
	}
	,underlying: function() {
		return null;
	}
	,__class__: tink_core__$Lazy_LazyConst
};
var coconut_ui_internal_ImplicitContext = function(parent) {
	this.slots = new haxe_ds_ObjectMap();
	this.parent = parent == null ? coconut_ui_internal_ImplicitContext.ORPHAN : parent;
};
coconut_ui_internal_ImplicitContext.__name__ = true;
coconut_ui_internal_ImplicitContext.prototype = {
	get: function(key) {
		var _g = tink_state_Observable.get_value(this.getSlot(key));
		var _g1 = tink_core_Lazy.get(this.parent);
		if(_g == null) {
			if(_g1 == null) {
				return null;
			} else {
				return _g1.get(key);
			}
		} else {
			return _g;
		}
	}
	,getSlot: function(key) {
		var _g = this.slots.h[key.__id__];
		if(_g == null) {
			var this1 = this.slots;
			var v = new coconut_ui_internal_Slot(this);
			this1.set(key,v);
			return v;
		} else {
			return _g;
		}
	}
	,update: function(values) {
		var _g = new haxe_iterators_MapKeyValueIterator(this.slots);
		while(_g.hasNext()) {
			var _g1 = _g.next();
			var k = _g1.key;
			var slot = _g1.value;
			if(values.h.__keys__[k.__id__] == null) {
				slot.setData(null);
			}
		}
		var _g = new haxe_iterators_MapKeyValueIterator(values);
		while(_g.hasNext()) {
			var _g1 = _g.next();
			var k = _g1.key;
			var v = _g1.value;
			this.getSlot(k).setData(v);
		}
	}
	,__class__: coconut_ui_internal_ImplicitContext
};
var coconut_ui_internal_TypeKey = {};
coconut_ui_internal_TypeKey.ofClass = function(t) {
	return t;
};
coconut_ui_internal_TypeKey.ofEnum = function(t) {
	return t;
};
var coconut_ui_internal_SingleImplicit = function(key,val) {
	this.key = key;
	this.val = val;
};
coconut_ui_internal_SingleImplicit.__name__ = true;
coconut_ui_internal_SingleImplicit.prototype = {
	__class__: coconut_ui_internal_SingleImplicit
};
var tink_state_internal_Invalidator = function(toString) {
	this.used = 0;
	this.list = new tink_core_CallbackList();
	var this1 = new Map();
	this.observers = this1;
	this.revision = tink_state_internal_Revision._new();
};
tink_state_internal_Invalidator.__name__ = true;
tink_state_internal_Invalidator.prototype = {
	getRevision: function() {
		return this.revision;
	}
	,onInvalidate: function(i) {
		var _gthis = this;
		if(this.observers.get(i)) {
			return null;
		} else {
			this.observers.set(i,true);
			var _this = this.list;
			var this1;
			if(_this.disposeHandlers == null) {
				this1 = null;
			} else {
				var node = new tink_core__$Callback_ListCell(function(_) {
					i.invalidate();
				},_this);
				_this.cells.push(node);
				if(_this.used++ == 0) {
					var fn = _this.onfill;
					if(tink_core_Callback.depth < 500) {
						tink_core_Callback.depth++;
						fn();
						tink_core_Callback.depth--;
					} else {
						tink_core_Callback.defer(fn);
					}
				}
				this1 = node;
			}
			var this2 = new tink_core_SimpleLink(function() {
				return _gthis.observers.delete(i);
			});
			return new tink_core__$Callback_LinkPair(this1,this2);
		}
	}
	,fire: function() {
		this.revision = tink_state_internal_Revision._new();
		this.list.invoke(null);
	}
	,__class__: tink_state_internal_Invalidator
};
var coconut_ui_internal_Slot = function(owner,comparator,defaultData,toString) {
	var _gthis = this;
	tink_state_internal_Invalidator.call(this,toString);
	this.comparator = comparator;
	this.data = this.defaultData = defaultData;
	this.list.ondrain = function() {
		var this1 = _gthis.link;
		if(this1 != null) {
			this1.cancel();
		}
	};
	this.list.onfill = function() {
		_gthis.heatup();
	};
};
coconut_ui_internal_Slot.__name__ = true;
coconut_ui_internal_Slot.__interfaces__ = [tink_state_internal_ObservableObject,tink_state_internal_Invalidatable];
coconut_ui_internal_Slot.__super__ = tink_state_internal_Invalidator;
coconut_ui_internal_Slot.prototype = $extend(tink_state_internal_Invalidator.prototype,{
	get_value: function() {
		return tink_state_Observable.get_value(this);
	}
	,heatup: function() {
		if(this.data != null) {
			this.link = this.data.onInvalidate(this);
		}
	}
	,observe: function() {
		return this;
	}
	,invalidate: function() {
		this.fire();
	}
	,getComparator: function() {
		return this.comparator;
	}
	,getRevision: function() {
		var ret = this.revision;
		if(this.data != null) {
			var b = this.data.getRevision();
			if(!(ret > b)) {
				ret = b;
			}
		}
		if(this.defaultData != null) {
			var b = this.defaultData.getRevision();
			if(!(ret > b)) {
				ret = b;
			}
		}
		return ret;
	}
	,getValue: function() {
		var _g = this.data;
		var _g1 = this.defaultData;
		var _hx_tmp;
		if(_g == null) {
			if(_g1 == null) {
				return null;
			} else {
				return _g1.getValue();
			}
		} else if(_g1 == null) {
			return _g.getValue();
		} else {
			_hx_tmp = _g.getValue();
			if(_hx_tmp == null) {
				return _g1.getValue();
			} else {
				return _hx_tmp;
			}
		}
	}
	,isValid: function() {
		if(this.data != null) {
			return this.data.isValid();
		} else {
			return true;
		}
	}
	,setData: function(data) {
		if(data == null) {
			data = this.defaultData;
		}
		if(data == this.data) {
			return;
		}
		this.data = data;
		if(this.list.used > 0) {
			var this1 = this.link;
			if(this1 != null) {
				this1.cancel();
			}
			this.heatup();
		}
		this.fire();
	}
	,__class__: coconut_ui_internal_Slot
});
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	get: function(key) {
		return this.h[key];
	}
	,keys: function() {
		return new haxe_ds__$StringMap_StringMapKeyIterator(this.h);
	}
	,__class__: haxe_ds_StringMap
};
var coconut_vdom__$Html_Updater = function(unset,rules,getRule) {
	this.deleters = new Map();
	this.applicators = new Map();
	this.unset = unset;
	this.rules = rules;
	this.getRule = getRule;
};
coconut_vdom__$Html_Updater.__name__ = true;
coconut_vdom__$Html_Updater.getFields = function(o) {
	var ret = Object.getOwnPropertyNames(o);
	switch(ret.length) {
	case 0:
		break;
	case 1:
		break;
	case 2:
		var _g = ret[0];
		var _g1 = ret[1];
		if(_g > _g1) {
			ret[0] = _g1;
			ret[1] = _g;
		}
		break;
	default:
		ret.sort();
	}
	return ret;
};
coconut_vdom__$Html_Updater.prototype = {
	update: function(target,newVal,oldVal) {
		if(newVal != null) {
			(this.getApplicator(newVal))(target,newVal,oldVal);
		}
		if(oldVal != null) {
			(this.getDeleter(oldVal,newVal))(target);
		}
	}
	,getApplicator: function(obj) {
		var _gthis = this;
		var props = coconut_vdom__$Html_Updater.getFields(obj);
		var key = props.toString();
		var apply = this.applicators.get(key);
		if(apply == null) {
			var source = "if (old) {";
			var add = function(prefix) {
				var _g = 0;
				while(_g < props.length) {
					var p = props[_g];
					++_g;
					var source1 = source;
					var source2 = "\n  " + prefix(p);
					var _g1 = _gthis.getRule(_gthis.rules,p);
					source = source1 + (source2 + (_g1 == null ? "if (nu." + p + " == null) { " + _gthis.unset("target",p) + " } else target." + p + " = nu." + p + ";" : "this." + _g1 + "(target, \"" + p + "\", nu." + p + ", old && old." + p + ");"));
				}
			};
			add(function(p) {
				return "if (nu." + p + " !== old." + p + ") ";
			});
			source += "\n} else {";
			add(function(p) {
				return "";
			});
			source += "\n}";
			apply = new Function("target","nu","old",source).bind(this.rules);
			this.applicators.set(key,apply);
		}
		return apply;
	}
	,noop: function(target) {
	}
	,getDeleter: function(old,nu) {
		var _gthis = this;
		var forFields = function(fields) {
			var key = fields.toString();
			var ret = _gthis.deleters.get(key);
			if(ret == null) {
				var body = "";
				var _g = 0;
				var _g1 = fields;
				while(_g < _g1.length) {
					var f = _g1[_g];
					++_g;
					var _g2 = _gthis.getRule(_gthis.rules,f);
					body += "\n" + (_g2 == null ? _gthis.unset("target",f) : "this." + _g2 + "(target, \"" + f + "\", null);");
				}
				var _gthis1 = _gthis.deleters;
				ret = new Function("target",body).bind(_gthis.rules);
				_gthis1.set(key,ret);
			}
			return ret;
		};
		if(nu == null) {
			return forFields(coconut_vdom__$Html_Updater.getFields(old));
		} else {
			var oldFields = coconut_vdom__$Html_Updater.getFields(old);
			var nuFields = coconut_vdom__$Html_Updater.getFields(nu);
			var nuKey = nuFields.toString();
			var oldKey = oldFields.toString();
			if(nuKey == oldKey) {
				return $bind(this,this.noop);
			} else {
				var key = "" + nuKey + ":" + oldKey;
				var ret = this.deleters.get(key);
				if(ret == null) {
					var tmp = this.deleters;
					var forFields1 = forFields;
					var _g = [];
					var _g1 = 0;
					while(_g1 < oldFields.length) {
						var f = oldFields[_g1];
						++_g1;
						if(nuFields.indexOf(f) == -1) {
							_g.push(f);
						}
					}
					ret = forFields1(_g);
					tmp.set(key,ret);
				}
				return ret;
			}
		}
	}
	,__class__: coconut_vdom__$Html_Updater
};
var coconut_vdom__$Html_Elt = function(tag) {
	coconut_diffing_Factory.call(this);
	this.tag = tag.toUpperCase();
};
coconut_vdom__$Html_Elt.__name__ = true;
coconut_vdom__$Html_Elt.hydrateEvents = function(target,attr) {
	var events = coconut_vdom__$Html_Elt.events;
	for (var name in attr) {
      if (name.startsWith("on")) {
        events.push(name);
      }
    }
	if(events.length > 0) {
		var handler = target.__eventHandler = { handleEvent : function(e) {
			this[e.type](e);
		}};
		var _g = 0;
		while(_g < events.length) {
			var event = events[_g];
			++_g;
			var fn = Reflect.field(attr,event);
			event = HxOverrides.substr(event,2,null);
			target.addEventListener(event,handler);
			handler[event] = fn;
		}
		events.length = 0;
	}
};
coconut_vdom__$Html_Elt.setAttributes = function(t,nu,old) {
	coconut_diffing_Properties.set(t,nu,old,function(t,k,v,_) {
		if(v == null) {
			t.removeAttribute(k);
		} else {
			t.setAttribute(k,v);
		}
	});
};
coconut_vdom__$Html_Elt.setEvent = function(element,event,newVal,_) {
	var event1 = HxOverrides.substr(event,2,null);
	var handler = element.__eventHandler;
	if(handler == null) {
		handler = { handleEvent : function(e) {
			this[e.type](e);
		}};
		element.__eventHandler = handler;
	}
	if(!Object.prototype.hasOwnProperty.call(handler,event1)) {
		element.addEventListener(event1,handler);
	}
	handler[event1] = newVal == null ? coconut_vdom__$Html_Elt.noop : newVal;
};
coconut_vdom__$Html_Elt.updateStyle = function(target,newVal,oldVal) {
	coconut_vdom__$Html_Elt.STYLES.update(target,newVal,oldVal);
};
coconut_vdom__$Html_Elt.noop = function(_) {
};
coconut_vdom__$Html_Elt.__super__ = coconut_diffing_Factory;
coconut_vdom__$Html_Elt.prototype = $extend(coconut_diffing_Factory.prototype,{
	create: function(attr) {
		var ret = window.document.createElement(this.tag);
		coconut_vdom__$Html_Elt.ELEMENTS.update(ret,attr,null);
		return ret;
	}
	,adopt: function(node) {
		if(node.nodeName == this.tag) {
			return node;
		} else {
			return null;
		}
	}
	,hydrate: function(target,attr) {
		coconut_vdom__$Html_Elt.hydrateEvents(target,attr);
	}
	,update: function(target,nu,old) {
		coconut_vdom__$Html_Elt.ELEMENTS.update(target,nu,old);
	}
	,__class__: coconut_vdom__$Html_Elt
});
var coconut_vdom__$Html_Svg = function(tag) {
	coconut_diffing_Factory.call(this);
	this.tag = tag.toLowerCase();
};
coconut_vdom__$Html_Svg.__name__ = true;
coconut_vdom__$Html_Svg.setSvgProp = function(element,name,newVal,oldVal) {
	while(true) {
		var _hx_tmp;
		switch(name) {
		case "attributes":
			coconut_vdom__$Html_Elt.setAttributes(element,newVal,oldVal);
			break;
		case "className":
			name = "class";
			continue;
		case "style":
			_hx_tmp = StringTools.startsWith(name,"on");
			if(_hx_tmp == true) {
				coconut_vdom__$Html_Elt.setEvent(element,name,newVal,oldVal);
			} else {
				coconut_vdom__$Html_Elt.updateStyle(element.style,newVal,oldVal);
			}
			break;
		case "xmlns":
			break;
		default:
			_hx_tmp = StringTools.startsWith(name,"on");
			if(_hx_tmp == true) {
				coconut_vdom__$Html_Elt.setEvent(element,name,newVal,oldVal);
			} else if(newVal == null) {
				element.removeAttribute(name);
			} else {
				element.setAttribute(name,newVal);
			}
		}
		return;
	}
};
coconut_vdom__$Html_Svg.__super__ = coconut_diffing_Factory;
coconut_vdom__$Html_Svg.prototype = $extend(coconut_diffing_Factory.prototype,{
	adopt: function(node) {
		if(node.namespaceURI == "http://www.w3.org/2000/svg" && node.nodeName == this.tag) {
			return node;
		} else {
			return null;
		}
	}
	,hydrate: function(target,attr) {
		coconut_vdom__$Html_Elt.hydrateEvents(target,attr);
	}
	,create: function(attr) {
		var ret = window.document.createElementNS("http://www.w3.org/2000/svg",this.tag);
		this.update(ret,attr,null);
		return ret;
	}
	,update: function(target,nu,old) {
		coconut_diffing_Properties.set(target,nu,old,coconut_vdom__$Html_Svg.setSvgProp);
	}
	,__class__: coconut_vdom__$Html_Svg
});
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,toString: function() {
		return this.get_message();
	}
	,get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
});
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var coconut_vdom_Html = function() { };
coconut_vdom_Html.__name__ = true;
coconut_vdom_Html.nodeType = function(tag) {
	var _g = coconut_vdom_Html.nodeTypes.h[tag];
	var tmp;
	if(_g == null) {
		var this1 = coconut_vdom_Html.nodeTypes;
		var v;
		var _g1 = tag.split(":");
		switch(_g1.length) {
		case 1:
			v = new coconut_vdom__$Html_Elt(tag);
			break;
		case 2:
			var _g2 = _g1[0];
			if(_g2 == "svg") {
				v = new coconut_vdom__$Html_Svg(_g1[1]);
			} else {
				throw haxe_Exception.thrown("unknown namespace " + _g2);
			}
			break;
		default:
			throw haxe_Exception.thrown("invalid tag " + tag);
		}
		this1.h[tag] = v;
		tmp = v;
	} else {
		tmp = _g;
	}
	return tmp;
};
coconut_vdom_Html.text = function(value) {
	return coconut_vdom__$Html_Text.inst.vnode(value,null,null,null);
};
coconut_vdom_Html.raw = function(hxxMeta,attr) {
	return coconut_vdom__$Html_HtmlFragment.byTag(attr.tag).vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.wbr = function(hxxMeta,attr) {
	return coconut_vdom_Html.WBR.vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.video = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.VIDEO.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.ul = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.UL.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.track = function(hxxMeta,attr) {
	return coconut_vdom_Html.TRACK.vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.tr = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.TR.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.title = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.TITLE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.time = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.TIME.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.thead = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.THEAD.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.th = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.TH.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.tfoot = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.TFOOT.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.textarea = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.TEXTAREA.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.td = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.TD.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.tbody = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.TBODY.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.table = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.TABLE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.svg = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.SVG.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.sup = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.SUP.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.summary = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.SUMMARY.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.sub = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.SUB.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.style = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.STYLE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.strong = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.STRONG.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.span = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.SPAN.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.source = function(hxxMeta,attr) {
	return coconut_vdom_Html.SOURCE.vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.small = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.SMALL.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.select = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.SELECT.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.section = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.SECTION.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.script = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.SCRIPT.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.rect = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.RECT.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.pre = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.PRE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.polyline = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.POLYLINE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.polygon = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.POLYGON.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.picture = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.PICTURE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.path = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.PATH.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.param = function(hxxMeta,attr) {
	return coconut_vdom_Html.PARAM.vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.p = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.P.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.option = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.OPTION.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.ol = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.OL.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.object = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.OBJECT.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.nav = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.NAV.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.meta = function(hxxMeta,attr) {
	return coconut_vdom_Html.META.vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.menu = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.MENU.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.main = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.MAIN.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.link = function(hxxMeta,attr) {
	return coconut_vdom_Html.LINK.vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.li = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.LI.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.legend = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.LEGEND.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.label = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.LABEL.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.ins = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.INS.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.input = function(hxxMeta,attr) {
	return coconut_vdom_Html.INPUT.vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.img = function(hxxMeta,attr) {
	return coconut_vdom_Html.IMG.vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.iframe = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.IFRAME.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.i = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.I.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.html = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.HTML.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.hr = function(hxxMeta,attr) {
	return coconut_vdom_Html.HR.vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.header = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.HEADER.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.head = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.HEAD.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.h6 = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.H6.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.h5 = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.H5.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.h4 = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.H4.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.h3 = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.H3.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.h2 = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.H2.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.h1 = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.H1.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.form = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.FORM.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.footer = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.FOOTER.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.fieldset = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.FIELDSET.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.embed = function(hxxMeta,attr) {
	return coconut_vdom_Html.EMBED.vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.em = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.EM.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.ellipse = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.ELLIPSE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.dt = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.DT.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.dl = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.DL.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.div = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.details = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.DETAILS.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.del = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.DEL.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.dd = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.DD.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.code = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.CODE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.circle = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.CIRCLE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.canvas = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.CANVAS.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.button = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.BUTTON.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.br = function(hxxMeta,attr) {
	return coconut_vdom_Html.BR.vnode(attr,hxxMeta.key,hxxMeta.ref);
};
coconut_vdom_Html.body = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.BODY.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.blockquote = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.BLOCKQUOTE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.b = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.B.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.audio = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.AUDIO.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.aside = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.ASIDE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.article = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.ARTICLE.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
coconut_vdom_Html.a = function(hxxMeta,attr,children) {
	return coconut_vdom_Html.A.vnode(attr,hxxMeta.key,hxxMeta.ref,children);
};
var coconut_vdom__$Html_HtmlFragment = function(tag) {
	coconut_diffing_Factory.call(this);
	this.tag = tag.toUpperCase();
};
coconut_vdom__$Html_HtmlFragment.__name__ = true;
coconut_vdom__$Html_HtmlFragment.byTag = function(tag) {
	if(tag == null) {
		tag = "span";
	}
	tag = tag.toUpperCase();
	var _g = coconut_vdom__$Html_HtmlFragment.tags.h[tag];
	if(_g == null) {
		var v = new coconut_vdom__$Html_HtmlFragment(tag);
		coconut_vdom__$Html_HtmlFragment.tags.h[tag] = v;
		return v;
	} else {
		return _g;
	}
};
coconut_vdom__$Html_HtmlFragment.__super__ = coconut_diffing_Factory;
coconut_vdom__$Html_HtmlFragment.prototype = $extend(coconut_diffing_Factory.prototype,{
	adopt: function(target) {
		if(target.nodeName == this.tag) {
			return target;
		} else {
			return null;
		}
	}
	,create: function(a) {
		var ret = window.document.createElement(this.tag);
		ret.className = a.className;
		ret.innerHTML = a.content;
		return ret;
	}
	,update: function(w,old,nu) {
		w.className = nu.className;
		if(old.content != nu.content) {
			w.innerHTML = nu.content;
		}
	}
	,__class__: coconut_vdom__$Html_HtmlFragment
});
var coconut_vdom__$Html_Text = function() {
	coconut_diffing_Factory.call(this);
};
coconut_vdom__$Html_Text.__name__ = true;
coconut_vdom__$Html_Text.__super__ = coconut_diffing_Factory;
coconut_vdom__$Html_Text.prototype = $extend(coconut_diffing_Factory.prototype,{
	adopt: function(target) {
		if(target.nodeType == 3) {
			return target;
		} else {
			return null;
		}
	}
	,create: function(text) {
		return window.document.createTextNode(text);
	}
	,update: function(target,nu,old) {
		if(nu != old) {
			target.textContent = nu;
		}
	}
	,__class__: coconut_vdom__$Html_Text
});
var coconut_vdom_RenderResult = {};
coconut_vdom_RenderResult._new = function(n) {
	return n;
};
coconut_vdom_RenderResult.ofText = function(s) {
	if(s == null) {
		return null;
	} else {
		return coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
	}
};
coconut_vdom_RenderResult.ofInt = function(i) {
	var s = "" + i;
	if(s == null) {
		return null;
	} else {
		return coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
	}
};
coconut_vdom_RenderResult.ofNode = function(n) {
	return new coconut_diffing_internal_VNativeInst(n);
};
coconut_vdom_RenderResult.fragment = function(attr,children) {
	return new coconut_diffing_internal_VMany(children);
};
var coconut_vdom__$Renderer_DomBackend = function() {
	this.markers = [];
};
coconut_vdom__$Renderer_DomBackend.__name__ = true;
coconut_vdom__$Renderer_DomBackend.__interfaces__ = [coconut_diffing_Applicator];
coconut_vdom__$Renderer_DomBackend.prototype = {
	createMarker: function() {
		var _g = this.markers.pop();
		if(_g == null) {
			return window.document.createTextNode("");
		} else {
			return _g;
		}
	}
	,releaseMarker: function(marker) {
		this.markers.push(marker);
	}
	,siblings: function(first) {
		return new coconut_vdom__$Renderer_DomCursor(this,first.parentNode,first);
	}
	,children: function(parent) {
		return new coconut_vdom__$Renderer_DomCursor(this,parent,parent.firstChild);
	}
	,__class__: coconut_vdom__$Renderer_DomBackend
};
var coconut_vdom_Renderer = function() { };
coconut_vdom_Renderer.__name__ = true;
coconut_vdom_Renderer.mountInto = function(target,vdom) {
	coconut_diffing_Root.fromNative(target,coconut_vdom_Renderer.BACKEND).render(vdom);
};
coconut_vdom_Renderer.hydrateInto = function(target,vdom) {
	new coconut_diffing_Root(target,coconut_vdom_Renderer.BACKEND,vdom,1);
};
coconut_vdom_Renderer.hydrateOnto = function(target,vdom) {
	new coconut_diffing_Root(target,coconut_vdom_Renderer.BACKEND,vdom,2);
};
coconut_vdom_Renderer.getNative = function(view) {
	return coconut_vdom_Renderer.getAllNative(view)[0];
};
coconut_vdom_Renderer.getAllNative = function(view) {
	return coconut_diffing_Widget.getAllNative(view);
};
coconut_vdom_Renderer.updateAll = function() {
	tink_state_Observable.updateAll();
};
var coconut_vdom__$Renderer_DomCursor = function(applicator,parent,cur) {
	coconut_diffing_Cursor.call(this,applicator);
	this.parent = parent;
	this.cur = cur;
};
coconut_vdom__$Renderer_DomCursor.__name__ = true;
coconut_vdom__$Renderer_DomCursor.__super__ = coconut_diffing_Cursor;
coconut_vdom__$Renderer_DomCursor.prototype = $extend(coconut_diffing_Cursor.prototype,{
	current: function() {
		return this.cur;
	}
	,insert: function(real) {
		if(this.cur == null) {
			this.parent.appendChild(real);
		} else if(this.cur == real) {
			this.cur = real.nextSibling;
		} else {
			var next = real.nextSibling;
			var inserted = real.parentNode != this.parent;
			this.parent.insertBefore(real,this.cur);
			if(!inserted) {
				this.parent.insertBefore(this.cur,next);
				this.cur = real.nextSibling;
			}
		}
	}
	,'delete': function(count) {
		var v = this.cur;
		var _g = 0;
		var _g1 = count;
		while(_g < _g1) {
			var i = _g++;
			if(v == null || v.parentNode != this.parent) {
				throw haxe_Exception.thrown("assert");
			}
			var handler = v.__eventHandler;
			if(handler != null) {
				delete(v["__eventHandler"]);
				var _g2 = 0;
				var _g3 = Reflect.fields(handler);
				while(_g2 < _g3.length) {
					var k = _g3[_g2];
					++_g2;
					v.removeEventListener(k,handler[k]);
				}
			}
			var next = v.nextSibling;
			this.parent.removeChild(v);
			v = next;
		}
		this.cur = v;
	}
	,step: function() {
		var _g = this.cur;
		if(_g == null) {
			return false;
		} else {
			return (this.cur = _g.nextSibling) != null;
		}
	}
	,__class__: coconut_vdom__$Renderer_DomCursor
});
var coconut_vdom_View = function(render,shouldUpdate,track,beforeRerender,rendered) {
	this.__au = [];
	this.__bc = [];
	this.__bu = [];
	this.viewId = coconut_vdom_View.idCounter++;
	var _gthis = this;
	var mounted;
	if(rendered != null) {
		var _g = rendered;
		var a1 = true;
		mounted = function() {
			_g(a1);
		};
	} else {
		mounted = null;
	}
	var updated;
	if(rendered != null) {
		var _g1 = rendered;
		var a11 = false;
		updated = function() {
			_g1(a11);
		};
	} else {
		updated = null;
	}
	var firstTime = true;
	var last = null;
	var hasBeforeRerender = beforeRerender != null;
	var hasUpdated = updated != null;
	var _coco_revision = tink_state_State._new(0);
	var lastRev = tink_state_State.get_value(_coco_revision);
	var renderView = function() {
		var curRev = tink_state_State.get_value(_coco_revision);
		if(track != null) {
			track();
		}
		if(firstTime) {
			firstTime = false;
		} else {
			if(curRev == lastRev && shouldUpdate != null && !shouldUpdate()) {
				return last;
			}
			var hasCallbacks = _gthis.__bc.length > 0;
			if(hasBeforeRerender || hasCallbacks) {
				var before = tink_state_internal_AutoObservable.cur;
				tink_state_internal_AutoObservable.cur = null;
				if(hasBeforeRerender) {
					beforeRerender();
				}
				if(hasCallbacks) {
					var _g = 0;
					var _g1 = _gthis.__bc.splice(0,_gthis.__bc.length);
					while(_g < _g1.length) {
						var c = _g1[_g];
						++_g;
						tink_core_Callback.invoke(c,false);
					}
				}
				tink_state_internal_AutoObservable.cur = before;
			}
		}
		lastRev = curRev;
		last = render();
		return last;
	};
	coconut_diffing_Widget.call(this,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(renderView),null,null),mounted,function() {
		var hasCallbacks = _gthis.__au.length > 0;
		if(hasUpdated || hasCallbacks) {
			var before = tink_state_internal_AutoObservable.cur;
			tink_state_internal_AutoObservable.cur = null;
			if(hasUpdated) {
				updated();
			}
			if(hasCallbacks) {
				var _g = 0;
				var _g1 = _gthis.__au.splice(0,_gthis.__au.length);
				while(_g < _g1.length) {
					var c = _g1[_g];
					++_g;
					tink_core_Callback.invoke(c,null);
				}
			}
			tink_state_internal_AutoObservable.cur = before;
		}
	},function() {
		last = null;
		firstTime = true;
		_gthis.__beforeUnmount();
	});
	this._coco_revision = _coco_revision;
};
coconut_vdom_View.__name__ = true;
coconut_vdom_View.__super__ = coconut_diffing_Widget;
coconut_vdom_View.prototype = $extend(coconut_diffing_Widget.prototype,{
	__beforeUnmount: function() {
		var _g = 0;
		var _g1 = this.__bu.splice(0,this.__bu.length);
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c != null) {
				c.cancel();
			}
		}
		var _g = 0;
		var _g1 = this.__bc.splice(0,this.__bu.length);
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			tink_core_Callback.invoke(c,true);
		}
	}
	,forceUpdate: function(callback) {
		this._coco_revision.set(tink_state_State.get_value(this._coco_revision) + 1);
		if(callback != null) {
			this.__au.push(callback);
		}
	}
	,__class__: coconut_vdom_View
});
var fomantic_Accordion = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_selector = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_className = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_elements = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_children = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_exclusive = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(true,null));
	this.__coco_onclick = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_animateChildren = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(true,null));
	this.__coco_closeNested = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(true,null));
	this.__coco_collapsible = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(true,null));
	this.__coco_duration = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(500,null));
	this.__coco_easing = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return "easeInOutQuint";
	}),null,null));
	this.__coco_onOpening = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_onOpen = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_onClosing = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_onClose = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_onChanging = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_onChange = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,function(firstTime) {
		if(firstTime) {
			_gthis.viewDidMount();
		}
	});
};
fomantic_Accordion.__name__ = true;
fomantic_Accordion.get___factory = function() {
	var _g = fomantic_Accordion.__factory;
	if(_g == null) {
		return fomantic_Accordion.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new fomantic_Accordion(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		return _g;
	}
};
fomantic_Accordion.fromHxx = function(hxxMeta,attributes) {
	var _g = fomantic_Accordion.__factory;
	return new coconut_diffing_internal_VWidget(_g == null ? fomantic_Accordion.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
		return new fomantic_Accordion(__coco_data_,implicits);
	},function(v,attr) {
		v.__initAttributes(attr);
	}) : _g,attributes,hxxMeta.key,hxxMeta.ref);
};
fomantic_Accordion.__super__ = coconut_vdom_View;
fomantic_Accordion.prototype = $extend(coconut_vdom_View.prototype,{
	viewDidMount: function() {
		haxe_Log.trace("mount",{ fileName : "src/fomantic/Accordion.hx", lineNumber : 86, className : "fomantic.Accordion", methodName : "viewDidMount"});
		$(".ui.accordion").accordion({ selector : tink_state_Observable.get_value(this.__coco_selector)},"close",1);
	}
	,render: function() {
		var this1 = $bind(this,this._coco_set_ME);
		var hxxMeta = { ref : this1};
		var attr = { className : tink_domspec_ClassName.add(tink_state_Observable.get_value(this.__coco_className),tink_domspec_ClassName.ofArray(["accordion","ui"]))};
		var __r = [];
		if(tink_state_Observable.get_value(this.__coco_elements) != null) {
			var _g = new tink_pure_NodeIterator(tink_state_State.get_value(tink_state_Observable.get_value(this.__coco_elements).__coco_items));
			while(_g.list.length > 0) {
				var item = [_g.next()];
				var tmp = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(item) {
					return function() {
						return tink_state_State.get_value(item[0].__coco_title);
					};
				})(item)),null,null);
				var tmp1 = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync((function(item) {
					return function() {
						return tink_state_State.get_value(item[0].__coco_content);
					};
				})(item)),null,null);
				__r.push(fomantic_AccordionItem.fromHxx({ },{ title : tmp, content : tmp1}));
			}
		} else {
			var _g = 0;
			var _g1 = tink_state_Observable.get_value(this.__coco_children);
			while(_g < (_g1 == null ? 0 : _g1.length)) {
				var _0 = _g1 == null ? null : _g1[_g];
				++_g;
				__r.push(_0);
			}
		}
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,get_selector: function() {
		return tink_state_Observable.get_value(this.__coco_selector);
	}
	,get_className: function() {
		return tink_state_Observable.get_value(this.__coco_className);
	}
	,get_elements: function() {
		return tink_state_Observable.get_value(this.__coco_elements);
	}
	,get_children: function() {
		return tink_state_Observable.get_value(this.__coco_children);
	}
	,get_exclusive: function() {
		return tink_state_Observable.get_value(this.__coco_exclusive);
	}
	,get_onclick: function() {
		return tink_state_Observable.get_value(this.__coco_onclick);
	}
	,get_animateChildren: function() {
		return tink_state_Observable.get_value(this.__coco_animateChildren);
	}
	,get_closeNested: function() {
		return tink_state_Observable.get_value(this.__coco_closeNested);
	}
	,get_collapsible: function() {
		return tink_state_Observable.get_value(this.__coco_collapsible);
	}
	,get_duration: function() {
		return tink_state_Observable.get_value(this.__coco_duration);
	}
	,get_easing: function() {
		return tink_state_Observable.get_value(this.__coco_easing);
	}
	,get_onOpening: function() {
		return tink_state_Observable.get_value(this.__coco_onOpening);
	}
	,get_onOpen: function() {
		return tink_state_Observable.get_value(this.__coco_onOpen);
	}
	,get_onClosing: function() {
		return tink_state_Observable.get_value(this.__coco_onClosing);
	}
	,get_onClose: function() {
		return tink_state_Observable.get_value(this.__coco_onClose);
	}
	,get_onChanging: function() {
		return tink_state_Observable.get_value(this.__coco_onChanging);
	}
	,get_onChange: function() {
		return tink_state_Observable.get_value(this.__coco_onChange);
	}
	,_coco_set_ME: function(param) {
		this.ME = param;
	}
	,__initAttributes: function(attributes) {
		this.__coco_selector.setData(attributes.selector);
		this.__coco_className.setData(attributes.className);
		this.__coco_elements.setData(attributes.elements);
		this.__coco_children.setData(attributes.children);
		this.__coco_exclusive.setData(attributes.exclusive);
		this.__coco_onclick.setData(attributes.onclick);
		this.__coco_animateChildren.setData(attributes.animateChildren);
		this.__coco_closeNested.setData(attributes.closeNested);
		this.__coco_collapsible.setData(attributes.collapsible);
		this.__coco_duration.setData(attributes.duration);
		this.__coco_easing.setData(attributes.easing);
		this.__coco_onOpening.setData(attributes.onOpening);
		this.__coco_onOpen.setData(attributes.onOpen);
		this.__coco_onClosing.setData(attributes.onClosing);
		this.__coco_onClose.setData(attributes.onClose);
		this.__coco_onChanging.setData(attributes.onChanging);
		this.__coco_onChange.setData(attributes.onChange);
	}
	,__class__: fomantic_Accordion
});
var fomantic_AccList = function(__coco_init) {
	this._updatePerformed = tink_core_Signal.trigger();
	this.__coco_items = tink_state_State._new(__coco_init.items,null,null,null);
	this.__coco_transitionCount = tink_state_State._new(0);
	this.errorTrigger = tink_core_Signal.trigger();
	this.transitionErrors = this.errorTrigger;
	this.annex = new coconut_data_helpers_Annex(this);
	this.observables = { items : this.__coco_items, isInTransition : tink_state_Observable.map(this.__coco_transitionCount,tink_state__$Observable_Transform.plain(function(count) {
		return count > 0;
	}))};
};
fomantic_AccList.__name__ = true;
fomantic_AccList.__interfaces__ = [coconut_data_Model];
fomantic_AccList.prototype = {
	get_items: function() {
		return tink_state_State.get_value(this.__coco_items);
	}
	,__cocoupdate: function(ret) {
		var _gthis = this;
		var sync = true;
		var done = false;
		ret.handle(function(o) {
			done = true;
			if(!sync) {
				_gthis.__coco_transitionCount.set(tink_state_State.get_value(_gthis.__coco_transitionCount) - 1);
			}
			switch(o._hx_index) {
			case 0:
				var _g = o.data;
				var existent = tink_Anon.getExistentFields(_g);
				if(existent.items) {
					_gthis.__coco_items.set(_g.items);
				}
				_gthis._updatePerformed.handlers.invoke(_g);
				break;
			case 1:
				_gthis.errorTrigger.handlers.invoke(o.failure);
				break;
			}
		});
		if(!done) {
			sync = false;
		}
		if(!sync) {
			this.__coco_transitionCount.set(tink_state_State.get_value(this.__coco_transitionCount) + 1);
		}
		return ret;
	}
	,get_updatePerformed: function() {
		return this._updatePerformed;
	}
	,get_isInTransition: function() {
		return tink_state_State.get_value(this.__coco_transitionCount) > 0;
	}
	,toString: function() {
		return "AccList";
	}
	,__class__: fomantic_AccList
};
var fomantic_AccItem = function(__coco_init) {
	this._updatePerformed = tink_core_Signal.trigger();
	this.__coco_title = tink_state_State._new(__coco_init.title,null,null,null);
	this.__coco_content = tink_state_State._new(__coco_init.content,null,null,null);
	this.__coco_transitionCount = tink_state_State._new(0);
	this.errorTrigger = tink_core_Signal.trigger();
	this.transitionErrors = this.errorTrigger;
	this.annex = new coconut_data_helpers_Annex(this);
	this.observables = { title : this.__coco_title, content : this.__coco_content, isInTransition : tink_state_Observable.map(this.__coco_transitionCount,tink_state__$Observable_Transform.plain(function(count) {
		return count > 0;
	}))};
};
fomantic_AccItem.__name__ = true;
fomantic_AccItem.__interfaces__ = [coconut_data_Model];
fomantic_AccItem.create = function(title,content) {
	return new fomantic_AccItem({ title : title, content : content});
};
fomantic_AccItem.prototype = {
	get_title: function() {
		return tink_state_State.get_value(this.__coco_title);
	}
	,get_content: function() {
		return tink_state_State.get_value(this.__coco_content);
	}
	,__cocoupdate: function(ret) {
		var _gthis = this;
		var sync = true;
		var done = false;
		ret.handle(function(o) {
			done = true;
			if(!sync) {
				_gthis.__coco_transitionCount.set(tink_state_State.get_value(_gthis.__coco_transitionCount) - 1);
			}
			switch(o._hx_index) {
			case 0:
				var _g = o.data;
				var existent = tink_Anon.getExistentFields(_g);
				if(existent.title) {
					_gthis.__coco_title.set(_g.title);
				}
				if(existent.content) {
					_gthis.__coco_content.set(_g.content);
				}
				_gthis._updatePerformed.handlers.invoke(_g);
				break;
			case 1:
				_gthis.errorTrigger.handlers.invoke(o.failure);
				break;
			}
		});
		if(!done) {
			sync = false;
		}
		if(!sync) {
			this.__coco_transitionCount.set(tink_state_State.get_value(this.__coco_transitionCount) + 1);
		}
		return ret;
	}
	,get_updatePerformed: function() {
		return this._updatePerformed;
	}
	,get_isInTransition: function() {
		return tink_state_State.get_value(this.__coco_transitionCount) > 0;
	}
	,toString: function() {
		return "AccItem";
	}
	,__class__: fomantic_AccItem
};
var fomantic_AccordionItem = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_title = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_content = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_titleView = new coconut_ui_internal_Slot(this,null,null);
	this.__initAttributes(__coco_data_);
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
fomantic_AccordionItem.__name__ = true;
fomantic_AccordionItem.get___factory = function() {
	var _g = fomantic_AccordionItem.__factory;
	if(_g == null) {
		return fomantic_AccordionItem.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new fomantic_AccordionItem(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		return _g;
	}
};
fomantic_AccordionItem.fromHxx = function(hxxMeta,attributes) {
	var _g = fomantic_AccordionItem.__factory;
	return new coconut_diffing_internal_VWidget(_g == null ? fomantic_AccordionItem.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
		return new fomantic_AccordionItem(__coco_data_,implicits);
	},function(v,attr) {
		v.__initAttributes(attr);
	}) : _g,attributes,hxxMeta.key,hxxMeta.ref);
};
fomantic_AccordionItem.__super__ = coconut_vdom_View;
fomantic_AccordionItem.prototype = $extend(coconut_vdom_View.prototype,{
	render: function() {
		var hxxMeta = { };
		var attr = { className : tink_domspec_ClassName.ofString("accordion_item")};
		var __r = [];
		var hxxMeta1 = { };
		var attr1 = { className : tink_domspec_ClassName.ofString("title")};
		var __r1 = [];
		var tmp = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
			return "sort down";
		}),null,null);
		__r1.push(fomantic_Icon.fromHxx({ },{ img : tmp}));
		if(tink_state_Observable.get_value(this.__coco_title) != null) {
			var s = tink_state_Observable.get_value(this.__coco_title);
			__r1.push(s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null));
		} else {
			var _g = 0;
			var _g1 = tink_state_Observable.get_value(this.__coco_titleView);
			while(_g < (_g1 == null ? 0 : _g1.length)) {
				var _0 = _g1 == null ? null : _g1[_g];
				++_g;
				__r1.push(_0);
			}
		}
		__r.push(coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,__r1));
		var tmp = tink_domspec_ClassName.ofString("content");
		var tmp1 = tink_state_Observable.get_value(this.__coco_content);
		__r.push(coconut_vdom_Html.raw({ },{ tag : "div", className : tmp, content : tmp1}));
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,__r);
	}
	,get_title: function() {
		return tink_state_Observable.get_value(this.__coco_title);
	}
	,get_content: function() {
		return tink_state_Observable.get_value(this.__coco_content);
	}
	,get_titleView: function() {
		return tink_state_Observable.get_value(this.__coco_titleView);
	}
	,__initAttributes: function(attributes) {
		this.__coco_title.setData(attributes.title);
		this.__coco_content.setData(attributes.content);
		this.__coco_titleView.setData(attributes.titleView);
	}
	,__class__: fomantic_AccordionItem
});
var fomantic_Calendar = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_type = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return "date";
	}),null,null));
	this.__coco_inlined = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(false,null));
	this.__coco_onChange = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function(d) {
			return;
		};
	}),null,null));
	this.__coco_formatDate = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function(date) {
			return DateTools.format(date,"%F");
		};
	}),null,null));
	this.__coco_formatTime = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function(date) {
			return DateTools.format(date,"%H:%M");
		};
	}),null,null));
	this.__coco_value = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return new Date();
	}),null,null));
	this.__coco_eventDates = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return tink_pure_List._new();
	}),null,null));
	this.__initAttributes(__coco_data_);
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
fomantic_Calendar.__name__ = true;
fomantic_Calendar.get___factory = function() {
	var _g = fomantic_Calendar.__factory;
	if(_g == null) {
		return fomantic_Calendar.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new fomantic_Calendar(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		return _g;
	}
};
fomantic_Calendar.fromHxx = function(hxxMeta,attributes) {
	var _g = fomantic_Calendar.__factory;
	return new coconut_diffing_internal_VWidget(_g == null ? fomantic_Calendar.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
		return new fomantic_Calendar(__coco_data_,implicits);
	},function(v,attr) {
		v.__initAttributes(attr);
	}) : _g,attributes,hxxMeta.key,hxxMeta.ref);
};
fomantic_Calendar.__super__ = coconut_vdom_View;
fomantic_Calendar.prototype = $extend(coconut_vdom_View.prototype,{
	onChange: function(a0) {
		(tink_state_Observable.get_value(this.__coco_onChange))(a0);
	}
	,formatDate: function(a0) {
		return (tink_state_Observable.get_value(this.__coco_formatDate))(a0);
	}
	,formatTime: function(a0) {
		return (tink_state_Observable.get_value(this.__coco_formatTime))(a0);
	}
	,render: function() {
		var hxxMeta = { ref : $bind(this,this.setup)};
		var attr = { className : tink_domspec_ClassName.ofString("ui calendar")};
		var children;
		if(!tink_state_Observable.get_value(this.__coco_inlined)) {
			var hxxMeta1 = { };
			var attr1 = { className : tink_domspec_ClassName.ofString("ui input left icon")};
			var __r = [];
			var hxxMeta2 = { };
			__r.push(coconut_vdom_Html.DIV.vnode({ className : tink_domspec_ClassName.ofString("ui popup calendar")},hxxMeta2.key,hxxMeta2.ref,null));
			var hxxMeta2 = { };
			__r.push(coconut_vdom_Html.I.vnode({ className : tink_domspec_ClassName.ofString("calendar icon")},hxxMeta2.key,hxxMeta2.ref,null));
			var hxxMeta2 = { };
			__r.push(coconut_vdom_Html.INPUT.vnode({ type : "text", value : HxOverrides.dateStr(tink_state_Observable.get_value(this.__coco_value))},hxxMeta2.key,hxxMeta2.ref));
			children = coconut_vdom_Html.DIV.vnode(attr1,hxxMeta1.key,hxxMeta1.ref,__r);
		} else {
			children = null;
		}
		return coconut_vdom_Html.DIV.vnode(attr,hxxMeta.key,hxxMeta.ref,[children]);
	}
	,setup: function(e) {
		var _gthis = this;
		haxe_Log.trace("setup" + Std.string(e),{ fileName : "src/fomantic/Calendar.hx", lineNumber : 33, className : "fomantic.Calendar", methodName : "setup"});
		var p = tink_pure_List.toArray(tink_pure_List.map(tink_state_Observable.get_value(this.__coco_eventDates),function(n) {
			n["class"] = n.classe;
			return n;
		}));
		$(e).calendar({ type : tink_state_Observable.get_value(this.__coco_type), "inline" : tink_state_Observable.get_value(this.__coco_inlined), parser : { date : function(text) {
			if(text == "") {
				return null;
			} else {
				return new Date(text);
			}
		}}, eventDates : p, formatter : { time : $bind(this,this._formatTime), date : $bind(this,this._formatDate), cell : function(cell,date,options) {
			var c = cell[0];
			c.style.cursor = "pointer";
			if(!options.disabled) {
				switch(date.getDay()) {
				case 0:
					$(c).addClass("sunday");
					break;
				case 1:
					$(c).addClass("monday");
					break;
				case 2:
					$(c).addClass("tuesday");
					break;
				case 3:
					$(c).addClass("wednesday");
					break;
				case 4:
					$(c).addClass("thursday");
					break;
				case 5:
					$(c).addClass("friday");
					break;
				case 6:
					$(c).addClass("saturday");
					break;
				}
			}
			return cell;
		}}, onChange : function(date,text,mode) {
			if(date == null) {
				return;
			}
			var date1;
			switch(tink_state_Observable.get_value(_gthis.__coco_type)) {
			case "date":
				date1 = new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0);
				break;
			case "datetime":
				date1 = date;
				break;
			case "month":
				date1 = new Date(date.getFullYear(),date.getMonth(),0,0,0,0);
				break;
			case "time":
				date1 = new Date(1970,0,1,date.getHours(),date.getMinutes(),date.getSeconds());
				break;
			case "year":
				date1 = new Date(date.getFullYear(),0,0,0,0,0);
				break;
			}
			_gthis.onChange(date1);
		}});
	}
	,_formatTime: function(date) {
		if(date == null) {
			return "";
		} else {
			return this.formatTime(date);
		}
	}
	,_formatDate: function(date) {
		if(date == null) {
			return "";
		} else {
			return this.formatDate(date);
		}
	}
	,get_type: function() {
		return tink_state_Observable.get_value(this.__coco_type);
	}
	,get_inlined: function() {
		return tink_state_Observable.get_value(this.__coco_inlined);
	}
	,get_value: function() {
		return tink_state_Observable.get_value(this.__coco_value);
	}
	,get_eventDates: function() {
		return tink_state_Observable.get_value(this.__coco_eventDates);
	}
	,__initAttributes: function(attributes) {
		this.__coco_type.setData(attributes.type);
		this.__coco_inlined.setData(attributes.inlined);
		this.__coco_onChange.setData(attributes.onChange);
		this.__coco_formatDate.setData(attributes.formatDate);
		this.__coco_formatTime.setData(attributes.formatTime);
		this.__coco_value.setData(attributes.value);
		this.__coco_eventDates.setData(attributes.eventDates);
	}
	,__class__: fomantic_Calendar
});
var fomantic_Dropdown = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_className = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_name = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_value = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_defaultText = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_entries = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return tink_state_PromisedWith.Done(tink_pure_List.fromArray([new tink_core_NamedWith("default",null)]));
	}),null,null));
	this.__coco_onChange = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_clearable = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(false,null));
	this.__coco_ignoreCase = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(false,null));
	this.__coco_ignoreSearchCase = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(true,null));
	this.__coco_allowReselection = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(false,null));
	this.__coco_allowAdditions = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(false,null));
	this.__coco_hideAdditions = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(true,null));
	this.__coco_action = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return "activate";
	}),null,null));
	this.__coco_minCharacters = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(0,null));
	this.__coco_match = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return "both";
	}),null,null));
	this.__coco_selectOnKeydown = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(true,null));
	this.__coco_forceSelection = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(true,null));
	this.__coco_allowCategorySelection = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(false,null));
	this.__coco_placeholder = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return "auto";
	}),null,null));
	this.__coco_ignoreDiacritics = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(false,null));
	this.__coco_multiple = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(false,null));
	this.__coco_useLabels = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(true,null));
	this.__coco_maxSelections = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(0,null));
	this.__coco_glyphWidth = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(1.0714,null));
	this.__coco_label = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return { transition : "horizontal flip", duration : 200, variation : false};
	}),null,null));
	this.__coco_onAdd = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function(a,b,c) {
			return;
		};
	}),null,null));
	this.__coco_onRemove = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function(a,b,c) {
			return;
		};
	}),null,null));
	this.__coco_onLabelCreate = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function(a,b) {
			var t = $("<label><i class='close'></i></label>");
			t.addClass("ui label");
			t.text(b);
			return t;
		};
	}),null,null));
	this.__coco_onLabelRemove = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function(a) {
			return true;
		};
	}),null,null));
	this.__coco_onLabelSelect = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function(a) {
			return;
		};
	}),null,null));
	this.__coco_onNoResults = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function(a) {
			return;
		};
	}),null,null));
	this.__coco_onShow = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function() {
			return true;
		};
	}),null,null));
	this.__coco_onHide = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function() {
			return true;
		};
	}),null,null));
	this.__coco_onSearch = new coconut_ui_internal_Slot(this,null,new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return function() {
			return true;
		};
	}),null,null));
	this.__initAttributes(__coco_data_);
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
fomantic_Dropdown.__name__ = true;
fomantic_Dropdown.get___factory = function() {
	var _g = fomantic_Dropdown.__factory;
	if(_g == null) {
		return fomantic_Dropdown.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new fomantic_Dropdown(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		return _g;
	}
};
fomantic_Dropdown.fromHxx = function(hxxMeta,attributes) {
	var _g = fomantic_Dropdown.__factory;
	return new coconut_diffing_internal_VWidget(_g == null ? fomantic_Dropdown.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
		return new fomantic_Dropdown(__coco_data_,implicits);
	},function(v,attr) {
		v.__initAttributes(attr);
	}) : _g,attributes,hxxMeta.key,hxxMeta.ref);
};
fomantic_Dropdown.__super__ = coconut_vdom_View;
fomantic_Dropdown.prototype = $extend(coconut_vdom_View.prototype,{
	onAdd: function(a0,a1,a2) {
		(tink_state_Observable.get_value(this.__coco_onAdd))(a0,a1,a2);
	}
	,onRemove: function(a0,a1,a2) {
		(tink_state_Observable.get_value(this.__coco_onRemove))(a0,a1,a2);
	}
	,onLabelCreate: function(a0,a1) {
		return (tink_state_Observable.get_value(this.__coco_onLabelCreate))(a0,a1);
	}
	,onLabelRemove: function(a0) {
		return (tink_state_Observable.get_value(this.__coco_onLabelRemove))(a0);
	}
	,onLabelSelect: function(a0) {
		(tink_state_Observable.get_value(this.__coco_onLabelSelect))(a0);
	}
	,onNoResults: function(a0) {
		(tink_state_Observable.get_value(this.__coco_onNoResults))(a0);
	}
	,onShow: function() {
		return (tink_state_Observable.get_value(this.__coco_onShow))();
	}
	,onHide: function() {
		return (tink_state_Observable.get_value(this.__coco_onHide))();
	}
	,onSearch: function() {
		return (tink_state_Observable.get_value(this.__coco_onSearch))();
	}
	,render: function() {
		var hxxMeta = { ref : $bind(this,this.setup)};
		var t = tink_domspec_ClassName.add(tink_state_Observable.get_value(this.__coco_className),tink_domspec_ClassName.ofString("ui selection dropdown"));
		if(tink_state_Observable.get_value(this.__coco_multiple)) {
			t = tink_domspec_ClassName.add(t,tink_domspec_ClassName.ofString("multiple normal"));
		}
		var attr;
		switch(tink_state_Observable.get_value(this.__coco_entries)._hx_index) {
		case 0:
			attr = tink_domspec_ClassName.ofString("loading");
			break;
		case 1:
			attr = null;
			break;
		case 2:
			attr = tink_domspec_ClassName.ofString("error");
			break;
		}
		var attr1 = { className : tink_domspec_ClassName.add(t,attr)};
		var __r = [];
		var hxxMeta1 = { };
		__r.push(coconut_vdom_Html.INPUT.vnode({ type : "hidden", name : tink_state_Observable.get_value(this.__coco_name), value : Std.string(tink_state_Observable.get_value(this.__coco_value))},hxxMeta1.key,hxxMeta1.ref));
		var hxxMeta1 = { };
		var __r1 = [];
		__r.push(coconut_vdom_Html.I.vnode({ className : tink_domspec_ClassName.ofString("dropdown icon")},hxxMeta1.key,hxxMeta1.ref,__r1));
		var hxxMeta1 = { };
		var attr = { className : tink_domspec_ClassName.ofString("default text")};
		var s = tink_state_Observable.get_value(this.__coco_defaultText);
		var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
		__r.push(coconut_vdom_Html.DIV.vnode(attr,hxxMeta1.key,hxxMeta1.ref,[children]));
		var hxxMeta1 = { };
		var attr = { className : tink_domspec_ClassName.ofString("menu")};
		var __r1 = [];
		var _g = tink_state_Observable.get_value(this.__coco_entries);
		if(_g._hx_index == 1) {
			var _g1 = new tink_pure_NodeIterator(_g.result);
			while(_g1.list.length > 0) {
				var entry = _g1.next();
				var hxxMeta2 = { };
				var attr2 = { className : tink_domspec_ClassName.ofString("item"), attributes : { "data-value" : Std.string(entry.value)}};
				var s = entry.name;
				var children = s == null ? null : coconut_vdom__$Html_Text.inst.vnode(s,null,null,null);
				__r1.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,[children]));
			}
		} else {
			var hxxMeta2 = { };
			var attr2 = { className : tink_domspec_ClassName.ofString("item"), attributes : { "data-value" : "def"}};
			var children = [coconut_vdom__$Html_Text.inst.vnode("defVal",null,null,null)];
			__r1.push(coconut_vdom_Html.DIV.vnode(attr2,hxxMeta2.key,hxxMeta2.ref,children));
		}
		__r.push(coconut_vdom_Html.DIV.vnode(attr,hxxMeta1.key,hxxMeta1.ref,__r1));
		return coconut_vdom_Html.DIV.vnode(attr1,hxxMeta.key,hxxMeta.ref,__r);
	}
	,getClassName: function() {
		var t = tink_domspec_ClassName.add(tink_state_Observable.get_value(this.__coco_className),tink_domspec_ClassName.ofString("ui selection dropdown"));
		if(tink_state_Observable.get_value(this.__coco_multiple)) {
			t = tink_domspec_ClassName.add(t,tink_domspec_ClassName.ofString("multiple normal"));
		}
		var tmp;
		switch(tink_state_Observable.get_value(this.__coco_entries)._hx_index) {
		case 0:
			tmp = tink_domspec_ClassName.ofString("loading");
			break;
		case 1:
			tmp = null;
			break;
		case 2:
			tmp = tink_domspec_ClassName.ofString("error");
			break;
		}
		return tink_domspec_ClassName.add(t,tmp);
	}
	,setup: function(e) {
		var _gthis = this;
		var t = $(e);
		t.dropdown({ onChange : function(value,text) {
			if(tink_state_Observable.get_value(_gthis.__coco_onChange) != null) {
				(tink_state_Observable.get_value(_gthis.__coco_onChange))(value);
			}
		}, clearable : tink_state_Observable.get_value(this.__coco_clearable), ignoreCase : tink_state_Observable.get_value(this.__coco_ignoreCase), ignoreSearchCase : tink_state_Observable.get_value(this.__coco_ignoreSearchCase), allowReselection : tink_state_Observable.get_value(this.__coco_allowReselection), allowAdditions : tink_state_Observable.get_value(this.__coco_allowAdditions), minCharacters : tink_state_Observable.get_value(this.__coco_minCharacters), match : tink_state_Observable.get_value(this.__coco_match), selectOnKeydown : tink_state_Observable.get_value(this.__coco_selectOnKeydown), forceSelection : tink_state_Observable.get_value(this.__coco_forceSelection), allowCategorySelection : tink_state_Observable.get_value(this.__coco_allowCategorySelection), placeholder : tink_state_Observable.get_value(this.__coco_placeholder), useLabels : tink_state_Observable.get_value(this.__coco_useLabels), maxSelections : tink_state_Observable.get_value(this.__coco_maxSelections), glyphWidth : tink_state_Observable.get_value(this.__coco_glyphWidth), label : tink_state_Observable.get_value(this.__coco_label), className : { label : "ui label"}, onAdd : $bind(this,this.onAdd), onRemove : $bind(this,this.onRemove), onLabelRemove : $bind(this,this.onLabelRemove), onNoResults : $bind(this,this.onNoResults), onLabelSelect : $bind(this,this.onLabelSelect), onShow : $bind(this,this.onShow), onHide : $bind(this,this.onHide), onSearch : $bind(this,this.onSearch)});
		if(tink_state_Observable.get_value(this.__coco_value) == null) {
			$(e).dropdown("clear");
		}
	}
	,get_className: function() {
		return tink_state_Observable.get_value(this.__coco_className);
	}
	,get_name: function() {
		return tink_state_Observable.get_value(this.__coco_name);
	}
	,get_value: function() {
		return tink_state_Observable.get_value(this.__coco_value);
	}
	,get_defaultText: function() {
		return tink_state_Observable.get_value(this.__coco_defaultText);
	}
	,get_entries: function() {
		return tink_state_Observable.get_value(this.__coco_entries);
	}
	,get_onChange: function() {
		return tink_state_Observable.get_value(this.__coco_onChange);
	}
	,get_clearable: function() {
		return tink_state_Observable.get_value(this.__coco_clearable);
	}
	,get_ignoreCase: function() {
		return tink_state_Observable.get_value(this.__coco_ignoreCase);
	}
	,get_ignoreSearchCase: function() {
		return tink_state_Observable.get_value(this.__coco_ignoreSearchCase);
	}
	,get_allowReselection: function() {
		return tink_state_Observable.get_value(this.__coco_allowReselection);
	}
	,get_allowAdditions: function() {
		return tink_state_Observable.get_value(this.__coco_allowAdditions);
	}
	,get_hideAdditions: function() {
		return tink_state_Observable.get_value(this.__coco_hideAdditions);
	}
	,get_action: function() {
		return tink_state_Observable.get_value(this.__coco_action);
	}
	,get_minCharacters: function() {
		return tink_state_Observable.get_value(this.__coco_minCharacters);
	}
	,get_match: function() {
		return tink_state_Observable.get_value(this.__coco_match);
	}
	,get_selectOnKeydown: function() {
		return tink_state_Observable.get_value(this.__coco_selectOnKeydown);
	}
	,get_forceSelection: function() {
		return tink_state_Observable.get_value(this.__coco_forceSelection);
	}
	,get_allowCategorySelection: function() {
		return tink_state_Observable.get_value(this.__coco_allowCategorySelection);
	}
	,get_placeholder: function() {
		return tink_state_Observable.get_value(this.__coco_placeholder);
	}
	,get_ignoreDiacritics: function() {
		return tink_state_Observable.get_value(this.__coco_ignoreDiacritics);
	}
	,get_multiple: function() {
		return tink_state_Observable.get_value(this.__coco_multiple);
	}
	,get_useLabels: function() {
		return tink_state_Observable.get_value(this.__coco_useLabels);
	}
	,get_maxSelections: function() {
		return tink_state_Observable.get_value(this.__coco_maxSelections);
	}
	,get_glyphWidth: function() {
		return tink_state_Observable.get_value(this.__coco_glyphWidth);
	}
	,get_label: function() {
		return tink_state_Observable.get_value(this.__coco_label);
	}
	,__initAttributes: function(attributes) {
		this.__coco_className.setData(attributes.className);
		this.__coco_name.setData(attributes.name);
		this.__coco_value.setData(attributes.value);
		this.__coco_defaultText.setData(attributes.defaultText);
		this.__coco_entries.setData(attributes.entries);
		this.__coco_onChange.setData(attributes.onChange);
		this.__coco_clearable.setData(attributes.clearable);
		this.__coco_ignoreCase.setData(attributes.ignoreCase);
		this.__coco_ignoreSearchCase.setData(attributes.ignoreSearchCase);
		this.__coco_allowReselection.setData(attributes.allowReselection);
		this.__coco_allowAdditions.setData(attributes.allowAdditions);
		this.__coco_hideAdditions.setData(attributes.hideAdditions);
		this.__coco_action.setData(attributes.action);
		this.__coco_minCharacters.setData(attributes.minCharacters);
		this.__coco_match.setData(attributes.match);
		this.__coco_selectOnKeydown.setData(attributes.selectOnKeydown);
		this.__coco_forceSelection.setData(attributes.forceSelection);
		this.__coco_allowCategorySelection.setData(attributes.allowCategorySelection);
		this.__coco_placeholder.setData(attributes.placeholder);
		this.__coco_ignoreDiacritics.setData(attributes.ignoreDiacritics);
		this.__coco_multiple.setData(attributes.multiple);
		this.__coco_useLabels.setData(attributes.useLabels);
		this.__coco_maxSelections.setData(attributes.maxSelections);
		this.__coco_glyphWidth.setData(attributes.glyphWidth);
		this.__coco_label.setData(attributes.label);
		this.__coco_onAdd.setData(attributes.onAdd);
		this.__coco_onRemove.setData(attributes.onRemove);
		this.__coco_onLabelCreate.setData(attributes.onLabelCreate);
		this.__coco_onLabelRemove.setData(attributes.onLabelRemove);
		this.__coco_onLabelSelect.setData(attributes.onLabelSelect);
		this.__coco_onNoResults.setData(attributes.onNoResults);
		this.__coco_onShow.setData(attributes.onShow);
		this.__coco_onHide.setData(attributes.onHide);
		this.__coco_onSearch.setData(attributes.onSearch);
	}
	,__class__: fomantic_Dropdown
});
var fomantic_Icon = function(__coco_data_,implicits) {
	var _gthis = this;
	this._coco_implicits = implicits;
	this.__coco_disabled = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(false,null));
	this.__coco_size = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_loading = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(false,null));
	this.__coco_outline = new coconut_ui_internal_Slot(this,null,new tink_state__$Observable_ConstObservable(false,null));
	this.__coco_img = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_act = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_toolTip = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_className = new coconut_ui_internal_Slot(this,null,null);
	this.__coco_classes = new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		var b = tink_state_Observable.get_value(_gthis.__coco_className);
		if(tink_state_Observable.get_value(_gthis.__coco_disabled)) {
			b = tink_domspec_ClassName.add(b,tink_domspec_ClassName.ofString("disabled"));
		}
		if(tink_state_Observable.get_value(_gthis.__coco_loading)) {
			b = tink_domspec_ClassName.add(b,tink_domspec_ClassName.ofString("loading"));
		}
		if(tink_state_Observable.get_value(_gthis.__coco_act) != null) {
			b = tink_domspec_ClassName.add(b,tink_domspec_ClassName.ofString("link"));
		}
		if(tink_state_Observable.get_value(_gthis.__coco_outline)) {
			b = tink_domspec_ClassName.add(b,tink_domspec_ClassName.ofString("outline"));
		}
		return b;
	}),null,null);
	this.__initAttributes(__coco_data_);
	coconut_vdom_View.call(this,function() {
		return _gthis.render();
	},null,null,null,null);
};
fomantic_Icon.__name__ = true;
fomantic_Icon.get___factory = function() {
	var _g = fomantic_Icon.__factory;
	if(_g == null) {
		return fomantic_Icon.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
			return new fomantic_Icon(__coco_data_,implicits);
		},function(v,attr) {
			v.__initAttributes(attr);
		});
	} else {
		return _g;
	}
};
fomantic_Icon.fromHxx = function(hxxMeta,attributes) {
	var _g = fomantic_Icon.__factory;
	return new coconut_diffing_internal_VWidget(_g == null ? fomantic_Icon.__factory = new coconut_diffing_internal_WidgetFactory(function(__coco_data_,implicits) {
		return new fomantic_Icon(__coco_data_,implicits);
	},function(v,attr) {
		v.__initAttributes(attr);
	}) : _g,attributes,hxxMeta.key,hxxMeta.ref);
};
fomantic_Icon.__super__ = coconut_vdom_View;
fomantic_Icon.prototype = $extend(coconut_vdom_View.prototype,{
	setup: function(el) {
		if(tink_state_Observable.get_value(this.__coco_toolTip) != null) {
			var tmp = tink_state_Observable.get_value(this.__coco_toolTip);
			el.dataset.tooltip = tmp;
		}
	}
	,render: function() {
		var hxxMeta = { ref : $bind(this,this.setup)};
		var __r = [];
		return coconut_vdom_Html.I.vnode({ className : tink_domspec_ClassName.ofString("" + tink_state_Observable.get_value(this.__coco_img) + " icon " + tink_state_Observable.get_value(this.__coco_size) + " " + tink_state_Observable.get_value(this.__coco_classes)), onclick : tink_state_Observable.get_value(this.__coco_act)},hxxMeta.key,hxxMeta.ref,__r);
	}
	,get_disabled: function() {
		return tink_state_Observable.get_value(this.__coco_disabled);
	}
	,get_size: function() {
		return tink_state_Observable.get_value(this.__coco_size);
	}
	,get_loading: function() {
		return tink_state_Observable.get_value(this.__coco_loading);
	}
	,get_outline: function() {
		return tink_state_Observable.get_value(this.__coco_outline);
	}
	,get_img: function() {
		return tink_state_Observable.get_value(this.__coco_img);
	}
	,get_act: function() {
		return tink_state_Observable.get_value(this.__coco_act);
	}
	,get_toolTip: function() {
		return tink_state_Observable.get_value(this.__coco_toolTip);
	}
	,get_className: function() {
		return tink_state_Observable.get_value(this.__coco_className);
	}
	,__initAttributes: function(attributes) {
		this.__coco_disabled.setData(attributes.disabled);
		this.__coco_size.setData(attributes.size);
		this.__coco_loading.setData(attributes.loading);
		this.__coco_outline.setData(attributes.outline);
		this.__coco_img.setData(attributes.img);
		this.__coco_act.setData(attributes.act);
		this.__coco_toolTip.setData(attributes.toolTip);
		this.__coco_className.setData(attributes.className);
	}
	,get_classes: function() {
		return tink_state_Observable.get_value(this.__coco_classes);
	}
	,__class__: fomantic_Icon
});
var fomantic_Types = function() { };
fomantic_Types.__name__ = true;
var haxe_StackItem = $hxEnums["haxe.StackItem"] = { __ename__:true,__constructs__:null
	,CFunction: {_hx_name:"CFunction",_hx_index:0,__enum__:"haxe.StackItem",toString:$estr}
	,Module: ($_=function(m) { return {_hx_index:1,m:m,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Module",$_.__params__ = ["m"],$_)
	,FilePos: ($_=function(s,file,line,column) { return {_hx_index:2,s:s,file:file,line:line,column:column,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="FilePos",$_.__params__ = ["s","file","line","column"],$_)
	,Method: ($_=function(classname,method) { return {_hx_index:3,classname:classname,method:method,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Method",$_.__params__ = ["classname","method"],$_)
	,LocalFunction: ($_=function(v) { return {_hx_index:4,v:v,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="LocalFunction",$_.__params__ = ["v"],$_)
};
haxe_StackItem.__constructs__ = [haxe_StackItem.CFunction,haxe_StackItem.Module,haxe_StackItem.FilePos,haxe_StackItem.Method,haxe_StackItem.LocalFunction];
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.formatOutput = function(v,infos) {
	var str = Std.string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			str += ", " + Std.string(v);
		}
	}
	return pstr + ": " + str;
};
haxe_Log.trace = function(v,infos) {
	var str = haxe_Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ds_Either = $hxEnums["haxe.ds.Either"] = { __ename__:true,__constructs__:null
	,Left: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Left",$_.__params__ = ["v"],$_)
	,Right: ($_=function(v) { return {_hx_index:1,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Right",$_.__params__ = ["v"],$_)
};
haxe_ds_Either.__constructs__ = [haxe_ds_Either.Left,haxe_ds_Either.Right];
var haxe_ds_IntMap = function() {
	this.h = { };
};
haxe_ds_IntMap.__name__ = true;
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	get: function(key) {
		return this.h[key];
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) if(this.h.hasOwnProperty(key)) a.push(key | 0);
		return new haxe_iterators_ArrayIterator(a);
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_Option = $hxEnums["haxe.ds.Option"] = { __ename__:true,__constructs__:null
	,Some: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Option",toString:$estr}; },$_._hx_name="Some",$_.__params__ = ["v"],$_)
	,None: {_hx_name:"None",_hx_index:1,__enum__:"haxe.ds.Option",toString:$estr}
};
haxe_ds_Option.__constructs__ = [haxe_ds_Option.Some,haxe_ds_Option.None];
var haxe_ds__$StringMap_StringMapKeyIterator = function(h) {
	this.h = h;
	this.keys = Object.keys(h);
	this.length = this.keys.length;
	this.current = 0;
};
haxe_ds__$StringMap_StringMapKeyIterator.__name__ = true;
haxe_ds__$StringMap_StringMapKeyIterator.prototype = {
	hasNext: function() {
		return this.current < this.length;
	}
	,next: function() {
		return this.keys[this.current++];
	}
	,__class__: haxe_ds__$StringMap_StringMapKeyIterator
};
var haxe_exceptions_PosException = function(message,previous,pos) {
	haxe_Exception.call(this,message,previous);
	if(pos == null) {
		this.posInfos = { fileName : "(unknown)", lineNumber : 0, className : "(unknown)", methodName : "(unknown)"};
	} else {
		this.posInfos = pos;
	}
};
haxe_exceptions_PosException.__name__ = true;
haxe_exceptions_PosException.__super__ = haxe_Exception;
haxe_exceptions_PosException.prototype = $extend(haxe_Exception.prototype,{
	toString: function() {
		return "" + haxe_Exception.prototype.toString.call(this) + " in " + this.posInfos.className + "." + this.posInfos.methodName + " at " + this.posInfos.fileName + ":" + this.posInfos.lineNumber;
	}
	,__class__: haxe_exceptions_PosException
});
var haxe_exceptions_NotImplementedException = function(message,previous,pos) {
	if(message == null) {
		message = "Not implemented";
	}
	haxe_exceptions_PosException.call(this,message,previous,pos);
};
haxe_exceptions_NotImplementedException.__name__ = true;
haxe_exceptions_NotImplementedException.__super__ = haxe_exceptions_PosException;
haxe_exceptions_NotImplementedException.prototype = $extend(haxe_exceptions_PosException.prototype,{
	__class__: haxe_exceptions_NotImplementedException
});
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var haxe_iterators_MapKeyValueIterator = function(map) {
	this.map = map;
	this.keys = map.keys();
};
haxe_iterators_MapKeyValueIterator.__name__ = true;
haxe_iterators_MapKeyValueIterator.prototype = {
	hasNext: function() {
		return this.keys.hasNext();
	}
	,next: function() {
		var key = this.keys.next();
		return { value : this.map.get(key), key : key};
	}
	,__class__: haxe_iterators_MapKeyValueIterator
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	while(true) {
		if(cc == null) {
			return false;
		}
		if(cc == cl) {
			return true;
		}
		var intf = cc.__interfaces__;
		if(intf != null) {
			var _g = 0;
			var _g1 = intf.length;
			while(_g < _g1) {
				var i = _g++;
				var i1 = intf[i];
				if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
					return true;
				}
			}
		}
		cc = cc.__super__;
	}
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ != null ? $hxEnums[o.__enum__] == cl : false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__implements = function(o,iface) {
	return js_Boot.__interfLoop(js_Boot.getClass(o),iface);
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_jquery_JqEltsIterator = function(j) {
	this.i = 0;
	this.j = j;
};
js_jquery_JqEltsIterator.__name__ = true;
js_jquery_JqEltsIterator.prototype = {
	hasNext: function() {
		return this.i < this.j.length;
	}
	,next: function() {
		return $(this.j[this.i++]);
	}
	,__class__: js_jquery_JqEltsIterator
};
var js_jquery_JqIterator = function(j) {
	this.i = 0;
	this.j = j;
};
js_jquery_JqIterator.__name__ = true;
js_jquery_JqIterator.prototype = {
	hasNext: function() {
		return this.i < this.j.length;
	}
	,next: function() {
		return this.j[this.i++];
	}
	,__class__: js_jquery_JqIterator
};
var js_lib_HaxeIterator = function(jsIterator) {
	this.jsIterator = jsIterator;
	this.lastStep = jsIterator.next();
};
js_lib_HaxeIterator.__name__ = true;
js_lib_HaxeIterator.prototype = {
	hasNext: function() {
		return !this.lastStep.done;
	}
	,next: function() {
		var v = this.lastStep.value;
		this.lastStep = this.jsIterator.next();
		return v;
	}
	,__class__: js_lib_HaxeIterator
};
var tink_Anon = function() { };
tink_Anon.__name__ = true;
tink_Anon.getExistentFields = function(o) {
	var ret = { };
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		ret[f] = true;
	}
	return ret;
};
var tink_core_Annex = function(target) {
	this.target = target;
	this.registry = new haxe_ds_ObjectMap();
};
tink_core_Annex.__name__ = true;
tink_core_Annex.prototype = {
	__class__: tink_core_Annex
};
var tink_core_Callback = {};
tink_core_Callback._new = function(f) {
	return f;
};
tink_core_Callback.toFunction = function(this1) {
	return this1;
};
tink_core_Callback.invoke = function(this1,data) {
	if(tink_core_Callback.depth < 500) {
		tink_core_Callback.depth++;
		this1(data);
		tink_core_Callback.depth--;
	} else {
		tink_core_Callback.defer(function() {
			this1(data);
		});
	}
};
tink_core_Callback.fromNiladic = function(f) {
	return f;
};
tink_core_Callback.fromMany = function(callbacks) {
	return function(v) {
		var _g = 0;
		while(_g < callbacks.length) {
			var callback = callbacks[_g];
			++_g;
			tink_core_Callback.invoke(callback,v);
		}
	};
};
tink_core_Callback.defer = function(f) {
	haxe_Timer.delay(f,0);
};
var tink_core_LinkObject = function() { };
tink_core_LinkObject.__name__ = true;
tink_core_LinkObject.__isInterface__ = true;
tink_core_LinkObject.prototype = {
	__class__: tink_core_LinkObject
};
var tink_core_CallbackLinkRef = function() {
};
tink_core_CallbackLinkRef.__name__ = true;
tink_core_CallbackLinkRef.__interfaces__ = [tink_core_LinkObject];
tink_core_CallbackLinkRef.prototype = {
	cancel: function() {
		var this1 = this.link;
		if(this1 != null) {
			this1.cancel();
		}
	}
	,__class__: tink_core_CallbackLinkRef
};
var tink_core_CallbackLink = {};
tink_core_CallbackLink._new = function(link) {
	var this1 = new tink_core_SimpleLink(link);
	return this1;
};
tink_core_CallbackLink.cancel = function(this1) {
	if(this1 != null) {
		this1.cancel();
	}
};
tink_core_CallbackLink.dissolve = function(this1) {
	if(this1 != null) {
		this1.cancel();
	}
};
tink_core_CallbackLink.noop = function() {
};
tink_core_CallbackLink.toFunction = function(this1) {
	if(this1 == null) {
		return tink_core_CallbackLink.noop;
	} else {
		return $bind(this1,this1.cancel);
	}
};
tink_core_CallbackLink.toCallback = function(this1) {
	if(this1 == null) {
		return tink_core_CallbackLink.noop;
	} else {
		return $bind(this1,this1.cancel);
	}
};
tink_core_CallbackLink.fromFunction = function(f) {
	var this1 = new tink_core_SimpleLink(f);
	return this1;
};
tink_core_CallbackLink.join = function(this1,b) {
	return new tink_core__$Callback_LinkPair(this1,b);
};
tink_core_CallbackLink.fromMany = function(callbacks) {
	var this1 = new tink_core_SimpleLink(function() {
		if(callbacks != null) {
			var _g = 0;
			while(_g < callbacks.length) {
				var cb = callbacks[_g];
				++_g;
				if(cb != null) {
					cb.cancel();
				}
			}
		} else {
			callbacks = null;
		}
	});
	return this1;
};
var tink_core_SimpleLink = function(f) {
	this.f = f;
};
tink_core_SimpleLink.__name__ = true;
tink_core_SimpleLink.__interfaces__ = [tink_core_LinkObject];
tink_core_SimpleLink.prototype = {
	cancel: function() {
		if(this.f != null) {
			this.f();
			this.f = null;
		}
	}
	,__class__: tink_core_SimpleLink
};
var tink_core__$Callback_LinkPair = function(a,b) {
	this.dissolved = false;
	this.a = a;
	this.b = b;
};
tink_core__$Callback_LinkPair.__name__ = true;
tink_core__$Callback_LinkPair.__interfaces__ = [tink_core_LinkObject];
tink_core__$Callback_LinkPair.prototype = {
	cancel: function() {
		if(!this.dissolved) {
			this.dissolved = true;
			var this1 = this.a;
			if(this1 != null) {
				this1.cancel();
			}
			var this1 = this.b;
			if(this1 != null) {
				this1.cancel();
			}
			this.a = null;
			this.b = null;
		}
	}
	,__class__: tink_core__$Callback_LinkPair
};
var tink_core__$Callback_ListCell = function(cb,list) {
	if(cb == null) {
		throw haxe_Exception.thrown("callback expected but null received");
	}
	this.cb = cb;
	this.list = list;
};
tink_core__$Callback_ListCell.__name__ = true;
tink_core__$Callback_ListCell.__interfaces__ = [tink_core_LinkObject];
tink_core__$Callback_ListCell.prototype = {
	invoke: function(data) {
		if(this.list != null) {
			this.cb(data);
		}
	}
	,clear: function() {
		this.cb = null;
		this.list = null;
	}
	,cancel: function() {
		if(this.list != null) {
			var list = this.list;
			this.cb = null;
			this.list = null;
			if(--list.used <= list.cells.length >> 1) {
				list.compact();
			}
		}
	}
	,__class__: tink_core__$Callback_ListCell
};
var tink_core_Disposable = function() { };
tink_core_Disposable.__name__ = true;
tink_core_Disposable.__isInterface__ = true;
tink_core_Disposable.prototype = {
	__class__: tink_core_Disposable
};
var tink_core_OwnedDisposable = function() { };
tink_core_OwnedDisposable.__name__ = true;
tink_core_OwnedDisposable.__isInterface__ = true;
tink_core_OwnedDisposable.__interfaces__ = [tink_core_Disposable];
tink_core_OwnedDisposable.prototype = {
	__class__: tink_core_OwnedDisposable
};
var tink_core_SimpleDisposable = function(dispose) {
	this.disposeHandlers = [];
	this.f = dispose;
};
tink_core_SimpleDisposable.__name__ = true;
tink_core_SimpleDisposable.__interfaces__ = [tink_core_OwnedDisposable];
tink_core_SimpleDisposable.noop = function() {
};
tink_core_SimpleDisposable.prototype = {
	get_disposed: function() {
		return this.disposeHandlers == null;
	}
	,ondispose: function(d) {
		var _g = this.disposeHandlers;
		if(_g == null) {
			d();
		} else {
			_g.push(d);
		}
	}
	,dispose: function() {
		var _g = this.disposeHandlers;
		if(_g != null) {
			this.disposeHandlers = null;
			var f = this.f;
			this.f = tink_core_SimpleDisposable.noop;
			f();
			var _g1 = 0;
			while(_g1 < _g.length) {
				var h = _g[_g1];
				++_g1;
				h();
			}
		}
	}
	,__class__: tink_core_SimpleDisposable
};
var tink_core_CallbackList = function(destructive) {
	if(destructive == null) {
		destructive = false;
	}
	this.onfill = function() {
	};
	this.ondrain = function() {
	};
	this.busy = false;
	this.queue = [];
	this.used = 0;
	var _gthis = this;
	tink_core_SimpleDisposable.call(this,function() {
		if(!_gthis.busy) {
			_gthis.destroy();
		}
	});
	this.destructive = destructive;
	this.cells = [];
};
tink_core_CallbackList.__name__ = true;
tink_core_CallbackList.__super__ = tink_core_SimpleDisposable;
tink_core_CallbackList.prototype = $extend(tink_core_SimpleDisposable.prototype,{
	get_length: function() {
		return this.used;
	}
	,release: function() {
		if(--this.used <= this.cells.length >> 1) {
			this.compact();
		}
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this.cells;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.cb = null;
			c.list = null;
		}
		this.queue = null;
		this.cells = null;
		if(this.used > 0) {
			this.used = 0;
			var fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		}
	}
	,drain: function() {
		var fn = this.ondrain;
		if(tink_core_Callback.depth < 500) {
			tink_core_Callback.depth++;
			fn();
			tink_core_Callback.depth--;
		} else {
			tink_core_Callback.defer(fn);
		}
	}
	,add: function(cb) {
		if(this.disposeHandlers == null) {
			return null;
		}
		var node = new tink_core__$Callback_ListCell(cb,this);
		this.cells.push(node);
		if(this.used++ == 0) {
			var fn = this.onfill;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		}
		return node;
	}
	,invoke: function(data) {
		var _gthis = this;
		if(tink_core_Callback.depth < 500) {
			tink_core_Callback.depth++;
			if(_gthis.disposeHandlers != null) {
				if(_gthis.busy) {
					if(_gthis.destructive != true) {
						var _g = $bind(_gthis,_gthis.invoke);
						var data1 = data;
						var tmp = function() {
							_g(data1);
						};
						_gthis.queue.push(tmp);
					}
				} else {
					_gthis.busy = true;
					if(_gthis.destructive) {
						_gthis.dispose();
					}
					var length = _gthis.cells.length;
					var _g1 = 0;
					while(_g1 < length) {
						var i = _g1++;
						var _this = _gthis.cells[i];
						if(_this.list != null) {
							_this.cb(data);
						}
					}
					_gthis.busy = false;
					if(_gthis.disposeHandlers == null) {
						_gthis.destroy();
					} else {
						if(_gthis.used < _gthis.cells.length) {
							_gthis.compact();
						}
						if(_gthis.queue.length > 0) {
							(_gthis.queue.shift())();
						}
					}
				}
			}
			tink_core_Callback.depth--;
		} else {
			tink_core_Callback.defer(function() {
				if(_gthis.disposeHandlers != null) {
					if(_gthis.busy) {
						if(_gthis.destructive != true) {
							var _g = $bind(_gthis,_gthis.invoke);
							var data1 = data;
							var tmp = function() {
								_g(data1);
							};
							_gthis.queue.push(tmp);
						}
					} else {
						_gthis.busy = true;
						if(_gthis.destructive) {
							_gthis.dispose();
						}
						var length = _gthis.cells.length;
						var _g1 = 0;
						while(_g1 < length) {
							var i = _g1++;
							var _this = _gthis.cells[i];
							if(_this.list != null) {
								_this.cb(data);
							}
						}
						_gthis.busy = false;
						if(_gthis.disposeHandlers == null) {
							_gthis.destroy();
						} else {
							if(_gthis.used < _gthis.cells.length) {
								_gthis.compact();
							}
							if(_gthis.queue.length > 0) {
								(_gthis.queue.shift())();
							}
						}
					}
				}
			});
		}
	}
	,compact: function() {
		if(this.busy) {
			return;
		} else if(this.used == 0) {
			this.resize(0);
			var fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		} else {
			var compacted = 0;
			var _g = 0;
			var _g1 = this.cells.length;
			while(_g < _g1) {
				var i = _g++;
				var _g2 = this.cells[i];
				if(_g2.cb != null) {
					if(compacted != i) {
						this.cells[compacted] = _g2;
					}
					if(++compacted == this.used) {
						break;
					}
				}
			}
			this.resize(this.used);
		}
	}
	,resize: function(length) {
		this.cells.length = length;
	}
	,clear: function() {
		if(this.busy) {
			this.queue.push($bind(this,this.clear));
		}
		var _g = 0;
		var _g1 = this.cells;
		while(_g < _g1.length) {
			var cell = _g1[_g];
			++_g;
			cell.cb = null;
			cell.list = null;
		}
		this.resize(0);
	}
	,__class__: tink_core_CallbackList
});
var tink_core_AlreadyDisposed = function() {
};
tink_core_AlreadyDisposed.__name__ = true;
tink_core_AlreadyDisposed.__interfaces__ = [tink_core_OwnedDisposable];
tink_core_AlreadyDisposed.prototype = {
	get_disposed: function() {
		return true;
	}
	,ondispose: function(d) {
		d();
	}
	,dispose: function() {
	}
	,__class__: tink_core_AlreadyDisposed
};
var tink_core_TypedError = function(code,message,pos) {
	if(code == null) {
		code = 500;
	}
	this.isTinkError = true;
	this.code = code;
	this.message = message;
	this.pos = pos;
	this.exceptionStack = [];
	this.callStack = [];
};
tink_core_TypedError.__name__ = true;
tink_core_TypedError.withData = function(code,message,data,pos) {
	return tink_core_TypedError.typed(code,message,data,pos);
};
tink_core_TypedError.typed = function(code,message,data,pos) {
	var ret = new tink_core_TypedError(code,message,pos);
	ret.data = data;
	return ret;
};
tink_core_TypedError.ofJsError = function(e,pos) {
	return tink_core_TypedError.withData(500,e.message,e,pos);
};
tink_core_TypedError.asError = function(v) {
	if(v != null && v.isTinkError) {
		return v;
	} else {
		return null;
	}
};
tink_core_TypedError.catchExceptions = function(f,report,pos) {
	try {
		return tink_core_Outcome.Success(f());
	} catch( _g ) {
		var e = tink_core_TypedError.asError(haxe_Exception.caught(_g).unwrap());
		return tink_core_Outcome.Failure(e == null ? report == null ? tink_core_TypedError.withData(null,"Unexpected Error",e,pos) : report(e) : e);
	}
};
tink_core_TypedError.reporter = function(code,message,pos) {
	return function(e) {
		return tink_core_TypedError.withData(code,message,e,pos);
	};
};
tink_core_TypedError.rethrow = function(any) {
	throw haxe_Exception.thrown(any);
};
tink_core_TypedError.tryFinally = function(f,cleanup) {
	try { return f(); } finally { cleanup(); }
	return null;
};
tink_core_TypedError.prototype = {
	printPos: function() {
		return this.pos.className + "." + this.pos.methodName + ":" + this.pos.lineNumber;
	}
	,toString: function() {
		var ret = "Error#" + this.code + ": " + this.message;
		if(this.pos != null) {
			ret += " @ " + this.printPos();
		}
		return ret;
	}
	,toPromise: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(this)));
	}
	,throwSelf: function() {
		var any = this;
		throw haxe_Exception.thrown(any);
	}
	,toJsError: function() {
		var value = this.data;
		var _g = ((value) instanceof Error) ? value : null;
		if(_g == null) {
			return new tink_core__$Error_TinkError(this);
		} else {
			var e = _g;
			return e;
		}
	}
	,__class__: tink_core_TypedError
};
var tink_core_Stack = {};
tink_core_Stack.toString = function(this1) {
	return "Error stack not available. Compile with -D error_stack.";
};
var tink_core__$Error_TinkError = function(e) {
	Error.call(this);
	this.message = e.message;
	this.data = e;
};
tink_core__$Error_TinkError.__name__ = true;
tink_core__$Error_TinkError.__super__ = Error;
tink_core__$Error_TinkError.prototype = $extend(Error.prototype,{
	__class__: tink_core__$Error_TinkError
});
var tink_core__$Future_FutureObject = function() { };
tink_core__$Future_FutureObject.__name__ = true;
tink_core__$Future_FutureObject.__isInterface__ = true;
tink_core__$Future_FutureObject.prototype = {
	__class__: tink_core__$Future_FutureObject
};
var tink_core__$Future_NeverFuture = function() {
};
tink_core__$Future_NeverFuture.__name__ = true;
tink_core__$Future_NeverFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_NeverFuture.prototype = {
	getStatus: function() {
		return tink_core_FutureStatus.NeverEver;
	}
	,handle: function(callback) {
		return null;
	}
	,eager: function() {
	}
	,__class__: tink_core__$Future_NeverFuture
};
var tink_core__$Future_SyncFuture = function(value) {
	this.value = value;
};
tink_core__$Future_SyncFuture.__name__ = true;
tink_core__$Future_SyncFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_SyncFuture.prototype = {
	getStatus: function() {
		return tink_core_FutureStatus.Ready(this.value);
	}
	,handle: function(cb) {
		tink_core_Callback.invoke(cb,tink_core_Lazy.get(this.value));
		return null;
	}
	,eager: function() {
		if(!this.value.isComputed()) {
			tink_core_Lazy.get(this.value);
		}
	}
	,__class__: tink_core__$Future_SyncFuture
};
var tink_core_Future = {};
tink_core_Future.get_status = function(this1) {
	return this1.getStatus();
};
tink_core_Future._new = function(wakeup) {
	var this1 = new tink_core__$Future_SuspendableFuture(wakeup);
	return this1;
};
tink_core_Future.handle = function(this1,callback) {
	return this1.handle(callback);
};
tink_core_Future.eager = function(this1) {
	this1.eager();
	return this1;
};
tink_core_Future.noise = function(this1) {
	if(this1.getStatus()._hx_index == 4) {
		return tink_core_Future.NEVER;
	} else {
		return tink_core_Future.map(this1,function(_) {
			return null;
		});
	}
};
tink_core_Future.first = function(this1,that) {
	var _g = this1;
	switch(_g.getStatus()._hx_index) {
	case 3:
		switch(that.getStatus()._hx_index) {
		case 3:
			return _g;
		case 4:
			return _g;
		default:
			return _g;
		}
		break;
	case 4:
		var v = that;
		return v;
	default:
		switch(that.getStatus()._hx_index) {
		case 3:
			var v = that;
			return v;
		case 4:
			return _g;
		default:
			return new tink_core__$Future_SuspendableFuture(function(fire) {
				return new tink_core__$Callback_LinkPair(this1.handle(fire),that.handle(fire));
			});
		}
	}
};
tink_core_Future.map = function(this1,f,gather) {
	var _g = this1.getStatus();
	switch(_g._hx_index) {
	case 3:
		var this2 = _g.result;
		var f1 = f;
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyFunc(function() {
			return f1(this2.get());
		},this2));
	case 4:
		return tink_core_Future.NEVER;
	default:
		return new tink_core__$Future_SuspendableFuture(function(fire) {
			return this1.handle(function(v) {
				fire(f(v));
			});
		});
	}
};
tink_core_Future.flatMap = function(this1,next,gather) {
	var _g = this1.getStatus();
	switch(_g._hx_index) {
	case 3:
		var l = _g.result;
		return new tink_core__$Future_SuspendableFuture(function(fire) {
			return next(tink_core_Lazy.get(l)).handle(function(v) {
				fire(v);
			});
		});
	case 4:
		return tink_core_Future.NEVER;
	default:
		return new tink_core__$Future_SuspendableFuture(function($yield) {
			var inner = new tink_core_CallbackLinkRef();
			var outer = this1.handle(function(v) {
				var outer = next(v).handle($yield);
				inner.link = outer;
			});
			return new tink_core__$Callback_LinkPair(outer,inner);
		});
	}
};
tink_core_Future.next = function(this1,n) {
	return tink_core_Future.flatMap(this1,n);
};
tink_core_Future.gather = function(this1) {
	return this1;
};
tink_core_Future.merge = function(this1,that,combine) {
	var _g = this1.getStatus();
	var _g1 = that.getStatus();
	if(_g._hx_index == 4) {
		return tink_core_Future.NEVER;
	} else if(_g1._hx_index == 4) {
		return tink_core_Future.NEVER;
	} else {
		return new tink_core__$Future_SuspendableFuture(function($yield) {
			var check = function(v) {
				var _g = this1.getStatus();
				var _g1 = that.getStatus();
				if(_g._hx_index == 3) {
					if(_g1._hx_index == 3) {
						$yield(combine(tink_core_Lazy.get(_g.result),tink_core_Lazy.get(_g1.result)));
					}
				}
			};
			return new tink_core__$Callback_LinkPair(this1.handle(check),that.handle(check));
		});
	}
};
tink_core_Future.flatten = function(f) {
	return tink_core_Future.flatMap(f,function(v) {
		return v;
	});
};
tink_core_Future.ofJsPromise = function(promise) {
	return tink_core_Future.irreversible(function(cb) {
		promise.then(function(a) {
			var _g = cb;
			var a1 = tink_core_Outcome.Success(a);
			tink_core_Callback.defer(function() {
				_g(a1);
			});
		},function(e) {
			cb(tink_core_Outcome.Failure(tink_core_TypedError.withData(null,e.message,e,{ fileName : "tink/core/Future.hx", lineNumber : 158, className : "tink.core._Future.Future_Impl_", methodName : "ofJsPromise"})));
		});
	});
};
tink_core_Future.neverToAny = function(l) {
	return l;
};
tink_core_Future.ofAny = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
};
tink_core_Future.asPromise = function(s) {
	return s;
};
tink_core_Future.ofMany = function(futures,gather) {
	return tink_core_Future.inSequence(futures);
};
tink_core_Future.inParallel = function(futures,concurrency) {
	return tink_core_Future.many(futures,concurrency);
};
tink_core_Future.inSequence = function(futures) {
	return tink_core_Future.many(futures,1);
};
tink_core_Future.many = function(a,concurrency) {
	return tink_core_Future.processMany(a,concurrency,tink_core_Outcome.Success,function(o) {
		return tink_core_OutcomeTools.orNull(o);
	});
};
tink_core_Future.processMany = function(a,concurrency,fn,lift) {
	if(a.length == 0) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(lift(tink_core_Outcome.Success([]))));
	} else {
		var this1 = new tink_core__$Future_SuspendableFuture(function($yield) {
			var links = [];
			var _g = [];
			var _g1 = 0;
			while(_g1 < a.length) {
				++_g1;
				_g.push(null);
			}
			var ret = _g;
			var index = 0;
			var pending = 0;
			var done = false;
			var concurrency1;
			if(concurrency == null) {
				concurrency1 = a.length;
			} else {
				var v = concurrency;
				concurrency1 = v < 1 ? 1 : v > a.length ? a.length : v;
			}
			var fireWhenReady = function() {
				if(index == ret.length) {
					if(pending == 0) {
						var v = lift(tink_core_Outcome.Success(ret));
						done = true;
						$yield(v);
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			};
			var step = null;
			step = function() {
				if(!done && !fireWhenReady()) {
					while(index < ret.length) {
						index += 1;
						var index1 = [index - 1];
						var p = a[index1[0]];
						var check = [(function(index) {
							return function(o) {
								var _g = fn(o);
								switch(_g._hx_index) {
								case 0:
									ret[index[0]] = _g.data;
									fireWhenReady();
									break;
								case 1:
									var _g1 = _g.failure;
									var _g = 0;
									while(_g < links.length) {
										var l = links[_g];
										++_g;
										if(l != null) {
											l.cancel();
										}
									}
									var v = lift(tink_core_Outcome.Failure(_g1));
									done = true;
									$yield(v);
									break;
								}
							};
						})(index1)];
						var _g = p.getStatus();
						if(_g._hx_index == 3) {
							var _hx_tmp;
							_hx_tmp = tink_core_Lazy.get(_g.result);
							check[0](_hx_tmp);
							if(!done) {
								continue;
							}
						} else {
							pending += 1;
							links.push(p.handle((function(check) {
								return function(o) {
									pending -= 1;
									check[0](o);
									if(!done) {
										step();
									}
								};
							})(check)));
						}
						break;
					}
				}
			};
			var _g = 0;
			var _g1 = concurrency1;
			while(_g < _g1) {
				++_g;
				step();
			}
			return tink_core_CallbackLink.fromMany(links);
		});
		return this1;
	}
};
tink_core_Future.lazy = function(l) {
	return new tink_core__$Future_SyncFuture(l);
};
tink_core_Future.sync = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
};
tink_core_Future.isFuture = function(maybeFuture) {
	return js_Boot.__implements(maybeFuture,tink_core__$Future_FutureObject);
};
tink_core_Future.async = function(init,lazy) {
	if(lazy == null) {
		lazy = false;
	}
	var ret = tink_core_Future.irreversible(init);
	if(lazy) {
		return ret;
	} else {
		ret.eager();
		return ret;
	}
};
tink_core_Future.irreversible = function(init) {
	return new tink_core__$Future_SuspendableFuture(function($yield) {
		init($yield);
		return null;
	});
};
tink_core_Future.or = function(a,b) {
	return tink_core_Future.first(a,b);
};
tink_core_Future.either = function(a,b) {
	return tink_core_Future.first(tink_core_Future.map(a,haxe_ds_Either.Left),tink_core_Future.map(b,haxe_ds_Either.Right));
};
tink_core_Future.and = function(a,b) {
	return tink_core_Future.merge(a,b,function(a,b) {
		var this1 = new tink_core_MPair(a,b);
		return this1;
	});
};
tink_core_Future._tryFailingFlatMap = function(f,map) {
	return tink_core_Future.flatMap(f,function(o) {
		switch(o._hx_index) {
		case 0:
			return map(o.data);
		case 1:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(o.failure)));
		}
	});
};
tink_core_Future._tryFlatMap = function(f,map) {
	return tink_core_Future.flatMap(f,function(o) {
		switch(o._hx_index) {
		case 0:
			return tink_core_Future.map(map(o.data),tink_core_Outcome.Success);
		case 1:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(o.failure)));
		}
	});
};
tink_core_Future._tryFailingMap = function(f,map) {
	return tink_core_Future.map(f,function(o) {
		return tink_core_OutcomeTools.flatMap(o,tink_core__$Outcome_OutcomeMapper.withSameError(map));
	});
};
tink_core_Future._tryMap = function(f,map) {
	return tink_core_Future.map(f,function(o) {
		return tink_core_OutcomeTools.map(o,map);
	});
};
tink_core_Future._flatMap = function(f,map) {
	return tink_core_Future.flatMap(f,map);
};
tink_core_Future._map = function(f,map) {
	return tink_core_Future.map(f,map);
};
tink_core_Future.trigger = function() {
	return new tink_core_FutureTrigger();
};
tink_core_Future.delay = function(ms,value) {
	var this1 = tink_core_Future.irreversible(function(cb) {
		haxe_Timer.delay(function() {
			cb(tink_core_Lazy.get(value));
		},ms);
	});
	this1.eager();
	return this1;
};
var tink_core_FutureStatus = $hxEnums["tink.core.FutureStatus"] = { __ename__:true,__constructs__:null
	,Suspended: {_hx_name:"Suspended",_hx_index:0,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Awaited: {_hx_name:"Awaited",_hx_index:1,__enum__:"tink.core.FutureStatus",toString:$estr}
	,EagerlyAwaited: {_hx_name:"EagerlyAwaited",_hx_index:2,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Ready: ($_=function(result) { return {_hx_index:3,result:result,__enum__:"tink.core.FutureStatus",toString:$estr}; },$_._hx_name="Ready",$_.__params__ = ["result"],$_)
	,NeverEver: {_hx_name:"NeverEver",_hx_index:4,__enum__:"tink.core.FutureStatus",toString:$estr}
};
tink_core_FutureStatus.__constructs__ = [tink_core_FutureStatus.Suspended,tink_core_FutureStatus.Awaited,tink_core_FutureStatus.EagerlyAwaited,tink_core_FutureStatus.Ready,tink_core_FutureStatus.NeverEver];
var tink_core_FutureTrigger = function() {
	this.status = tink_core_FutureStatus.Awaited;
	this.list = new tink_core_CallbackList(true);
};
tink_core_FutureTrigger.__name__ = true;
tink_core_FutureTrigger.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core_FutureTrigger.prototype = {
	getStatus: function() {
		return this.status;
	}
	,handle: function(callback) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			tink_core_Callback.invoke(callback,tink_core_Lazy.get(_g.result));
			return null;
		} else {
			var _this = this.list;
			if(_this.disposeHandlers == null) {
				return null;
			} else {
				var node = new tink_core__$Callback_ListCell(callback,_this);
				_this.cells.push(node);
				if(_this.used++ == 0) {
					var fn = _this.onfill;
					if(tink_core_Callback.depth < 500) {
						tink_core_Callback.depth++;
						fn();
						tink_core_Callback.depth--;
					} else {
						tink_core_Callback.defer(fn);
					}
				}
				return node;
			}
		}
	}
	,eager: function() {
	}
	,asFuture: function() {
		return this;
	}
	,trigger: function(result) {
		if(this.status._hx_index == 3) {
			return false;
		} else {
			this.status = tink_core_FutureStatus.Ready(new tink_core__$Lazy_LazyConst(result));
			this.list.invoke(result);
			return true;
		}
	}
	,__class__: tink_core_FutureTrigger
};
var tink_core_JsPromiseTools = function() { };
tink_core_JsPromiseTools.__name__ = true;
tink_core_JsPromiseTools.toSurprise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
tink_core_JsPromiseTools.toPromise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
var tink_core__$Future_SuspendableFuture = function(wakeup) {
	this.status = tink_core_FutureStatus.Suspended;
	var _gthis = this;
	this.wakeup = wakeup;
	this.callbacks = new tink_core_CallbackList(true);
	this.callbacks.ondrain = function() {
		if(_gthis.status == tink_core_FutureStatus.Awaited) {
			_gthis.status = tink_core_FutureStatus.Suspended;
			var this1 = _gthis.link;
			if(this1 != null) {
				this1.cancel();
			}
			_gthis.link = null;
		}
	};
	this.callbacks.onfill = function() {
		if(_gthis.status == tink_core_FutureStatus.Suspended) {
			_gthis.status = tink_core_FutureStatus.Awaited;
			_gthis.arm();
		}
	};
};
tink_core__$Future_SuspendableFuture.__name__ = true;
tink_core__$Future_SuspendableFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_SuspendableFuture.prototype = {
	getStatus: function() {
		return this.status;
	}
	,trigger: function(value) {
		if(this.status._hx_index != 3) {
			this.status = tink_core_FutureStatus.Ready(new tink_core__$Lazy_LazyConst(value));
			var link = this.link;
			this.link = null;
			this.wakeup = null;
			this.callbacks.invoke(value);
			if(link != null) {
				link.cancel();
			}
		}
	}
	,handle: function(callback) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			tink_core_Callback.invoke(callback,tink_core_Lazy.get(_g.result));
			return null;
		} else {
			var _this = this.callbacks;
			if(_this.disposeHandlers == null) {
				return null;
			} else {
				var node = new tink_core__$Callback_ListCell(callback,_this);
				_this.cells.push(node);
				if(_this.used++ == 0) {
					var fn = _this.onfill;
					if(tink_core_Callback.depth < 500) {
						tink_core_Callback.depth++;
						fn();
						tink_core_Callback.depth--;
					} else {
						tink_core_Callback.defer(fn);
					}
				}
				return node;
			}
		}
	}
	,arm: function() {
		var _gthis = this;
		this.link = this.wakeup(function(x) {
			_gthis.trigger(x);
		});
	}
	,eager: function() {
		switch(this.status._hx_index) {
		case 0:
			this.status = tink_core_FutureStatus.EagerlyAwaited;
			this.arm();
			break;
		case 1:
			this.status = tink_core_FutureStatus.EagerlyAwaited;
			break;
		default:
		}
	}
	,__class__: tink_core__$Future_SuspendableFuture
};
var tink_core_Lazy = {};
tink_core_Lazy.get_computed = function(this1) {
	return this1.isComputed();
};
tink_core_Lazy.get = function(this1) {
	this1.compute();
	return this1.get();
};
tink_core_Lazy.fromNoise = function(l) {
	return l;
};
tink_core_Lazy.ofFunc = function(f) {
	return new tink_core__$Lazy_LazyFunc(f);
};
tink_core_Lazy.map = function(this1,f) {
	return new tink_core__$Lazy_LazyFunc(function() {
		return f(this1.get());
	},this1);
};
tink_core_Lazy.flatMap = function(this1,f) {
	return new tink_core__$Lazy_LazyFunc(function() {
		return tink_core_Lazy.get(f(this1.get()));
	},this1);
};
tink_core_Lazy.ofConst = function(c) {
	return new tink_core__$Lazy_LazyConst(c);
};
var tink_core__$Lazy_LazyFunc = function(f,from) {
	this.busy = false;
	this.f = f;
	this.from = from;
};
tink_core__$Lazy_LazyFunc.__name__ = true;
tink_core__$Lazy_LazyFunc.__interfaces__ = [tink_core__$Lazy_LazyObject];
tink_core__$Lazy_LazyFunc.prototype = {
	underlying: function() {
		return this.from;
	}
	,isComputed: function() {
		return this.f == null;
	}
	,get: function() {
		return this.result;
	}
	,compute: function() {
		if(this.busy) {
			throw haxe_Exception.thrown(new tink_core_TypedError(null,"circular lazyness",{ fileName : "tink/core/Lazy.hx", lineNumber : 85, className : "tink.core._Lazy.LazyFunc", methodName : "compute"}));
		}
		var _g = this.f;
		if(_g != null) {
			this.busy = true;
			this.f = null;
			var _g1 = this.from;
			if(_g1 != null) {
				var cur = _g1;
				this.from = null;
				var stack = [];
				while(cur != null && !cur.isComputed()) {
					stack.push(cur);
					cur = cur.underlying();
				}
				stack.reverse();
				var _g1 = 0;
				while(_g1 < stack.length) {
					var c = stack[_g1];
					++_g1;
					c.compute();
				}
			}
			this.result = _g();
			this.busy = false;
		}
	}
	,__class__: tink_core__$Lazy_LazyFunc
};
var tink_core_NamedWith = function(name,value) {
	this.name = name;
	this.value = value;
};
tink_core_NamedWith.__name__ = true;
tink_core_NamedWith.prototype = {
	__class__: tink_core_NamedWith
};
var tink_core_Noise = {};
tink_core_Noise.ofAny = function(t) {
	return null;
};
var tink_core_OptionTools = function() { };
tink_core_OptionTools.__name__ = true;
tink_core_OptionTools.force = function(o,pos) {
	if(o._hx_index == 0) {
		return o.v;
	} else {
		throw haxe_Exception.thrown(new tink_core_TypedError(404,"Some value expected but none found",pos));
	}
};
tink_core_OptionTools.sure = function(o,pos) {
	if(o._hx_index == 0) {
		return o.v;
	} else {
		throw haxe_Exception.thrown(new tink_core_TypedError(404,"Some value expected but none found",pos));
	}
};
tink_core_OptionTools.toOutcome = function(o,pos) {
	switch(o._hx_index) {
	case 0:
		return tink_core_Outcome.Success(o.v);
	case 1:
		return tink_core_Outcome.Failure(new tink_core_TypedError(404,"Some value expected but none found in " + pos.fileName + "@line " + pos.lineNumber,{ fileName : "tink/core/Option.hx", lineNumber : 31, className : "tink.core.OptionTools", methodName : "toOutcome"}));
	}
};
tink_core_OptionTools.or = function(o,l) {
	if(o._hx_index == 0) {
		return o.v;
	} else {
		return tink_core_Lazy.get(l);
	}
};
tink_core_OptionTools.orTry = function(o,fallback) {
	if(o._hx_index == 0) {
		return o;
	} else {
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OptionTools.orNull = function(o) {
	if(o._hx_index == 0) {
		return o.v;
	} else {
		return null;
	}
};
tink_core_OptionTools.filter = function(o,f) {
	if(o._hx_index == 0) {
		if(f(o.v) == false) {
			return haxe_ds_Option.None;
		} else {
			return o;
		}
	} else {
		return o;
	}
};
tink_core_OptionTools.satisfies = function(o,f) {
	if(o._hx_index == 0) {
		return f(o.v);
	} else {
		return false;
	}
};
tink_core_OptionTools.equals = function(o,v) {
	if(o._hx_index == 0) {
		return o.v == v;
	} else {
		return false;
	}
};
tink_core_OptionTools.map = function(o,f) {
	if(o._hx_index == 0) {
		return haxe_ds_Option.Some(f(o.v));
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_OptionTools.flatMap = function(o,f) {
	if(o._hx_index == 0) {
		return f(o.v);
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_OptionTools.iterator = function(o) {
	return new tink_core_OptionIter(o);
};
tink_core_OptionTools.toArray = function(o) {
	if(o._hx_index == 0) {
		return [o.v];
	} else {
		return [];
	}
};
var tink_core_OptionIter = function(o) {
	this.alive = true;
	if(o._hx_index == 0) {
		this.value = o.v;
	} else {
		this.alive = false;
	}
};
tink_core_OptionIter.__name__ = true;
tink_core_OptionIter.prototype = {
	hasNext: function() {
		return this.alive;
	}
	,next: function() {
		this.alive = false;
		return this.value;
	}
	,__class__: tink_core_OptionIter
};
var tink_core_Outcome = $hxEnums["tink.core.Outcome"] = { __ename__:true,__constructs__:null
	,Success: ($_=function(data) { return {_hx_index:0,data:data,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Success",$_.__params__ = ["data"],$_)
	,Failure: ($_=function(failure) { return {_hx_index:1,failure:failure,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Failure",$_.__params__ = ["failure"],$_)
};
tink_core_Outcome.__constructs__ = [tink_core_Outcome.Success,tink_core_Outcome.Failure];
var tink_core_OutcomeTools = function() { };
tink_core_OutcomeTools.__name__ = true;
tink_core_OutcomeTools.sure = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		return outcome.data;
	case 1:
		var _g = outcome.failure;
		var _g1 = tink_core_TypedError.asError(_g);
		if(_g1 == null) {
			throw haxe_Exception.thrown(_g);
		} else {
			return _g1.throwSelf();
		}
		break;
	}
};
tink_core_OutcomeTools.toOption = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		return haxe_ds_Option.Some(outcome.data);
	case 1:
		return haxe_ds_Option.None;
	}
};
tink_core_OutcomeTools.orNull = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		return outcome.data;
	case 1:
		return null;
	}
};
tink_core_OutcomeTools.orUse = function(outcome,fallback) {
	return tink_core_OutcomeTools.or(outcome,fallback);
};
tink_core_OutcomeTools.or = function(outcome,fallback) {
	switch(outcome._hx_index) {
	case 0:
		return outcome.data;
	case 1:
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OutcomeTools.orTry = function(outcome,fallback) {
	switch(outcome._hx_index) {
	case 0:
		return outcome;
	case 1:
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OutcomeTools.equals = function(outcome,to) {
	switch(outcome._hx_index) {
	case 0:
		return outcome.data == to;
	case 1:
		return false;
	}
};
tink_core_OutcomeTools.map = function(outcome,transform) {
	switch(outcome._hx_index) {
	case 0:
		return tink_core_Outcome.Success(transform(outcome.data));
	case 1:
		return tink_core_Outcome.Failure(outcome.failure);
	}
};
tink_core_OutcomeTools.isSuccess = function(outcome) {
	if(outcome._hx_index == 0) {
		return true;
	} else {
		return false;
	}
};
tink_core_OutcomeTools.flatMap = function(o,mapper) {
	return tink_core__$Outcome_OutcomeMapper.apply(mapper,o);
};
tink_core_OutcomeTools.swap = function(outcome,v) {
	switch(outcome._hx_index) {
	case 0:
		return tink_core_Outcome.Success(v);
	case 1:
		return tink_core_Outcome.Failure(outcome.failure);
	}
};
tink_core_OutcomeTools.next = function(outcome,f) {
	switch(outcome._hx_index) {
	case 0:
		return f(outcome.data);
	case 1:
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(outcome.failure)));
	}
};
tink_core_OutcomeTools.attempt = function(f,report) {
	try {
		return tink_core_Outcome.Success(f());
	} catch( _g ) {
		return tink_core_Outcome.Failure(report(haxe_Exception.caught(_g).unwrap()));
	}
};
tink_core_OutcomeTools.flatten = function(o) {
	switch(o._hx_index) {
	case 0:
		var _g = o.data;
		switch(_g._hx_index) {
		case 0:
			return tink_core_Outcome.Success(_g.data);
		case 1:
			return tink_core_Outcome.Failure(_g.failure);
		}
		break;
	case 1:
		return tink_core_Outcome.Failure(o.failure);
	}
};
var tink_core__$Outcome_OutcomeMapper = {};
tink_core__$Outcome_OutcomeMapper._new = function(f) {
	var this1 = { f : f};
	return this1;
};
tink_core__$Outcome_OutcomeMapper.apply = function(this1,o) {
	return this1.f(o);
};
tink_core__$Outcome_OutcomeMapper.withSameError = function(f) {
	return tink_core__$Outcome_OutcomeMapper._new(function(o) {
		switch(o._hx_index) {
		case 0:
			return f(o.data);
		case 1:
			return tink_core_Outcome.Failure(o.failure);
		}
	});
};
tink_core__$Outcome_OutcomeMapper.withEitherError = function(f) {
	return tink_core__$Outcome_OutcomeMapper._new(function(o) {
		switch(o._hx_index) {
		case 0:
			var _g = f(o.data);
			switch(_g._hx_index) {
			case 0:
				return tink_core_Outcome.Success(_g.data);
			case 1:
				return tink_core_Outcome.Failure(haxe_ds_Either.Right(_g.failure));
			}
			break;
		case 1:
			return tink_core_Outcome.Failure(haxe_ds_Either.Left(o.failure));
		}
	});
};
var tink_core_Pair = {};
tink_core_Pair._new = function(a,b) {
	var this1 = new tink_core_MPair(a,b);
	return this1;
};
tink_core_Pair.get_a = function(this1) {
	return this1.a;
};
tink_core_Pair.get_b = function(this1) {
	return this1.b;
};
tink_core_Pair.toBool = function(this1) {
	return this1 != null;
};
tink_core_Pair.isNil = function(this1) {
	return this1 == null;
};
tink_core_Pair.nil = function() {
	return null;
};
var tink_core_MPair = function(a,b) {
	this.a = a;
	this.b = b;
};
tink_core_MPair.__name__ = true;
tink_core_MPair.prototype = {
	__class__: tink_core_MPair
};
var tink_core_ProgressValue = {};
tink_core_ProgressValue._new = function(value,total) {
	var this1 = new tink_core_MPair(value,total);
	var this2 = this1;
	return this2;
};
tink_core_ProgressValue.normalize = function(this1) {
	var o = this1.b;
	if(o._hx_index == 0) {
		return haxe_ds_Option.Some(this1.a / o.v);
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_ProgressValue.get_value = function(this1) {
	return this1.a;
};
tink_core_ProgressValue.get_total = function(this1) {
	return this1.b;
};
var tink_core_Progress = {};
tink_core_Progress.listen = function(this1,cb) {
	return this1.progressed.listen(cb);
};
tink_core_Progress.handle = function(this1,cb) {
	return this1.result.handle(cb);
};
tink_core_Progress.trigger = function() {
	return new tink_core_ProgressTrigger();
};
tink_core_Progress.make = function(f) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		return f(function(value,total) {
			var this1 = new tink_core_MPair(value,total);
			var this2 = this1;
			fire(tink_core_ProgressStatus.InProgress(this2));
		},function(result) {
			fire(tink_core_ProgressStatus.Finished(result));
		});
	});
};
tink_core_Progress.map = function(this1,f) {
	return new tink_core__$Progress_ProgressObject(tink_core_Signal.map(this1.changed,function(s) {
		return tink_core_ProgressStatusTools.map(s,f);
	}),function() {
		return tink_core_ProgressStatusTools.map(this1.getStatus(),f);
	});
};
tink_core_Progress.asFuture = function(this1) {
	return this1.result;
};
tink_core_Progress.promise = function(v) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		var inner = new tink_core_CallbackLinkRef();
		return new tink_core__$Callback_LinkPair(v.handle(function(o) {
			switch(o._hx_index) {
			case 0:
				var this1 = o.data.changed.listen(function(s) {
					fire(tink_core_ProgressStatusTools.map(s,tink_core_Outcome.Success));
				});
				inner.link = this1;
				break;
			case 1:
				fire(tink_core_ProgressStatus.Finished(tink_core_Outcome.Failure(o.failure)));
				break;
			}
		}),inner);
	});
};
tink_core_Progress.flatten = function(v) {
	return tink_core_Progress.map(tink_core_Progress.promise(v),function(o) {
		switch(o._hx_index) {
		case 0:
			var _g = o.data;
			switch(_g._hx_index) {
			case 0:
				return tink_core_Outcome.Success(_g.data);
			case 1:
				return tink_core_Outcome.Failure(_g.failure);
			}
			break;
		case 1:
			return tink_core_Outcome.Failure(o.failure);
		}
	});
};
tink_core_Progress.future = function(v) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		var inner = new tink_core_CallbackLinkRef();
		return new tink_core__$Callback_LinkPair(v.handle(function(p) {
			var this1 = p.changed.listen(fire);
			inner.link = this1;
		}),inner);
	});
};
tink_core_Progress.next = function(this1,f) {
	return tink_core_Future.flatMap(this1.result,f);
};
var tink_core__$Progress_ProgressObject = function(changed,getStatus) {
	this.changed = changed;
	var this1 = new tink_core__$Signal_Suspendable(function(fire) {
		return changed.listen(function(s) {
			if(s._hx_index == 0) {
				fire(s.v);
			}
		});
	},null);
	this.progressed = this1;
	this.getStatus = getStatus;
	var this1 = new tink_core__$Future_SuspendableFuture(function(fire) {
		var _g = getStatus();
		if(_g._hx_index == 1) {
			fire(_g.v);
			return null;
		} else {
			return changed.listen(function(s) {
				if(s._hx_index == 1) {
					fire(s.v);
				}
			});
		}
	});
	this.result = this1;
};
tink_core__$Progress_ProgressObject.__name__ = true;
tink_core__$Progress_ProgressObject.prototype = {
	get_status: function() {
		return this.getStatus();
	}
	,__class__: tink_core__$Progress_ProgressObject
};
var tink_core__$Progress_SuspendableProgress = function(wakeup,status) {
	if(status == null) {
		status = tink_core_ProgressStatus.InProgress(tink_core_ProgressValue.ZERO);
	}
	var disposable = tink_core_AlreadyDisposed.INST;
	var changed;
	switch(status._hx_index) {
	case 0:
		var this1 = new tink_core__$Signal_Suspendable(function(fire) {
			return wakeup(function(s) {
				status = s;
				fire(status);
			});
		},function(d) {
			disposable = d;
		});
		changed = this1;
		break;
	case 1:
		changed = tink_core_Signal.dead();
		break;
	}
	tink_core__$Progress_ProgressObject.call(this,changed,function() {
		return status;
	});
};
tink_core__$Progress_SuspendableProgress.__name__ = true;
tink_core__$Progress_SuspendableProgress.__super__ = tink_core__$Progress_ProgressObject;
tink_core__$Progress_SuspendableProgress.prototype = $extend(tink_core__$Progress_ProgressObject.prototype,{
	noop: function(_,_1) {
		return null;
	}
	,__class__: tink_core__$Progress_SuspendableProgress
});
var tink_core_ProgressTrigger = function(status) {
	this._changed = null;
	var _gthis = this;
	if(status == null) {
		status = tink_core_ProgressStatus.InProgress(tink_core_ProgressValue.ZERO);
		this._status = status;
	}
	tink_core__$Progress_ProgressObject.call(this,(status == null ? false : status._hx_index == 1) ? tink_core_Signal.dead() : this._changed = tink_core_Signal.trigger(),function() {
		return _gthis._status;
	});
};
tink_core_ProgressTrigger.__name__ = true;
tink_core_ProgressTrigger.__super__ = tink_core__$Progress_ProgressObject;
tink_core_ProgressTrigger.prototype = $extend(tink_core__$Progress_ProgressObject.prototype,{
	asProgress: function() {
		return this;
	}
	,progress: function(v,total) {
		if(this._status._hx_index != 1) {
			var this1 = new tink_core_MPair(v,total);
			var this2 = this1;
			this._changed.handlers.invoke(this._status = tink_core_ProgressStatus.InProgress(this2));
		}
	}
	,finish: function(v) {
		if(this._status._hx_index != 1) {
			this._changed.handlers.invoke(this._status = tink_core_ProgressStatus.Finished(v));
		}
	}
	,__class__: tink_core_ProgressTrigger
});
var tink_core_UnitInterval = {};
tink_core_UnitInterval.toPercentageString = function(this1,dp) {
	var m = Math.pow(10,dp);
	var v = Math.round(this1 * m * 100) / m;
	var s = v == null ? "null" : "" + v;
	var _g = s.indexOf(".");
	if(_g == -1) {
		return s + "." + StringTools.lpad("","0",dp) + "%";
	} else if(s.length - _g > dp) {
		return HxOverrides.substr(s,0,dp + _g + 1) + "%";
	} else {
		return StringTools.rpad(s,"0",_g + dp + 1) + "%";
	}
};
var tink_core_ProgressStatus = $hxEnums["tink.core.ProgressStatus"] = { __ename__:true,__constructs__:null
	,InProgress: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"tink.core.ProgressStatus",toString:$estr}; },$_._hx_name="InProgress",$_.__params__ = ["v"],$_)
	,Finished: ($_=function(v) { return {_hx_index:1,v:v,__enum__:"tink.core.ProgressStatus",toString:$estr}; },$_._hx_name="Finished",$_.__params__ = ["v"],$_)
};
tink_core_ProgressStatus.__constructs__ = [tink_core_ProgressStatus.InProgress,tink_core_ProgressStatus.Finished];
var tink_core_ProgressStatusTools = function() { };
tink_core_ProgressStatusTools.__name__ = true;
tink_core_ProgressStatusTools.map = function(p,f) {
	switch(p._hx_index) {
	case 0:
		return tink_core_ProgressStatus.InProgress(p.v);
	case 1:
		return tink_core_ProgressStatus.Finished(f(p.v));
	}
};
var tink_core_TotalTools = function() { };
tink_core_TotalTools.__name__ = true;
tink_core_TotalTools.eq = function(a,b) {
	switch(a._hx_index) {
	case 0:
		if(b._hx_index == 0) {
			return a.v == b.v;
		} else {
			return false;
		}
		break;
	case 1:
		if(b._hx_index == 1) {
			return true;
		} else {
			return false;
		}
		break;
	}
};
var tink_core_ProgressTools = function() { };
tink_core_ProgressTools.__name__ = true;
tink_core_ProgressTools.asPromise = function(p) {
	return p.result;
};
var tink_core_Promise = {};
tink_core_Promise._new = function(f) {
	var this1 = new tink_core__$Future_SuspendableFuture(function(cb) {
		return f(function(v) {
			cb(tink_core_Outcome.Success(v));
		},function(e) {
			cb(tink_core_Outcome.Failure(e));
		});
	});
	var this2 = this1;
	return this2;
};
tink_core_Promise.eager = function(this1) {
	this1.eager();
	return this1;
};
tink_core_Promise.map = function(this1,f) {
	return tink_core_Future.map(this1,f);
};
tink_core_Promise.flatMap = function(this1,f) {
	return tink_core_Future.flatMap(this1,f);
};
tink_core_Promise.tryRecover = function(this1,f) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
		case 1:
			return f(o.failure);
		}
	});
};
tink_core_Promise.recover = function(this1,f) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o.data));
		case 1:
			return f(o.failure);
		}
	});
};
tink_core_Promise.mapError = function(this1,f) {
	return tink_core_Future.map(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			return o;
		case 1:
			return tink_core_Outcome.Failure(f(o.failure));
		}
	});
};
tink_core_Promise.handle = function(this1,cb) {
	return this1.handle(cb);
};
tink_core_Promise.noise = function(this1) {
	if(this1.getStatus()._hx_index == 4) {
		return tink_core_Promise.NEVER;
	} else {
		return tink_core_Promise.next(this1,function(v) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
		});
	}
};
tink_core_Promise.isSuccess = function(this1) {
	return tink_core_Future.map(this1,function(o) {
		return tink_core_OutcomeTools.isSuccess(o);
	});
};
tink_core_Promise.next = function(this1,f,gather) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			return f(o.data);
		case 1:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(o.failure)));
		}
	});
};
tink_core_Promise.swap = function(this1,v) {
	return tink_core_Promise.next(this1,function(_) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(v)));
	});
};
tink_core_Promise.swapError = function(this1,e) {
	return tink_core_Promise.mapError(this1,function(_) {
		return e;
	});
};
tink_core_Promise.merge = function(this1,other,merger,gather) {
	return tink_core_Future.flatMap(tink_core_Future.merge(this1,other,function(a,b) {
		switch(a._hx_index) {
		case 0:
			var _g = a.data;
			switch(b._hx_index) {
			case 0:
				return merger(_g,b.data);
			case 1:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(b.failure)));
			}
			break;
		case 1:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(a.failure)));
		}
	}),function(o) {
		return o;
	});
};
tink_core_Promise.and = function(a,b) {
	return tink_core_Promise.merge(a,b,function(a,b) {
		var this1 = new tink_core_MPair(a,b);
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(this1)));
	});
};
tink_core_Promise.iterate = function(promises,$yield,fallback) {
	return tink_core_Future.irreversible(function(cb) {
		var iter = $getIterator(promises);
		var next = null;
		next = function() {
			if(iter.hasNext()) {
				iter.next().handle(function(o) {
					switch(o._hx_index) {
					case 0:
						$yield(o.data).handle(function(o) {
							switch(o._hx_index) {
							case 0:
								var _g = o.data;
								switch(_g._hx_index) {
								case 0:
									cb(tink_core_Outcome.Success(_g.v));
									break;
								case 1:
									next();
									break;
								}
								break;
							case 1:
								cb(tink_core_Outcome.Failure(o.failure));
								break;
							}
						});
						break;
					case 1:
						cb(tink_core_Outcome.Failure(o.failure));
						break;
					}
				});
			} else {
				fallback.handle(cb);
			}
		};
		next();
	});
};
tink_core_Promise.retry = function(gen,next) {
	var stamp = function() {
		return HxOverrides.now() / 1000 * 1000;
	};
	var start = stamp();
	var attempt = null;
	attempt = function(count) {
		var f = function(error) {
			return tink_core_Promise.next(next({ attempt : count, error : error, elapsed : stamp() - start}),function(_) {
				return attempt(count + 1);
			});
		};
		return tink_core_Future.flatMap(gen(),function(o) {
			switch(o._hx_index) {
			case 0:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
			case 1:
				return f(o.failure);
			}
		});
	};
	return attempt(1);
};
tink_core_Promise.ofJsPromise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
tink_core_Promise.toJsPromise = function(this1) {
	return new Promise(function(resolve,reject) {
		this1.handle(function(o) {
			switch(o._hx_index) {
			case 0:
				resolve(o.data);
				break;
			case 1:
				reject(o.failure.toJsError());
				break;
			}
		});
	});
};
tink_core_Promise.ofSpecific = function(s) {
	return s;
};
tink_core_Promise.fromNever = function(l) {
	return l;
};
tink_core_Promise.ofTrigger = function(f) {
	return f;
};
tink_core_Promise.ofHappyTrigger = function(f) {
	return tink_core_Future.map(f,tink_core_Outcome.Success);
};
tink_core_Promise.ofFuture = function(f) {
	return tink_core_Future.map(f,tink_core_Outcome.Success);
};
tink_core_Promise.ofOutcome = function(o) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
};
tink_core_Promise.ofError = function(e) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
};
tink_core_Promise.ofData = function(d) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(d)));
};
tink_core_Promise.lazy = function(p) {
	var this1 = new tink_core__$Future_SuspendableFuture(function(cb) {
		return tink_core_Lazy.get(p).handle(cb);
	});
	return this1;
};
tink_core_Promise.inParallel = function(a,concurrency) {
	return tink_core_Promise.many(a,concurrency);
};
tink_core_Promise.many = function(a,concurrency) {
	return tink_core_Future.processMany(a,concurrency,function(o) {
		return o;
	},function(o) {
		return o;
	});
};
tink_core_Promise.inSequence = function(a) {
	return tink_core_Promise.many(a,1);
};
tink_core_Promise.cache = function(gen) {
	var p = null;
	return function() {
		var ret = p;
		if(ret == null) {
			var sync = false;
			ret = tink_core_Promise.next(gen(),function(o) {
				o.b.handle(function(_) {
					sync = true;
					p = null;
				});
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(o.a)));
			});
			if(!sync) {
				p = ret;
			}
		}
		return tink_core_Future.map(ret,function(o) {
			if(!tink_core_OutcomeTools.isSuccess(o)) {
				p = null;
			}
			return o;
		});
	};
};
tink_core_Promise.lift = function(p) {
	return p;
};
tink_core_Promise.trigger = function() {
	var this1 = new tink_core_FutureTrigger();
	return this1;
};
tink_core_Promise.resolve = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(v)));
};
tink_core_Promise.reject = function(e) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
};
var tink_core_Next = {};
tink_core_Next.ofSafe = function(f) {
	return function(x) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(x)));
	};
};
tink_core_Next.ofSync = function(f) {
	return function(x) {
		return tink_core_Future.map(f(x),tink_core_Outcome.Success);
	};
};
tink_core_Next.ofSafeSync = function(f) {
	return function(x) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(f(x))));
	};
};
tink_core_Next._chain = function(a,b) {
	return function(v) {
		return tink_core_Promise.next(a(v),b);
	};
};
var tink_core_Recover = {};
tink_core_Recover.ofSync = function(f) {
	return function(e) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(e)));
	};
};
var tink_core_Combiner = {};
tink_core_Combiner.ofSync = function(f) {
	return function(x1,x2) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(x1,x2)));
	};
};
tink_core_Combiner.ofSafe = function(f) {
	return function(x1,x2) {
		return tink_core_Future.map(f(x1,x2),tink_core_Outcome.Success);
	};
};
tink_core_Combiner.ofSafeSync = function(f) {
	return function(x1,x2) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(f(x1,x2))));
	};
};
var tink_core_PromiseTrigger = {};
tink_core_PromiseTrigger._new = function() {
	var this1 = new tink_core_FutureTrigger();
	return this1;
};
tink_core_PromiseTrigger.resolve = function(this1,v) {
	return this1.trigger(tink_core_Outcome.Success(v));
};
tink_core_PromiseTrigger.reject = function(this1,e) {
	return this1.trigger(tink_core_Outcome.Failure(e));
};
tink_core_PromiseTrigger.asPromise = function(this1) {
	return this1;
};
var tink_core_Ref = {};
tink_core_Ref._new = function() {
	var this1 = new Array(1);
	var this2 = this1;
	return this2;
};
tink_core_Ref.get_value = function(this1) {
	return this1[0];
};
tink_core_Ref.set_value = function(this1,param) {
	return this1[0] = param;
};
tink_core_Ref.toString = function(this1) {
	return "@[" + Std.string(this1[0]) + "]";
};
tink_core_Ref.to = function(v) {
	var this1 = new Array(1);
	var this2 = this1;
	var ret = this2;
	ret[0] = v;
	return ret;
};
var tink_core_Gather = {};
tink_core_Gather._new = function(v) {
	return v;
};
tink_core_Gather.ofBool = function(b) {
	return b;
};
var tink_core_Signal = {};
tink_core_Signal._new = function(f,init) {
	var this1 = new tink_core__$Signal_Suspendable(f,init);
	return this1;
};
tink_core_Signal.handle = function(this1,handler) {
	return this1.listen(handler);
};
tink_core_Signal.map = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			fire(f(v));
		});
	});
};
tink_core_Signal.flatMap = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			f(v).handle(fire);
		});
	});
};
tink_core_Signal.filter = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			if(f(v)) {
				fire(v);
			}
		});
	});
};
tink_core_Signal.select = function(this1,selector,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			var _g = selector(v);
			if(_g._hx_index == 0) {
				fire(_g.v);
			}
		});
	});
};
tink_core_Signal.join = function(this1,that,gather) {
	if(this1.get_disposed()) {
		return that;
	} else if(that.get_disposed()) {
		return this1;
	} else {
		return new tink_core__$Signal_Suspendable(function(fire) {
			var cb = fire;
			return new tink_core__$Callback_LinkPair(this1.listen(cb),that.listen(cb));
		},function(self) {
			var release = function() {
				if(this1.get_disposed() && that.get_disposed()) {
					self.dispose();
				}
			};
			this1.ondispose(release);
			that.ondispose(release);
		});
	}
};
tink_core_Signal.nextTime = function(this1,condition) {
	return tink_core_Signal.pickNext(this1,function(v) {
		if(condition == null || condition(v)) {
			return haxe_ds_Option.Some(v);
		} else {
			return haxe_ds_Option.None;
		}
	});
};
tink_core_Signal.pickNext = function(this1,selector) {
	var ret = new tink_core_FutureTrigger();
	var link = null;
	link = this1.listen(function(v) {
		var _g = selector(v);
		switch(_g._hx_index) {
		case 0:
			ret.trigger(_g.v);
			break;
		case 1:
			break;
		}
	});
	ret.handle(link == null ? tink_core_CallbackLink.noop : ($_=link,$bind($_,$_.cancel)));
	return ret;
};
tink_core_Signal.until = function(this1,end) {
	return new tink_core__$Signal_Suspendable(function($yield) {
		return this1.listen($yield);
	},function(self) {
		end.handle($bind(self,self.dispose));
	});
};
tink_core_Signal.next = function(this1,condition) {
	return tink_core_Signal.nextTime(this1,condition);
};
tink_core_Signal.noise = function(this1) {
	return tink_core_Signal.map(this1,function(_) {
		return null;
	});
};
tink_core_Signal.gather = function(this1) {
	return this1;
};
tink_core_Signal.create = function(f) {
	var this1 = new tink_core__$Signal_Suspendable(f,null);
	return this1;
};
tink_core_Signal.generate = function(generator,init) {
	var this1 = new tink_core__$Signal_Suspendable(function(fire) {
		generator(fire);
		return null;
	},init);
	return this1;
};
tink_core_Signal.trigger = function() {
	return new tink_core_SignalTrigger();
};
tink_core_Signal.ofClassical = function(add,remove,gather) {
	return new tink_core__$Signal_Suspendable(function(fire) {
		add(fire);
		var _g = remove;
		var a1 = fire;
		var this1 = new tink_core_SimpleLink(function() {
			_g(a1);
		});
		return this1;
	});
};
tink_core_Signal.dead = function() {
	return tink_core__$Signal_Disposed.INST;
};
var tink_core__$Signal_SignalObject = function() { };
tink_core__$Signal_SignalObject.__name__ = true;
tink_core__$Signal_SignalObject.__isInterface__ = true;
tink_core__$Signal_SignalObject.__interfaces__ = [tink_core_Disposable];
tink_core__$Signal_SignalObject.prototype = {
	__class__: tink_core__$Signal_SignalObject
};
var tink_core__$Signal_Disposed = function() {
	tink_core_AlreadyDisposed.call(this);
};
tink_core__$Signal_Disposed.__name__ = true;
tink_core__$Signal_Disposed.__interfaces__ = [tink_core__$Signal_SignalObject];
tink_core__$Signal_Disposed.__super__ = tink_core_AlreadyDisposed;
tink_core__$Signal_Disposed.prototype = $extend(tink_core_AlreadyDisposed.prototype,{
	listen: function(cb) {
		return null;
	}
	,__class__: tink_core__$Signal_Disposed
});
var tink_core__$Signal_Suspendable = function(activate,init) {
	this.handlers = new tink_core_CallbackList();
	var _gthis = this;
	this.activate = activate;
	this.init = init;
	this.handlers.ondrain = function() {
		var this1 = _gthis.subscription;
		if(this1 != null) {
			this1.cancel();
		}
	};
	this.handlers.onfill = function() {
		if(init != null) {
			var f = init;
			init = null;
			f(_gthis);
		}
		_gthis.subscription = activate(($_=_gthis.handlers,$bind($_,$_.invoke)));
	};
};
tink_core__$Signal_Suspendable.__name__ = true;
tink_core__$Signal_Suspendable.__interfaces__ = [tink_core_OwnedDisposable,tink_core__$Signal_SignalObject];
tink_core__$Signal_Suspendable.over = function(s,activate) {
	if(s.get_disposed()) {
		return tink_core_Signal.dead();
	} else {
		var ret = new tink_core__$Signal_Suspendable(activate);
		s.ondispose($bind(ret,ret.dispose));
		return ret;
	}
};
tink_core__$Signal_Suspendable.prototype = {
	get_disposed: function() {
		return this.handlers.disposeHandlers == null;
	}
	,dispose: function() {
		this.handlers.dispose();
	}
	,ondispose: function(handler) {
		this.handlers.ondispose(handler);
	}
	,listen: function(cb) {
		var _this = this.handlers;
		if(_this.disposeHandlers == null) {
			return null;
		} else {
			var node = new tink_core__$Callback_ListCell(cb,_this);
			_this.cells.push(node);
			if(_this.used++ == 0) {
				var fn = _this.onfill;
				if(tink_core_Callback.depth < 500) {
					tink_core_Callback.depth++;
					fn();
					tink_core_Callback.depth--;
				} else {
					tink_core_Callback.defer(fn);
				}
			}
			return node;
		}
	}
	,__class__: tink_core__$Signal_Suspendable
};
var tink_core_SignalTrigger = function() {
	this.handlers = new tink_core_CallbackList();
};
tink_core_SignalTrigger.__name__ = true;
tink_core_SignalTrigger.__interfaces__ = [tink_core_OwnedDisposable,tink_core__$Signal_SignalObject];
tink_core_SignalTrigger.prototype = {
	get_disposed: function() {
		return this.handlers.disposeHandlers == null;
	}
	,dispose: function() {
		this.handlers.dispose();
	}
	,ondispose: function(d) {
		this.handlers.ondispose(d);
	}
	,trigger: function(event) {
		this.handlers.invoke(event);
	}
	,getLength: function() {
		return this.handlers.used;
	}
	,listen: function(cb) {
		var _this = this.handlers;
		if(_this.disposeHandlers == null) {
			return null;
		} else {
			var node = new tink_core__$Callback_ListCell(cb,_this);
			_this.cells.push(node);
			if(_this.used++ == 0) {
				var fn = _this.onfill;
				if(tink_core_Callback.depth < 500) {
					tink_core_Callback.depth++;
					fn();
					tink_core_Callback.depth--;
				} else {
					tink_core_Callback.defer(fn);
				}
			}
			return node;
		}
	}
	,clear: function() {
		this.handlers.clear();
	}
	,asSignal: function() {
		return this;
	}
	,__class__: tink_core_SignalTrigger
};
var tink_domspec_DateTime = {};
tink_domspec_DateTime._new = function(v) {
	return v;
};
tink_domspec_DateTime.ofDate = function(d) {
	return HxOverrides.dateStr(d);
};
var tink_domspec_ClassName = {};
tink_domspec_ClassName._new = function(s) {
	return s;
};
tink_domspec_ClassName.add = function(this1,that) {
	var _g = that;
	var this2 = this1 == null ? _g : _g == null ? this1 : "" + this1 + " " + _g;
	return this2;
};
tink_domspec_ClassName.when = function(this1,cond) {
	var this2 = cond ? this1 : "";
	return this2;
};
tink_domspec_ClassName.ofMap = function(parts) {
	var _g = [];
	var h = parts.h;
	var c_keys = Object.keys(h);
	var c_length = c_keys.length;
	var c_current = 0;
	while(c_current < c_length) {
		var c = c_keys[c_current++];
		if(parts.h[c]) {
			_g.push(tink_domspec_ClassName.ofString(c));
		}
	}
	return tink_domspec_ClassName.ofArray(_g);
};
tink_domspec_ClassName.ofArray = function(parts) {
	var f = tink_domspec_ClassName.ofString;
	var result = new Array(parts.length);
	var _g = 0;
	var _g1 = parts.length;
	while(_g < _g1) {
		var i = _g++;
		result[i] = f(parts[i]);
	}
	return result.join(" ");
};
tink_domspec_ClassName.ofString = function(s) {
	if(s == null) {
		return null;
	} else {
		return StringTools.trim(s);
	}
};
tink_domspec_ClassName.ofDynamicAccess = function(parts) {
	var _g = [];
	var _g1 = 0;
	var _g2 = Reflect.fields(parts);
	while(_g1 < _g2.length) {
		var c = _g2[_g1];
		++_g1;
		if(parts[c]) {
			_g.push(tink_domspec_ClassName.ofString(c));
		}
	}
	return tink_domspec_ClassName.ofArray(_g);
};
var tink_domspec_EventFrom = {};
tink_domspec_EventFrom.get_currentTarget = function(this1) {
	return this1.currentTarget;
};
tink_domspec_EventFrom.get_target = function(this1) {
	return this1.target;
};
tink_domspec_EventFrom.get_src = function(this1) {
	return this1.currentTarget;
};
var tink_domspec_CSSParser = function() { };
tink_domspec_CSSParser.__name__ = true;
tink_domspec_CSSParser.kebabToLower = function(name) {
	var _g = tink_domspec_CSSParser.names.h[name];
	if(_g == null) {
		var this1 = tink_domspec_CSSParser.names;
		var _g1 = [];
		var _this = name.split("-");
		var _g1_current = 0;
		while(_g1_current < _this.length) {
			var _g2_value = _this[_g1_current];
			var _g2_key = _g1_current++;
			if(_g2_key == 0) {
				_g1.push(_g2_value);
			} else {
				_g1.push(_g2_value.charAt(0).toUpperCase() + HxOverrides.substr(_g2_value,1,null));
			}
		}
		var v = _g1.join("");
		this1.h[name] = v;
		return v;
	} else {
		return _g;
	}
};
tink_domspec_CSSParser.parseString = function(s) {
	if(tink_domspec_CSSParser.style == null) {
		tink_domspec_CSSParser.style = window.document.createElement("div").style;
	}
	tink_domspec_CSSParser.style.cssText = s;
	var ret = { };
	var ret1 = ret;
	var _g = 0;
	var _g1 = tink_domspec_CSSParser.style.length;
	while(_g < _g1) {
		var index = _g++;
		var name = tink_domspec_CSSParser.style.item(index);
		ret1[tink_domspec_CSSParser.kebabToLower(name)] = tink_domspec_CSSParser.style.getPropertyValue(name);
	}
	return ret;
};
var tink_macro_Bouncer = function() { };
tink_macro_Bouncer.__name__ = true;
tink_macro_Bouncer.makeOuter = function(a) {
	return null;
};
var tink_macro_DirectType = function() { };
tink_macro_DirectType.__name__ = true;
var tink_pure_FilterResult = {};
tink_pure_FilterResult.include = function(this1) {
	return this1 > 0;
};
tink_pure_FilterResult.stop = function(this1) {
	return (this1 & 3) == 3;
};
tink_pure_FilterResult.fromBool = function(b) {
	if(b) {
		return 1;
	} else {
		return 0;
	}
};
var tink_pure_List = {};
tink_pure_List.get_length = function(this1) {
	if(this1 == null) {
		return 0;
	} else {
		return this1.length;
	}
};
tink_pure_List.first = function(this1,predicate) {
	var _g = new tink_pure_NodeIterator(this1);
	while(_g.list.length > 0) {
		var x = _g.next();
		if(predicate == null || predicate(x)) {
			return haxe_ds_Option.Some(x);
		}
	}
	return haxe_ds_Option.None;
};
tink_pure_List.last = function(this1,predicate) {
	if(this1 == null) {
		return haxe_ds_Option.None;
	} else if(predicate == null) {
		var _last = null;
		_last = function(v) {
			while(true) {
				var _g = v.tails;
				if(_g.length == 0) {
					return haxe_ds_Option.Some(v.value);
				} else {
					v = _g[_g.length - 1];
					continue;
				}
			}
		};
		return _last(this1);
	} else {
		var found = false;
		var ret = null;
		var _g = new tink_pure_NodeIterator(this1);
		while(_g.list.length > 0) {
			var x = _g.next();
			if(predicate(x)) {
				found = true;
				ret = x;
			}
		}
		if(found) {
			return haxe_ds_Option.Some(ret);
		} else {
			return haxe_ds_Option.None;
		}
	}
};
tink_pure_List.get = function(this1,index) {
	if(index < 0) {
		return haxe_ds_Option.None;
	}
	var iter = new tink_pure_NodeIterator(this1);
	var v = null;
	while(index-- >= 0) {
		if(iter.list.length <= 0) {
			return haxe_ds_Option.None;
		}
		v = iter.next();
	}
	return haxe_ds_Option.Some(v);
};
tink_pure_List._new = function() {
	var this1 = null;
	return this1;
};
tink_pure_List.node = function(this1) {
	return this1;
};
tink_pure_List.concat = function(this1,that) {
	if(this1 == null) {
		return that;
	} else if(that == null) {
		return this1;
	} else {
		return new tink_pure__$List_Node(this1.length + (that == null ? 0 : that.length),this1.value,this1.tails.concat([that]));
	}
};
tink_pure_List.sort = function(this1,compare) {
	var arr = tink_pure_List.toArray(this1);
	arr.sort(compare);
	return tink_pure_List.fromArray(arr);
};
tink_pure_List.append = function(this1,value) {
	if(this1 == null) {
		return new tink_pure__$List_Node(1,value);
	} else {
		return new tink_pure__$List_Node(this1.length + 1,this1.value,this1.tails.concat([new tink_pure__$List_Node(1,value)]));
	}
};
tink_pure_List.prepend = function(this1,value) {
	if(this1 == null) {
		return new tink_pure__$List_Node(1,value);
	} else {
		return new tink_pure__$List_Node(this1.length + 1,value,[this1]);
	}
};
tink_pure_List.replace = function(this1,select,generate) {
	var _g = [];
	var _g1 = new tink_pure_NodeIterator(this1);
	while(_g1.list.length > 0) {
		var v = _g1.next();
		if(select(v)) {
			_g.push(generate(v));
		} else {
			_g.push(v);
		}
	}
	return tink_pure_List.fromArray(_g);
};
tink_pure_List.exists = function(this1,predicate) {
	var ret = false;
	var _g = new tink_pure_NodeIterator(this1);
	while(_g.list.length > 0) {
		var x = _g.next();
		if(predicate(x)) {
			ret = true;
			break;
		}
	}
	return ret;
};
tink_pure_List.count = function(this1,predicate) {
	var ret = 0;
	var _g = new tink_pure_NodeIterator(this1);
	while(_g.list.length > 0) {
		var x = _g.next();
		if(predicate(x)) {
			++ret;
		}
	}
	return ret;
};
tink_pure_List.iterator = function(this1) {
	return new tink_pure_NodeIterator(this1);
};
tink_pure_List.toIterable = function(this1) {
	var _e = this1;
	return { iterator : function() {
		return new tink_pure_NodeIterator(_e);
	}};
};
tink_pure_List.filter = function(this1,f) {
	if(this1 == null) {
		return null;
	} else {
		return this1.filter(f);
	}
};
tink_pure_List.map = function(this1,f) {
	var _g = [];
	var _g1 = new tink_pure_NodeIterator(this1);
	while(_g1.list.length > 0) {
		var i = _g1.next();
		_g.push(f(i));
	}
	return tink_pure_List.fromArray(_g);
};
tink_pure_List.select = function(this1,f) {
	var arr = [];
	var _g = new tink_pure_NodeIterator(this1);
	while(_g.list.length > 0) {
		var i = _g.next();
		var _g1 = f(i);
		switch(_g1._hx_index) {
		case 0:
			arr.push(_g1.v);
			break;
		case 1:
			break;
		}
	}
	return tink_pure_List.fromArray(arr);
};
tink_pure_List.fold = function(this1,f,first) {
	var _g = new tink_pure_NodeIterator(this1);
	while(_g.list.length > 0) {
		var x = _g.next();
		first = f(x,first);
	}
	return first;
};
tink_pure_List.single = function(v) {
	return new tink_pure__$List_Node(1,v);
};
tink_pure_List.toArray = function(this1) {
	var _g = [];
	var _g1 = new tink_pure_NodeIterator(this1);
	while(_g1.list.length > 0) {
		var v = _g1.next();
		_g.push(v);
	}
	return _g;
};
tink_pure_List.fromArray = function(i) {
	var ret = null;
	var len = 0;
	var pos = i.length;
	while(pos-- > 0) ret = new tink_pure__$List_Node(++len,i[pos],ret == null ? tink_pure__$List_Node.EMPTY : [ret]);
	return ret;
};
var tink_pure__$List_Node = function(length,value,tails) {
	this.value = value;
	this.length = length;
	this.tails = tails == null ? tink_pure__$List_Node.EMPTY : tails;
};
tink_pure__$List_Node.__name__ = true;
tink_pure__$List_Node.prototype = {
	filter: function(f) {
		var iter = new tink_pure_NodeIterator(this);
		var ret = [];
		while(iter.list.length > 0) {
			var value = iter.next();
			var res = f(value);
			if(res > 0) {
				ret.push(value);
			}
			if((res & 3) == 3) {
				break;
			}
		}
		return tink_pure_List.fromArray(ret);
	}
	,__class__: tink_pure__$List_Node
};
var tink_pure_NodeIterator = function(node) {
	this.list = [];
	if(node != null) {
		this.list.push(node);
	}
};
tink_pure_NodeIterator.__name__ = true;
tink_pure_NodeIterator.prototype = {
	hasNext: function() {
		return this.list.length > 0;
	}
	,next: function() {
		var _g = this.list.pop();
		if(_g == null) {
			return null;
		} else {
			var _g1 = -_g.tails.length;
			while(_g1 < 0) {
				var i = _g1++;
				this.list.push(_g.tails[-i - 1]);
			}
			return _g.value;
		}
	}
	,__class__: tink_pure_NodeIterator
};
var tink_pure__$List_ReplaceSelector = {};
tink_pure__$List_ReplaceSelector.const = function(v) {
	return function(i) {
		return i == v;
	};
};
var tink_pure__$List_ReplaceGenerator = {};
tink_pure__$List_ReplaceGenerator.const = function(v) {
	return function(_) {
		return v;
	};
};
var tink_state_Comparator = {};
tink_state_Comparator.eq = function(this1,a,b) {
	if(this1 == null) {
		return a == b;
	} else {
		return this1(a,b);
	}
};
tink_state_Comparator.unpack = function(this1) {
	return this1;
};
tink_state_Comparator.and = function(this1,that) {
	var _g = that;
	if(this1 == null) {
		return _g;
	} else if(_g == null) {
		return this1;
	} else {
		var c1 = this1;
		var c2 = _g;
		return function(a,b) {
			if(c1(a,b)) {
				return c2(a,b);
			} else {
				return false;
			}
		};
	}
};
tink_state_Comparator.or = function(this1,that) {
	var _g = that;
	if(this1 == null) {
		return _g;
	} else if(_g == null) {
		return this1;
	} else {
		var c1 = this1;
		var c2 = _g;
		return function(a,b) {
			if(!c1(a,b)) {
				return c2(a,b);
			} else {
				return true;
			}
		};
	}
};
tink_state_Comparator.byDerived = function(f) {
	return function(a,b) {
		return f(a) == f(b);
	};
};
var tink_state_Measurement = {};
tink_state_Measurement.get_value = function(this1) {
	return this1.a;
};
tink_state_Measurement.get_becameInvalid = function(this1) {
	return this1.b;
};
tink_state_Measurement._new = function(value,becameInvalid) {
	var this1 = new tink_core_MPair(value,becameInvalid);
	var this2 = this1;
	return this2;
};
var tink_state_Deprecated = {};
tink_state_Deprecated.of = function(v) {
	return v;
};
var tink_state__$Scheduler_SchedulerObject = function() { };
tink_state__$Scheduler_SchedulerObject.__name__ = true;
tink_state__$Scheduler_SchedulerObject.__isInterface__ = true;
tink_state__$Scheduler_SchedulerObject.prototype = {
	__class__: tink_state__$Scheduler_SchedulerObject
};
var tink_state__$Scheduler_DirectScheduler = function() {
	this.queue = null;
};
tink_state__$Scheduler_DirectScheduler.__name__ = true;
tink_state__$Scheduler_DirectScheduler.__interfaces__ = [tink_state__$Scheduler_SchedulerObject];
tink_state__$Scheduler_DirectScheduler.prototype = {
	get_isAtomic: function() {
		return this.queue != null;
	}
	,atomically: function(s,forceNow) {
		var _g = this.queue;
		if(_g == null) {
			this.queue = [];
			tink_core_TypedError.tryFinally($bind(s,s.run),$bind(this,this.processQueue));
		} else if(forceNow) {
			s.run();
		} else {
			_g.push(s);
		}
	}
	,processQueue: function() {
		var error = null;
		var _g = 0;
		var _g1 = this.queue;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			try {
				var wasUpdating = [tink_state_Observable.isUpdating];
				tink_state_Observable.isUpdating = true;
				tink_core_TypedError.tryFinally($bind(s,s.run),(function(wasUpdating) {
					return function() {
						tink_state_Observable.isUpdating = wasUpdating[0];
					};
				})(wasUpdating));
			} catch( _g2 ) {
				error = haxe_Exception.caught(_g2);
			}
		}
		this.queue = null;
		if(error != null) {
			throw haxe_Exception.thrown(error);
		}
	}
	,progress: function(_) {
		return false;
	}
	,schedule: function(s) {
		if(this.queue != null) {
			this.queue.push(s);
		} else {
			var wasUpdating = tink_state_Observable.isUpdating;
			tink_state_Observable.isUpdating = true;
			tink_core_TypedError.tryFinally($bind(s,s.run),function() {
				tink_state_Observable.isUpdating = wasUpdating;
			});
		}
	}
	,__class__: tink_state__$Scheduler_DirectScheduler
};
var tink_state_Scheduler = {};
tink_state_Scheduler.run = function(this1,f) {
	this1.schedule(tink_state__$Scheduler_JustOnce.call(f));
};
tink_state_Scheduler.atomically = function(f,forceNow) {
	tink_state_Scheduler.direct.atomically(tink_state__$Scheduler_JustOnce.call(f),forceNow);
};
tink_state_Scheduler.batched = function(run) {
	return new tink_state__$Scheduler_BatchScheduler(run);
};
tink_state_Scheduler.batcher = function() {
	var later = function(fn) {
		haxe_Timer.delay(fn,10);
	};
	var later1;
	try {
		later1 = window.requestAnimationFrame != null ? function(fn) {
			window.requestAnimationFrame(fn);
		} : later;
	} catch( _g ) {
		later1 = later;
	}
	var asap = function(fn) {
		later1(fn);
	};
	var asap1;
	try {
		var p = Promise.resolve(42);
		asap1 = function(fn) {
			p.then(fn);
		};
	} catch( _g ) {
		asap1 = asap;
	}
	return function(b,isRerun) {
		var _g = $bind(b,b.progress);
		var maxSeconds = .01;
		(isRerun ? later1 : asap1)(function() {
			return _g(maxSeconds);
		});
	};
};
var tink_state__$Scheduler_BatchScheduler = function(run) {
	this.scheduled = false;
	this.queue = [];
	this.run = run;
};
tink_state__$Scheduler_BatchScheduler.__name__ = true;
tink_state__$Scheduler_BatchScheduler.__interfaces__ = [tink_state__$Scheduler_SchedulerObject];
tink_state__$Scheduler_BatchScheduler.prototype = {
	measure: function() {
		return HxOverrides.now() / 1000;
	}
	,progress: function(maxSeconds) {
		var _gthis = this;
		var wasUpdating = tink_state_Observable.isUpdating;
		tink_state_Observable.isUpdating = true;
		return tink_core_TypedError.tryFinally(function() {
			var end = HxOverrides.now() / 1000 + maxSeconds;
			while(true) {
				var old = _gthis.queue;
				_gthis.queue = [];
				var _g = 0;
				while(_g < old.length) {
					var o = old[_g];
					++_g;
					o.run();
				}
				if(!(_gthis.queue.length > 0 && HxOverrides.now() / 1000 < end)) {
					break;
				}
			}
			if(_gthis.queue.length > 0) {
				_gthis.run(_gthis,true);
				return true;
			} else {
				return _gthis.scheduled = false;
			}
		},function() {
			tink_state_Observable.isUpdating = wasUpdating;
		});
	}
	,schedule: function(s) {
		this.queue.push(s);
		if(!this.scheduled) {
			this.scheduled = true;
			this.run(this,false);
		}
	}
	,__class__: tink_state__$Scheduler_BatchScheduler
};
var tink_state_Observable = {};
tink_state_Observable.get_value = function(this1) {
	var ret = this1.getValue();
	if(tink_state_internal_AutoObservable.cur != null) {
		tink_state_internal_AutoObservable.cur.subscribeTo(this1,ret);
	}
	return ret;
};
tink_state_Observable.untracked = function(fn) {
	var before = tink_state_internal_AutoObservable.cur;
	tink_state_internal_AutoObservable.cur = null;
	var ret = fn();
	tink_state_internal_AutoObservable.cur = before;
	return ret;
};
tink_state_Observable.bind = function(this1,callback,comparator,scheduler) {
	if(scheduler == null) {
		scheduler = tink_state_Observable.scheduler;
	}
	return new tink_state_internal_Binding(this1,callback,scheduler,comparator);
};
tink_state_Observable._new = function(get,changed,toString) {
	var this1 = new tink_state_internal_SignalObservable(get,changed,toString);
	return this1;
};
tink_state_Observable.combine = function(this1,that,f) {
	return new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return f(tink_state_Observable.get_value(this1),tink_state_Observable.get_value(that));
	}),null,null);
};
tink_state_Observable.nextTime = function(this1,options,check) {
	return tink_state_Observable.getNext(this1,options,function(v) {
		if(check(v)) {
			return haxe_ds_Option.Some(v);
		} else {
			return haxe_ds_Option.None;
		}
	});
};
tink_state_Observable.getNext = function(this1,options,select) {
	var ret = new tink_core_FutureTrigger();
	var waiting = options != null && options.butNotNow;
	var link = tink_state_Observable.bind(this1,function(value) {
		var out = select(value);
		if(waiting) {
			waiting = out != haxe_ds_Option.None;
		} else {
			switch(out._hx_index) {
			case 0:
				ret.trigger(out.v);
				break;
			case 1:
				break;
			}
		}
	},null,options != null && options.hires ? tink_state_Scheduler.direct : null);
	var _e = link;
	var tmp = function() {
		if(_e != null) {
			_e.cancel();
		}
	};
	ret.handle(tmp);
	return ret;
};
tink_state_Observable.join = function(this1,that) {
	var lastA = null;
	return tink_state_Observable.combine(this1,that,function(a,b) {
		var ret = lastA == a ? b : a;
		lastA = a;
		return ret;
	});
};
tink_state_Observable.map = function(this1,f) {
	return new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		var value = tink_state_Observable.get_value(this1);
		return f(value);
	}),null,null);
};
tink_state_Observable.combineAsync = function(this1,that,f) {
	return new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.async(function() {
		return f(tink_state_Observable.get_value(this1),tink_state_Observable.get_value(that));
	}),null,null);
};
tink_state_Observable.mapAsync = function(this1,f) {
	return new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.async(function() {
		var value = this1.getValue();
		return f(value);
	}),null,null);
};
tink_state_Observable.switchSync = function(this1,cases,dfault) {
	return new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		var v = tink_state_Observable.get_value(this1);
		var _g = 0;
		while(_g < cases.length) {
			var c = cases[_g];
			++_g;
			if(c.when(v)) {
				dfault = c.then;
				break;
			}
		}
		return tink_state_Observable.get_value(tink_core_Lazy.get(dfault));
	}),null,null);
};
tink_state_Observable.schedule = function(f) {
	tink_state_Observable.scheduler.schedule(tink_state__$Scheduler_JustOnce.call(f));
};
tink_state_Observable.updatePending = function(maxSeconds) {
	if(maxSeconds == null) {
		maxSeconds = .01;
	}
	if(!tink_state_Observable.isUpdating) {
		return tink_state_Observable.scheduler.progress(maxSeconds);
	} else {
		return false;
	}
};
tink_state_Observable.updateAll = function() {
	tink_state_Observable.updatePending(Infinity);
};
tink_state_Observable.lift = function(o) {
	return o;
};
tink_state_Observable.ofPromise = function(p) {
	return new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.async(function() {
		return p;
	}),null,null);
};
tink_state_Observable.ignore = function(i) {
};
tink_state_Observable.autorun = function(f,scheduler) {
	var i = 0;
	return tink_state_Observable.bind(new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		f();
		i += 1;
		return i - 1;
	}),null,null),tink_state_Observable.ignore,null,scheduler);
};
tink_state_Observable.create = function(f,comparator,toString) {
	return new tink_state__$Observable_SimpleObservable(f,comparator,toString);
};
tink_state_Observable.auto = function(compute,comparator,toString) {
	return new tink_state_internal_AutoObservable(compute,comparator,toString);
};
tink_state_Observable.const = function(value,toString) {
	return new tink_state__$Observable_ConstObservable(value,toString);
};
tink_state_Observable.eq = function(a,b) {
	if(a == null) {
		if(b == null) {
			return true;
		} else {
			return false;
		}
	} else if(b == null) {
		return false;
	} else {
		return tink_state_Observable.get_value(a) == tink_state_Observable.get_value(b);
	}
};
tink_state_Observable.neq = function(a,b) {
	return !tink_state_Observable.eq(a,b);
};
var tink_state__$Observable_SimpleObservable = function(poll,comparator,toString) {
	this._cache = null;
	tink_state_internal_Invalidator.call(this,toString);
	this._poll = poll;
	this.comparator = comparator;
};
tink_state__$Observable_SimpleObservable.__name__ = true;
tink_state__$Observable_SimpleObservable.__interfaces__ = [tink_state_internal_ObservableObject];
tink_state__$Observable_SimpleObservable.__super__ = tink_state_internal_Invalidator;
tink_state__$Observable_SimpleObservable.prototype = $extend(tink_state_internal_Invalidator.prototype,{
	isValid: function() {
		return this._cache != null;
	}
	,getComparator: function() {
		return this.comparator;
	}
	,reset: function(_) {
		this._cache = null;
		this.fire();
	}
	,poll: function() {
		var count = 0;
		while(this._cache == null) if(++count == tink_state_Observable.MAX_ITERATIONS) {
			throw haxe_Exception.thrown("polling did not conclude after " + tink_state_Observable.MAX_ITERATIONS + " iterations");
		} else {
			this._cache = this._poll();
			this._cache.b.handle($bind(this,this.reset));
		}
		return this._cache;
	}
	,getValue: function() {
		return this.poll().a;
	}
	,__class__: tink_state__$Observable_SimpleObservable
});
var tink_state__$Observable_Transform = {};
tink_state__$Observable_Transform._new = function(f) {
	return f;
};
tink_state__$Observable_Transform.apply = function(this1,value) {
	return this1(value);
};
tink_state__$Observable_Transform.naiveAsync = function(f) {
	var this1 = function(p) {
		switch(p._hx_index) {
		case 0:
			var this1 = new tink_core__$Future_SuspendableFuture(function(_) {
				return null;
			});
			return this1;
		case 1:
			return f(p.result);
		case 2:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(p.error)));
		}
	};
	return this1;
};
tink_state__$Observable_Transform.naive = function(f) {
	var this1 = function(p) {
		switch(p._hx_index) {
		case 0:
			return tink_state_PromisedWith.Loading;
		case 1:
			return tink_state_PromisedWith.Done(f(p.result));
		case 2:
			return tink_state_PromisedWith.Failed(p.error);
		}
	};
	return this1;
};
tink_state__$Observable_Transform.plain = function(f) {
	return f;
};
var tink_state_ObservableTools = function() { };
tink_state_ObservableTools.__name__ = true;
tink_state_ObservableTools.deliver = function(o,initial,failed) {
	return tink_state_Observable.map(o,tink_state__$Observable_Transform.plain(function(p) {
		switch(p._hx_index) {
		case 0:
			return initial;
		case 1:
			initial = p.result;
			return initial;
		case 2:
			if(failed != null) {
				initial = failed(p.error,initial);
				return initial;
			} else {
				return initial;
			}
			break;
		}
	}));
};
tink_state_ObservableTools.flatten = function(o) {
	return new tink_state_internal_AutoObservable(tink_state_internal__$AutoObservable_Computation.sync(function() {
		return tink_state_Observable.get_value(tink_state_Observable.get_value(o));
	}),null,null);
};
var tink_state_PromisedWith = $hxEnums["tink.state.PromisedWith"] = { __ename__:true,__constructs__:null
	,Loading: {_hx_name:"Loading",_hx_index:0,__enum__:"tink.state.PromisedWith",toString:$estr}
	,Done: ($_=function(result) { return {_hx_index:1,result:result,__enum__:"tink.state.PromisedWith",toString:$estr}; },$_._hx_name="Done",$_.__params__ = ["result"],$_)
	,Failed: ($_=function(error) { return {_hx_index:2,error:error,__enum__:"tink.state.PromisedWith",toString:$estr}; },$_._hx_name="Failed",$_.__params__ = ["error"],$_)
};
tink_state_PromisedWith.__constructs__ = [tink_state_PromisedWith.Loading,tink_state_PromisedWith.Done,tink_state_PromisedWith.Failed];
var tink_state_PromisedTools = function() { };
tink_state_PromisedTools.__name__ = true;
tink_state_PromisedTools.next = function(a,f) {
	switch(a._hx_index) {
	case 0:
		return tink_core_Promise.fromNever(tink_core_Promise.NEVER);
	case 1:
		return f(a.result);
	case 2:
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(a.error)));
	}
};
tink_state_PromisedTools.map = function(a,f) {
	switch(a._hx_index) {
	case 0:
		return tink_state_PromisedWith.Loading;
	case 1:
		return tink_state_PromisedWith.Done(f(a.result));
	case 2:
		return tink_state_PromisedWith.Failed(a.error);
	}
};
tink_state_PromisedTools.flatMap = function(a,f) {
	switch(a._hx_index) {
	case 0:
		return tink_state_PromisedWith.Loading;
	case 1:
		return f(a.result);
	case 2:
		return tink_state_PromisedWith.Failed(a.error);
	}
};
tink_state_PromisedTools.toOption = function(p) {
	if(p._hx_index == 1) {
		return haxe_ds_Option.Some(p.result);
	} else {
		return haxe_ds_Option.None;
	}
};
tink_state_PromisedTools.or = function(p,l) {
	if(p._hx_index == 1) {
		return p.result;
	} else {
		return tink_core_Lazy.get(l);
	}
};
tink_state_PromisedTools.orNull = function(p) {
	if(p._hx_index == 1) {
		return p.result;
	} else {
		return null;
	}
};
tink_state_PromisedTools.all = function(p) {
	var ret = [];
	var p1 = $getIterator(p);
	while(p1.hasNext()) {
		var p = p1.next();
		switch(p._hx_index) {
		case 0:
			return tink_state_PromisedWith.Loading;
		case 1:
			ret.push(p.result);
			break;
		case 2:
			return tink_state_PromisedWith.Failed(p.error);
		}
	}
	return tink_state_PromisedWith.Done(ret);
};
tink_state_PromisedTools.merge = function(a,b,combine) {
	switch(a._hx_index) {
	case 1:
		var _g = a.result;
		switch(b._hx_index) {
		case 1:
			return tink_state_PromisedWith.Done(combine(_g,b.result));
		case 2:
			return tink_state_PromisedWith.Failed(b.error);
		default:
			return tink_state_PromisedWith.Loading;
		}
		break;
	case 2:
		return tink_state_PromisedWith.Failed(a.error);
	default:
		if(b._hx_index == 2) {
			return tink_state_PromisedWith.Failed(b.error);
		} else {
			return tink_state_PromisedWith.Loading;
		}
	}
};
var tink_state_Schedulable = function() { };
tink_state_Schedulable.__name__ = true;
tink_state_Schedulable.__isInterface__ = true;
tink_state_Schedulable.prototype = {
	__class__: tink_state_Schedulable
};
var tink_state__$Scheduler_JustOnce = function() {
};
tink_state__$Scheduler_JustOnce.__name__ = true;
tink_state__$Scheduler_JustOnce.__interfaces__ = [tink_state_Schedulable];
tink_state__$Scheduler_JustOnce.call = function(f) {
	var _g = tink_state__$Scheduler_JustOnce.pool.pop();
	var ret = _g == null ? new tink_state__$Scheduler_JustOnce() : _g;
	ret.f = f;
	return ret;
};
tink_state__$Scheduler_JustOnce.prototype = {
	run: function() {
		var f = this.f;
		this.f = null;
		tink_state__$Scheduler_JustOnce.pool.push(this);
		f();
	}
	,__class__: tink_state__$Scheduler_JustOnce
};
var tink_state_State = {};
tink_state_State.get_value = function(this1) {
	var ret = this1.getValue();
	if(tink_state_internal_AutoObservable.cur != null) {
		tink_state_internal_AutoObservable.cur.subscribeTo(this1,ret);
	}
	return ret;
};
tink_state_State.set_value = function(this1,param) {
	this1.set(param);
	return param;
};
tink_state_State._new = function(value,comparator,guard,onStatusChange,toString) {
	var this1 = guard == null ? new tink_state__$State_SimpleState(value,comparator,onStatusChange,toString) : new tink_state__$State_GuardedState(value,guard,comparator,onStatusChange,toString);
	return this1;
};
tink_state_State.observe = function(this1) {
	return this1;
};
tink_state_State.transform = function(this1,rules) {
	return new tink_state__$State_CompoundState(tink_state_Observable.map(this1,tink_state__$Observable_Transform.plain($bind(rules,rules.read))),function(value) {
		this1.set(rules.write(value));
	});
};
tink_state_State.bind = function(this1,cb,comparator,scheduler) {
	return tink_state_Observable.bind(this1,cb,comparator,scheduler);
};
tink_state_State.toggle = function(s) {
	s.set(!s.getValue());
};
tink_state_State.toCallback = function(this1) {
	return $bind(this1,this1.set);
};
tink_state_State.compound = function(source,update,comparator) {
	return new tink_state__$State_CompoundState(source,update,comparator);
};
var tink_state__$State_StateObject = function() { };
tink_state__$State_StateObject.__name__ = true;
tink_state__$State_StateObject.__isInterface__ = true;
tink_state__$State_StateObject.__interfaces__ = [tink_state_internal_ObservableObject];
tink_state__$State_StateObject.prototype = {
	__class__: tink_state__$State_StateObject
};
var tink_state__$State_CompoundState = function(data,set,comparator) {
	this.data = data;
	this.update = set;
	this.comparator = comparator;
};
tink_state__$State_CompoundState.__name__ = true;
tink_state__$State_CompoundState.__interfaces__ = [tink_state__$State_StateObject];
tink_state__$State_CompoundState.prototype = {
	getRevision: function() {
		return this.data.getRevision();
	}
	,isValid: function() {
		return this.data.isValid();
	}
	,getValue: function() {
		return this.data.getValue();
	}
	,onInvalidate: function(i) {
		return this.data.onInvalidate(i);
	}
	,set: function(value) {
		this.update(value);
		return value;
	}
	,getComparator: function() {
		return this.comparator;
	}
	,__class__: tink_state__$State_CompoundState
};
var tink_state__$State_SimpleState = function(value,comparator,onStatusChange,toString) {
	tink_state_internal_Invalidator.call(this,toString);
	this.value = value;
	this.comparator = comparator;
	if(onStatusChange != null) {
		var _g = onStatusChange;
		var a1 = false;
		var tmp = function() {
			_g(a1);
		};
		this.list.ondrain = tmp;
		var _g1 = onStatusChange;
		var a11 = true;
		var tmp = function() {
			_g1(a11);
		};
		this.list.onfill = tmp;
	}
};
tink_state__$State_SimpleState.__name__ = true;
tink_state__$State_SimpleState.__interfaces__ = [tink_state__$State_StateObject];
tink_state__$State_SimpleState.warn = function(s) {
	$global.console.warn(s);
};
tink_state__$State_SimpleState.__super__ = tink_state_internal_Invalidator;
tink_state__$State_SimpleState.prototype = $extend(tink_state_internal_Invalidator.prototype,{
	isValid: function() {
		return true;
	}
	,getValue: function() {
		return this.value;
	}
	,getComparator: function() {
		return this.comparator;
	}
	,set: function(value) {
		if(tink_state_Observable.isUpdating && tink_state_Scheduler.direct.queue == null) {
			$global.console.warn("Updating state in a binding");
		}
		var this1 = this.comparator;
		var b = this.value;
		var tmp;
		if(this1 == null) {
			tmp = value == b;
		} else {
			var f = this1;
			tmp = f(value,b);
		}
		if(!tmp) {
			this.value = value;
			this.fire();
		}
		return value;
	}
	,__class__: tink_state__$State_SimpleState
});
var tink_state__$State_GuardedState = function(value,guard,comparator,onStatusChange,toString) {
	this.guardApplied = false;
	tink_state__$State_SimpleState.call(this,value,comparator,onStatusChange,toString);
	this.guard = guard;
};
tink_state__$State_GuardedState.__name__ = true;
tink_state__$State_GuardedState.__super__ = tink_state__$State_SimpleState;
tink_state__$State_GuardedState.prototype = $extend(tink_state__$State_SimpleState.prototype,{
	getValue: function() {
		if(!this.guardApplied) {
			this.guardApplied = true;
			return this.value = this.guard(this.value);
		} else {
			return this.value;
		}
	}
	,set: function(value) {
		if(!this.guardApplied) {
			this.guardApplied = true;
			this.value = this.guard(this.value);
		}
		return tink_state__$State_SimpleState.prototype.set.call(this,this.guard(value));
	}
	,__class__: tink_state__$State_GuardedState
});
var tink_state_internal__$AutoObservable_Computation = {};
tink_state_internal__$AutoObservable_Computation._new = function(f) {
	return f;
};
tink_state_internal__$AutoObservable_Computation.asyncWithLast = function(f) {
	var link = null;
	var last = haxe_ds_Option.None;
	var ret = tink_state_PromisedWith.Loading;
	var this1 = function(update,_) {
		ret = tink_state_PromisedWith.Loading;
		var prev = link;
		link = f(last).handle(function(o) {
			var update1 = update;
			switch(o._hx_index) {
			case 0:
				var _g = o.data;
				last = haxe_ds_Option.Some(_g);
				ret = tink_state_PromisedWith.Done(_g);
				break;
			case 1:
				ret = tink_state_PromisedWith.Failed(o.failure);
				break;
			}
			update1(ret);
		});
		if(prev != null) {
			prev.cancel();
		}
		return ret;
	};
	return this1;
};
tink_state_internal__$AutoObservable_Computation.async = function(f) {
	var link = null;
	var ret = tink_state_PromisedWith.Loading;
	var this1 = function(update,_) {
		ret = tink_state_PromisedWith.Loading;
		var prev = link;
		link = f().handle(function(o) {
			var update1 = update;
			switch(o._hx_index) {
			case 0:
				ret = tink_state_PromisedWith.Done(o.data);
				break;
			case 1:
				ret = tink_state_PromisedWith.Failed(o.failure);
				break;
			}
			update1(ret);
		});
		if(prev != null) {
			prev.cancel();
		}
		return ret;
	};
	return this1;
};
tink_state_internal__$AutoObservable_Computation.safeAsync = function(f) {
	var link = null;
	var ret = tink_state_PromisedWith.Loading;
	var this1 = function(update,_) {
		ret = tink_state_PromisedWith.Loading;
		var prev = link;
		link = f().handle(function(v) {
			ret = tink_state_PromisedWith.Done(v);
			update(ret);
		});
		if(prev != null) {
			prev.cancel();
		}
		return ret;
	};
	return this1;
};
tink_state_internal__$AutoObservable_Computation.withLast = function(f) {
	var last = haxe_ds_Option.None;
	var this1 = function(_,_1) {
		var ret = f(last);
		last = haxe_ds_Option.Some(ret);
		return ret;
	};
	return this1;
};
tink_state_internal__$AutoObservable_Computation.sync = function(f) {
	var this1 = function(_,_1) {
		return f();
	};
	return this1;
};
var tink_state_internal__$AutoObservable_SubscriptionTo = function(source,cur,owner) {
	this.used = true;
	this.source = source;
	this.last = cur;
	this.lastRev = source.getRevision();
	this.owner = owner;
	if(owner.hot) {
		this.link = this.source.onInvalidate(this.owner);
	}
};
tink_state_internal__$AutoObservable_SubscriptionTo.__name__ = true;
tink_state_internal__$AutoObservable_SubscriptionTo.prototype = {
	isValid: function() {
		return this.source.getRevision() == this.lastRev;
	}
	,hasChanged: function() {
		var nextRev = this.source.getRevision();
		if(nextRev == this.lastRev) {
			return false;
		}
		this.lastRev = nextRev;
		var before = this.last;
		var before1 = tink_state_internal_AutoObservable.cur;
		tink_state_internal_AutoObservable.cur = null;
		var ret = this.source.getValue();
		tink_state_internal_AutoObservable.cur = before1;
		this.last = ret;
		var this1 = this.source.getComparator();
		var a = this.last;
		return !(this1 == null ? a == before : this1(a,before));
	}
	,reuse: function(value) {
		this.used = true;
		this.last = value;
	}
	,disconnect: function() {
		var this1 = this.link;
		if(this1 != null) {
			this1.cancel();
		}
	}
	,connect: function() {
		this.link = this.source.onInvalidate(this.owner);
	}
	,__class__: tink_state_internal__$AutoObservable_SubscriptionTo
};
var tink_state_internal__$AutoObservable_Derived = function() { };
tink_state_internal__$AutoObservable_Derived.__name__ = true;
tink_state_internal__$AutoObservable_Derived.__isInterface__ = true;
tink_state_internal__$AutoObservable_Derived.prototype = {
	__class__: tink_state_internal__$AutoObservable_Derived
};
var tink_state_internal_AutoObservable = function(compute,comparator,toString) {
	this.sync = true;
	var this1 = new Map();
	this.dependencies = this1;
	this.last = null;
	this.status = 0;
	this.hot = false;
	var _gthis = this;
	tink_state_internal_Invalidator.call(this,toString);
	this.compute = compute;
	this.comparator = comparator;
	this.list.onfill = function() {
		_gthis.getValue();
		_gthis.getRevision();
		if(_gthis.subscriptions != null) {
			var _g = 0;
			var _g1 = _gthis.subscriptions;
			while(_g < _g1.length) {
				var s = _g1[_g];
				++_g;
				s.link = s.source.onInvalidate(s.owner);
			}
		}
		_gthis.hot = true;
	};
	this.list.ondrain = function() {
		_gthis.hot = false;
		if(_gthis.subscriptions != null) {
			var _g = 0;
			var _g1 = _gthis.subscriptions;
			while(_g < _g1.length) {
				var s = _g1[_g];
				++_g;
				var this1 = s.link;
				if(this1 != null) {
					this1.cancel();
				}
			}
		}
	};
};
tink_state_internal_AutoObservable.__name__ = true;
tink_state_internal_AutoObservable.__interfaces__ = [tink_state_internal_ObservableObject,tink_state_internal__$AutoObservable_Derived,tink_state_internal_Invalidatable];
tink_state_internal_AutoObservable.computeFor = function(o,fn) {
	var before = tink_state_internal_AutoObservable.cur;
	tink_state_internal_AutoObservable.cur = o;
	var ret = fn();
	tink_state_internal_AutoObservable.cur = before;
	return ret;
};
tink_state_internal_AutoObservable.untracked = function(fn) {
	var before = tink_state_internal_AutoObservable.cur;
	tink_state_internal_AutoObservable.cur = null;
	var ret = fn();
	tink_state_internal_AutoObservable.cur = before;
	return ret;
};
tink_state_internal_AutoObservable.track = function(o) {
	var ret = o.getValue();
	if(tink_state_internal_AutoObservable.cur != null) {
		tink_state_internal_AutoObservable.cur.subscribeTo(o,ret);
	}
	return ret;
};
tink_state_internal_AutoObservable.__super__ = tink_state_internal_Invalidator;
tink_state_internal_AutoObservable.prototype = $extend(tink_state_internal_Invalidator.prototype,{
	getRevision: function() {
		if(this.hot) {
			return this.revision;
		}
		if(this.subscriptions == null) {
			this.getValue();
		}
		var _g = 0;
		var _g1 = this.subscriptions;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			if(s.source.getRevision() > this.revision) {
				return this.revision = tink_state_internal_Revision._new();
			}
		}
		return this.revision;
	}
	,subsValid: function() {
		if(this.subscriptions == null) {
			return false;
		}
		var _g = 0;
		var _g1 = this.subscriptions;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			if(s.source.getRevision() != s.lastRev) {
				return false;
			}
		}
		return true;
	}
	,isValid: function() {
		if(this.status != 0) {
			if(!this.hot) {
				return this.subsValid();
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
	,getComparator: function() {
		return this.comparator;
	}
	,heatup: function() {
		this.getValue();
		this.getRevision();
		if(this.subscriptions != null) {
			var _g = 0;
			var _g1 = this.subscriptions;
			while(_g < _g1.length) {
				var s = _g1[_g];
				++_g;
				s.link = s.source.onInvalidate(s.owner);
			}
		}
		this.hot = true;
	}
	,cooldown: function() {
		this.hot = false;
		if(this.subscriptions != null) {
			var _g = 0;
			var _g1 = this.subscriptions;
			while(_g < _g1.length) {
				var s = _g1[_g];
				++_g;
				var this1 = s.link;
				if(this1 != null) {
					this1.cancel();
				}
			}
		}
	}
	,getValue: function() {
		var _gthis = this;
		var doCompute = function() {
			_gthis.status = 1;
			if(_gthis.subscriptions != null) {
				var _g = 0;
				var _g1 = _gthis.subscriptions;
				while(_g < _g1.length) {
					var s = _g1[_g];
					++_g;
					s.used = false;
				}
			}
			_gthis.subscriptions = [];
			_gthis.sync = true;
			var before = tink_state_internal_AutoObservable.cur;
			tink_state_internal_AutoObservable.cur = _gthis;
			var ret = _gthis.compute(function(v) {
				_gthis.update(v);
			});
			tink_state_internal_AutoObservable.cur = before;
			_gthis.last = ret;
			_gthis.sync = false;
		};
		var prevSubs = this.subscriptions;
		var count = 0;
		while(!this.isValid()) if(++count == tink_state_Observable.MAX_ITERATIONS) {
			throw haxe_Exception.thrown("no result after " + tink_state_Observable.MAX_ITERATIONS + " attempts");
		} else if(this.subscriptions != null) {
			var valid = true;
			var _g = 0;
			var _g1 = this.subscriptions;
			while(_g < _g1.length) {
				var s = _g1[_g];
				++_g;
				var nextRev = s.source.getRevision();
				var tmp;
				if(nextRev == s.lastRev) {
					tmp = false;
				} else {
					s.lastRev = nextRev;
					var before = s.last;
					var before1 = tink_state_internal_AutoObservable.cur;
					tink_state_internal_AutoObservable.cur = null;
					var ret = s.source.getValue();
					tink_state_internal_AutoObservable.cur = before1;
					s.last = ret;
					var this1 = s.source.getComparator();
					var a = s.last;
					tmp = !(this1 == null ? a == before : this1(a,before));
				}
				if(tmp) {
					valid = false;
					break;
				}
			}
			if(valid) {
				this.status = 1;
			} else {
				doCompute();
				if(prevSubs != null) {
					var _g2 = 0;
					while(_g2 < prevSubs.length) {
						var s1 = prevSubs[_g2];
						++_g2;
						if(!s1.used) {
							if(this.hot) {
								var this2 = s1.link;
								if(this2 != null) {
									this2.cancel();
								}
							}
							this.dependencies.delete(s1.source);
						}
					}
				}
			}
		} else {
			doCompute();
		}
		return this.last;
	}
	,update: function(value) {
		if(!this.sync) {
			this.last = value;
			this.fire();
		}
	}
	,subscribeTo: function(source,cur) {
		var _g = this.dependencies.get(source);
		if(_g == null) {
			var sub = new tink_state_internal__$AutoObservable_SubscriptionTo(source,cur,this);
			this.dependencies.set(source,sub);
			this.subscriptions.push(sub);
		} else if(!_g.used) {
			_g.used = true;
			_g.last = cur;
			this.subscriptions.push(_g);
		}
	}
	,invalidate: function() {
		if(this.status == 1) {
			this.status = 0;
			this.fire();
		}
	}
	,__class__: tink_state_internal_AutoObservable
});
var tink_state_internal_Binding = function(data,cb,scheduler,comparator) {
	this.last = null;
	this.status = 0;
	this.data = data;
	this.cb = cb;
	this.scheduler = scheduler == null ? tink_state_Scheduler.direct : scheduler;
	var this1 = data.getComparator();
	var tmp;
	var _g = comparator;
	if(this1 == null) {
		tmp = _g;
	} else if(_g == null) {
		tmp = this1;
	} else {
		var c1 = this1;
		var c2 = _g;
		tmp = function(a,b) {
			if(!c1(a,b)) {
				return c2(a,b);
			} else {
				return true;
			}
		};
	}
	this.comparator = tmp;
	this.link = data.onInvalidate(this);
	tink_core_Callback.invoke(cb,this.last = data.getValue());
};
tink_state_internal_Binding.__name__ = true;
tink_state_internal_Binding.__interfaces__ = [tink_core_LinkObject,tink_state_Schedulable,tink_state_internal_Invalidatable];
tink_state_internal_Binding.prototype = {
	cancel: function() {
		var this1 = this.link;
		if(this1 != null) {
			this1.cancel();
		}
		this.status = 2;
	}
	,invalidate: function() {
		if(this.status == 0) {
			this.status = 1;
			this.scheduler.schedule(this);
		}
	}
	,run: function() {
		switch(this.status) {
		case 1:
			this.status = 0;
			var prev = this.last;
			var next = this.last = this.data.getValue();
			var this1 = this.comparator;
			if(!(this1 == null ? prev == next : this1(prev,next))) {
				tink_core_Callback.invoke(this.cb,next);
			}
			break;
		case 0:case 2:
			break;
		}
	}
	,__class__: tink_state_internal_Binding
};
var tink_state_internal_ObjectMap = {};
tink_state_internal_ObjectMap._new = function() {
	var this1 = new Map();
	return this1;
};
tink_state_internal_ObjectMap.get = function(this1,key) {
	return this1.get(key);
};
tink_state_internal_ObjectMap.set = function(this1,key,value) {
	this1.set(key,value);
	return value;
};
tink_state_internal_ObjectMap.exists = function(this1,key) {
	return this1.has(key);
};
tink_state_internal_ObjectMap.keys = function(this1) {
	try {
		return new js_lib_HaxeIterator(this1.keys());
	} catch( _g ) {
		var keys = [];
		this1.forEach(function(_,k,_1) {
			keys.push(k);
		});
		return new haxe_iterators_ArrayIterator(keys);
	}
};
tink_state_internal_ObjectMap.remove = function(this1,key) {
	return this1.delete(key);
};
tink_state_internal_ObjectMap.forEach = function(this1,f) {
	this1.forEach(f);
};
tink_state_internal_ObjectMap.count = function(this1) {
	return this1.size;
};
var tink_state_internal_Revision = {};
tink_state_internal_Revision._new = function() {
	var this1 = tink_state_internal_Revision.counter += 1.0;
	return this1;
};
tink_state_internal_Revision.join = function(a,b) {
	if(a > b) {
		return a;
	} else {
		return b;
	}
};
var tink_state_internal_SignalObservable = function(get,changed,toString) {
	this.observers = new haxe_ds_ObjectMap();
	this.revision = tink_state_internal_Revision._new();
	this.valid = false;
	var _gthis = this;
	this.get = get;
	this.changed = changed;
	this.changed.listen(function(_) {
		if(_gthis.valid) {
			_gthis.revision = tink_state_internal_Revision._new();
			_gthis.valid = false;
		}
	});
};
tink_state_internal_SignalObservable.__name__ = true;
tink_state_internal_SignalObservable.__interfaces__ = [tink_state_internal_ObservableObject];
tink_state_internal_SignalObservable.prototype = {
	getRevision: function() {
		return this.revision;
	}
	,getValue: function() {
		if(this.valid) {
			return this.value;
		} else {
			this.valid = true;
			return this.value = this.get();
		}
	}
	,isValid: function() {
		return this.valid;
	}
	,getComparator: function() {
		return null;
	}
	,onInvalidate: function(i) {
		var _gthis = this;
		if(this.observers.h[i.__id__]) {
			return null;
		} else {
			this.observers.set(i,true);
			var this1 = this.changed.listen(function(_) {
				i.invalidate();
			});
			var this2 = new tink_core_SimpleLink(function() {
				return _gthis.observers.remove(i);
			});
			return new tink_core__$Callback_LinkPair(this1,this2);
		}
	}
	,__class__: tink_state_internal_SignalObservable
};
var xdom_XDom = function() { };
xdom_XDom.__name__ = true;
xdom_XDom.alert = function(v) {
	window.alert(Std.string(v));
};
xdom_XDom.X = function(value) {
	return value;
};
var xdom_Selector = {};
xdom_Selector._new = function(s) {
	return s;
};
xdom_Selector.prefixed = function(scope,selector,forceId) {
	if(scope.nodeType != 1) {
		return selector;
	}
	var prefix;
	var _g = scope.id;
	if(_g == null) {
		if(forceId || !xdom_XDom.document.documentElement.contains(scope)) {
			prefix = "#" + (scope.id = "_xdom_" + xdom_Selector.ns + "_" + xdom_Selector.counter++);
		} else if(xdom_Selector.hasScope) {
			prefix = ":scope";
		} else {
			var cur = scope;
			var path = [];
			while(true) {
				var _g1 = cur.id;
				if(_g1 == null) {
					path.push(cur.tagName);
				} else if(_g1 == "") {
					path.push(cur.tagName);
				} else {
					path.push("#" + _g1);
					break;
				}
				cur = cur.parentElement;
				if(!(cur != null)) {
					break;
				}
			}
			path.reverse();
			prefix = path.join(">");
		}
	} else if(_g == "") {
		if(forceId || !xdom_XDom.document.documentElement.contains(scope)) {
			prefix = "#" + (scope.id = "_xdom_" + xdom_Selector.ns + "_" + xdom_Selector.counter++);
		} else if(xdom_Selector.hasScope) {
			prefix = ":scope";
		} else {
			var cur = scope;
			var path = [];
			while(true) {
				var _g1 = cur.id;
				if(_g1 == null) {
					path.push(cur.tagName);
				} else if(_g1 == "") {
					path.push(cur.tagName);
				} else {
					path.push("#" + _g1);
					break;
				}
				cur = cur.parentElement;
				if(!(cur != null)) {
					break;
				}
			}
			path.reverse();
			prefix = path.join(">");
		}
	} else {
		prefix = "#" + _g;
	}
	return "" + prefix + " " + selector;
};
var xdom_Wrapped = {};
xdom_Wrapped.get_nodeList = function(this1) {
	if(!this1.nodeList) {
		return [];
	} else {
		return true;
	}
};
xdom_Wrapped.get_children = function(this1) {
	if(!this1.children) {
		return [];
	} else {
		return true;
	}
};
xdom_Wrapped.get_dataset = function(this1) {
	if(!this1.dataset) {
		return { };
	} else {
		return true;
	}
};
xdom_Wrapped.qsa = function(this1,selector) {
	if(this1 != null && this1.querySelectorAll != null) {
		if(this1 == xdom_XDom.document) {
			return xdom_XDom.document.querySelectorAll(selector);
		} else {
			var e = this1;
			return (e.matches(selector) ? [e] : []).concat(xdom_html_Collection.toArray(e.querySelectorAll(xdom_Selector.prefixed(e,selector))));
		}
	} else {
		return xdom_html_Collection.empty();
	}
};
xdom_Wrapped.upcast = function(w) {
	return w;
};
xdom_Wrapped.get_onabort = function(this1) {
	return xdom_html_EventSource.make(this1,"abort");
};
xdom_Wrapped.get_onblur = function(this1) {
	return xdom_html_EventSource.make(this1,"blur");
};
xdom_Wrapped.get_oncanplay = function(this1) {
	return xdom_html_EventSource.make(this1,"canplay");
};
xdom_Wrapped.get_oncanplaythrough = function(this1) {
	return xdom_html_EventSource.make(this1,"canplaythrough");
};
xdom_Wrapped.get_onchange = function(this1) {
	return xdom_html_EventSource.make(this1,"change");
};
xdom_Wrapped.get_onclick = function(this1) {
	return xdom_html_EventSource.make(this1,"click");
};
xdom_Wrapped.get_oncompositionend = function(this1) {
	return xdom_html_EventSource.make(this1,"compositionend");
};
xdom_Wrapped.get_oncompositionstart = function(this1) {
	return xdom_html_EventSource.make(this1,"compositionstart");
};
xdom_Wrapped.get_oncompositionupdate = function(this1) {
	return xdom_html_EventSource.make(this1,"compositionupdate");
};
xdom_Wrapped.get_oncontextmenu = function(this1) {
	return xdom_html_EventSource.make(this1,"contextmenu");
};
xdom_Wrapped.get_oncopy = function(this1) {
	return xdom_html_EventSource.make(this1,"copy");
};
xdom_Wrapped.get_oncut = function(this1) {
	return xdom_html_EventSource.make(this1,"cut");
};
xdom_Wrapped.get_ondblclick = function(this1) {
	return xdom_html_EventSource.make(this1,"dblclick");
};
xdom_Wrapped.get_ondrag = function(this1) {
	return xdom_html_EventSource.make(this1,"drag");
};
xdom_Wrapped.get_ondragend = function(this1) {
	return xdom_html_EventSource.make(this1,"dragend");
};
xdom_Wrapped.get_ondragenter = function(this1) {
	return xdom_html_EventSource.make(this1,"dragenter");
};
xdom_Wrapped.get_ondragleave = function(this1) {
	return xdom_html_EventSource.make(this1,"dragleave");
};
xdom_Wrapped.get_ondragover = function(this1) {
	return xdom_html_EventSource.make(this1,"dragover");
};
xdom_Wrapped.get_ondragstart = function(this1) {
	return xdom_html_EventSource.make(this1,"dragstart");
};
xdom_Wrapped.get_ondrop = function(this1) {
	return xdom_html_EventSource.make(this1,"drop");
};
xdom_Wrapped.get_ondurationchange = function(this1) {
	return xdom_html_EventSource.make(this1,"durationchange");
};
xdom_Wrapped.get_onemptied = function(this1) {
	return xdom_html_EventSource.make(this1,"emptied");
};
xdom_Wrapped.get_onended = function(this1) {
	return xdom_html_EventSource.make(this1,"ended");
};
xdom_Wrapped.get_onerror = function(this1) {
	return xdom_html_EventSource.make(this1,"error");
};
xdom_Wrapped.get_onfocus = function(this1) {
	return xdom_html_EventSource.make(this1,"focus");
};
xdom_Wrapped.get_onfullscreenchange = function(this1) {
	return xdom_html_EventSource.make(this1,"fullscreenchange");
};
xdom_Wrapped.get_onfullscreenerror = function(this1) {
	return xdom_html_EventSource.make(this1,"fullscreenerror");
};
xdom_Wrapped.get_ongotpointercapture = function(this1) {
	return xdom_html_EventSource.make(this1,"gotpointercapture");
};
xdom_Wrapped.get_oninput = function(this1) {
	return xdom_html_EventSource.make(this1,"input");
};
xdom_Wrapped.get_oninvalid = function(this1) {
	return xdom_html_EventSource.make(this1,"invalid");
};
xdom_Wrapped.get_onkeydown = function(this1) {
	return xdom_html_EventSource.make(this1,"keydown");
};
xdom_Wrapped.get_onkeypress = function(this1) {
	return xdom_html_EventSource.make(this1,"keypress");
};
xdom_Wrapped.get_onkeyup = function(this1) {
	return xdom_html_EventSource.make(this1,"keyup");
};
xdom_Wrapped.get_onload = function(this1) {
	return xdom_html_EventSource.make(this1,"load");
};
xdom_Wrapped.get_onloadeddata = function(this1) {
	return xdom_html_EventSource.make(this1,"loadeddata");
};
xdom_Wrapped.get_onloadedmetadata = function(this1) {
	return xdom_html_EventSource.make(this1,"loadedmetadata");
};
xdom_Wrapped.get_onloadstart = function(this1) {
	return xdom_html_EventSource.make(this1,"loadstart");
};
xdom_Wrapped.get_onlostpointercapture = function(this1) {
	return xdom_html_EventSource.make(this1,"lostpointercapture");
};
xdom_Wrapped.get_onmousedown = function(this1) {
	return xdom_html_EventSource.make(this1,"mousedown");
};
xdom_Wrapped.get_onmouseenter = function(this1) {
	return xdom_html_EventSource.make(this1,"mouseenter");
};
xdom_Wrapped.get_onmouseleave = function(this1) {
	return xdom_html_EventSource.make(this1,"mouseleave");
};
xdom_Wrapped.get_onmousemove = function(this1) {
	return xdom_html_EventSource.make(this1,"mousemove");
};
xdom_Wrapped.get_onmouseout = function(this1) {
	return xdom_html_EventSource.make(this1,"mouseout");
};
xdom_Wrapped.get_onmouseover = function(this1) {
	return xdom_html_EventSource.make(this1,"mouseover");
};
xdom_Wrapped.get_onmouseup = function(this1) {
	return xdom_html_EventSource.make(this1,"mouseup");
};
xdom_Wrapped.get_onpaste = function(this1) {
	return xdom_html_EventSource.make(this1,"paste");
};
xdom_Wrapped.get_onpause = function(this1) {
	return xdom_html_EventSource.make(this1,"pause");
};
xdom_Wrapped.get_onplay = function(this1) {
	return xdom_html_EventSource.make(this1,"play");
};
xdom_Wrapped.get_onplaying = function(this1) {
	return xdom_html_EventSource.make(this1,"playing");
};
xdom_Wrapped.get_onpointercancel = function(this1) {
	return xdom_html_EventSource.make(this1,"pointercancel");
};
xdom_Wrapped.get_onpointerdown = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerdown");
};
xdom_Wrapped.get_onpointerenter = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerenter");
};
xdom_Wrapped.get_onpointerleave = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerleave");
};
xdom_Wrapped.get_onpointerlockchange = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerlockchange");
};
xdom_Wrapped.get_onpointerlockerror = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerlockerror");
};
xdom_Wrapped.get_onpointermove = function(this1) {
	return xdom_html_EventSource.make(this1,"pointermove");
};
xdom_Wrapped.get_onpointerout = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerout");
};
xdom_Wrapped.get_onpointerover = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerover");
};
xdom_Wrapped.get_onpointerup = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerup");
};
xdom_Wrapped.get_onprogress = function(this1) {
	return xdom_html_EventSource.make(this1,"progress");
};
xdom_Wrapped.get_onratechange = function(this1) {
	return xdom_html_EventSource.make(this1,"ratechange");
};
xdom_Wrapped.get_onreset = function(this1) {
	return xdom_html_EventSource.make(this1,"reset");
};
xdom_Wrapped.get_onresize = function(this1) {
	return xdom_html_EventSource.make(this1,"resize");
};
xdom_Wrapped.get_onscroll = function(this1) {
	return xdom_html_EventSource.make(this1,"scroll");
};
xdom_Wrapped.get_onseeked = function(this1) {
	return xdom_html_EventSource.make(this1,"seeked");
};
xdom_Wrapped.get_onseeking = function(this1) {
	return xdom_html_EventSource.make(this1,"seeking");
};
xdom_Wrapped.get_onselect = function(this1) {
	return xdom_html_EventSource.make(this1,"select");
};
xdom_Wrapped.get_onshow = function(this1) {
	return xdom_html_EventSource.make(this1,"show");
};
xdom_Wrapped.get_onstalled = function(this1) {
	return xdom_html_EventSource.make(this1,"stalled");
};
xdom_Wrapped.get_onsubmit = function(this1) {
	return xdom_html_EventSource.make(this1,"submit");
};
xdom_Wrapped.get_onsuspend = function(this1) {
	return xdom_html_EventSource.make(this1,"suspend");
};
xdom_Wrapped.get_ontimeupdate = function(this1) {
	return xdom_html_EventSource.make(this1,"timeupdate");
};
xdom_Wrapped.get_ontouchcancel = function(this1) {
	return xdom_html_EventSource.make(this1,"touchcancel");
};
xdom_Wrapped.get_ontouchend = function(this1) {
	return xdom_html_EventSource.make(this1,"touchend");
};
xdom_Wrapped.get_ontouchmove = function(this1) {
	return xdom_html_EventSource.make(this1,"touchmove");
};
xdom_Wrapped.get_ontouchstart = function(this1) {
	return xdom_html_EventSource.make(this1,"touchstart");
};
xdom_Wrapped.get_onvolumechange = function(this1) {
	return xdom_html_EventSource.make(this1,"volumechange");
};
xdom_Wrapped.get_onwaiting = function(this1) {
	return xdom_html_EventSource.make(this1,"waiting");
};
xdom_Wrapped.get_onwheel = function(this1) {
	return xdom_html_EventSource.make(this1,"wheel");
};
var xdom_html_Collection = {};
xdom_html_Collection.get_length = function(this1) {
	return this1.length;
};
xdom_html_Collection.get = function(this1,index) {
	return this1[index];
};
xdom_html_Collection.toArray = function(this1) {
	return Array.prototype.slice.call(this1);
};
xdom_html_Collection.empty = function() {
	return xdom_html_Collection.EMPTY;
};
xdom_html_Collection.qsa = function(this1,selector) {
	var ret = [];
	var _g = 0;
	while(_g < this1.length) {
		var e = this1[_g];
		++_g;
		ret = ret.concat(e.qsa(selector));
	}
	return ret;
};
var xdom_html_Dataset = {};
xdom_html_Dataset.__getProperty = function(this1,name) {
	return this1[name];
};
xdom_html_Dataset.__setProperty = function(this1,name,value) {
	return this1[name] = value;
};
xdom_html_Dataset.keys = function(this1) {
	return Object.getOwnPropertyNames(this1);
};
xdom_html_Dataset.toggle = function(this1,name,force) {
	this1[name] = force == null ? this1[name] != null ? "" : null : !force ? "" : null;
};
var xdom_html_DatasetValue = {};
xdom_html_DatasetValue.toInt = function(this1) {
	return Std.parseInt(this1);
};
xdom_html_DatasetValue.toFloat = function(this1) {
	return parseFloat(this1);
};
xdom_html_DatasetValue.toFlag = function(this1) {
	return this1 != null;
};
xdom_html_DatasetValue.ofFlag = function(flag) {
	if(flag) {
		return "";
	} else {
		return null;
	}
};
xdom_html_DatasetValue.ofNumber = function(f) {
	if(isNaN(f)) {
		return null;
	} else if(f == null) {
		return "null";
	} else {
		return "" + f;
	}
};
xdom_html_DatasetValue.not = function(v) {
	return v != null;
};
xdom_html_DatasetValue.lOrBool = function(v,b) {
	if(v == null) {
		return b;
	} else {
		return true;
	}
};
xdom_html_DatasetValue.rOrBool = function(b,v) {
	if(!b) {
		return v != null;
	} else {
		return true;
	}
};
xdom_html_DatasetValue.lOr = function(v,w) {
	if(v == null) {
		return w != null;
	} else {
		return true;
	}
};
xdom_html_DatasetValue.lAndBool = function(v,b) {
	if(v != null) {
		return b;
	} else {
		return false;
	}
};
xdom_html_DatasetValue.rAndBool = function(b,v) {
	if(b) {
		return v != null;
	} else {
		return false;
	}
};
xdom_html_DatasetValue.lAnd = function(v,w) {
	if(v != null) {
		return w != null;
	} else {
		return false;
	}
};
var xdom_html_Document = {};
xdom_html_Document.get_body = function(this1) {
	return this1.body;
};
xdom_html_Document.getElementById = function(this1,id) {
	return this1.getElementById(id);
};
xdom_html_Document.toNode = function(this1) {
	return this1;
};
xdom_html_Document.get_onabort = function(this1) {
	return xdom_html_EventSource.make(this1,"abort");
};
xdom_html_Document.get_onblur = function(this1) {
	return xdom_html_EventSource.make(this1,"blur");
};
xdom_html_Document.get_oncanplay = function(this1) {
	return xdom_html_EventSource.make(this1,"canplay");
};
xdom_html_Document.get_oncanplaythrough = function(this1) {
	return xdom_html_EventSource.make(this1,"canplaythrough");
};
xdom_html_Document.get_onchange = function(this1) {
	return xdom_html_EventSource.make(this1,"change");
};
xdom_html_Document.get_onclick = function(this1) {
	return xdom_html_EventSource.make(this1,"click");
};
xdom_html_Document.get_oncompositionend = function(this1) {
	return xdom_html_EventSource.make(this1,"compositionend");
};
xdom_html_Document.get_oncompositionstart = function(this1) {
	return xdom_html_EventSource.make(this1,"compositionstart");
};
xdom_html_Document.get_oncompositionupdate = function(this1) {
	return xdom_html_EventSource.make(this1,"compositionupdate");
};
xdom_html_Document.get_oncontextmenu = function(this1) {
	return xdom_html_EventSource.make(this1,"contextmenu");
};
xdom_html_Document.get_oncopy = function(this1) {
	return xdom_html_EventSource.make(this1,"copy");
};
xdom_html_Document.get_oncut = function(this1) {
	return xdom_html_EventSource.make(this1,"cut");
};
xdom_html_Document.get_ondblclick = function(this1) {
	return xdom_html_EventSource.make(this1,"dblclick");
};
xdom_html_Document.get_ondrag = function(this1) {
	return xdom_html_EventSource.make(this1,"drag");
};
xdom_html_Document.get_ondragend = function(this1) {
	return xdom_html_EventSource.make(this1,"dragend");
};
xdom_html_Document.get_ondragenter = function(this1) {
	return xdom_html_EventSource.make(this1,"dragenter");
};
xdom_html_Document.get_ondragleave = function(this1) {
	return xdom_html_EventSource.make(this1,"dragleave");
};
xdom_html_Document.get_ondragover = function(this1) {
	return xdom_html_EventSource.make(this1,"dragover");
};
xdom_html_Document.get_ondragstart = function(this1) {
	return xdom_html_EventSource.make(this1,"dragstart");
};
xdom_html_Document.get_ondrop = function(this1) {
	return xdom_html_EventSource.make(this1,"drop");
};
xdom_html_Document.get_ondurationchange = function(this1) {
	return xdom_html_EventSource.make(this1,"durationchange");
};
xdom_html_Document.get_onemptied = function(this1) {
	return xdom_html_EventSource.make(this1,"emptied");
};
xdom_html_Document.get_onended = function(this1) {
	return xdom_html_EventSource.make(this1,"ended");
};
xdom_html_Document.get_onerror = function(this1) {
	return xdom_html_EventSource.make(this1,"error");
};
xdom_html_Document.get_onfocus = function(this1) {
	return xdom_html_EventSource.make(this1,"focus");
};
xdom_html_Document.get_onfullscreenchange = function(this1) {
	return xdom_html_EventSource.make(this1,"fullscreenchange");
};
xdom_html_Document.get_onfullscreenerror = function(this1) {
	return xdom_html_EventSource.make(this1,"fullscreenerror");
};
xdom_html_Document.get_ongotpointercapture = function(this1) {
	return xdom_html_EventSource.make(this1,"gotpointercapture");
};
xdom_html_Document.get_oninput = function(this1) {
	return xdom_html_EventSource.make(this1,"input");
};
xdom_html_Document.get_oninvalid = function(this1) {
	return xdom_html_EventSource.make(this1,"invalid");
};
xdom_html_Document.get_onkeydown = function(this1) {
	return xdom_html_EventSource.make(this1,"keydown");
};
xdom_html_Document.get_onkeypress = function(this1) {
	return xdom_html_EventSource.make(this1,"keypress");
};
xdom_html_Document.get_onkeyup = function(this1) {
	return xdom_html_EventSource.make(this1,"keyup");
};
xdom_html_Document.get_onload = function(this1) {
	return xdom_html_EventSource.make(this1,"load");
};
xdom_html_Document.get_onloadeddata = function(this1) {
	return xdom_html_EventSource.make(this1,"loadeddata");
};
xdom_html_Document.get_onloadedmetadata = function(this1) {
	return xdom_html_EventSource.make(this1,"loadedmetadata");
};
xdom_html_Document.get_onloadstart = function(this1) {
	return xdom_html_EventSource.make(this1,"loadstart");
};
xdom_html_Document.get_onlostpointercapture = function(this1) {
	return xdom_html_EventSource.make(this1,"lostpointercapture");
};
xdom_html_Document.get_onmousedown = function(this1) {
	return xdom_html_EventSource.make(this1,"mousedown");
};
xdom_html_Document.get_onmouseenter = function(this1) {
	return xdom_html_EventSource.make(this1,"mouseenter");
};
xdom_html_Document.get_onmouseleave = function(this1) {
	return xdom_html_EventSource.make(this1,"mouseleave");
};
xdom_html_Document.get_onmousemove = function(this1) {
	return xdom_html_EventSource.make(this1,"mousemove");
};
xdom_html_Document.get_onmouseout = function(this1) {
	return xdom_html_EventSource.make(this1,"mouseout");
};
xdom_html_Document.get_onmouseover = function(this1) {
	return xdom_html_EventSource.make(this1,"mouseover");
};
xdom_html_Document.get_onmouseup = function(this1) {
	return xdom_html_EventSource.make(this1,"mouseup");
};
xdom_html_Document.get_onpaste = function(this1) {
	return xdom_html_EventSource.make(this1,"paste");
};
xdom_html_Document.get_onpause = function(this1) {
	return xdom_html_EventSource.make(this1,"pause");
};
xdom_html_Document.get_onplay = function(this1) {
	return xdom_html_EventSource.make(this1,"play");
};
xdom_html_Document.get_onplaying = function(this1) {
	return xdom_html_EventSource.make(this1,"playing");
};
xdom_html_Document.get_onpointercancel = function(this1) {
	return xdom_html_EventSource.make(this1,"pointercancel");
};
xdom_html_Document.get_onpointerdown = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerdown");
};
xdom_html_Document.get_onpointerenter = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerenter");
};
xdom_html_Document.get_onpointerleave = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerleave");
};
xdom_html_Document.get_onpointerlockchange = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerlockchange");
};
xdom_html_Document.get_onpointerlockerror = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerlockerror");
};
xdom_html_Document.get_onpointermove = function(this1) {
	return xdom_html_EventSource.make(this1,"pointermove");
};
xdom_html_Document.get_onpointerout = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerout");
};
xdom_html_Document.get_onpointerover = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerover");
};
xdom_html_Document.get_onpointerup = function(this1) {
	return xdom_html_EventSource.make(this1,"pointerup");
};
xdom_html_Document.get_onprogress = function(this1) {
	return xdom_html_EventSource.make(this1,"progress");
};
xdom_html_Document.get_onratechange = function(this1) {
	return xdom_html_EventSource.make(this1,"ratechange");
};
xdom_html_Document.get_onreset = function(this1) {
	return xdom_html_EventSource.make(this1,"reset");
};
xdom_html_Document.get_onresize = function(this1) {
	return xdom_html_EventSource.make(this1,"resize");
};
xdom_html_Document.get_onscroll = function(this1) {
	return xdom_html_EventSource.make(this1,"scroll");
};
xdom_html_Document.get_onseeked = function(this1) {
	return xdom_html_EventSource.make(this1,"seeked");
};
xdom_html_Document.get_onseeking = function(this1) {
	return xdom_html_EventSource.make(this1,"seeking");
};
xdom_html_Document.get_onselect = function(this1) {
	return xdom_html_EventSource.make(this1,"select");
};
xdom_html_Document.get_onshow = function(this1) {
	return xdom_html_EventSource.make(this1,"show");
};
xdom_html_Document.get_onstalled = function(this1) {
	return xdom_html_EventSource.make(this1,"stalled");
};
xdom_html_Document.get_onsubmit = function(this1) {
	return xdom_html_EventSource.make(this1,"submit");
};
xdom_html_Document.get_onsuspend = function(this1) {
	return xdom_html_EventSource.make(this1,"suspend");
};
xdom_html_Document.get_ontimeupdate = function(this1) {
	return xdom_html_EventSource.make(this1,"timeupdate");
};
xdom_html_Document.get_ontouchcancel = function(this1) {
	return xdom_html_EventSource.make(this1,"touchcancel");
};
xdom_html_Document.get_ontouchend = function(this1) {
	return xdom_html_EventSource.make(this1,"touchend");
};
xdom_html_Document.get_ontouchmove = function(this1) {
	return xdom_html_EventSource.make(this1,"touchmove");
};
xdom_html_Document.get_ontouchstart = function(this1) {
	return xdom_html_EventSource.make(this1,"touchstart");
};
xdom_html_Document.get_onvolumechange = function(this1) {
	return xdom_html_EventSource.make(this1,"volumechange");
};
xdom_html_Document.get_onwaiting = function(this1) {
	return xdom_html_EventSource.make(this1,"waiting");
};
xdom_html_Document.get_onwheel = function(this1) {
	return xdom_html_EventSource.make(this1,"wheel");
};
var xdom_html_EventSource = {};
xdom_html_EventSource._new = function(f) {
	return f;
};
xdom_html_EventSource.once = function(this1,c) {
	var c1 = c;
	var link = null;
	link = this1(function(v) {
		tink_core_Callback.invoke(c1,v);
		if(link != null) {
			link.cancel();
		}
		c1 = null;
		link = null;
	});
	return link;
};
xdom_html_EventSource.get_signal = function(this1) {
	var self = this1;
	if(self.__xdomSignal == null) {
		var this2 = new tink_core__$Signal_Suspendable(function(cb) {
			return this1(cb);
		},null);
		self.__xdomSignal = this2;
	}
	return self.__xdomSignal;
};
xdom_html_EventSource.map = function(this1,f) {
	return tink_core_Signal.map(xdom_html_EventSource.get_signal(this1),f);
};
xdom_html_EventSource.filter = function(this1,f) {
	return tink_core_Signal.filter(xdom_html_EventSource.get_signal(this1),f);
};
xdom_html_EventSource.select = function(this1,f) {
	return tink_core_Signal.select(xdom_html_EventSource.get_signal(this1),f);
};
xdom_html_EventSource.join = function(this1,other) {
	return tink_core_Signal.join(xdom_html_EventSource.get_signal(this1),other);
};
xdom_html_EventSource.nextTime = function(this1,condition) {
	return tink_core_Signal.nextTime(xdom_html_EventSource.get_signal(this1),condition);
};
xdom_html_EventSource.delegate = function(this1,s,cb) {
	var prefixed = null;
	return this1(function(e) {
		var root = e.currentTarget;
		var cur = e.target;
		if(prefixed == null) {
			prefixed = xdom_Selector.prefixed(root,s,true);
		}
		while(cur != null) {
			if(cur.matches(prefixed)) {
				var event = { currentTarget : cur};
				Object.setPrototypeOf(event,e);
				tink_core_Callback.invoke(cb,event);
			}
			if(cur == root) {
				break;
			}
			cur = cur.parentElement;
		}
	});
};
xdom_html_EventSource.make = function(target,event) {
	if(target != null && target.addEventListener != null) {
		var target1 = target;
		var this1 = function(cb) {
			var handle = function(event) {
				tink_core_Callback.invoke(cb,event);
			};
			target1.addEventListener(event,handle);
			var _g = $bind(target1,target1.removeEventListener);
			var type = event;
			var listener = handle;
			var this1 = new tink_core_SimpleLink(function() {
				_g(type,listener);
			});
			return this1;
		};
		return this1;
	} else {
		xdom_XDom.console.warn("attempted to register `" + event + "` event on",target);
		var this1 = function(cb) {
			return null;
		};
		return this1;
	}
};
var xdom_html_EventSignal = {};
xdom_html_EventSignal.once = function(this1,c) {
	var c1 = c;
	var link = null;
	var _e = this1;
	link = (function(handler) {
		return _e.listen(handler);
	})(function(v) {
		tink_core_Callback.invoke(c1,v);
		if(link != null) {
			link.cancel();
		}
		c1 = null;
		link = null;
	});
	return link;
};
xdom_html_EventSignal.of = function(s) {
	return s;
};
function $iterator(o) { if( o instanceof Array ) return function() { return new haxe_iterators_ArrayIterator(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
haxe_ds_ObjectMap.count = 0;
coconut_diffing_TypeId.idCounter = 0;
js_Boot.__toStr = ({ }).toString;
var typeofJQuery = typeof($);
if(typeofJQuery != "undefined" && $.fn != null) {
	$.fn.elements = function() {
		return new js_jquery_JqEltsIterator(this);
	};
}
var typeofJQuery = typeof($);
if(typeofJQuery != "undefined" && $.fn != null) {
	$.fn.iterator = function() {
		return new js_jquery_JqIterator(this);
	};
}
tink_state_internal_Revision.counter = .0;

        if (typeof Element !== "undefined" && !Element.prototype.matches)
          Element.prototype.matches = Element.prototype.msMatchesSelector;
      ;
DateTools.DAY_SHORT_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
DateTools.DAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
DateTools.MONTH_SHORT_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
DateTools.MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
coconut_diffing_Root.byParent = new haxe_ds_ObjectMap();
coconut_diffing_internal_VEmpty.TYPE = (function($this) {
	var $r;
	var this1 = coconut_diffing_TypeId.idCounter++;
	$r = this1;
	return $r;
}(this));
coconut_diffing_internal_VMany.TYPE = (function($this) {
	var $r;
	var this1 = coconut_diffing_TypeId.idCounter++;
	$r = this1;
	return $r;
}(this));
coconut_diffing_internal_VNativeInst.TYPE = (function($this) {
	var $r;
	var this1 = coconut_diffing_TypeId.idCounter++;
	$r = this1;
	return $r;
}(this));
coconut_ui_internal_ImplicitContext.ORPHAN = new tink_core__$Lazy_LazyConst(null);
coconut_ui_internal_ImplicitContext.NONE = new tink_state__$Observable_ConstObservable(coconut_ui_internal_ImplicitValues._new([]),null);
coconut_vdom__$Html_Elt.events = [];
coconut_vdom__$Html_Elt.ELEMENTS = new coconut_vdom__$Html_Updater(function(target,field) {
	return "" + target + "." + field + " = null";
},{ className : function(t,_,v,_1) {
	if(!v) {
		t.removeAttribute("class");
	} else {
		t.className = v;
	}
}, style : function(t,_,nu,old) {
	coconut_vdom__$Html_Elt.updateStyle(t.style,nu,old);
}, role : function(t,_,nu,old) {
	if(nu == null) {
		t.removeAttribute("role");
	} else {
		t.setAttribute("role",nu);
	}
}, attributes : function(t,_,nu,old) {
	coconut_vdom__$Html_Elt.setAttributes(t,nu,old);
}, on : coconut_vdom__$Html_Elt.setEvent},function(rules,field) {
	if(Object.prototype.hasOwnProperty.call(rules,field)) {
		return field;
	} else if(StringTools.startsWith(field,"on")) {
		return "on";
	} else {
		return null;
	}
});
coconut_vdom__$Html_Elt.STYLES = new coconut_vdom__$Html_Updater(function(target,field) {
	return "" + target + "." + field + " = null";
},null,function(_,_1) {
	return null;
});
coconut_vdom__$Html_Svg.SVG = "http://www.w3.org/2000/svg";
coconut_vdom_Html.nodeTypes = new haxe_ds_StringMap();
coconut_vdom_Html.WBR = coconut_vdom_Html.nodeType("wbr");
coconut_vdom_Html.VIDEO = coconut_vdom_Html.nodeType("video");
coconut_vdom_Html.UL = coconut_vdom_Html.nodeType("ul");
coconut_vdom_Html.TRACK = coconut_vdom_Html.nodeType("track");
coconut_vdom_Html.TR = coconut_vdom_Html.nodeType("tr");
coconut_vdom_Html.TITLE = coconut_vdom_Html.nodeType("title");
coconut_vdom_Html.TIME = coconut_vdom_Html.nodeType("time");
coconut_vdom_Html.THEAD = coconut_vdom_Html.nodeType("thead");
coconut_vdom_Html.TH = coconut_vdom_Html.nodeType("th");
coconut_vdom_Html.TFOOT = coconut_vdom_Html.nodeType("tfoot");
coconut_vdom_Html.TEXTAREA = coconut_vdom_Html.nodeType("textarea");
coconut_vdom_Html.TD = coconut_vdom_Html.nodeType("td");
coconut_vdom_Html.TBODY = coconut_vdom_Html.nodeType("tbody");
coconut_vdom_Html.TABLE = coconut_vdom_Html.nodeType("table");
coconut_vdom_Html.SVG = coconut_vdom_Html.nodeType("svg:svg");
coconut_vdom_Html.SUP = coconut_vdom_Html.nodeType("sup");
coconut_vdom_Html.SUMMARY = coconut_vdom_Html.nodeType("summary");
coconut_vdom_Html.SUB = coconut_vdom_Html.nodeType("sub");
coconut_vdom_Html.STYLE = coconut_vdom_Html.nodeType("style");
coconut_vdom_Html.STRONG = coconut_vdom_Html.nodeType("strong");
coconut_vdom_Html.SPAN = coconut_vdom_Html.nodeType("span");
coconut_vdom_Html.SOURCE = coconut_vdom_Html.nodeType("source");
coconut_vdom_Html.SMALL = coconut_vdom_Html.nodeType("small");
coconut_vdom_Html.SELECT = coconut_vdom_Html.nodeType("select");
coconut_vdom_Html.SECTION = coconut_vdom_Html.nodeType("section");
coconut_vdom_Html.SCRIPT = coconut_vdom_Html.nodeType("script");
coconut_vdom_Html.RECT = coconut_vdom_Html.nodeType("svg:rect");
coconut_vdom_Html.PRE = coconut_vdom_Html.nodeType("pre");
coconut_vdom_Html.POLYLINE = coconut_vdom_Html.nodeType("svg:polyline");
coconut_vdom_Html.POLYGON = coconut_vdom_Html.nodeType("svg:polygon");
coconut_vdom_Html.PICTURE = coconut_vdom_Html.nodeType("picture");
coconut_vdom_Html.PATH = coconut_vdom_Html.nodeType("svg:path");
coconut_vdom_Html.PARAM = coconut_vdom_Html.nodeType("param");
coconut_vdom_Html.P = coconut_vdom_Html.nodeType("p");
coconut_vdom_Html.OPTION = coconut_vdom_Html.nodeType("option");
coconut_vdom_Html.OL = coconut_vdom_Html.nodeType("ol");
coconut_vdom_Html.OBJECT = coconut_vdom_Html.nodeType("object");
coconut_vdom_Html.NAV = coconut_vdom_Html.nodeType("nav");
coconut_vdom_Html.META = coconut_vdom_Html.nodeType("meta");
coconut_vdom_Html.MENU = coconut_vdom_Html.nodeType("menu");
coconut_vdom_Html.MAIN = coconut_vdom_Html.nodeType("main");
coconut_vdom_Html.LINK = coconut_vdom_Html.nodeType("link");
coconut_vdom_Html.LI = coconut_vdom_Html.nodeType("li");
coconut_vdom_Html.LEGEND = coconut_vdom_Html.nodeType("legend");
coconut_vdom_Html.LABEL = coconut_vdom_Html.nodeType("label");
coconut_vdom_Html.INS = coconut_vdom_Html.nodeType("ins");
coconut_vdom_Html.INPUT = coconut_vdom_Html.nodeType("input");
coconut_vdom_Html.IMG = coconut_vdom_Html.nodeType("img");
coconut_vdom_Html.IFRAME = coconut_vdom_Html.nodeType("iframe");
coconut_vdom_Html.I = coconut_vdom_Html.nodeType("i");
coconut_vdom_Html.HTML = coconut_vdom_Html.nodeType("html");
coconut_vdom_Html.HR = coconut_vdom_Html.nodeType("hr");
coconut_vdom_Html.HEADER = coconut_vdom_Html.nodeType("header");
coconut_vdom_Html.HEAD = coconut_vdom_Html.nodeType("head");
coconut_vdom_Html.H6 = coconut_vdom_Html.nodeType("h6");
coconut_vdom_Html.H5 = coconut_vdom_Html.nodeType("h5");
coconut_vdom_Html.H4 = coconut_vdom_Html.nodeType("h4");
coconut_vdom_Html.H3 = coconut_vdom_Html.nodeType("h3");
coconut_vdom_Html.H2 = coconut_vdom_Html.nodeType("h2");
coconut_vdom_Html.H1 = coconut_vdom_Html.nodeType("h1");
coconut_vdom_Html.FORM = coconut_vdom_Html.nodeType("form");
coconut_vdom_Html.FOOTER = coconut_vdom_Html.nodeType("footer");
coconut_vdom_Html.FIELDSET = coconut_vdom_Html.nodeType("fieldset");
coconut_vdom_Html.EMBED = coconut_vdom_Html.nodeType("embed");
coconut_vdom_Html.EM = coconut_vdom_Html.nodeType("em");
coconut_vdom_Html.ELLIPSE = coconut_vdom_Html.nodeType("svg:ellipse");
coconut_vdom_Html.DT = coconut_vdom_Html.nodeType("dt");
coconut_vdom_Html.DL = coconut_vdom_Html.nodeType("dl");
coconut_vdom_Html.DIV = coconut_vdom_Html.nodeType("div");
coconut_vdom_Html.DETAILS = coconut_vdom_Html.nodeType("details");
coconut_vdom_Html.DEL = coconut_vdom_Html.nodeType("del");
coconut_vdom_Html.DD = coconut_vdom_Html.nodeType("dd");
coconut_vdom_Html.CODE = coconut_vdom_Html.nodeType("code");
coconut_vdom_Html.CIRCLE = coconut_vdom_Html.nodeType("svg:circle");
coconut_vdom_Html.CANVAS = coconut_vdom_Html.nodeType("canvas");
coconut_vdom_Html.BUTTON = coconut_vdom_Html.nodeType("button");
coconut_vdom_Html.BR = coconut_vdom_Html.nodeType("br");
coconut_vdom_Html.BODY = coconut_vdom_Html.nodeType("body");
coconut_vdom_Html.BLOCKQUOTE = coconut_vdom_Html.nodeType("blockquote");
coconut_vdom_Html.B = coconut_vdom_Html.nodeType("b");
coconut_vdom_Html.AUDIO = coconut_vdom_Html.nodeType("audio");
coconut_vdom_Html.ASIDE = coconut_vdom_Html.nodeType("aside");
coconut_vdom_Html.ARTICLE = coconut_vdom_Html.nodeType("article");
coconut_vdom_Html.A = coconut_vdom_Html.nodeType("a");
coconut_vdom__$Html_HtmlFragment.tags = new haxe_ds_StringMap();
coconut_vdom__$Html_Text.inst = new coconut_vdom__$Html_Text();
coconut_vdom_Renderer.BACKEND = new coconut_vdom__$Renderer_DomBackend();
coconut_vdom_View.idCounter = 0;
tink_core_Callback.depth = 0;
tink_core_Callback.MAX_DEPTH = 500;
tink_core_AlreadyDisposed.INST = new tink_core_AlreadyDisposed();
tink_core_Future.NOISE = new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(null));
tink_core_Future.NULL = tink_core_Future.NOISE;
tink_core_Future.NEVER = new tink_core__$Future_NeverFuture();
tink_core_Lazy.NOISE = new tink_core__$Lazy_LazyConst(null);
tink_core_Lazy.NULL = tink_core_Lazy.NOISE;
tink_core_Noise.Noise = null;
tink_core_ProgressValue.ZERO = (function($this) {
	var $r;
	var this1 = new tink_core_MPair(0,haxe_ds_Option.None);
	var this2 = this1;
	$r = this2;
	return $r;
}(this));
tink_core_Progress.INIT = tink_core_ProgressValue.ZERO;
tink_core_Promise.NOISE = new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
tink_core_Promise.NULL = tink_core_Promise.NOISE;
tink_core_Promise.NEVER = tink_core_Future.NEVER;
tink_core__$Signal_Disposed.INST = new tink_core__$Signal_Disposed();
tink_domspec_CSSParser.names = new haxe_ds_StringMap();
tink_pure_FilterResult.ExcludeAndStop = -3;
tink_pure_FilterResult.Exclude = 0;
tink_pure_FilterResult.Include = 1;
tink_pure_FilterResult.IncludeAndStop = 3;
tink_pure__$List_Node.EMPTY = [];
tink_state_Scheduler.direct = new tink_state__$Scheduler_DirectScheduler();
tink_state_Observable.MAX_ITERATIONS = 100;
tink_state_Observable.scheduler = tink_state_Scheduler.batched(tink_state_Scheduler.batcher());
tink_state_Observable.isUpdating = false;
tink_state__$Scheduler_JustOnce.pool = [];
tink_state_internal_Revision.ZERO = .0;
xdom_XDom.window = window;
xdom_XDom.document = window.document;
xdom_XDom.console = $global.console;
xdom_Selector.hasScope = (function($this) {
	var $r;
	try {
		$r = true;
	} catch( _g ) {
		$r = false;
	}
	return $r;
}(this));
xdom_Selector.ns = xdom_XDom.window._xdom_ns = (xdom_XDom.window._xdom_ns | 0) + 1;
xdom_Selector.counter = 0;
xdom_html_Collection.EMPTY = [];
Simple.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=simple.js.map