import user from "../../data";

export default function Profile() {
    return (
        <div>
            <h1> {user.name} </h1>
            <img
                className='avatar'
                src={user.profilePic}
                alt={`Photo of ${user.name}`}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </div>
    )
}

// export default Profile;