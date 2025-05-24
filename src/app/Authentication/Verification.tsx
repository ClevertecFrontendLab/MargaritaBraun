import { useNavigate, useSearchParams } from 'react-router';

import { SuccessAlert } from '~/entities/Alert';
import { VerificationErrorModal, VerificationPendingModal } from '~/entities/Modal';

export const Verification = () => {
    const [searchParams] = useSearchParams();

    const emailVerified = searchParams.get('emailVerified');
    const navigation = useNavigate();

    if (emailVerified === 'true') {
        navigation('/login');
        return <SuccessAlert message='Верификация прошла успешно' redirect='/login' />;
    } else if (emailVerified === 'false') {
        navigation('/registration');
        return <VerificationErrorModal />;
    }

    return <VerificationPendingModal />;
};

export default Verification;
