import React from 'react';
const HeaderPage = () => {
    console.log('components.HeaderPage da duoc render');
    return (
        <>
            <header>
                <h2>This is a header</h2>
            </header>
        </>
    )
}
export default React.memo(HeaderPage);