package fomantic;

import tink.domspec.ClassName;
import fomantic.Types;

class Icon extends coconut.ui.View{

    @:attr @:optional public var disabled:Bool=false;
    @:attr @:optional public var size:Size=null;
    @:attr @:optional public var loading:Bool=false;
    @:attr @:optional public var outline:Bool=false;
    @:attr public var img:IconName=null;
    @:attr @:optional public var act:(js.html.Event)->Void;
    @:attr @:optional public var toolTip:String;

   // @:attr @:optional public var direction:Dir;
    @:attribute var className:tink.domspec.ClassName = null;
    @:computed  var classes:tink.domspec.ClassName={
      var b=className;
      if(disabled)
      b=b.add("disabled");
      if(loading)
      b=b.add("loading");
      if(act!=null)
      b=b.add("link");
      
    if( outline)
        b=b.add('outline');

      return b;
   };

   function setup(el:js.html.Element){
    if(toolTip!=null)
      cast(el).dataset.tooltip=toolTip;
   }

  function render()
   // <i class={{link:link,icon:true,}} ></i>
   // <i class=${"icon "+img+ {{(act!=null)?" link":" ";}+ {(disabled)?" disabled":" ";}}} onclick={act}></i>
    <i ref={setup} class='$img icon $size ${classes}' onclick={act}>
    </i>
    ;

}



//https://semantic-ui.com/elements/icon.html#interfaces
enum abstract IconName(String){

var barcode ="barcode";
var bars ="bars";
var beer ="beer";
var bell ="bell";
//var bell_outline ="bell outline";
var bell_slash ="bell slash";
//var bell_slash_outline ="bell slash outline";
var bug ="bug";
var bullhorn ="bullhorn";
var bullseye ="bullseye";
var calculator ="calculator";
var calendar ="calendar";
//var calendar_outline ="calendar outline";
var calendar_alternate ="calendar alternate";
//var calendar_alternate_outline ="calendar alternate outline";
var calendar_check ="calendar check";
//var calendar_check_outline ="calendar check outline";
var calendar_minus ="calendar minus";
var calendar_minus_outline ="calendar minus outline";
var calendar_plus ="calendar plus";
var calendar_plus_outline ="calendar plus outline";
var calendar_times ="calendar times";
//var calendar_times_outline ="calendar times outline";
var certificate ="certificate";
var check ="check";
//var check_circle ="check circle";
//var check_circle_outline ="check circle outline";
var check_square ="check square";
//var check_square_outline ="check square outline";
var circle ="circle";
//var circle_outline ="circle outline";
var clipboard ="clipboard";
//var clipboard_outline ="clipboard outline";
//var clone ="clone";
//var clone_outline ="clone outline";
var close;
var cloud ="cloud";
var cloud_download ="cloud download";
var cloud_upload ="cloud upload";
var coffee ="coffee";
var cog ="cog";
var cogs ="cogs";
//var copy ="copy";
//var copy_outline ="copy outline";
//var cut ="cut";
var database ="database";
var dot_circle ="dot circle";
//var dot_circle_outline ="dot circle outline";
//var download ="download";
var edit ="edit";
//var edit_outline ="edit outline";
var ellipsis_horizontal ="ellipsis horizontal";
var ellipsis_vertical ="ellipsis vertical";
var envelope ="envelope";
//var envelope_outline ="envelope outline";
var envelope_open ="envelope open";
//var envelope_open_outline ="envelope open outline";
var eraser ="eraser";
var exclamation ="exclamation";
var exclamation_circle ="exclamation circle";
var exclamation_triangle ="exclamation triangle";
//var external_alternate ="external alternate";
var external_square_alternate ="external square alternate";
var eye ="eye";
var eye_slash ="eye slash";
//var eye_slash_outline ="eye slash outline";
//var file ="file";
//var file_outline ="file outline";
//var file_alternate ="file alternate";
//var file_alternate_outline ="file alternate outline";
var filter ="filter";
var flag ="flag";
var flag_outline ="flag outline";
var flag_checkered ="flag checkered";
//var folder ="folder";
//var folder_outline ="folder outline";
//var folder_open ="folder open";
//var folder_open_outline ="folder open outline";
var frown ="frown";
//var frown_outline ="frown outline";
var hashtag ="hashtag";
var heart ="heart";
//var heart_outline ="heart outline";
//var history ="history";
var home ="home";
var cursor ="cursor";
var info ="info";
var info_circle ="info circle";
var language ="language";
var magic ="magic";
var meh ="meh";
//var meh_outline ="meh outline";
var microphone ="microphone";
var microphone_slash ="microphone slash";
var minus ="minus";
var minus_circle ="minus circle";
var minus_square ="minus square";
//var minus_square_outline ="minus square outline";
//var paste ="paste";
var pencil_alternate ="pencil alternate";
var plus ="plus";
var plus_circle ="plus circle";
var plus_square ="plus square";
//var plus_square_outline ="plus square outline";
var qrcode ="qrcode";
var question ="question";
var question_circle ="question circle";
//var question_circle_outline ="question circle outline";
var quote_left ="quote left";
var quote_right ="quote right";
//var redo ="redo";
//var redo_alternate ="redo alternate";
//var reply ="reply";
//var reply_all ="reply all";
var rss ="rss";
var rss_square ="rss square";
// var save ="save";
// var save_outline ="save outline";
var search ="search";
var search_minus ="search minus";
var search_plus ="search plus";
// var share ="share";
// var share_alternate ="share alternate";
// var share_alternate_square ="share alternate square";
// var share_square ="share square";
//var share_square_outline ="share square outline";
var shield_alternate ="shield alternate";
// var sign_in_alternate ="sign in alternate";
// var sign_out_alternate ="sign out alternate";
var signal ="signal";
var sitemap ="sitemap";
var sliders_horizontal ="sliders horizontal";
var smile ="smile";
var smile_outline ="smile outline";
// var sort ="sort";
// var sort_alphabet_down ="sort alphabet down";
// var sort_alphabet_up ="sort alphabet up";
// var sort_amount_down ="sort amount down";
// var sort_amount_up ="sort amount up";
// var sort_down ="sort down";
// var sort_numeric_down ="sort numeric down";
// var sort_numeric_up ="sort numeric up";
// var sort_up ="sort up";
var star ="star";
var star_outline ="star outline";
var star_half ="star half";
//var star_half_outline ="star half outline";
// var sync ="sync";
// var sync_alternate ="sync alternate";
var thumbs_down ="thumbs down";
//var thumbs_down_outline ="thumbs down outline";
var thumbs_up ="thumbs up";
var thumbs_up_outline ="thumbs up outline";
var times ="times";
var times_circle ="times circle";
//var times_circle_outline ="times circle outline";
var toggle_off ="toggle off";
var toggle_on ="toggle on";
var trash ="trash";
var trash_alternate ="trash alternate";
//var trash_alternate_outline ="trash alternate outline";
var trophy ="trophy";
//var undo ="undo";
//var undo_alternate ="undo alternate";
//var upload ="upload";
var user ="user";
var user_outline ="user outline";
var user_circle ="user circle";
//var user_circle_outline ="user circle outline";
var wifi ="wifi";
var phone;

//security


var ban= "ban";

var door_closed= "door closed";
var door_open= "door open";
var dungeon= "dungeon";


var file_contract= "file contract";
var file_signature= "file signature";
var fingerprint= "fingerprint";
var id_badge= "id badge";

var id_card= "id card";

var key= "key";
var lock= "lock";
var lock_open= "lock open";
var mask= "mask";
var passport= "passport";
var shield= "shield";
var unlock= "unlock";
var unlock_alternate= "unlock alternate";
var user_lock= "user lock";
var user_secret= "user secret";
var user_shield= "user shield";


//files

var archive;

var clone;
var clone_outline= "clone outline";
var copy;
var copy_outline="copy outline";
var cut;
var file;
var file_alternate="file alternate";
var file_alternate_outline="file alternate outline";
var file_archive="file archive";
var file_archive_outline= "file archive outline";
var file_audio= "file audio";
var file_audio_outline="file audio outline";
var file_code="file code";
var file_code_outline="file code outline";
var file_excel="file excel";
var file_excel_outline="file excel outline";
var file_image="file image";
var file_image_outline="file image outline";
var file_outline="file outline";
var file_pdf="file pdf";
var file_pdf_outline="file pdf outline";
var file_powerpoint="file powerpoint";
var file_powerpoint_outline="file powerpoint outline";
var file_video="file video";
var file_video_outline="file video outline";
var file_word="file word";
var file_word_outline="file word outline";
var folder;
var folder_open="folder open";
var folder_open_outline="folder open outline";
var folder_outline="folder outline";
var paste;
var photo_video="photo video";
var save;
var save_outline="save_outline";
var sticky_note="sticky note";
var sticky_note_outline="sticky note outline";
var Finance;

// arrows;

var angle_double_down= "angle double down";
var angle_double_left= "angle double left";
var angle_double_right= "angle double right";
var angle_double_up="angle double up";
var angle_down= "angle down";
var angle_left= "angle left";
var angle_right= "angle right";
var angle_up= "angle up";
var arrow_alternate_circle_down= "arrow alternate circle down";
var arrow_alternate_circle_down_outline="arrow alternate circle down outline";
var arrow_alternate_circle_left= "arrow alternate circle left";
var arrow_alternate_circle_left_outline="arrow alternate circle left outline";
var arrow_alternate_circle_right= "arrow alternate circle right";
var arrow_alternate_circle_right_outline="arrow alternate circle right outline";
var arrow_alternate_circle_up= "arrow alternate circle up";
var arrow_alternate_circle_up_outline="arrow alternate circle up outline";
var arrow_circle_down= "arrow circle down";
var arrow_circle_left= "arrow circle left";
var arrow_circle_right= "arrow circle right";
var arrow_circle_up= "arrow circle up";
var arrow_down= "arrow down";
var arrow_left= "arrow left";
var arrow_right= "arrow right";
var arrow_up= "arrow up";
var arrows_alternate ="arrows alternate";
var arrows_alternate_horizontal= "arrows alternate horizontal";
var arrows_alternate_vertical= "arrows alternate vertical";
var caret_down= "caret down";
var caret_left= "caret left";
var caret_right= "caret right";
var caret_square_down= "caret square down";
var caret_square_down_outline="caret square down outline";
var square_left= "square left";
var caret_square_left_outline= "caret square left outline";
var caret_square_right= "caret square right";
var caret_square_right_outline= "caret square right outline";
var caret_square_up= "caret square up";
var caret_square_up_outline= "caret square up outline";
var caret_up= "caret up";
var cart_arrow_down= "cart arrow down";
var chart_line= "chart line";
var chevron_circle_down= "chevron circle down";
var chevron_circle_left= "chevron circle left";
var chevron_circle_right= "chevron circle right";
var chevron_circle_up= "chevron circle up";
var chevron_down= "chevron down";
var chevron_left= "chevron left";
var chevron_right= "chevron right";
var chevron_up= "chevron up";
var clouddownload_alternate="cloud download alternate";
var cloudupload_alternate="cloud upload alternate";
var compress_alternate= "compress alternate";
var compress_arrows_alternate= "compress arrows alternate";
var download;
var exchange_alternate= "exchange alternate";
var expand_alternate= "expand alternate";
var expand_arrows_alternate= "expand arrows alternate";
var external_alternate= "external alternate";
var external_link_square_alternate="external link square alternate";
var hand_point_down= "hand point down";
var hand_point_down_outline="hand point down outline";
var hand_point_left= "hand point left";
var hand_point_left_outline="hand point left outline";
var hand_point_right= "hand point right";
var hand_point_right_outline="hand point right outline";
var hand_point_up= "hand point up";
var hand_point_up_outline="hand point up outline";
var hand_pointer= "hand pointer";
var hand_pointer_outline= "hand pointer outline";
var history;
var level_down_alternate= "level down alternate";
var level_up_alternate= "level up alternate";
var location_arrow= "location arrow";
var long_arrow_alternate_down= "long arrow alternate down";
var long_arrow_alternate_left= "long arrow alternate left";
var long_arrow_alternate_right= "long arrow alternate right";
var long_arrow_alternate_up= "long arrow alternate up";
var mouse_pointer= "mouse pointer";
var play;
var random;
var recycle;
var redo;
var redo_alternate="redo alternate";
var reply;
var reply_all= "reply all";
var retweet;
var share;
var share_square= "share square";
var share_square_outline= "share square outline";
var sign_in_alternate= "sign in alternate";
var sign_out_alternate= "sign out alternate";
var sort;
var sort_alphabet_down= "sort alphabet down";
var sort_alphabet_down_alternate= "sort alphabet down alternate";
var sort_alphabet_up= "sort alphabet up";
var sort_alphabet_up_alternate= "sort alphabet up alternate";
var sort_amount_down= "sort amount down";
var sort_amount_down_alternate= "sort amount down alternate";
var sort_amount_up= "sort amount up";
var sort_amount_up_alternate= "sort amount up alternate";
var sort_down= "sort down";
var sort_numeric_down= "sort numeric down";
var sort_numeric_down_alternate= "sort numeric down alternate";
var sort_numeric_up= "sort numeric up";
var sort_numeric_up_alternate= "sort numeric up alternate";
var sort_up= "sort up";
var sync;
var sync_alternate= "sync alternate";
var text_height= "text height";
var text_width= "text width";
var undo;
var undo_alternate= "undo alternate";
var upload;


//textActions

//var Align;// Center 
//var Align;// Justify 
//var Align;// Left 
var Align;// Right 
var Bold;// 
//var Copy;// 
//var Cut;// 
//var Ellipsis;// Horizontal 
var Ellipsis;// Vertical 
var Font;// 
var Indent;// Left 
//var Indent;// Right 
var Italic;// 
var List;// 
var Move;// 
var Ordered;// List 
//var Paste;// 
var Print;// 
var Quote;// left 
//var Quote;// right 
var Strikethrough;// 
var Subscript;// 
var Superscript;// 
//var Text;// Height 
var Text;// Width 
var Underline;// 
//var Undo;// 
var Unlink;// 
var Unordered;// List



 }