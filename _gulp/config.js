'use strict';

var basePaths = {
	src: '',
	dist: 'dist/'
}

var paths = {

  node_jquery: {
      src: 'node_modules/jquery/dist/jquery.min.js'
  },

  node_babelpoly: {
    src: 'node_modules/babel-polyfill/dist/polyfill.min.js'
  },

	scripts: {
		src: basePaths.src + 'assets/_scripts/',
		dist: basePaths.dist + '_scripts/'
	},

	styles: {
		src: basePaths.src + 'assets/_styles/',
		dist: basePaths.dist + '_styles/'
	},

  bb: {
    src: basePaths.src + 'assets/_bb/',
    dist: basePaths.dist + '_bb/'
  },

  fonts: {
    src: basePaths.src + 'assets/fonts/',
    dist: basePaths.dist + '_styles/fonts/'
  },

  images: {
    src: basePaths.src + 'assets/images/',
    dist: basePaths.dist + '_images/'
  },

  temp: {
    src: basePaths.src + 'assets/temp/',
    dist: basePaths.dist + 'temp/'
  },

  plugins: {
    src: basePaths.src + 'assets/_scripts/plugins/',
    dist: basePaths.dist + '_scripts/'
  }

};


var inputFiles = {

  scripts: {
    main: paths.scripts.src + 'index.js'
  },

  sitecore: {
      main: paths.styles.src + 'Editor.scss',
        itcss: [
            paths.styles.src + '_00-settings/**/*.scss',
            paths.styles.src + '_100-sitecore/editor.scss'
        ]
  },

  styles: {
    main: paths.styles.src + 'styles.scss',
 		itcss: [
      paths.styles.src + '_00-settings/**/*.scss',
      paths.styles.src + '_01-tools/**/*.scss',
      paths.styles.src + '_02-generic/**/*.scss',
      paths.styles.src + '_03-elements/**/*.scss',
      paths.styles.src + '_04-objects/**/*.scss',
      paths.styles.src + '_05-components/**/*.scss',
      paths.styles.src + '_99-additional/**/*.scss'
    ]
  }
};

var outputFiles = {
  scripts: {
    main: 'scripts.js',
    mainES5: 'scripts.es5.js',
    mainMin: 'scripts.min.js',
    validation: 'validation.js'
  },
  styles: {
    main: 'styles.css',
    editor: 'Editor.css'
  }
};

var styleOptions = {
  autoprefixer: {
    browsers: [
      'last 3 versions',
      'ie 9',
      'iOS 7'
    ]
  },
  pxtorem: {
    replace: true,
    selector_black_list: [],
    prop_white_list: []
  }
};


module.exports = {
  basePaths: basePaths,
  paths: paths,
  inputFiles: inputFiles,
  outputFiles: outputFiles,
  styleOptions: styleOptions
};
