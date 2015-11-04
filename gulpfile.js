var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('default', function () {
  var sprite;
  var sprite2x;

  sprite = gulp
    .src('./src/icon/**/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: '../sprite.png',
      cssName: '_sprite.scss',
      cssTemplate: 'icon.scss.mustache'
    }));
  sprite.img.pipe(gulp.dest('./dist'));
  sprite.css.pipe(gulp.dest('./dist'));

  sprite2x = gulp
    .src('./src/icon@2x/**/*.png')
    .pipe(spritesmith({
      imgName: 'sprite@2x.png',
      imgPath: '../sprite@2x.png',
      cssName: '_sprite@2x.scss',
      cssTemplate: 'icon.scss@2x.mustache',
      cssVarMap: function (sprite) {
        sprite.name = (sprite.name).replace(/@/g, '_');
        sprite.x = sprite.x / 2;
        sprite.y = sprite.y / 2;
        sprite.background_size_x = sprite.total_width / 2 + 'px';
        sprite.background_size_y = sprite.total_height / 2 + 'px';
        sprite.width = sprite.width / 2;
        sprite.height = sprite.height / 2;
      }
    }));
  sprite2x.img.pipe(gulp.dest('./dist'));
  sprite2x.css.pipe(gulp.dest('./dist'));
});