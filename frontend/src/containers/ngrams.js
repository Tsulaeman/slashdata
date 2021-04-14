import React, { useEffect, useState } from 'react';
import { Col, List, Row, Spin, Typography } from 'antd';
import { Column } from '@ant-design/charts';

const baseurl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

const Ngram = () => {

  const [ data, setData ] = useState([]);
  const [ loaded, setLoaded ] = useState(false);
  const [ ngram, setNgram ] = useState([]);
  const [ ngramLoading, setNgramLoading ] = useState(false);
  const histogramConfig = {
    data: ngram,
    binField: 'value',
    binWidth: 2,
    xField: 'ngram',
    yField: 'count'
  };

  useEffect(() => {
    fetch(baseurl)
    .then(response => response.json())
    .then( data => {
      setLoaded(true);
      setData(data);
    });
  }, [loaded]);

  if (data.length < 1){
    return <Spin />
  }

  return (
    <Row>
      <Col span={8}>
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item className="ngram-link-item" onClick={(el) => {
              setNgramLoading(true);
              fetch(`${baseurl}/ngram/${item.id}`)
              .then(response => response.json())
              .then(ngram => {
                setNgram(ngram);
                setNgramLoading(false);
              });
            }}>
              <Typography.Text>
                {item.body}
              </Typography.Text>
            </List.Item>
          )}
        />
      </Col>
      <Col span={16}>
        {
          ngramLoading && <Spin/>
        }
        {
          !ngramLoading && <Column { ...histogramConfig } />
        }
      </Col>
    </Row>
  )
}

export default Ngram;