# winnie-custom-app

Сборка winnie, заточенная под быстрое развертывание/отладку приложений.

В директории `user` находятся файлы, позволяющие кастомизировать приложение.
- `config.json` - конфиг winnie
- `styles.css` - пользовательские стили
- `script.js` - пользовательский скрипт

## Развертывание приложения

- `git clone https://github.com/Kosmosnimki/winnie-custom-app.git`
- `git submodule init --update`
- `cd external/GMXBuilder`
- `npm install`
- `cd ../`
- `npm install`
- `gulp production`
