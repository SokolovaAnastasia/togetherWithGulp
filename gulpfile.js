const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixes = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify-es').default
const  notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const font = require('gulp-font')
const browserSync = require('browser-sync').create()
const gulpPug = require('gulp-pug')
const gulpSass = require('gulp-sass')(require('sass'));

const clean = () => {
  return del(['dist'])
}

const styles = () => {
  return src('src/styles/**/*.css')
  .pipe(sourcemaps.init())
  .pipe(concat('main.css'))
  .pipe(autoprefixes ({
    cascade: false
  }))
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(sourcemaps.write())
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const stylesbuild = () => {
  return src('src/styles/**/*.css')
  .pipe(concat('main.css'))
  .pipe(autoprefixes ({
    cascade: false
  }))
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}


const htmlMinify = () => {
  return src('src/**/*.html')
  .pipe(htmlMin ({
    collapseWhitespace: true,
  }))
.pipe(dest('dist'))
.pipe(browserSync.stream())
}

const svgSprites = () => {
  return src('src/images/svg/**/*.svg')
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: '../sprite.svg'
      }
    }
  }))

  .pipe(dest('dist/images'))
}

const scripts = () => {
  return src([
    'src/js/components/**/*.js',
    'src/js/main.js',
  ])
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(concat('app.js'))
  .pipe(uglify({
    toplevel: true
  }).on('error', notify.onError()))
  .pipe(sourcemaps.write())
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const scriptsbuild = () => {
  return src([
    'src/js/components/**/*.js',
    'src/js/main.js',
  ])
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(concat('app.js'))
  .pipe(uglify({
    toplevel: true
  }).on('error', notify.onError()))
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const resources = () => {
  return src('src/resources/**')
  .pipe(dest('dist'))
}
const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

const images = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.png',
    'src/images/*.svg',
    'src/images/**/*.jpeg',
  ])
  .pipe(image())
  .pipe(dest('dist/images'))
}

const fonts = () => {
  return src([
    'src/fonts/**/*.woff',
    'src/fonts/**/*.woff2',
  ])
  .pipe(dest('dist/fonts'))
}
// 
const pug2html = () => {
 return src(
  'src/pug/pages/*.pug')
 .pipe(gulpPug())
 .pipe(dest('dist'))
}
const sass2css = () => {
  return src('src/styles/**/*.scss')
  .pipe(gulpSass())
  .pipe(dest('dist/styles'))
 }
// 


watch('src/styles/**/*.scss', sass2css)
watch('src/pug/pages**/*.pug', pug2html)
watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.css', styles)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)

exports.styles = styles
exports.fonts = fonts
exports.htmlMinify = htmlMinify
exports.scripts = scripts

exports.dev = (clean, svgSprites, watchFiles, resources, scripts, styles, fonts)
exports.build = (clean, htmlMinify, images, svgSprites, resources, stylesbuild, scriptsbuild, pug2html, sass2css)
exports.default = series(clean, fonts, resources, htmlMinify, scripts, styles, images, svgSprites, pug2html, sass2css, watchFiles)

