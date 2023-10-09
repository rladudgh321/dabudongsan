import React, { useState, useCallback } from 'react';
import { List, Space} from 'antd';
import AppLayout from '@/components/AppLayout';
import Location from '@/requestPage/Location';
import LandType from '@/requestPage/LandType';

const request = () => {
    return (
        <>
            <AppLayout>
                <List
                    bordered
                >
                    <Space>
                        <List.Item>
                            <LandType />
                        </List.Item>
                        <List.Item>
                            <Location />
                        </List.Item>
                    </Space>
                </List>
            </AppLayout>
        </>
    );
}

export default request;