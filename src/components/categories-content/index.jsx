import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {Button, Row, Col, Skeleton} from 'antd';

import './categories-content.scss';

// actions
import {DeloitteActions} from '../../store/actions';

const CategoriesContent = ({  }) => {
    const dispatch = useDispatch();
    const { categories: { entryContent: { content, isLoading: loadingEntryContent }, content: { isLoading: loadingContent }, imgs: { list: imgs, isLoading: loadingImgs } } } = useSelector(state => state.deloitte);
    
    useEffect(() => {
        dispatch(DeloitteActions.getCategoriesContent());
    }, [dispatch]);


    return (
      <div className="content">
        {
              loadingEntryContent || loadingContent
                ? <Skeleton active />
                  : (
                    <>
                      <h2 className="contentTitle">{content.catName}</h2>
                      <h4 className="contentDesc">{content.description}</h4>
                      <Row gutter={[24, 8]}>
                        {
                                  content?.contentInf?.map((elem, index) => {
                                      return (
                                        <Col key={index} className="gutterRow" span={6}>
                                          {
                                             loadingImgs
                                                 ? <Skeleton.Image active className="image-skelet" />
                                                     : <img src={imgs.find(img => img.id === elem.id).url} alt="thumb" />
                                          }
                                          <div className="name-btn">
                                            <span>{elem.name}</span>
                                            <Button type="primary">Add</Button>
                                          </div>
                                        </Col>
                                      );
                                  })
                              }
                      </Row>
                    </>
                  )
          }
      </div>
    );
};

export default CategoriesContent;