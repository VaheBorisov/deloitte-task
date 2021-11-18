import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import { Layout } from 'antd';

import style from './app.scss';

// components
import Header from '../header';
import Sidebar from '../sidebar';

// actions
import { DeloitteActions } from '../../store/actions';

const { Content } = Layout;

const App = () => {
    const dispatch = useDispatch();
    const { categories: { list: categories, logo: url, title, isLoading, entry } } = useSelector(state => state.deloitte);

    const [collapsed, setCollapsed] = useState();

    useEffect(() => {
        dispatch(DeloitteActions.getAppCategories());
    }, [dispatch]);

    const onCollapse = () => {
        setCollapsed(collapsed => !collapsed);
    };

    const onSelect = ({ key }) => {
      dispatch(DeloitteActions.onSelectCategory(key));
    };

    const onSearch = () => {

    };

    return (
      <Layout>
        <Header collapsed={collapsed} onCollapse={onCollapse} onSearch={onSearch} url={url} title={title} loading={isLoading} />
        <Layout>
          <Sidebar
            collapsed={collapsed}
            onCollapse={onCollapse}
            categories={categories}
            onSelect={onSelect}
            entry={entry}
            // handleMenuClick={handleMenuClick}
            // curKey={curKey}
            // category={category}
          />
          <Content>
            {/*<Content*/}
            {/*  curKey={curKey}*/}
            {/*  valFromSearch={valFromSearch}*/}
            {/*  setCurKeyFromSearch={setCurKeyFromSearch}*/}
            {/*/>*/}
            {/*<EmailModal*/}
            {/*  isModalVisible={isModalVisible}*/}
            {/*  setIsModalVisible={setIsModalVisible}*/}
            {/*/>*/}
          </Content>
        </Layout>
      </Layout>
    );
};

export default App;