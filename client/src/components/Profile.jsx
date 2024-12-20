import { useUser } from "@clerk/clerk-react";

const Profile = () => {
  const { user } = useUser();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p>Name: {user.fullName}</p>
      <p>Email: {user.primaryEmailAddress.emailAddress}</p>
    </div>
  );
};

export default Profile;
