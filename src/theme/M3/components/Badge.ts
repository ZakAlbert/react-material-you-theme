
import {
    Theme,
    ComponentsProps, ComponentsOverrides, ComponentsVariants
} from '@mui/material';

declare module '@mui/material/Badge' {
    interface BadgePropsColorOverrides {
        tertiary: true;
    }
}

interface M3Badge {
    MuiBadge: {
        defaultProps?: ComponentsProps['MuiBadge'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiBadge'];
        variants?: ComponentsVariants['MuiBadge'];
    }
}

export const getBadge = (theme: Theme): M3Badge => {
    const { palette } = theme;
    return {
        MuiBadge: {
            defaultProps: { color: 'default' },
            variants: [
                {
                    props: { color: 'default' },
                    style: {
                        '.MuiBadge-badge': {
                            backgroundColor: palette.error.main,
                            color: palette.onError.main
                        }
                    }
                }
            ]
        }
    };
}