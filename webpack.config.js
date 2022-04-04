const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    /*
        mode: 웹팩 모드 설정 [ development(개발) | production(배포용빌드) | none(설정없이) ]  
        단순히 빌드된 파일의 크기가 다른게 큰 차이점인가 싶음.
        none으로하면 리액트 안되던데 왜그런진 모르겠다.
    */
    mode: 'development', 

    
    //entry: 웹팩의 시작점이 되는 파일의 위치.
    entry:'./src/index.js',

    //output: 번들된 파일의 이름과 파일의 위치.
    output:{
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js',
    },

    //module: 번들도중 적용할 도구. 위에 작성될수록 먼저 적용.
    module: {
        rules: [
            
            {   // 로더 : 바벨을 이용해 ES6를 ES5로 (bebel-loader)
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:['babel-loader'],
            },
            {   // 로더 : html파일 읽기 (html-loader)
                test: /\.html$/,
                use: ['html-loader'],
            },
            
            {   // 로더 : css파일 읽기 (css-loader)
                // 로더 : css파일을 html에 넣기 (style-loader)
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    //plugins: 번들된 결과물을 변형시키는 도구.
    plugins: [
        //html로 만들어주기 (아래에선 index.html을 기준으로.)
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        })
    ],

    //devServer: 개발 서버로 실행하는 방법
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true,
        historyApiFallback: true
        /* historyApiFallback : React프로젝트라면 true 넣자.
           미지정url이동 혹은 새로고침시, 적절한 렌더링을 가능하게 해준다. */ 
    }
};