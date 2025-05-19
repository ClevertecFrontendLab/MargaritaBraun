import { redirect, useSearchParams } from 'react-router';

import { SuccessAlert } from '~/entities/Alert';
import { VerificationErrorModal, VerificationPendingModal } from '~/entities/Modal';

export const Verification = () => {
    const [searchParams] = useSearchParams();

    const emailVerified = searchParams.get('emailVerified');

    if (emailVerified === 'true') {
        redirect('/login');
        return <SuccessAlert message='Верификация прошла успешно' />;
    } else if (emailVerified === 'false') {
        return <VerificationErrorModal />;
    }

    return <VerificationPendingModal />;
};

export default Verification;
