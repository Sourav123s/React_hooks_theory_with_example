import React, { useTransition } from 'react';

import Button from '@/components/ui/Button/Button';


const TabButton = ({
    onClick,
    ...rest
}) => {
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {
            onClick?.();
        });
    };

    if (isPending) {
        return <p>Loading...</p>;
    }

    return <Button {...rest} onClick={handleClick} />;
};

export default TabButton;