/*
Отслеживание изменения ориентации экрана:
Напишите код, который отслеживает изменение ориентации экрана устройства (с портретной на ландшафтную и наоборот) и выводит сообщение об этом на веб-странице.
*/

window.addEventListener("resize", function () {
  let orientation;
  window.innerWidth > window.innerHeight
    ? (orientation = "ландшафт")
    : (orientation = "портрет");
  console.log(`Ориентация окна ${orientation}`);
});

/*
Предупреждение о несохраненных данных:
Создайте веб-форму с текстовым полем. Реализуйте функционал, при котором при попытке закрыть вкладку браузера появляется диалоговое окно с предупреждением о возможности потери введенных, но несохраненных данных.
*/

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
});

