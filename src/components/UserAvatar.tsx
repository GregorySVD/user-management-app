interface UserAvatarProps {
  name: string;
  profilePicture?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ name, profilePicture }) => {
  const getRandomColor = () => {
    const colors = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="avatar placeholder">
      {profilePicture ? (
        <div className="mask mask-squircle h-10 w-10 ">
          <img src={profilePicture} alt={`${name}`} />
        </div>
      ) : (
        <div className="mask mask-squircle h-10 w-10" style={{ backgroundColor: getRandomColor() }}>
          <span className="text-m font-bold text-text-100 dark:text-text-dark-100">{initials}</span>
        </div>
      )}
    </div>
  );
};
