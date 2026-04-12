
import "./UserProfile.css"

function UserProfile({ user }) {
    const { id, profile_image, name, email } = user

    return <div className="userProfile">
        <img src={profile_image} className="profileImage" />
        <div>
            <h2 className="name">{name}</h2>
            <p className="email">{email}</p></div>

    </div>
}
export default UserProfile