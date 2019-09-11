import {connect} from 'dva';
import {Table} from 'antd';
import { Card,Button,Popconfirm } from 'antd';



const FirstProduct = ({dispatch , products}) =>{
console.log(products);

// function deleteProduct(obj) {
//     dispatch({
//       type: 'products/delete',
//       payload: obj.id,
//     });
//   }

//     function getdata() {
//         dispatch({
//           type: 'products/fetch'
//         });
//       }

// function addtoCart(obj){
// dispatch({
//     type: 'products/save'
// })
// }


dispatch({
  type: 'products/fetch'
})




function getUser(obj){
  console.log(obj);
  dispatch({
    type: 'products/getuser',
    payload:obj
  })
}



function deleteuser(id){
  console.log("delete",id);
  dispatch({
    type: 'products/deleteuser',
    payload:id
  })
}


// const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'delete',
    dataIndex: 'delete',
    key: products.users.id,
    render:(key) => 
      <Popconfirm title="Sure to delete?" onClick={() => deleteuser(key)}>
        <a>Delete</a>
      </Popconfirm>
    
  },

];



    return(
        <div>
          <Table dataSource={products.users} columns={columns} />
 
{products.users.map(obj=>{
  return(
    <div> 
      {obj.name}
      <Button type="primary" onClick={()=> getUser(obj)}>  add user  </Button>
      <Button type="primary" onClick={()=> deleteuser(obj.id)}>  delete user  </Button>

    </div>
  )
})}
        {/* {products.collection.map(obj => {
            return(
                <div> 
                    <p> {obj.name} </p>
                    <p> {obj.id} </p>
                    
                                <Button onClick={() => getdata()}>  getData </Button> 
                            <Button onClick={(obj) => deleteProduct(obj)}> delete </Button>

                     <Button onClick={(obj)=> addtoCart(this,obj)}> get </Button>
                </div>
            )
        })}    
             <h3> {products.collection[2]} </h3>  */}
            
        </div> 
    )
}

export default connect(({ products }) => ({
  products,
  }))(FirstProduct);