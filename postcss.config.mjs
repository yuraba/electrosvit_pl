const config = {
    plugins: {
        '@tailwindcss/postcss': {},
        '@csstools/postcss-global-data': {
            files: ['./src/custom-media.css'],
        },
        'postcss-custom-media': {},
    },
};

export default config;
