import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import { Layout } from 'antd';

import './app.scss';

// components
import Header from '../header';
import Sidebar from '../sidebar';
import CategoriesContent from '../categories-content';
import ContactInformationModal from '../contact-information-modal';

// actions
import { DeloitteActions } from '../../store/actions';

const { Content } = Layout;

const App = () => {
    const dispatch = useDispatch();
    const { categories: { list: categories, logo: url, title, isLoading, entry } } = useSelector(state => state.deloitte);

    const [collapsed, setCollapsed] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        dispatch(DeloitteActions.getAppCategories());
    }, [dispatch]);

    const openEmailModal = () => {
      setModalVisible(true);
    };

    const onCancel = () => {
      setModalVisible(false);
    };

    const onCollapse = () => {
        setCollapsed(collapsed => !collapsed);
    };

    const onSelect = ({ key }) => {
      dispatch(DeloitteActions.onSelectCategory(key));
    };

    const onSearch = (value) => {
        dispatch(DeloitteActions.onSelectCategory(''));
        dispatch(DeloitteActions.searchContent(value));
    };

    const onChangeSearchValue = ({ target: { value } }) => {
        value === '' && dispatch(DeloitteActions.getAppCategories()) && dispatch(DeloitteActions.getCategoriesContent());
    };

    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
      <Layout>
        <Header collapsed={collapsed} onCollapse={onCollapse} onSearch={onSearch} onChangeSearchValue={onChangeSearchValue} url={url} title={title} loading={isLoading} openEmailModal={openEmailModal} />
        <Layout>
          <Sidebar collapsed={collapsed} onCollapse={onCollapse} categories={categories} onSelect={onSelect} entry={entry} loading={isLoading} />
          <Content>
            <CategoriesContent />
            <ContactInformationModal visible={modalVisible} onCancel={onCancel} onSubmit={onSubmit} />
          </Content>
        </Layout>
      </Layout>
    );
};

export default App;