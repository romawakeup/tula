const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require("gulp-rm");
// const sass = require('gulp-sass');
const scss = require("gulp-scss");
const sassGlob = require("gulp-sass-glob");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const pug = require("gulp-pug");
const svgo = require("gulp-svgo");
const svgSprite = require("gulp-svg-sprite");
// const px2rem = require('gulp-smile-px2rem');
const px2rem = require("gulp-px-to-rem");
const autoprefixer = require("gulp-autoprefixer");
const gcmq = require("gulp-group-css-media-queries");
let cleanCSS = require("gulp-clean-css");
const reload = browserSync.reload;

const sass = require("gulp-sass")(require("sass"));

const babel = require("gulp-babel");

task("clean", () => {
  return src("./dist/*", { read: false }).pipe(rm());
});

// task('pug', () => {
// 	return src('src/index.pug')
// 		.pipe(concat('index.html'))
// 		.pipe(pug({ pretty: '\t' }))
// 		.pipe(dest('./dist/'))
// 		.pipe(reload({ stream: true }));
// });

task("pug", () => {
  return (
    src("src/pages/*.pug")
      // .pipe(concat('index.html'))
      .pipe(pug({ pretty: "\t" }))
      .pipe(dest("./dist/"))
      .pipe(reload({ stream: true }))
  );
});

const styles = ["src/styles/main.scss"];

task("styles", () => {
  return (
    src(styles)
      // .pipe(concat('common.css'))
      .pipe(sassGlob())
      .pipe(sass().on("error", sass.logError))
      // .pipe(
      // 	px2rem({
      // 		accuracy: 2,
      // 		rootPX: 16,
      // 	})
      // )
      .pipe(
        autoprefixer({
          cascade: false,
          // overrideBrowserslist: ['defaults'],
        })
      )
      // .pipe(gcmq({}))
      // .pipe(cleanCSS())
      .pipe(dest("./dist"))
      .pipe(reload({ stream: true }))
  );
});

task("images", () => {
  return src(["src/img/*"]).pipe(dest("./dist/img/"));
});

const scripts = ["src/scripts/*.js"];

task("scripts", () => {
  return (
    src(scripts)
      // .pipe(concat('main.js'))
      // .pipe(
      // 	babel({
      // 		presets: ['@babel/preset-env'],
      // 	})
      // )
      .pipe(dest("././dist/js/"))
      .pipe(reload({ stream: true }))
  );
});
task("server", () => {
  browserSync.init({
    server: {
      baseDir: "./dist/",
    },
    open: false,
  });
});

task("icons", () => {
  return (
    src("src/iconsprite/*.svg")
      .pipe(
      	svgo({
      		plugins: [
      			{
      				// name: "removeAttrs",
      				// params: {
      				// 	attrs: '(fill|stroke|style|width|height|data.*)',
      				// 	elemSeparator: ":",
      				// 	preserveCurrentColor: false
      				//   }
      				removeAttrs: {
      					attrs: '(fill|stroke|style|width|height|data.*)',
      				},
      			},
      		],
      	})
      )
      .pipe(
        svgSprite({
          // mode: {
          // 	css: {
          // 		render: {
          // 			css: true,
          // 		},
          // 	},
          // },
          mode: {
            symbol: {
              // Create a «symbol» sprite
              // inline: true, // Prepare for inline embedding
              dest: "",
              sprite: "./sprite.svg",
            },
            // defs: {
            //   dest: "",
            //   sprite: "./sprite.svg",
            // }
            // css: {
            //   render: {
            //     css: true,
            //   },
            // },
          },
        })
      )
      .pipe(dest("./dist/iconsprite/icons"))
  );
});

task("fonts", () => {
  return src("src/fonts/*/**")
    .pipe(dest("dist/fonts"));
});

watch(
  "./src/styles/**/*.scss",
  // series('styles_reg')
  series("styles")
  // series('styles', 'styles_bitrix', 'styles_reg')
);
watch("./src/**/*.pug", series("pug"));
watch("./src/scripts/*.js", series("scripts"));
watch("./src/images/icons/*.svg", series("icons"));
watch("./src/fonts/*", series("fonts"));

task(
  "default",
  series(
    "clean",
    parallel("pug", "styles", "scripts", "icons", "server", "images","fonts")
  )
);
