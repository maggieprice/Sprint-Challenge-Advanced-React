import { useEffect } from "react";
import {useLocalStorage} from '../hooks/useLocalStorage';

export const useDarkMode = (key, initialValue) => {
const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
useEffect(() => {
    if (darkMode === true) {
        (document.querySelector('body')
        .classList.add('dark-mode'))
    } else {
        (document.querySelector('body')
        .classList.remove('dark-mode'))
    }
}, [setDarkMode, darkMode])
return [darkMode, setDarkMode];
}