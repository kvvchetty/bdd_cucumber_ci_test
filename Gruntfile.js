module.exports = function (grunt) {
    grunt.initConfig({
        express: {
            acceptance: {
                options: {
                    script: 'src/server/index.js',
                    background: true,
                    output: 'Server listening on port'
                }
            }
        },
        shell: {
            acceptance: {
                command: 'cucumber.js src/acceptance/features -r src/acceptance/steps'
            }
		}
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('acceptance', ['express:acceptance', 'shell:acceptance']);
};
