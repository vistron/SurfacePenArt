import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';

const showMessageToast = (sMessage) => {
    const staticElement = document.getElementById('ui-static');
    if (staticElement) {
        const sTop = `${window.innerHeight - (window.innerHeight/6)}px`,
            sLeft = `${window.innerWidth/2}px`
      ReactDOM.render(<div style={{ top: sTop, left: sLeft, zIndex: 10, position: "fixed" }} className="MessageToast">{sMessage}</div>, staticElement);
        setTimeout(() => {
            unmountComponentAtNode(staticElement);
        }, 1000);
    }
}

export { showMessageToast };