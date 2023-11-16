
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useAuthContext = () => {
    const authHook = useContext(AuthContext);
    return authHook
};

export default useAuthContext;