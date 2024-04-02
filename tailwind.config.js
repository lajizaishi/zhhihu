// // tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            spacing: {
                '96': '24rem',
                '320': '80rem'
            },
            colors: {
                // white: '#fff',
                // black: '#000',
                white: "luyi(cw)",
                black: 'luyi(cb)',
                gray: {
                    50: 'luyi(cg05)',
                    100: 'luyi(cg10)',
                    200: '#E5E7EB',
                    300:'#d1d5db',
                    400:'#9ca3af',
                    500:'#6b7280',
                    600:'#4b5563',
                    700:'#374151',
                    800:'#1f2937',
                    900:'#111827'
                }
            }
        }
    },
    plugins: [

    ],
    variants: {
        extend: {
            color: ['last']
        }
    }
};


// module.exports = {
//     content: [
//         "./src/**/*.{js,ts,jsx,tsx}",
//         "./public/index.html",
//     ],
//     theme: {},
//     plugins: [],
// };