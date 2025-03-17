import React, { useTransition } from 'react';

// import Button from '@/components/ui/Button/Button';


const TabButton = ({
    onClick,
    ...rest
}) => {
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {
            onClick();
        });
    };

    if (isPending) {
        return <p>Loading...</p>;
    }

    return (<button
        style={{
            backgroundColor: rest.variant
        }}
        onClick={handleClick} >
        {rest.title}
    </button>);
};

export default TabButton;