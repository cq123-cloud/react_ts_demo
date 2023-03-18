import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Input, Select, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import '@/styles/table_wrap.scss'
import * as API_Table from '@/api/table'
import AddModal from './AddModal'

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
const columns: ColumnsType<DataType> = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    }
]
const TableList: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [SelectValue, setSelectValue] = useState('');
    const [tableList, setTableList] = useState<DataType[]>([]);
    useEffect(() => {
        async function gettableList() {
            let res = await API_Table.getTableList()
            setTableList(res.data)
        }
        gettableList()
    }, [])
    const showDialog = ()=>{
        setShowModal(true)
    }
    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const handleChange = (value: string) => {
        setSelectValue(value)
    }
    const search = () => {
        console.log({ inputValue, SelectValue }, '看看查询得条件')
    }
    const changeShow=(value:boolean)=>{
        setShowModal(value)
    }
    return (
        <>
            <div className="search_form">
                <Button type="primary" icon={<PlusOutlined />} onClick={showDialog}>
                    新增
                </Button>
                <Input
                    className="search_item"
                    style={{ width: 150 }}
                    placeholder="输入搜索条件"
                    value={inputValue}
                    onChange={changeValue} />
                <Select
                    className="search_item"
                    placeholder="Select a person"
                    defaultValue={SelectValue}
                    style={{ width: 150 }}
                    onChange={handleChange}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                />
                <Button type="primary" icon={<SearchOutlined />} onClick={search}>
                    查询
                </Button>
            </div>
            <Table columns={columns} dataSource={tableList} />
            <AddModal show={showModal} changeShow={changeShow}></AddModal>
        </>
    )
}
export default TableList