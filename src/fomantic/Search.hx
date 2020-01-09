package fomantic;
import tink.pure.List;
import fomantic.Icon;
import js.jquery.Helper.*;
import fomantic.Types;
using tink.state.Promised;

@:pure
typedef SearchContent={
   public var title(default,never):String;
}

class Search extends coconut.ui.View{
   @:state public var value:SearchContent={title:"bim"};
   @:attr @:optional public var placeholder:String="...";
   
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
            value=result;
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

			onChange: function(value, text) if(onChange != null) onChange(value),

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
         <input class="prompt" type="text" placeholder="Common passwords..."/>
         <Icon img={IconName.search} />
         <div class="results"></div>
        
      </div>
      ;
   }
       
}




