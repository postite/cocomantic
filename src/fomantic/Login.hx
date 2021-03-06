package fomantic;

import fomantic.Types;
import fomantic.Icon;
import fomantic.Input;
using Debug;
import js.jquery.Helper.*;
class Login extends coconut.ui.View{

  @:attr public var act:{email:String,password:String}->Void;
  @:attribute var className:tink.domspec.ClassName = null;
  @:state var email:String="";
  @:state var password:String="";

  function gather(e){
    e.preventDefault();
    act({email:email,password:password});
  }

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
      <div ref=${valid} class='${className}'>
      <Form>    
         <Input name="password" img={IconName.lock} 
         onChange={e->password=untyped(e.currentTarget).value} placeholder="paswword" 
         type={InputType.password}/>        
         <Input name="email" img={IconName.user} onChange={e->email=untyped(e.currentTarget).value} placeholder="name" 
         type={InputType.password}/>
         <Button text="ok" onClick={gather}/>
      </Form>
      <div class="ui error message"></div>
      </div>
   }
}