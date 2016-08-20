var elixir = require('laravel-elixir');
    require('laravel-elixir-vueify');
var historyApiFallback = require('connect-history-api-fallback');


elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';
elixir.config.browserSync.proxy = null;
elixir.config.browserSync.notify = false;
elixir.config.notifications = false;

elixir(function(mix) {
    mix.sass('main.scss')
        .copy(elixir.config.assetsPath + '/index.html', elixir.config.publicPath)
        .browserify('main.js', null, null, {
            paths: ['./node_modules', elixir.config.assetsPath + '/js'],
            cache: {},
            packageCache: {}
        })
        .browserSync({
            server: {
                baseDir: elixir.config.publicPath,
                middleware: [ historyApiFallback() ]
            }
        });
});
