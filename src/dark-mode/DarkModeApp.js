import { useEffect, useState } from "react";

function useDarkMode(initial = false, key = 'dark-mode') {
    const storedDarkMode = JSON.parse(localStorage.getItem(key));
    const [darkMode, setDarkMode] = useState(typeof storedDarkMode === 'boolean' ? storedDarkMode : initial);

    const setDarkModeSynced = (value) => {
        if (darkMode !== value) {
            localStorage.setItem(key, value);
            setDarkMode(value);
        }
    };

    return [darkMode, setDarkModeSynced];
}

function DarkModeApp() {
    const [darkMode, setDarkMode] = useDarkMode();

    useEffect(() => {
        const el = document.querySelector('html');
        if (darkMode && !el.classList.contains('dark')) {
            el.classList.add('dark');
        } else if (!darkMode &&el.classList.contains('dark')) {
            el.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <>
            <button className="btn self-start" onClick={() => setDarkMode(!darkMode)}>toggle dark mode</button>
            <div className="flex flex-col border self-start p-4 bg-white dark:bg-gray-800 gap-2 min-w-96">
                <span className="dark:text-white text-center">This text will change colours.</span>
                <span className="text-2xl self-center">{darkMode ? '🌚' : '🌞'}</span>
            </div>
        </>
    );
}

export default DarkModeApp;