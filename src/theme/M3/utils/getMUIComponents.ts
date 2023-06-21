import { Theme, } from '@mui/material';
import {
    getAccordion,
    getAlert,
    getAppBar,
    getBadge,
    getButton,
    getCard,
    getCssBaseline,
    getDrawer,
    getFab,
    getListItem,
    getListItemButton,
    getListItemIcon,
    getMenu,
    getSwitch,
    getToggleButton,
    getToggleButtonGroup,
    getTooltip
} from '../components';


type M3Components = { components: Theme['components'] };

export const getMUIComponents = (theme: Theme) => {
    //const { palette } = theme;
    return {
        components: {
            ...getCssBaseline(theme),
            ...getAccordion(theme),
            ...getAlert(theme),
            ...getAppBar(theme),
            ...getBadge(theme),
            ...getButton(theme),
            ...getCard(theme),
            ...getDrawer(theme),
            ...getFab(theme),
            ...getListItem(theme),
            ...getListItemButton(theme),
            ...getListItemIcon(theme),
            ...getMenu(theme),
            ...getSwitch(theme),
            ...getToggleButton(theme),
            ...getToggleButtonGroup(theme),
            ...getTooltip(theme),
        }
    } as M3Components;
};