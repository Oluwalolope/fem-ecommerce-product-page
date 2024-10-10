import avatarImg from "../assets/image-avatar.png";

const Avatar = () => {
    return (
        <button className="avatar-wrapper">
            <img src={avatarImg} alt="User's Profile Picture" className="avatar" />
        </button>
    );
}
 
export default Avatar;