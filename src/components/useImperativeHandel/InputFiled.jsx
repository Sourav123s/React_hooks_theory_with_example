import React, { forwardRef, useImperativeHandle, useRef } from 'react'

function InputFiled({ }, ref) {
    const localRef = useRef();

    useImperativeHandle(ref, () => ({
        reset: () => {
            if (!localRef?.current) return;

            localRef.current.value = '';
            // localRef.current?.focus();
        },
    }))
    return (
        <div>
            <input type="text" ref={localRef} />
        </div>
    )
}

export default forwardRef(InputFiled)