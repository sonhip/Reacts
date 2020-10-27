import React from 'react';
import {Table} from 'antd';
import MyContext from '../context/my-context'
import { Skeleton } from 'antd';

const ListCountries = () => {
      const columns =[
          {
              title: "QuocGia",
              dataIndex: 'Country',
              key: 'Country'
          },
          {
              title:"Ma Quoc Gia",
              dataIndex: 'CountryCode',
              key: 'CountryCode'
          },
          {
              title: "Moi Nhiem",
              dataIndex: 'NewConfirmed',
              key: 'NewConfirmed'
          },
          {
              title: "Tong Nhiem",  
              dataIndex: "TotalConfirmed",
                key: "TotalConfirmed" 
          },
          {
            title: "So chet",  
            dataIndex: "NewDeaths",
              key: "NewDeaths" 
        },
        {
            title: "Tong Chet",  
            dataIndex: "TotalDeaths",
              key: "TotalDeaths" 
        },
        {
            title: "Da chua",  
            dataIndex: "NewRecovered",
              key: "NewRecovered" ,
        },
        {
            title: "Tong Chua",  
            dataIndex: "TotalRecovered",
              key: "TotalRecovered" 
        }
      ];
      return (
          <MyContext.Consumer>
              {(context) =>{
                  if(context.loading || context.virus.Countries===undefined){
                    return <Skeleton active/>;
                  }
                  return(
                  <Table 
                    dataSource={context.virus.Countries} 
                    columns={columns} 
                    rowKey='CountryCode'
                    pagination={{defaultPageSize:10, showSizeChange:true, pageSizeOptions:['5','10','15']}}
                     />
              )
              }}
          </MyContext.Consumer>
      );
}
export default ListCountries;
