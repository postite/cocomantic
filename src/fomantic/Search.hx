package fomantic;
import tink.pure.List;
import fomantic.Icon;
import js.jquery.Helper.*;
import fomantic.Types;
using tink.state.Promised;



//maybe cast if no id 
@:pure
typedef SearchContent={
   public var title(default,never):String;
   @:optional 
   public var id(default,never):Int;
}

class Search extends coconut.ui.View{
   @:state public var _value:SearchContent= {title:"bim"};
   @:attr public var value:String;
   @:attr @:optional public var placeholder:String= "...";
   @:attr public var onChange:SearchContent->Void;
   @:attr @:optional public var fluid:Bool;
   @:attr @:optional public var disabled:Bool =false;
   @:tracked
   @:attr public var content:List<SearchContent>;
   @:attr @:optional public var url:String;
   @:attr @:optional public var aligned:Bool;
   @:attr @:optional public var loading:Bool;
   @:attr @:optional public var searchOnFocus:Bool=false;

    @:attribute var className:tink.domspec.ClassName = null;
    @:computed  var classes:tink.domspec.ClassName={
      var b=className;
      if(disabled)
      b=b.add("disabled");
      if(loading)
      b=b.add("loading");
      if(searchOnFocus)
      b=b.add("searchonfocus");
      if(fluid)
      b=b.add("fluid");
      if(aligned)
      b=b.add("aligned");
      
    

      return b;
   };

   function setup(e) {
      
		untyped (J(e)).search({
         source:content.toArray(),
         searchFields:["title"],
         fullTextSearch:false,
         onSelect:(result, response)->{
            trace("send"+result.title);
            _value=result;
            onChange(_value);
            trace("res="+result.title);
            },


error : {
  source      : 'Cannot search. No source used, and Semantic API module was not included',
  noResults   : 'pas d\'incrits',
  logging     : 'Error in debug logging, exiting.',
  noTemplate  : 'A valid template name was not specified.',
  serverError : 'There was an issue with querying the server.',
  maxResults  : 'Results must be an array to use maxResults setting',
  method      : 'The method you called is not defined.'
   },

			onChange: function(value, text) if(this.onChange != null) this.onChange(value),

	});

		//if(value == null) J(e).dropdown('clear');
}




function viewDidMount(){
   trace( content);
}

//    function viewDidMount(){
//       trace( "init");
//       untyped js.Syntax.code("$('.ui.search')
//   .search({
//     source :  {0},
//     searchFields   : [
//       'title'
//     ],
//     fullTextSearch: false
//   })
// ;",content.toArray());
//    }
   function render(){
   trace("rendering saerch" );
     return  <div ref=${setup} class='ui search ${classes} '>
         <input value={value} class="prompt" type="text" placeholder={placeholder}/>
         <Icon img={IconName.search} />
         <div class="results"></div>
        
      </div>
      ;
   }
       
}




