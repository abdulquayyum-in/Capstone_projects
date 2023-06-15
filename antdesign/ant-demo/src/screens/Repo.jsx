import React from 'react'
import { Button, Space, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Repo = () => {
    return (
        <>
            <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
            </Space>
        </>
    )
}

export default Repo