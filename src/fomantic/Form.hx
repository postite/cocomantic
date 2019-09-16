package fomantic;

import fomantic.Types;
import fomantic.Icon;
import fomantic.Input;
using Debug;

// https://semantic-ui.com/behaviors/form.html 

class Form extends coconut.ui.View{

   @:attribute var children:coconut.ui.Children;
   @:attribute var className:tink.domspec.ClassName = null;
   

   function render(){
      <form class='ui form ${className}'>
      <for {child in children}>
      <div class="field">
         {child}
      </div>
      </for>
      </form>
;
   }

}