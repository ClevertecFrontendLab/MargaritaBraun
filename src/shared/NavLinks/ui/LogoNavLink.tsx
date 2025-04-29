import { Button, Hide } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router';

import { PotLogoIcon, TextLogoIcon } from '~/shared/Icons';

export const LogoNavLink = () => (
    <Button
        as={ReachLink}
        to='/'
        aria-label='Logo Icon'
        color='#29813F'
        size='xs'
        variant='ghost'
        _hover={{ bg: 'rgba(41, 129, 63, 0.1)', color: '#1C4532' }}
        gap='1.5'
        alignItems='flex-end'
    >
        <PotLogoIcon />
        <Hide breakpoint='(max-width: 450px)'>
            <TextLogoIcon />
        </Hide>
    </Button>
);
