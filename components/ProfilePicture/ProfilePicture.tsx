import Image from "next/image";
import profilePicture from "../../public/pictures/profile.jpg";
import style from "./style.module.css";

const PROFILE_PIC_DIMENSION: number = 300;
const PROFILE_PIC_HEIGHT: number = PROFILE_PIC_DIMENSION;
const PROFILE_PIC_WIDTH: number = PROFILE_PIC_DIMENSION;

const ProfilePicture: React.FC = () => {
  return (
    <Image
      src={profilePicture}
      width={PROFILE_PIC_WIDTH}
      height={PROFILE_PIC_HEIGHT}
      alt="profile-picture"
      className={style.profile}
    />
  );
};

export default ProfilePicture;
