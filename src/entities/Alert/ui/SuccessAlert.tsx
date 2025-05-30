import { Alert, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';

interface SuccessAlertProps {
    message: string;
    redirect?: string;
}
// redirect={'/login'}
export const SuccessAlert: FC<SuccessAlertProps> = ({ message, redirect }) => {
    const [isVisible, setIsVisible] = useState(true);
    const navigation = useNavigate();

    const handleClose = () => {
        setIsVisible(false);
        if (redirect) {
            navigation(redirect);
        }
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
            data-test-id='error-notification'
        >
            <CloseButton
                alignSelf='flex-start'
                color='white'
                position='absolute'
                right={2}
                top={1}
                onClick={handleClose}
                data-test-id='close-alert-button'
            />
            <AlertIcon />
            <Box>
                <AlertTitle color='white'>{message}</AlertTitle>
            </Box>
        </Alert>
    );
};
