import { Layout, Menu, Spin } from 'antd';

import './sidebar.scss';

const { Sider } = Layout;

const Sidebar = ({ collapsed, onCollapse, categories, onSelect, entry, loading }) => {
    
    return (
      <Sider
        className="side-bar"
        collapsedWidth={0}
        width={250}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        trigger={null}
      >
        <Spin spinning={loading}>
          <Menu
            theme="dark"
            mode="inline"
            onSelect={onSelect}
            selectedKeys={entry}
          >
            {categories.map(({ name }) => <Menu.Item key={name}>{name}</Menu.Item>)}
          </Menu>
        </Spin>

      </Sider>
    );
};

export default Sidebar;