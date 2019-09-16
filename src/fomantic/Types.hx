package fomantic;

class Types{

}

enum abstract Size(String) {
var mini;
var tiny;
var small;
var large;
var big;
var huge;
var massive;
}

enum abstract Dir(String){
   var left;
   var right;
   var none="";
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