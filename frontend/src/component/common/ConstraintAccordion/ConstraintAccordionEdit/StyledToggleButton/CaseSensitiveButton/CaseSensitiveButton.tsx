import { Tooltip } from '@mui/material';
import { ReactComponent as CaseSensitive } from 'assets/icons/24_Text format.svg';
import { ReactComponent as CaseSensitiveOff } from 'assets/icons/24_Text format off.svg';
import React  from 'react';
import {
    StyledToggleButtonOff,
    StyledToggleButtonOn,
} from '../StyledToggleButton';
import { ConditionallyRender } from '../../../../ConditionallyRender/ConditionallyRender';
import { IConstraint } from '../../../../../../interfaces/strategy';

interface CaseSensitiveButtonProps {
    localConstraint: IConstraint;
    setCaseInsensitive: () => void;
}

export const CaseSensitiveButton = ({
    localConstraint,
    setCaseInsensitive,
}: CaseSensitiveButtonProps) => {
    return (
        <Tooltip
            title={
                localConstraint.caseInsensitive
                    ? 'Make it case sensitive'
                    : 'Remove case sensitive'
            }
            arrow
        >
            <ConditionallyRender
                condition={Boolean(localConstraint.caseInsensitive)}
                show={
                    <StyledToggleButtonOff
                        onClick={setCaseInsensitive}
                        disableRipple
                    >
                        <CaseSensitiveOff />
                    </StyledToggleButtonOff>
                }
                elseShow={
                    <StyledToggleButtonOn
                        onClick={setCaseInsensitive}
                        disableRipple
                    >
                        <CaseSensitive />
                    </StyledToggleButtonOn>
                }
            />
        </Tooltip>
    );
};
