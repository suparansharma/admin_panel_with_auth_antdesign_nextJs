import React, { useState } from 'react'
import { Button, Layout, Modal, Row, Table, Tag, theme } from 'antd';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from './../../../utils/axios';
import { DeleteOutlined, EditOutlined, ExclamationCircleFilled, EyeOutlined } from '@ant-design/icons';


const Products = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Content } = Layout;

  const { http } = Axios();
  React.useEffect(() => {
    const timeout = setTimeout(() => {
        fetchItemList();
    });
    return () => clearTimeout(timeout);
}, []);

//Fetch List Data for datatable

const[productList,setProductList] = useState([])

const fetchItemList = async () => {

    let isSubscribed = true;
    let formData = {
        action: "profitLoss",

    }
    await http.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/list`)
        .then((res) => {
            if (isSubscribed) {
                console.log("profitLoss", res?.data);
                setProductList(res?.data);
                

            }
        })
        .catch((err) => {
            console.log("Server Error ~!")
        });

    return () => isSubscribed = false;
};



const columns = [
  {
    title: 'SL',
    fixed: 'left',
    render: (text, record, index) => index + 1
  },
  {
    title: 'Product Code',
    dataIndex: 'id',
    // fixed: 'left',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status) => (
      status ? <Tag color='green'>ACTIVE</Tag> : <Tag color='volcano'>INACTIVE</Tag>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 100,
    render: (row) => actionButton(row), // You need to define actionButton function
  },
];


const actionButton = (row) => {
  return (
    <>
      <Row justify="space-between" style={{ display: 'flex', alignItems: 'center' }}>
        <a  style={{ color: 'green' }}>
          <EyeOutlined style={{ fontSize: '22px' }} />
        </a>

        <a  className="text-primary" >
          <EditOutlined style={{ fontSize: '22px' }} />
        </a>

        <a  className="text-danger" >
          <DeleteOutlined style={{ fontSize: '22px' }} />
        </a>
      </Row>
    </>
  );
};



  return (
   <>
      <Content className="custom-content">
        <div className="responsive-fixed-container">
          <div style={{ padding: '15px', background: colorBgContainer }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className=" ">
                    <div className="d-flex border-bottom title-part-padding align-items-center">
                      <div>
                        <h4 className="card-title mb-0">All Products</h4>
                      </div>
                      <div className="ms-auto flex-shrink-0">
                        <Button
                          className="shadow rounded"
                          type="primary"
                          // onClick={handleShow}
                          block
                          style={{backgroundColor: "#007bff",color: "#fff",}}
                        >
                          <span >Add</span>
                          <span className="button-icon-space ml-5">


                            <FontAwesomeIcon icon={faPlusCircle} />
                          </span>
                        </Button>
                      </div>
                    </div>




                    <Content>
                    <Table
                        columns={columns}
                        dataSource={productList}
                        scroll={{ x: 'max-content' }}
                        // pagination={pagination}
                        // onChange={onChange}

                      />


                    </Content>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





      </Content>
   </>
  )
}

export default Products