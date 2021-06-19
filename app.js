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
//sidebar.style.top = `-300vh`//Сдвинет текущий фон слева на 3
//Считатаем кол-во слайдов. 
//Получим блок .main-slide
const mainSlide = document.querySelector('.main-slide')
//И посчитаем внутри него кол-во div
const slidesCount = mainSlide.querySelectorAll('div').length-1
//slidesCount*100 будет белый фон, так как там есть какой-то
//зарезервированый по умолчанию слайд
//sidebar.style.top = `-${slidesCount*90}vh`//так будет видно переход между белым слайдом и жедтым

//.length-1 чтобы не писать постоянно -1
sidebar.style.top = `-${(slidesCount)*100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

let activeSlideIndex = 0

//Объединение логики нажатия в функ с параметром вызова
function changeSlide(direction){
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesCount
        }
    }
    //Анимируем. Нужно сместить кратинку на высоту 
    //видимой части окна в пикселях из блока container
    //mainSlide.style.transform = 'translateY(-1000px)'

    
    const container = document.querySelector('.container')
    //Спойлер на тему создания переменных через const
    const height = container.clientHeight
    //Слайдер для правой части
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    //Слайдер для левой части
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

