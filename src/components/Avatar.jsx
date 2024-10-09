import avatarImg from "../assets/image-avatar.png";

const Avatar = () => {
    return (
        <button>
            <img src={avatarImg} alt="User's Profile Picture" />
        </button>
    );
}
 
export default Avatar;