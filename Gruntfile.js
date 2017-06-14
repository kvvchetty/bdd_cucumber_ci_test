module.exports = function (grunt) {
    grunt.initConfig({
        express: {
            acceptance: {
                options: {
                    script: "src/server/index.js",
                    background: true,
                    output: "Server listening on port"
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('acceptance', ["express:acceptance"]);
};
