ДОКУМЕНТАЦИЯ ПО ПРОЕКТУ «Gravity simulator»
=
## 1.1 Введение
Наименование разработки: «Гравитационный симулятор (Gravity simulator)»
## 1.2 Краткая характеристика области применения программы
Программа предназначена для моделирования движения планет и звезд в космическом пространстве в режиме web-интерфейса. Программа представляет собой бета-версию с возможной доработкой с учетом зависимости масс и силы притяжении между планетами и звездами.
## 1.3 Основание для разработки
Основанием для проведения разработки является проектная работа по предмету «Проектный практикум».
## 1.4 Назначение разработки
Программное обеспечение предназначено для реализации возможности моделирования движения планет в космическом пространстве с использованием библиотеки «Gravity-Simulator (HermannBjorgvin)». С помощью гравитационного симулятора можно смоделировать и исследовать различные поведения небесных тел. 

Программа «Гравитационный симулятор» имеет достаточный функционал для полного анализа поведения планетных систем. Для каждой планеты можно вывести примерную скорость, расстояние до другого космического объекта. Также в будущей доработке для планеты можно построить графики ее энергий (потенциальной, кинетической и их сумму). Гравитационный симулятор подойдет, как в качестве иллюстративной демонстрации движения планет, так и в качестве виртуальной работы. Он позволит провести самостоятельное исследование поведения самых разнообразных планетных систем.

Библиотека используется для визуализации астрономических данных и информации об планетах и звездах. Для визуализации используется система координат с нанесенными астрономическими данными.
## 1.5 Реализация
В программе реализуется визуализация данных с NASA Exoplanet Archive (https://exoplanetarchive.ipac.caltech.edu/docs/intro.html).
Используются следующие параметры:
* Количество планет;
* Масса планет;
* Радиус планеты.

В текущей версии реализованы визуализация трех планетных систем:
* 11 Com b - экзопланета, расположенная примерно в 289,9 световых годах (88,9 пк) от Солнечной системы
* GJ 667 C b - экзопланета, расположенная примерно в 23,2 световых годах (7,1 пк) от Солнечной системы
* 14 Her b - экзопланета, расположенная примерно в 58,3 световых годах (17,9 пк) от Солнечной системы
Для наглядности используются следующие обозначения:
![image](https://user-images.githubusercontent.com/48210690/172615872-34e79b0d-f8dd-4c6d-a7ca-65210cccde9a.png)

### 1.5.1 11 Com b
 ![image](https://user-images.githubusercontent.com/48210690/172616032-fff73c01-ebcd-4c16-8930-825e7b07a946.png)
Рисунок 1. Визуализация планетной системы
### 1.5.2 GJ 667 C b
 ![image](https://user-images.githubusercontent.com/48210690/172616077-d622c7a2-d6ae-488a-948d-0c5de8aa4ff1.png)
Рисунок 2. Визуализация планетной системы
### 1.5.3 14 Her b
 ![image](https://user-images.githubusercontent.com/48210690/172616108-4d16a66e-397e-4809-9feb-59d43d686c48.png)
Рисунок 3. Визуализация планетной системы

Часть Readme файла от контрибутора:
## How is the code structured?
I used the AMD module system to build the application, specifically I use require.js for a module loader

There are three seperate modules

### js/gravity/spacetime.js
A module that stores all objects and performs calculations on those objects at a set speed and accuracy.

### js/gravity/branes-hut.js
There's a separate branched called 'barnes-hut' which has an implementation of the barnes-hut algorithm. Supposed to be a plug and play thing where you can toggle it for greater speeds

### js/gravity/new_render.js
The old gui and render modules have been scrapped for a new combined one that doesn't have the same annoying problem of shared state of things like the cursor or camera. Currently being worked on, sorry for any annoyance
