export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            "colors": {
                "primary-fixed": "#d2f000",
                "on-primary-fixed": "#191e00",
                "secondary": "#c6c7c2",
                "tertiary-fixed": "#e1e3dd",
                "tertiary-fixed-dim": "#c5c7c1",
                "surface-container-high": "#292a29",
                "primary": "#ffffff",
                "outline-variant": "#454932",
                "on-secondary": "#2f312e",
                "tertiary": "#ffffff",
                "surface-tint": "#b8d300",
                "on-primary": "#2c3400",
                "surface-bright": "#393938",
                "on-secondary-fixed": "#1a1c19",
                "secondary-fixed": "#e3e3de",
                "tertiary-container": "#e1e3dd",
                "on-surface": "#e4e2e0",
                "primary-container": "#d2f000",
                "on-error": "#690005",
                "secondary-container": "#484a46",
                "on-error-container": "#ffdad6",
                "on-secondary-container": "#b8b9b4",
                "background": "#131412",
                "surface-container-highest": "#343534",
                "on-primary-fixed-variant": "#414c00",
                "surface-container": "#1f201f",
                "error-container": "#93000a",
                "surface-container-low": "#1b1c1b",
                "primary-fixed-dim": "#b8d300",
                "on-primary-container": "#5d6b00",
                "on-tertiary-fixed-variant": "#454843",
                "on-tertiary-container": "#626560",
                "surface-dim": "#131412",
                "inverse-on-surface": "#30312f",
                "error": "#ffb4ab",
                "on-secondary-fixed-variant": "#464744",
                "inverse-primary": "#576500",
                "on-tertiary-fixed": "#191c19",
                "surface-variant": "#343534",
                "outline": "#909378",
                "surface": "#131412",
                "secondary-fixed-dim": "#c6c7c2",
                "on-tertiary": "#2e312d",
                "on-background": "#e4e2e0",
                "on-surface-variant": "#c6c9ab",
                "inverse-surface": "#e4e2e0",
                "surface-container-lowest": "#0d0e0d"
            },
            "borderRadius": {
                "DEFAULT": "0px",
                "lg": "0px",
                "xl": "0px",
                "full": "9999px"
            },
            "spacing": {
                "unit": "4px",
                "container-max": "1440px",
                "margin-mobile": "16px",
                "margin-desktop": "40px",
                "gutter": "16px"
            },
            "fontFamily": {
                "body-md": ["Inter"],
                "display-lg": ["Inter"],
                "headline-lg": ["Inter"],
                "label-mono-sm": ["JetBrains Mono"],
                "headline-md": ["Inter"],
                "label-mono-lg": ["JetBrains Mono"],
                "headline-lg-mobile": ["Inter"],
                "body-lg": ["Inter"]
            },
            "fontSize": {
                "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                "display-lg": ["72px", {"lineHeight": "1.0", "letterSpacing": "-0.04em", "fontWeight": "900"}],
                "headline-lg": ["40px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                "label-mono-sm": ["12px", {"lineHeight": "1.4", "letterSpacing": "0.1em", "fontWeight": "400"}],
                "headline-md": ["24px", {"lineHeight": "1.2", "fontWeight": "700"}],
                "label-mono-lg": ["14px", {"lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "500"}],
                "headline-lg-mobile": ["32px", {"lineHeight": "1.1", "fontWeight": "800"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
            },
            animation: {
                'spin-slow': 'spin-slow 8s linear infinite',
                'scan': 'scan 4s linear infinite',
            },
            keyframes: {
                'spin-slow': {
                    'from': { transform: 'rotate(0deg)' },
                    'to': { transform: 'rotate(360deg)' },
                },
                'scan': {
                    'from': { top: '0%' },
                    'to': { top: '100%' },
                }
            }
        },
    },
};
