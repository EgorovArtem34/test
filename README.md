# Тестовое задание для поступления в АйЭктив

Необходимо реализовать функционал ленты сообщений.

ВЕСЬ набор тестовых данных состоит из 20 сообщений.
набор старых сообщений идентичен стартовому набору
новые сообщения - рандомные из базового набора

для получения первых 20-ти сообщений передавать параметр messageId   со значением   0.
для получения новых сообщений передавать в этом параметре id последнего сообщения.

для получения предыдущих сообщений передавать параметр oldMessages со значением true

После загрузки приложения надо получить "последние" 20 сообщений делать запрос на бек. Каждые 5 секунд делать запрос на бек, чтобы проверять наличие "новых" сообщений и добавлять их в ленту.

UPD от 17.06.2023 - над старым сообщением сделать кнопку ЗАГРУЗИТЬ ПРЕДЫДУЩИЕ
 - получить по ней старые сообщений. Лучше без кнопки - по скролу подгружать старые

Дополнительно:

1. Добавить функционал для добавления сообщения в избранное, у избранного сообщения кнопка-звездочка должна гореть. После перезагрузки страницы состояние должно сохраняться.

2.По умолчанию самое новое сообщение должно находиться снизу. Реализовать функционал для управления порядком сообщений (новой появляется сверху/новое появляется снизу).

## Использованные технологии
- React
- TypeScript
- Redux, Redux Toolkit
- React-router-dom
- classnames
- Vite


## Установка
1. Склонируйте репозиторий `git clone https://github.com/EgorovArtem34/test`
2. Перейдите в директорию проекта `cd test`
3. Установите зависимости `make install`
5. Запустите локальную версию `make start`
6. Нажмите на кнопку `h` для показа настроек
  ```press r to restart the server
  press u to show server url
  press o to open in browser
  press c to clear console
  press q to quit
  ```

## Скриншоты

![](https://raw.githubusercontent.com/EgorovArtem34/screenshots/master/iactive/1.JPG)
![](https://raw.githubusercontent.com/EgorovArtem34/screenshots/master/iactive/2.JPG)
