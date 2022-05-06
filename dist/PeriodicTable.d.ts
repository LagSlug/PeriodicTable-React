import React from 'react';
export declare type ElementType = {
    'Number': string;
    'Type': string;
    'Atomic Weight': string;
    'Name': string;
    'Symbol': string;
    'Melting Point': string;
    'Boiling Point': string;
    'Density': string;
    'Earth': string;
    'Group': string;
    'Electron Configuration': string;
};
export declare type OnClick = (e: React.MouseEvent, element: ElementType) => void;
export declare const Context: React.Context<{
    onClick: OnClick;
    Element: ({ atomicNumber }: {
        atomicNumber: number;
    }) => JSX.Element;
    squareSize: number;
    margin: number;
}>;
export declare type Props = {
    onClick?: OnClick;
    Element?: ({ atomicNumber }: {
        atomicNumber: number;
    }) => JSX.Element;
    squareSize?: number;
    margin?: number;
};
export default function PeriodicTable({ onClick, Element, squareSize, margin }: Props): JSX.Element;
