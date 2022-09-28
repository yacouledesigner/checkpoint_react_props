import "./Profile.css"

const Profile = ({fullName, bio, profession, children, handleName}) => {
    console.log(children);
    let profileStyle = {display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center', width:800, height:400, boxShadow:'2px 2px 5px black'}
    return (
        <div className='profile' style = {profileStyle}>
            <div> <img src={children} style={{width:'100%', height:'100%'}}/></div>
            <div>
                <h2>{fullName}</h2>
                <span style={{fontWeight:'bolder', fontSize:16, marginTop:1}}>Profession : {profession}</span>
                <p style={{fontWeight:'bolder', fontSize:16, marginTop:1}}>Description : {bio}</p>
            </div>
        </div>
    );
}
export default Profile;
