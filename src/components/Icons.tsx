import React, { forwardRef } from 'react';

export const MenuIcon = forwardRef<SVGSVGElement, { size?: number; color?: string } & React.ComponentPropsWithoutRef<'svg'>>(
    ({ size = 18, color = 'currentColor', ...others }, ref) => {
        return (
            <svg
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...others}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
            </svg>
        );
    }
);

export const DatabaseExportIcon = forwardRef<SVGSVGElement, { size?: number; color?: string } & React.ComponentPropsWithoutRef<'svg'>>(
    ({ size = 18, color = 'currentColor', ...others }, ref) => {
        return (
            <svg
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...others}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
                <path d="M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.183 -.086 3.15 -.241" />
                <path d="M20 12v-6" />
                <path d="M4 12v6c0 1.657 3.582 3 8 3c.157 0 .312 -.002 .466 -.005" />
                <path d="M16 19h6" />
                <path d="M19 16l3 3l-3 3" />
            </svg>
        );
    }
);