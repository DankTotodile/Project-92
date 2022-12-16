p1s = 0;
p2s = 0;
p1n = localStorage.getItem("id1");
p2n = localStorage.getItem("id2");
document.getElementById("player1_score").innerHTML = p1s;
document.getElementById("player2_score").innerHTML = p2s;
document.getElementById("player1_name").innerHTML = p1n+" : ";
document.getElementById("player2_name").innerHTML = p2n+" : ";
document.getElementById("qt").innerHTML = "Question Turn : "+p1n;
document.getElementById("at").innerHTML = "Answer Turn : "+p2n;
function send()
 {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    ans = parseInt(n1)*parseInt(n2);
    qn = "<h4 id='a'>"+n1+"x"+n2+"</h4>";
    ib = "<br><label id='b'> Answer: </label><br><input type='text' id='c'>";
    cb = "<br><br><button class='btn btn-info' onclick='check()' id='d'>Check</button>";
    row = qn+ib+cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
 }
 question_turn="player1";
 answer_turn="player2";
function check()
{
 get_answer = document.getElementById("c").value;
 if(get_answer==ans)
 {
   if(answer_turn == "player1")
   {
      p1s = ++p1s;
      console.log("Player 1 score: "+p1s);
      document.getElementById("player1_score").innerHTML = p1s;
   }
   else
   {
      p2s = ++p2s;
      console.log("Player 2 score: "+p2s); 
      document.getElementById("player2_score").innerHTML = p2s;
   }
 }
 if(question_turn == "player1")
 {
   question_turn = "player2";
   document.getElementById("qt").innerHTML = "Question Turn: "+p2n;
 }
 else
 {
   question_turn = "player1";
   document.getElementById("qt").innerHTML = "Question Turn: "+p1n;
 }
 if(answer_turn == "player1")
 {
   answer_turn = "player2";
   document.getElementById("at").innerHTML = "Answer Turn: "+p2n;
 }
 else
 {
   answer_turn = "player1";
   document.getElementById("at").innerHTML = "Answer Turn: "+p1n;
 }
}