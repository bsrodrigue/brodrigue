import { Actuality, MyServices, Section, Welcome } from '../components';
import ProfilePicture from "../components/ProfilePicture";

export default function Home() {
  return (
    <>
      <Section title="">
        <div className="center">
          <ProfilePicture />
        </div>
        <Welcome />
      </Section>
      <Actuality />
      <MyServices />
    </>
  );
}
