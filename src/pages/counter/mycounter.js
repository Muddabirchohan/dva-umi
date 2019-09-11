import {connect} from 'dva';
import {Table} from 'antd';
import { Card,Button,Popconfirm } from 'antd';



const MyCounter = ({dispatch , counter}) =>{
    function updateCounter(){
        dispatch({
          type: 'counter/addAfter1Second',
        })
      }
      
      function clearCounter(){
        dispatch({
          type: 'counter/clearAfter1Second',
        })
      }
return(
    <div> 
         <Card> 
            <h3> Counter with reset </h3>
         {counter.count}
      <Button type="primary" onClick={()=> updateCounter()}>  add </Button>
      <Button type="primary" onClick={()=> clearCounter()}>  clear </Button>
      </Card>
    </div>
)

}


export default connect(({counter})=> ({
    counter
}))(MyCounter);
