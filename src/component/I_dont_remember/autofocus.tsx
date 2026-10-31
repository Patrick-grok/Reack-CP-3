import { useEffect, useRef, useState } from 'react';

function AutoFocusCounter() {
    const [text, setText] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const renderCount = useRef<number>(0);

    // eslint-disable-next-line react-hooks/refs
    renderCount.current += 1; // не вызывает повторный рендер

    useEffect(() => {
        inputRef.current?.focus(); // фокус при появлении на экране
    }, []);

    return (
        <div>
            <input
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>Введено символов: {text.length}</p>
            {/* eslint-disable-next-line react-hooks/refs */}
            <p>Компонент отрендерился {renderCount.current} раз</p>
        </div>
    );
}

export default AutoFocusCounter;