import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

const ErrorNotification: FC = () => {
    const navigate = useNavigate();
    return (
        <>
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
                    onClick={() => navigate('/')}
                    data-test-id='close-alert-button'
                />
                <AlertIcon />
                <Box>
                    <AlertTitle color='white'>Ошибка сервера</AlertTitle>
                    <AlertDescription color='white'>
                        Попробуйте поискать снова попозже
                    </AlertDescription>
                </Box>
            </Alert>
        </>
    );
};

export default ErrorNotification;
