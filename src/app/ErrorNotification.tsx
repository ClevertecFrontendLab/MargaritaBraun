import { FC } from 'react';

interface ErrorNotificationProps {
    message: string;
    onClose: () => void;
}

const ErrorNotification: FC<ErrorNotificationProps> = ({ message, onClose }) => (
    <div className='fixed top-4 right-4 bg-red-500 text-white p-4 rounded shadow-lg z-50'>
        <div className='flex justify-between items-center'>
            <span>{message}</span>
            <button onClick={onClose} className='ml-4'>
                ×
            </button>
        </div>
    </div>
);

export default ErrorNotification;
