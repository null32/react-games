import React, { Children, ReactChildren, ReactNode } from 'react';
import styled from 'styled-components';

interface GameFrameProps {
    className?: string;
    children?: ReactNode;
}

function GameFrame(props: GameFrameProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}



export default styled(GameFrame)`
    min-height: calc(100vh - 160px);
    min-width: 100vh;
    display: flex;
    justify-content: center;
    margin: 100px 0px 10px 0px;
    box-sizing: border-box;
`;
