module.exports = function(grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					outputStyle: 'expanded',
					sourceMap: false,
					includePaths: [
						'./node_modules/starlight/scss'
					]
				},
				files: {
					'styles/main.css' : 'styles/src/main.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('css', ['sass']);
};
