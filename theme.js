import { roboto } from '@theme-ui/presets';
import { ThemeProvider } from 'theme-ui';
import { toTheme } from '@theme-ui/typography';
import stardustTheme from 'typography-theme-stardust';
import merge from 'deepmerge'
import bootstrapTheme from 'typography-theme-bootstrap'

// const theme = {
//     ...roboto,
//     colors: {
//         ...roboto.colors,
//         background: 'lavender',
//     },
//     text: {
//         default: {
//             textAlign: "center"
//         }
//     },
//     cards: {
//         primary: {
//             padding: 2,
//             borderRadius: 4,
//             boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
//         },
//         compact: {
//             padding: 1,
//             borderRadius: 2,
//             border: '1px solid',
//             borderColor: 'muted',
//         },
//     },
//     // containers: {
//     //     card: {
//     //         boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
//     //         border: '1px solid',
//     //         borderColor: 'muted',
//     //         borderRadius: '4px',
//     //         p: 2,
//     //     },
//     //     page: {
//     //         width: '100%',
//     //         maxWidth: '960px',
//     //         m: 0,
//     //         mx: 'auto',
//     //     }
//     // },
//     styles: {
//         ...roboto.styles
//     }
// };

const theme = merge(toTheme(stardustTheme),{
// const theme = merge(toTheme(bootstrapTheme),{
    ...roboto,
    colors: {
        ...roboto.colors,
        background: 'lavender',
        // background: '#711324',
    },
    text: {
        default: {
            textAlign: "center"
        }
    },
    cards: {
        primary: {
            padding: 2,
            borderRadius: 4,
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
        },
        compact: {
            padding: 1,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'muted',
        },
    },
    // containers: {
    //     card: {
    //         boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    //         border: '1px solid',
    //         borderColor: 'muted',
    //         borderRadius: '4px',
    //         p: 2,
    //     },
    //     page: {
    //         width: '100%',
    //         maxWidth: '960px',
    //         m: 0,
    //         mx: 'auto',
    //     }
    // },
    styles: {
        ...roboto.styles
    }
});

export default theme;


