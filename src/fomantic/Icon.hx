package fomantic;

import tink.domspec.ClassName;

import fomantic.Types.Boul;
class Icon extends coconut.ui.View{

    @:attr @:optional public var disabled:Bool=false;
    @:attr @:optional public var size:fomantic.Size=null;
    @:attr @:optional public var loading:Bool=false;
    @:attr public var img:IconName=null;
    @:attr @:optional public var act:(js.html.Event)->Void;


inline function classNames():String{

    var buf= new StringBuf();
    buf.add(img +" icon ");


    if(disabled) 
        buf.add('disabled ');
    if(loading) 
        buf.add('loading ');
    if(act!=null)
        buf.add('link ');
    if(size!=null)
        buf.add('$size ');

    return buf.toString();
}
  function render()
   // <i class={{link:link,icon:true,}} ></i>
   // <i class=${"icon "+img+ {{(act!=null)?" link":" ";}+ {(disabled)?" disabled":" ";}}} onclick={act}></i>
    <i class={classNames()} onclick={act}></i>
    ;

}



//https://semantic-ui.com/elements/icon.html#interfaces
enum abstract IconName(String){

var barcode ="barcode";
var bars ="bars";
var beer ="beer";
var bell ="bell";
var bell_outline ="bell outline";
var bell_slash ="bell slash";
var bell_slash_outline ="bell slash outline";
var bug ="bug";
var bullhorn ="bullhorn";
var bullseye ="bullseye";
var calculator ="calculator";
var calendar ="calendar";
var calendar_outline ="calendar outline";
var calendar_alternate ="calendar alternate";
var calendar_alternate_outline ="calendar alternate outline";
var calendar_check ="calendar check";
var calendar_check_outline ="calendar check outline";
var calendar_minus ="calendar minus";
var calendar_minus_outline ="calendar minus outline";
var calendar_plus ="calendar plus";
var calendar_plus_outline ="calendar plus outline";
var calendar_times ="calendar times";
var calendar_times_outline ="calendar times outline";
var certificate ="certificate";
var check ="check";
var check_circle ="check circle";
var check_circle_outline ="check circle outline";
var check_square ="check square";
var check_square_outline ="check square outline";
var circle ="circle";
var circle_outline ="circle outline";
var clipboard ="clipboard";
var clipboard_outline ="clipboard outline";
var clone ="clone";
var clone_outline ="clone outline";
var close;
var cloud ="cloud";
var cloud_download ="cloud download";
var cloud_upload ="cloud upload";
var coffee ="coffee";
var cog ="cog";
var cogs ="cogs";
var copy ="copy";
var copy_outline ="copy outline";
var cut ="cut";
var database ="database";
var dot_circle ="dot circle";
var dot_circle_outline ="dot circle outline";
var download ="download";
var edit ="edit";
var edit_outline ="edit outline";
var ellipsis_horizontal ="ellipsis horizontal";
var ellipsis_vertical ="ellipsis vertical";
var envelope ="envelope";
var envelope_outline ="envelope outline";
var envelope_open ="envelope open";
var envelope_open_outline ="envelope open outline";
var eraser ="eraser";
var exclamation ="exclamation";
var exclamation_circle ="exclamation circle";
var exclamation_triangle ="exclamation triangle";
var external_alternate ="external alternate";
var external_square_alternate ="external square alternate";
var eye ="eye";
var eye_slash ="eye slash";
var eye_slash_outline ="eye slash outline";
var file ="file";
var file_outline ="file outline";
var file_alternate ="file alternate";
var file_alternate_outline ="file alternate outline";
var filter ="filter";
var flag ="flag";
var flag_outline ="flag outline";
var flag_checkered ="flag checkered";
var folder ="folder";
var folder_outline ="folder outline";
var folder_open ="folder open";
var folder_open_outline ="folder open outline";
var frown ="frown";
var frown_outline ="frown outline";
var hashtag ="hashtag";
var heart ="heart";
var heart_outline ="heart outline";
var history ="history";
var home ="home";
var cursor ="cursor";
var info ="info";
var info_circle ="info circle";
var language ="language";
var magic ="magic";
var meh ="meh";
var meh_outline ="meh outline";
var microphone ="microphone";
var microphone_slash ="microphone slash";
var minus ="minus";
var minus_circle ="minus circle";
var minus_square ="minus square";
var minus_square_outline ="minus square outline";
var paste ="paste";
var pencil_alternate ="pencil alternate";
var plus ="plus";
var plus_circle ="plus circle";
var plus_square ="plus square";
var plus_square_outline ="plus square outline";
var qrcode ="qrcode";
var question ="question";
var question_circle ="question circle";
var question_circle_outline ="question circle outline";
var quote_left ="quote left";
var quote_right ="quote right";
var redo ="redo";
var redo_alternate ="redo alternate";
var reply ="reply";
var reply_all ="reply all";
var rss ="rss";
var rss_square ="rss square";
var save ="save";
var save_outline ="save outline";
var search ="search";
var search_minus ="search minus";
var search_plus ="search plus";
var share ="share";
var share_alternate ="share alternate";
var share_alternate_square ="share alternate square";
var share_square ="share square";
var share_square_outline ="share square outline";
var shield_alternate ="shield alternate";
var sign_in_alternate ="sign in alternate";
var sign_out_alternate ="sign out alternate";
var signal ="signal";
var sitemap ="sitemap";
var sliders_horizontal ="sliders horizontal";
var smile ="smile";
var smile_outline ="smile outline";
var sort ="sort";
var sort_alphabet_down ="sort alphabet down";
var sort_alphabet_up ="sort alphabet up";
var sort_amount_down ="sort amount down";
var sort_amount_up ="sort amount up";
var sort_down ="sort down";
var sort_numeric_down ="sort numeric down";
var sort_numeric_up ="sort numeric up";
var sort_up ="sort up";
var star ="star";
var star_outline ="star outline";
var star_half ="star half";
var star_half_outline ="star half outline";
var sync ="sync";
var sync_alternate ="sync alternate";
var thumbs_down ="thumbs down";
var thumbs_down_outline ="thumbs down outline";
var thumbs_up ="thumbs up";
var thumbs_up_outline ="thumbs up outline";
var times ="times";
var times_circle ="times circle";
var times_circle_outline ="times circle outline";
var toggle_off ="toggle off";
var toggle_on ="toggle on";
var trash ="trash";
var trash_alternate ="trash alternate";
var trash_alternate_outline ="trash alternate outline";
var trophy ="trophy";
var undo ="undo";
var undo_alternate ="undo alternate";
var upload ="upload";
var user ="user";
var user_outline ="user outline";
var user_circle ="user circle";
var user_circle_outline ="user circle outline";
var wifi ="wifi";

 }