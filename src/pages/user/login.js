import { connect } from 'dva';



const Login = ({ dispatch, users}) => {
console.log("user",users);
return(
<div> 
    <h1> hello users </h1>
    {users.user.name}
{/*     
{user.map((obj)=>{
    return(
        <div> 
            <p> {obj.name} </p>
        </div>
    )
})} */}

</div>
)
}


export default connect(({ users }) => ({
    users,
  }))(Login);