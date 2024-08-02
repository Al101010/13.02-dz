# 13.02-dz
DOM, Перемещение элемента
2024.08.01
1. 2. Клонировал себе 13.02-dz(пустой был).
3. Скопировал из папки "13.02-WebPack-2",     кроме: .git, README.md, coverage, dist, node_modules.
4. В Git Bash Here:
    Alex@38-PK MINGW64 /c/_GitHub_/13.02-dz (main)
    $ npm install // появился каталог node_modules


________________________________________________
Как собрать проект на Webpack - до конца не доделал
https://htmlacademy.ru/blog/soft/webpack-howto
    Инициализация проекта
npm init -y
    Установка webpack, webpack-cli и webpack-dev-server
npm install webpack webpack-cli webpack-dev-server --save-dev
    Установка css-loader и style-loader
npm install style-loader css-loader --save-dev
    Установка html-webpack-plugin
npm install html-webpack-plugin --save-dev

Структура проекта
Для удобства откройте папку с проектом прямо в VS Code через меню Файл→Открыть папку (File→Open Folder). В итоге слева будет находиться структура проекта и все файлы, а справа вы будете их редактировать.


В корне проекта создайте пустой файл webpack.config.js и добавьте туда следующий код базовой конфигурации проекта. Обратите внимание на поясняющие комментарии.

const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа для сборки проекта

  output: {
    filename: 'bundle.js', // Имя выходного файла сборки
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
  },

  module: {
    rules: [
      {
        test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ['style-loader', 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: 'development', // Режим сборки
};
В файле package.json измените поле scripts на следующее:

"scripts": {
  "start": "webpack serve",
  "build": "webpack"
},
Это позволит запускать сервер разработки и сборку проекта с помощью кратких и удобных команд npm start и npm run build, вместо того чтобы вводить полные команды в терминал каждый раз.

Теперь создайте внутри проекта папку src, а в ней пустой файл index.js. В этом файле напишем основной код приложения, которое складывает два числа из текстовых полей.

function addNumbers() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const result = num1 + num2;
  document.getElementById("result").innerText = `Result: ${result}`;
}

document.getElementById("calculate").addEventListener("click", addNumbers);
Теперь создайте в той же папке файл index.html и добавьте туда этот код:

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Калькулятор сложения</title>
</head>
<body>
  <input type="number" id="number1" placeholder="Первое число">
  <input type="number" id="number2" placeholder="Второе число">
  <button id="calculate">Сложить</button>
  <p id="result"></p>
  <script src="bundle.js"></script>
</body>
</html>
В папке src создайте файл styles.css и добавьте следующий код:

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

input, button, p {
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
}


Теперь ваш проект готов к использованию. Для запуска сервера разработки выполните следующую команду в терминале:

npm start