import { createContext, useContext } from 'react';
import { useToast } from '@chakra-ui/react';

const ToasterContext = createContext({});

export function ToasterProvider({ children }) {
    const chakraToast = useToast();

    const toaster = {
        success: ({ title, description }) => {
            chakraToast({
                title,
                description,
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top'
            });
        },
        error: ({ title, description }) => {
            chakraToast({
                title,
                description,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top'
            });
        }
    };

    return (
        <ToasterContext.Provider value={toaster}>
            {children}
        </ToasterContext.Provider>
    );
}

export const useToaster = () => {
    const context = useContext(ToasterContext);
    if (!context) {
        throw new Error('useToaster must be used within ToasterProvider');
    }
    return context;
};
