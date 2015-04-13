var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    },
    open: false,/* Don't open new windows */
     notify: {   /* Hide the notification. */
         styles: ['opacity: 0', 'position: absolute']
     }
  },
  sass: {
    src: src + "/scss/**/*.{scss,sass}",
    dest: dest,
    settings: {
      indentedSyntax: true, // Enable .scss syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  markup: {
    src: src + "/htdocs/**",
    dest: dest
  },
  iconFonts: {
    name: 'Gulp Starter Icons',
    src: src + '/icons/*.svg',
    dest: dest + '/fonts',
    sassDest: src + '/scss',
    template: './gulp/tasks/iconFont/template.sass.swig',
    sassOutputName: '_icons.sass',
    fontPath: 'fonts',
    className: 'icon',
    options: {
      fontName: 'Post-Creator-Icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/app.js',
      dest: dest,
      outputName: 'app.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  },
  deploy: {
    src: dest,
    s3: { // these are demo credentials
      key:    "AKIAI3Z7CUAFHG53DMJA",
      secret: "acYxWRu5RRa6CwzQuhdXEfTpbQA+1XQJ7Z1bGTCx",
      bucket: "dev.example.com",
      region: "eu-west-1"
    }
  }
};
