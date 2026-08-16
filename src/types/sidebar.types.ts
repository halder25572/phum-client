import type { ReactNode } from "react";


// user path type for sidebar items and routes
export type TRoute = {
    path: string;
    element: ReactNode
}

// user path type for sidebar items and routes
export type TSidebarItem = {
    key: string;
    label: ReactNode;
    children?: TSidebarItem[];
}

// user path type for sidebar items and routes
export type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
}