import { Alert, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';
import { FC, useState } from 'react';

interface SuccessAlertProps {
    message: string;
}
export const SuccessAlert: FC<SuccessAlertProps> = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <Alert
            status='success'
            variant='solid'
            w={['320px', null, '400px']}
            position='fixed'
            bottom='50px'
            left='50%'
            transform='translateX(-50%)'
            zIndex='modal'
        >
            <CloseButton
                alignSelf='flex-start'
                color='white'
                position='absolute'
                right={2}
                top={1}
                onClick={handleClose}
            />
            <AlertIcon />
            <Box>
                <AlertTitle color='white'>{message}</AlertTitle>
            </Box>
        </Alert>
    );
};
