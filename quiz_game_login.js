function addUser()
{
   id1 = document.getElementById("player1_gamertag").value;
   id2 = document.getElementById("player2_gamertag").value;
   localStorage.setItem("id1", id1);
   localStorage.setItem("id2", id2);
   window.location = "quiz_game_page.html";
}