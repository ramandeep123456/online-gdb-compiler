var sideBarHide= $("#collapseExample");
var boxWidth=sideBarHide.width();
$(".collapsing-btn").click(function(event){
  sideBarHide.hide();
  $("#collapse-show").show();
  $(".right-container").addClass("big");
});
$("#collapse-show").click(function(){
  sideBarHide.show();
  $("#collapse-show").hide();
  $(".right-container").removeClass("big");
})
for (var i = 1; i < 20; i++) {
  $(".index").append(i+"<br>");
}
var a=$("#languages")[0];
var b=$(".coding")[0];
function changeL(){

  switch (a.value) {
    case "cpp":
      b.innerHTML='<span style="color: #9F6D33;">#include</span> <span style="color: #6C99BB">&lt;iostream&gt;</span><br><br><span style="color: #9F6D33;">using namespace std;</span><br><br>int main()<br>{<br>&nbsp;&nbsp;cout<span style="color: #9F6D33;">&lt;&lt;</span><span style="color: #A1A241;">&quot;Hello World&quot;</span>;<br><br>&nbsp;&nbsp;<span style="color: #9F6D33;">return</span>  <span style="color: #6C99BB">0</span>;<br>}';

      break;
    case "c":
      b.innerHTML='<span style="color: #9F6D33;">#include</span> <span style="color: #6C99BB">&lt;stdio.h&gt;</span><br><br>int main()<br>{<br>&nbsp;&nbsp;printf(<span style="color: #A1A241;">"Hello World"</span>);<br><br>&nbsp;&nbsp;<span style="color: #9F6D33;">return</span>  <span style="color: #6C99BB">0</span>;<br>}';
      break;
    case "java":
      b.innerHTML='<span style="color: #CC7833">public class</span> Main<br>{<br>&nbsp;&nbsp;<span style="color: #CC7833">public static void</span> main(<span style="color: #9F6D33;">String</span>[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;	<span style="color: #9F6D33;">System</span>.out.println(<span style="color: #A1A241;">&quot;Hello World&quot;</span>);<br>&nbsp;&nbsp;}<br>}';
      break;
    default:
      console.log(value);
  }
}

// $("cpp").click(function(){
//   b.innerHTML="hi";
// })
