class Functionality {
      static loadCommonOnline() {
            $.ajax({
                  url: "handler.php",
                  type: "POST",
                  data: {"action": "get.common.online"}
            }).done((message) => {
                  message = JSON.parse(message);
                  $(".rage-monitor .commonOnline").text(message.commonOnline || 0);
            });
      }

      static loadServersCount() {
            $.ajax({
                  url: "handler.php",
                  type: "POST",
                  data: {"action": "get.servers.count"}
            }).done((message) => {
                  message = JSON.parse(message);
                  $(".rage-monitor .serversCount").text(message.serversCount);
            });
      }

      static loadServerInfo() {
            $.ajax({
                  url: "handler.php",
                  type: "POST",
                  data: {"action": "get.server.info"}
            }).done((message) => {
                  var info = JSON.parse(message).info;
                  $(".rage-monitor .name").text(info.name || "Glorian-RP (Оффлайн)");
                  $(".rage-monitor .ip").text(info.ip);
                  $(".rage-monitor .players").text((info.players || 0) + "/" + (info.maxplayers || 1000));
            });
      }

      static loadNewsArticles() {
            $.ajax({
                  url: "handler.php",
                  type: "POST",
                  data: {"action": "get.news.articles"}
            }).done((message) => {
                  var articles = JSON.parse(message).articles;
                  var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
                  articles.forEach((article) => {
                        var date = new Date(article.date * 1000);
                        $(".newsArticles").append(`<div class="col-md-4">
                              <div class="example-2 card">
                                    <div class="card_wrapper" style="background-image: url(${article.bgImgSrc});">
                                          <div class="header">
                                                <div class="date">
                                                      <span class="day">${date.getDate()}</span>
                                                      <span class="month">${months[date.getMonth()]}</span>
                                                      <span class="year">${date.getFullYear()}</span>
                                                </div>
                                          <ul class="menu-content">
                                                <li>
                                                      <a href="#" class="fa fa-heart-o"><span>${article.votes}</span></a>
                                                </li>
                                          </ul>
                                          </div>
                                          <div class="data">
                                                <div class="content">
                                                      <span class="author">${article.author}</span>
                                                      <h1 class="title"><a href="#">${article.title}</a></h1>
                                                      <p class="text">${article.desc}</p>
                                                      <a class="button js-click-modal" data-newsid="${article.id}">Открыть</a>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>`);
                  });
                  initNewsHandlers();
            });
      }

      static loadNewInfo(newsId) {
            $(".popup-news .title").text("Загрузка...");
            $(".popup-news .date").text("...");
            $(".popup-news .author").text("...");
            $(".popup-news .votes").text("...");
            $(".popup-news .text").text("Загрузка...");

            $.ajax({
                  url: "handler.php",
                  type: "POST",
                  data: {"action": "get.new.info", "newsId": newsId}
            }).done((message) => {
                  var info = JSON.parse(message).info;

                  $(".popup-news .title").text(info.title);
                  $(".popup-news .date").text(Functionality.getCorrectDate(info.date));
                  $(".popup-news .author").text(info.author);
                  $(".popup-news .votes").text(info.votes);
                  $(".popup-news .text").html(info.text);
            });
      }

      static loadDonateX2() {
            $.ajax({
                  url: "handler.php",
                  type: "POST",
                  data: {"action": "get.donate.x2"}
            }).done((message) => {
                  var donateX2 = JSON.parse(message).donateX2;

                  if (donateX2 == "yes") $(".x2").text("x2");
                  else $(".x2").text("");
            });
      }

      static getCorrectDate(seconds) {
            seconds = parseInt(seconds * 1000);
            var date = new Date(seconds);
            return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
      }
}
