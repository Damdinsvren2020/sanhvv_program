// Дэлгэцтэй ажиллах контроллер

var uiController = (function () {})();

// Санхүүтэй ажиллах контроллер

var financeController = (function () {})();

// Программын холбогч контроллер

var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    console.log("Дэлгэцээс өгөгдлөө авах хэсэг");
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
    // 1.Оруулах өгөгдлийг дэлгэцээс олж авна
    // 2.Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална
    // 3.Олж авсан өгөгдлүүдээ тохирох вэб дээр хадгална
    // 4.Төсвийг тооцоолно
    // 5.Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана
  });

  document.addEventListener("keypress", function (event) {
    if (event.key === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
