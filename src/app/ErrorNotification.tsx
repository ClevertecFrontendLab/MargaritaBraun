import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';
import { FC } from 'react';

const ErrorNotification: FC = () => (
    <>
        <Alert
            status='error'
            variant='solid'
            w='400px'
            // m='0 auto'
            position='fixed'
            bottom='50px'
            right='35vw'
            zIndex='modal'
            data-test-id='error-notification'
        >
            <AlertIcon data-test-id='close-alert-button' />
            <Box>
                <AlertTitle color='white'>Ошибка сервера</AlertTitle>
                <AlertDescription color='white'>Попробуйте поискать снова попозже</AlertDescription>
            </Box>
        </Alert>
    </>
);

export default ErrorNotification;
