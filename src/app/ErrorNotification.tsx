import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';
import { FC, useState } from 'react';

const ErrorNotification: FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <Alert
            status='error'
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
                <AlertTitle color='white'>Ошибка сервера</AlertTitle>
                <AlertDescription color='white'>Попробуйте поискать снова попозже</AlertDescription>
            </Box>
        </Alert>
    );
};

export default ErrorNotification;
