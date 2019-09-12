package fomantic;
import tink.pure.List;
import fomantic.Icon;
import js.jquery.Helper.*;
@:pure
typedef SearchContent={
   public var title(default,never):String;
}

class Search extends coconut.ui.View{
   @:state public var value:SearchContent={title:"bim"};
   @:attr @:optional public var placeholder:String="...";
   
   @:attr @:optional public var fluid:Boul;
   @:attr @:optional public var disabled:Boul =false;
   @:attr public var content:List<SearchContent>;
   
   @:attr @:optional public var url:String;
   @:attr @:optional public var aligned:Boul;
   @:attr @:optional public var loading:Boul;
   @:attr @:optional public var searchOnFocus:Boul=false;


   function setup(e) {
		J(e).search({
         source:content.toArray(),
         searchFields:["title"],
         fullTextSearch:false,
         onSelect:(result, response)->{trace("res="+result.title);}
			//onChange: function(value, text) if(onChange != null) onChange(value),
		});

		//if(value == null) J(e).dropdown('clear');
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
   function render()
      <div ref=${setup} class='ui search 
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




