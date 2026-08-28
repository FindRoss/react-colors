import type { RootState } from './store'; 

const STORAGE_KEY = 'reactColorState'; 

export function loadState(): RootState | undefined {
    try {
        const serialized = localStorage.getItem(STORAGE_KEY); 
        if (serialized === null) return undefined; 
        return JSON.parse(serialized); 
    } catch (err) {
        console.error('Could not load state from localStorage', err); 
        return undefined; 
    } 
}

export function saveState(state: RootState) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); 
    } catch (err) {
        console.error('Could not save state to localStorage', err);
    }
}

