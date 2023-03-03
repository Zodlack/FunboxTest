# Ответы на вопросы из блока "Level I"
1)Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:
 пользователя;
 менеджера проекта;
 дизайнера;
 верстальщика;
 клиентского программиста;
 серверного программиста.

Ответ:
Каждый из вышеперечисленных имеет свои представления о "хорошей вёрстке" и хорошая верстка для верстальщика и для серверного программиста разная. Золотой середины нет . Есть хорошие решения и есть не самые лучшие. Но чтобы решение выглядело одинаково хорошо для всех - это уже плохо. Например, дизайнер и менеджер проекта хочет иметь очень "гибкую" вёрстку. Для быстрых внедрений изменений во внешний вид. А программисту и пользователю лучше, когда вёрстка быстрее обрабатывается браузером. При этом от вёрстки может зависеть мнение поисковых систем. Решение не должно быть "хорошим" или "плохим". Любое решение и реализация должны быть взвешенными. 

 ⁃ С точки зрения пользователя ключевые моменты верстки это качество визуального отображения, скорость работы и доступность контента с любого устройства. Особое место в интерфейсе занимает его отзывчивость. Пользователь заходит на сайт не для того , чтобы оценить его внешний вид ,визуал , а чтобы что-то найти или купить. Нужно как можно быстрее захватить его внимание на том , что он ищет и так чтобы он это смог заметить и разобраться в предоставленной информации.
 ⁃ С точки зрения менеджера проекта - качественный и понятный код с возможностью масштабирования. Чтобы проект сдавался в срок;
 ⁃ Дизайнера : чтобы элементы на сайте соответствовали  его дизайн-макету;
 ⁃ Верстальщика: понятный и поддерживаемый код, грамотное использование инструментов, возможность масштабировать проект и предугадывать на перед изменения в нем , дабы в будущем избежать серьёзных проблем , в случае поправок в коде.
 ⁃ Клиентского программиста: грамотное наименование классов и ID. Понятный и гибко расширяемый код;
 ⁃ серверного программиста: здесь я бы сказал , что производительность клиентской части, грамотное отображение контента и его оптимизация.

2)Опишите основные особенности верстки крупных многостраничных сайтов, дизайн
которых может меняться в процессе реализации и поддержки.
Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты
и технологии вы применяли на практике.

Ответ:
У меня не было опыта написания многостраничных сайтов , но если подумать ,то код стилей и разметки должен оставаться легко читаемым вне зависимости от его совокупного количества. Чтобы изменение одного модуля кода не влияла на другие. Здесь возможно поможет верстка по БЭМ. Очень даже удобно. Особенно с использованием модификаторов.

3)Опишите основные особенности верстки сайтов, которые должны одинаково хорошо
отображаться как на любом современном компьютере, так и на смартфонах и
планшетах под управлением iOS и Android. Расскажите о своем опыте верстки
подобных сайтов: какие инструменты и технологии вы применяли, как проверяли
результат на различных устройствах, какие именно устройства требовалось
поддерживать. 

Ответ:
Точно не могу сказать. Но если подумать , я бы отказался от использования position:fixed (так как ранее я его использовал в создании сайтов для портфолио) было ощущение , что при скролле js-скрипты немного  тормозили. Использовал бы для планшетов и мобильных устройств иконочные  шрифты и svg-графику.

4)Расскажите, какие инструменты помогают вам экономить время в процессе
написания, проверки и отладки кода

Ответ:
Проект собираю с помощью Gulp и плагинов к нему. Использую препроцессоры SASS и SCSS для упрощения  написания стилей. Дебаг провожу в Chrome Web Inspector. С Git работаю и основные команды знаю. В качестве редактора кода использую VScod.HTML- код люблю писать в последнее время по БЭМ, очень удобно , так как можно прослеживать логику . Придерживаюсь семантической верстки. В крайнем своём проекте использовал data-атрибуты, чтобы влиять на скриптовые свойства .В качестве проверки валидации сайта использую  данный интернет ресурс: validator.w3.org. В качестве отзывчивой адаптации использую bootstrap библиотеку. В Vscode использую плагины для автоматического набора и изменения html-тегов. Для валидации форм на сайте использовал jquery библиотеку. 

5)Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на
Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия?
Сталкивались ли вы с подобными проблемами на практике? 

Ответ:
Пока с такой проблемой не сталкивался , но если бы у меня не было доступа к исходникам , то я сперва воспользовался бы консолью разработчика и попытался разобраться в чем дело. А если бы был доступ к исходникам , то установил для начала плагин "autoprefixer" — он нужен для автоматического добавления вендорных префиксов, именно благодаря ему создание кроссбраузерного css становится проще. И еще задебажил бы код.

6)Дизайнер отдал вам макет, в котором не показано, как должны выглядеть
интерактивные элементы при наведении мыши. Ваши действия?

Ответ:
Сперва попытался бы уточнить у дизайнера как должны выглядеть интерактивные элементы при наведении мышью, но если возможности не было бы то попробовал внести сам какие-либо изменения. Предположим характер интерактивных элементов очевиден (например наведение на кнопки меняется цвет и появляется курсор и т.д.), тогда стоит для hover попробовать что-нибудь привычное, например небольшое изменение цвета. После чего все равно показать это дизайнеру, если будет такая возможность.

7)Какие ресурсы вы используете для развития в профессиональной сфере? Приведите
несколько конкретных примеров (сайты, блоги и так далее).
Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или что-то ещё?
Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам
интересны? 

Ответ:
Периодически читаю статьи на Habr, техническую документацию к новым технологиям разработки, слежу за деятельность ютуб-блогеров , занимающихся frontend- разработкой ,таких как : Ulbi TV, WebDesign Master, webDew, IT-KAMASUTRA. Прохожу их курсы и делаю проекты для портфолио. Пытаюсь решать задачки на CodeWars , читаю книги посвящённые разработке ,использую stack overflow, изучаю и использую документацию , изучаю javaScript.ru (современный учебник). На данный момент освоил  верстку и продолжаю совершенствоваться , она мне нравится ,  посвящаю время  js-программированию , потому что мне понравился данный язык и есть ещё во что углубляется. В целом интересна web-разработка. В дальнейшем хочется развиваться по направлению full-stack. Изучить React , Angular, PHP, Vue.js и многое другое . Я не собираюсь останавливаться только на одной верстке. Желаю быть востребованным it-специалистом с углубленными знаниями в тех или иных технологиях.

8)Расскажите нам о себе и предоставьте несколько ссылок на последние работы,
выполненные вами. 

Ответ:
5 лет учился в СГУПС и еще на 3 курсе понимал , что это не мое , но так как люблю доводить дело до конца , получил диплом. По окончанию университета поработал в компании и ушёл , потому очень хотел посвятить себя разработке , у меня к этому лежит душа. В свободное время только программирую и читаю научную, техническую и художественную литературу .Очень хочу попасть на свою первую должность ! Готов стараться усердно! Касательно моих навыков , я кратко их изложил в свое резюме https://novosibirsk.hh.ru/resume/e1627049ff0b8763320039ed1f6e434941654e.