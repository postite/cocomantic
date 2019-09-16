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
   
   @:attr @:optional public var fluid:Boul;
   @:attr @:optional public var disabled:Boul =false;
   @:tracked
   @:attr public var content:List<SearchContent>;
   @:attr @:optional public var url:String;
   @:attr @:optional public var aligned:Boul;
   @:attr @:optional public var loading:Boul;
   @:attr @:optional public var searchOnFocus:Boul=false;


   function setup(e) {
      
		untyped (J(e)).search({
         source:content.toArray(),
         searchFields:["title"],
         fullTextSearch:false,
         onSelect:(result, response)->{trace("res="+result.title);},


         error : {
  source      : 'Cannot search. No source used, and Semantic API module was not included',
  noResults   : 'pas d\'incrits',
  logging     : 'Error in debug logging, exiting.',
  noTemplate  : 'A valid template name was not specified.',
  serverError : 'There was an issue with querying the server.',
  maxResults  : 'Results must be an array to use maxResults setting',
  method      : 'The method you called is not defined.'
   },
			//onChange: function(value, text) if(onChange != null) onChange(value),
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
     return  <div ref=${setup} class='ui search 
      ${disabled.as("disabled")}  
      ${loading.as("loading")}  
      ${searchOnFocus.as("searchonfocus")}  
      '>
         <input class="prompt" type="text" placeholder="Common passwords..."/>
         <Icon img={IconName.search} />
         <div class="results"></div>
        
      </div>
      ;
   }
       
}




