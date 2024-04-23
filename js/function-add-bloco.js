$(function () {
  $(".btn-add").click(function () {
    var el =
      '<div class="anotacao-single"><textarea placeholder="Sua nova Anatoção"></textarea></div>';
    $(".container-anotacoes").append(el);

    var textArea = $(".anotacao-single").last().find("textarea");

    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();

    var finalTime = hh + ":" + mm;
    textArea.val("Nova anotação\n" + finalTime + "\n\n");
    textArea.css({
      "text-align": "center",
      "font-size": "16px",
      "font-weight": "bold",
      color: "blue",
    });
  });
});
function mudarCorDeFundo(corDeFundo, corDoTexto) {
  document.body.style.backgroundColor = corDeFundo;
  document.body.style.color = corDoTexto;
  document.querySelector("h1").style.color = corDoTexto;
}
