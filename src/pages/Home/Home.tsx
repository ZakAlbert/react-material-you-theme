
import { Stack } from '@mui/material';

import { ButtonsView } from '../../views/ButtonsView';
import { AccordionView } from '../../views/AccordionView';
import { BaseColorView } from '../../views/BaseColorView';
import { IconButtonView } from '../../views/IconButtonView';
import { FABView } from '../../views/FABView';
import { ToggleButtonGroupView } from '../../views/ToggleButtonGroupView';
import { ToggleButtonView } from '../../views/ToggleButtonView';
import { BadgeView } from '../../views/BadgedView';
import { SwitchView } from '../../views/SwitchView';
import { AppBarView } from '../../views/AppBarView';
import { AvatarView } from '../../views/AvatarView';
import { AlertView } from '../../views/AlertView';
import MainContainer from '../../components/Container/MainContainer';
import { CardView } from '../../views/CardView';

const Home = () => {

    return (
        <>
            <MainContainer>
                <BaseColorView />
                <Stack spacing={6}>
                    <ButtonsView />
                    <IconButtonView />
                    <FABView />
                    <ToggleButtonView />
                    <ToggleButtonGroupView />
                    <SwitchView />
                    <CardView />
                    <BadgeView />
                    <AvatarView />
                    <AppBarView />
                    <AccordionView />
                    <AlertView />
                </Stack >
            </MainContainer>
        </>
    );
};

export default Home;