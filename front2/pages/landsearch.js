import AppLayout from '@/components/AppLayout';
import React from 'react';
import IfToolbar from '@/landSearch/IfToolbar';

const landSearch = () => {
    return (
        <>
            <AppLayout>
                <IfToolbar />
            </AppLayout>
        </>
    );
}

export default landSearch;

/*
<조건 툴바>
<지도>
<정보메뉴>
*/