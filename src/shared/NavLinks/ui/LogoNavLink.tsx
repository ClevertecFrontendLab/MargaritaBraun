import { IconButton, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router';

import { LogoIcon } from '~/shared/Icons';

export const LogoNavLink = () => (
    <Link as={ReachLink} to='/'>
        <IconButton
            icon={<LogoIcon />}
            aria-label='Logo Icon'
            color='#29813F'
            p='2'
            border='none'
            cursor='pointer'
            bg='transparent'
            _hover={{ bg: 'rgba(41, 129, 63, 0.1)', color: '#1C4532' }}
            variant='solid'
        />
    </Link>
);
