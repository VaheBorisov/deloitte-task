import {useEffect} from 'react';
import {DeloitteActions} from '../../store/actions';

import { Layout, Input, Button, Skeleton } from 'antd';
import {MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';

import './header.scss';

const {Search} = Input;

const Header = ({ collapsed, onCollapse, onSearch, loading, url, title, openEmailModal, onChangeSearchValue }) => {

    const iconsProps = () => ({
        fontSize: '22px',
        color: '#adadad',
        background: 'black'
    });

    return (
      <Layout.Header>
        <div className="header">
          <div>
            <Button className="side-bar-trigger" icon={collapsed ? <MenuUnfoldOutlined style={iconsProps()} /> : <MenuFoldOutlined style={iconsProps()} />} onClick={onCollapse} />
            {
                loading
                    ? <Skeleton.Button size="default" style={{ width: '190px', height: '30px' }} active={loading} />
                      : <img className="deloitte-logo" width="190" height="auto" src={url} alt="Deloitte" />
            }
            
            <h1>{title?.slice(0, title?.indexOf('/'))}</h1>
          </div>
          <div>
            <Search onChange={onChangeSearchValue} onSearch={onSearch} />
            <Button onClick={openEmailModal} className="email-btn" icon={<MailOutlined />} type="primary">EMAIL 0</Button>
          </div>
        </div>
      </Layout.Header>
    );
};

export default Header;