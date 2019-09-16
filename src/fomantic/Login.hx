package fomantic;

import fomantic.Types;
import fomantic.Icon;
import fomantic.Input;
using Debug;
import js.jquery.Helper.*;
class Login extends coconut.ui.View{

   @:attr public var act:js.html.MouseEvent->Void;

   function valid(form){
      
    untyped (J(form))
        .form({
          fields: {
            email: {
              identifier  : 'email',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter your e-mail'
                },
                {
                  type   : 'email',
                  prompt : 'Please enter a valid e-mail'
                }
              ]
            },
            password: {
              identifier  : 'password',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter your password'
                },
                {
                  type   : 'length[6]',
                  prompt : 'Your password must be at least 6 characters'
                }
              ]
            }
          }
        })
      ;
    
   }
   function render(){
      <div ref=${valid}>
      <Form>
         <Input name="password" img={IconName.lock} placeholder="paswword" type={password}/>        
         <Input name="email" img={IconName.user} placeholder="name" type={email}/>
         <Button text="ok" onClick={act}/>
      </Form>
      <div class="ui error message"></div>
      </div>
   }
}