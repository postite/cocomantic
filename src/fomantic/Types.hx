package fomantic;

class Types{

}

abstract Boul(Bool) from Bool to Bool {
  	
  public function new(n)
  	this=n;

  public inline function as(repl:String):String{
    return if(this==true)
      repl;
    else
      "";
  }
 
  
}