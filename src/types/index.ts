export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoProps {
    title: string;
    completed: boolean;
    onToggle: () => void;
}