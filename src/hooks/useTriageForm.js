import { useState } from 'react';

export function useTriageForm() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setEmail('');
            }, 4000);
        }
    };

    return {
        email,
        setEmail,
        isSubmitted,
        handleSubmit
    };
}
