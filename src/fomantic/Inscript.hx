package fomantic;

import fomantic.Types;
import fomantic.Icon;
import fomantic.Input;
using Debug;
import js.jquery.Helper.*;

class Inscript extends coconut.ui.View{

  @:attr public var act:{email:String,name:String}->Void;
  
  @:attribute var className:tink.domspec.ClassName = null;
  @:state var email:String=null;
  @:state var name:String=null;


  function gather(e){
    e.preventDefault();
    valid();
    //act({email:email, name:name});
  }

   function valid(el:js.html.Element){
      
    //untyped (J('.klij.ui.form'))
    untyped (J(el))
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
            name: {
              identifier  : 'name',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter your name'
                },
                {
                  type   : 'length[3]',
                  prompt : 'Your name must be at least 6 characters'
                }
              ]
            }
          },
          onSuccess: function() {
            trace( 'Success');
            return false; // false is required if you do don't want to let it submit
          },
            onFailure: function() {
            trace('Failure');
            return false; // false is required if you do don't want to let it submit                                            
            }
        })
      ;
   }
   function render(){
      <div ref=${valid} class='${className.add('klij')}'>
      <Form>    
         <Input name="name" img={IconName.lock} onChange={e->name=untyped(e.currentTarget).value} placeholder="name" type={text}/>        
         <Input name="email" img={IconName.user} onChange={e->email=untyped(e.currentTarget).value} placeholder="email" type={InputType.email}/>
         <Button text="ok" onClick={gather}/>
      </Form>
      </div>
   }
}