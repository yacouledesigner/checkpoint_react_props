import "./Profile.css"

const Profile = (props) => {
    let profileStyle = {backgroundColor: 'aliceblue', textAlign:'center', width:150, height:170, borderRadius:10, boxShadow:'1px 1px 2px lightblue'}
    return (
        <div style ={profileStyle}>
            <div style ={{marginLeft:'3.5rem',width:40, height:40}}>
                <img src={props.children} alt="photo" style ={{width:'100%', height:'100%'}}/>
            </div>
            <div style ={{}}>
                <p style ={{fontSize:13, fontWeight:'bolder', color:'blue'}}>{props.fullname}</p>
                <p style ={{marginTop:1,fontSize:10}}>{props.profession}</p>
                <p style ={{marginTop:1, fontSize:10, fontWeight:'bolder'}}>{props.bio}</p>
            </div>
        </div>
    );
}

export default Profile;

