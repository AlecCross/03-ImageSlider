//Нужно получить "кнопки" <button class="up-button">
//<button class="down-button"> и прикрутить им слушатель

const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

//Проблема, цвет фона описания и цвет картинки не соответствует, т.к.
//они расположены "по усолчанию" зеркально
//Нужно сдвинуть описание
//с фоном слева на определённое кол-во 
//sidebar.style.top = `-300vh` (3** кол-во слайдов 3) {3 * 100}
//которое в свjю
//очередь зависит от кол-ва комбинаций

//Получим это кол-во и зафиксируем в скрипте
const sidebar = document.querySelector('.sidebar')
//Можно оперировать стилями через:
sidebar.style.top = `-300vh`