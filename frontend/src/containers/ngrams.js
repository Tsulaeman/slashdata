import React, { useEffect, useState } from 'react';
import { Col, List, Row, Spin, Switch, Table, Typography } from 'antd';
import { Column } from '@ant-design/charts';

const baseurl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

const Ngram = () => {

  const [ data, setData ] = useState([]);
  const [ loaded, setLoaded ] = useState(false);
  const [ ngram, setNgram ] = useState([]);
  const [ ngramLoading, setNgramLoading ] = useState(false);
  const [ displayColumn, setDisplayDisplayColumn ] = useState(true);

  const histogramConfig = {
    data: ngram,
    binField: 'value',
    binWidth: 2,
    xField: 'ngram',
    yField: 'count'
  };

  const tableColumns = [
    {
      title: 'Ngram',
      dataIndex: 'ngram',
      key: 'ngram',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'ngram',
    },
  ];

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
    <>
      <Row justify='end'>
        <Col span={18}></Col>
        <Col span={6}>
          Table <Switch defaultChecked={displayColumn} onChange={(value) => {
            setDisplayDisplayColumn(value);
            console.log(value)
          }} /> Histogram
        </Col>
      </Row>
      <Row gutter={[20,20]}>
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
            !ngramLoading && displayColumn && <Column { ...histogramConfig } />
          }

          {
            !ngramLoading && !displayColumn && <Table dataSource={ngram} columns={tableColumns} />
          }
        </Col>
      </Row>
    </>
  )
}

export default Ngram;