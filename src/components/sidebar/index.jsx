import { Layout, Menu } from 'antd';

import './sidebar.scss';

const { Sider } = Layout;

const Sidebar = ({ collapsed, onCollapse, categories, onSelect, entry }) => {
    
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
        <Menu
          theme="dark"
          mode="inline"
          onSelect={onSelect}
          selectedKeys={entry}
        >
          {categories.map(({ name }) => <Menu.Item key={name}>{name}</Menu.Item>)}
        </Menu>
      </Sider>
    );
};

export default Sidebar;