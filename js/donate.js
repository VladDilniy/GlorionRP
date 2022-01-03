function payHandler() {
      var characterName = $(".characterName").val();
      var paySum = parseInt($(".paySum").val()) || 0;
      var donateSum = getDonateByPay(paySum);

      $(".characterNameResult").text(characterName);
      $(".paySumResult").text(paySum + " RUB");
      $(".donateSumResult").text(donateSum + " Донат Рублей");

}

function payResultHandler() {
      $(".btndonate1").off("click");
      var characterName = $(".characterName").val();
      var paySum = parseInt($(".paySum").val());
      var donateSum = getDonateByPay(paySum);

      var reg = /^([A-Z][a-z]{1,19}) ([A-Z][a-z]{1,19})$/;
	if (!reg.test(characterName)) return alertify.error(`Имя ${characterName} некорректно!`);
      if (paySum < 50) return alertify.error(`Пополнить можно минимум на 50 руб!`);

      $.ajax({
            url: "handler.php",
            type: "POST",
            data: {"action": "donate", "characterName": characterName, "paySum": paySum}
      }).done((message) => {
            var donate = JSON.parse(message).donate;
            if (donate.error) {
                  if (donate.error == "characterNotFound") return alertify.error(`Персонаж не найден!`);
                  else return alertify.error(`Ошибка: ${donate.error}`);
            }


            document.location.href = `https://unitpay.ru/pay/136471-cc861/card?sum=${paySum}&account=${donate.characterId}&desc=${donate.name}&hideMenu=true`;
      });
      return false;
}

function getDonateByPay(paySum) {
      paySum = parseInt(paySum);
      if (isNaN(paySum)) return 0;

      var values = [[5000, 1.3], [3000, 1.25], [1000, 1.2], [500, 1.15], [250, 1.1], [100, 1.05]];
      for (var i = 0; i < values.length; i++) {
            if (paySum > values[i][0]) {
                  paySum *= values[i][1];
                  break;
            }
      }

      return parseInt(paySum);
}
